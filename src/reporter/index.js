import store from '../store';
import { getCommonParam, getUUID, logger, storage } from '../utils';
import platform from '../platform';
import { stringify } from 'qs';

class Reporter {
	constructor() {
		// 需要发送的追踪信息的队列
		this.queue = [];
		this.timerId;
		this.resend_count = 0;
	}
	/**
	 * 追踪埋点数据
	 * @param {*} data 需要上报的数据
	 */
	track(data = {}, type = 'Click') {
		const config = store.get('config');
		if (!data.eventId) {
			data.eventId = type;
		}
		// 获取公参
		getCommonParam(commonParam => {
			// 添加一些公共信息字段
			data.t = 'metric';
			data.appKey = config.appKey;
			data.deviceId = storage.get('uid') || getUUID();
			if (type.includes('AppStart')) {
				data.nickName = commonParam.user.nickName;
				data.gender = commonParam.user.gender;
				data.avatarUrl = commonParam.user.avatarUrl;
			}
			if (data.libMethod) {
				commonParam.sys.libMethod = data.libMethod;
				delete data.libMethod;
			}
			// 添加用户的公参
			const result = {
				...commonParam.sys,
				...data,
				environment: config.environment,
				...config.customParams,
			};

			logger(type, {
				...data,
				公参: { ...commonParam.sys, environment: config.environment, pageURL: data.pageURL },
				自定义参数: config.customParams,
			});
			this.queue.push(stringify(result));
			if (!this.timerId) {
				// 为了不影响正常的业务请求，这里延时发出我们的埋点信息
				this.timerId = setTimeout(() => {
					this._flush();
				}, store.get('config').delay);
			}
		});
	}
	/**
	 * 执行队列中的任务(向后台发送追踪信息)
	 */
	_flush() {
		const config = store.get('config');

		// 发送请求时需要的一些公共信息
		const commonMsg = {
			ak: config.appKey,
			cid: storage.get('cid'),
			uid: storage.get('uid') || 0,
		};
		// 队列中有数据时进行请求
		if (this.queue.length > 0) {
			const data = this.queue[0];
			platform.request({
				// 请求地址
				url: config.collectorUrl,
				// 超时时间
				timeout: config.request_timeout,
				method: 'POST',
				header: { 'content-type': 'application/x-www-form-urlencoded' },
				data: {
					...commonMsg,
					data,
				},
				success: () => {
					// 请求发送成功，弹出然后执行下一个
					this.queue.shift();
					this.resend_count = 0;
				},
				fail: _ => {
					// 失败重复，重发次数超过3次跳入下一个请求
					if (this.resend_count >= 3) {
						this.resend_count = 0;
						this.queue.shift();
					} else {
						this.resend_count++;
					}
				},
				complete: () => {
					// 执行完成后发送下一个信息
					setTimeout(() => {
						this._flush();
					}, store.get('config').delay);
				},
			});
		} else {
			this.timerId = null;
		}
	}
}

export default new Reporter();
