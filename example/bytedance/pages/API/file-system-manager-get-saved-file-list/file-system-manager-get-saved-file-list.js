const url = "https://sf3-ttcdn-tos.pstatp.com/obj/developer/download.png";
Page({
  data: {
    tempFilePath: '',
    fileList: []
  },
  onLoad: function (options) {
    this.fs = tt.getFileSystemManager();
    tt.downloadFile({
      url,
      success: res => {
        this.setData({
          tempFilePath: res.tempFilePath
        })
        tt.showToast({
          title: '下载临时文件成功',
          icon: 'none'
        });
        this.saveFile();
      },
      fail: err => {
        tt.showToast({
          title: '文件下载失败，请稍后重试',
          icon: 'none'
        });
      },
      complete: res => {
        console.log('downloadFile complete', res);
      }
    });
  },
  saveFile() {
    const path = `${tt.env.USER_DATA_PATH}/mkdir`;
    this.fs.saveFile({
      tempFilePath: this.data.tempFilePath,
      filePath: path,
      success: res => {
        console.log('saveFile success', res);
        this.path = path;
      },
      fail: err => {
        console.log('saveFile fail', err);
        tt.showModal({
          content: `保存失败：${JSON.stringify(err)}`,
          showCancel: false
        })
      },
      complete: res => {
        console.log('saveFile complete', res);
      }
    })
  },
  getSaveFileList() {
    this.fs.getSavedFileList({
      success: res => {
        console.log('success: ', res);
        this.setData({
          fileList: res.fileList || []
        })
        tt.showModal({
          content: `${JSON.stringify(res.fileList)}`,
          showCancel: false
        })
      },
      fail: err => {
        console.log('fail: ', err);
      },
      complete: res => {
        console.log('complete: ', res);
      }
    })
  },
  onUnload() {
    // 卸载时删除文件
    this.removeFiles();
  },
  removeFiles() {
    let path = this.path;
    if (!path) return;
    this.fs.removeSavedFile({
      filePath: path,
      success(_res) {
        console.log("删除文件调用成功");
      },
      fail(res) {
        console.log("删除文件调用失败:", res.errMsg);
      },
    });
  }
})