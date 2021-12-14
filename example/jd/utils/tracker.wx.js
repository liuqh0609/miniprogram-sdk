(function webpackUniversalModuleDefinition(root, factory) {
  if (typeof exports === 'object' && typeof module === 'object') module.exports = factory();else if (typeof define === 'function' && define.amd) define([], factory);else if (typeof exports === 'object') exports["tracker"] = factory();else root["tracker"] = factory();
})(self, function () {
  return (
    /******/
    (() => {
      // webpackBootstrap

      /******/
      var __webpack_modules__ = {
        /***/
        "./node_modules/call-bind/callBound.js":
        /*!*********************************************!*\
          !*** ./node_modules/call-bind/callBound.js ***!
          \*********************************************/

        /***/
        (module, __unused_webpack_exports, __webpack_require__) => {
          "use strict";

          var GetIntrinsic = __webpack_require__(
          /*! get-intrinsic */
          "./node_modules/get-intrinsic/index.js");

          var callBind = __webpack_require__(
          /*! ./ */
          "./node_modules/call-bind/index.js");

          var $indexOf = callBind(GetIntrinsic("String.prototype.indexOf"));

          module.exports = function callBoundIntrinsic(name, allowMissing) {
            var intrinsic = GetIntrinsic(name, !!allowMissing);

            if (typeof intrinsic === "function" && $indexOf(name, ".prototype.") > -1) {
              return callBind(intrinsic);
            }

            return intrinsic;
          };
          /***/

        },

        /***/
        "./node_modules/call-bind/index.js":
        /*!*****************************************!*\
          !*** ./node_modules/call-bind/index.js ***!
          \*****************************************/

        /***/
        (module, __unused_webpack_exports, __webpack_require__) => {
          "use strict";

          var bind = __webpack_require__(
          /*! function-bind */
          "./node_modules/function-bind/index.js");

          var GetIntrinsic = __webpack_require__(
          /*! get-intrinsic */
          "./node_modules/get-intrinsic/index.js");

          var $apply = GetIntrinsic("%Function.prototype.apply%");
          var $call = GetIntrinsic("%Function.prototype.call%");
          var $reflectApply = GetIntrinsic("%Reflect.apply%", true) || bind.call($call, $apply);
          var $gOPD = GetIntrinsic("%Object.getOwnPropertyDescriptor%", true);
          var $defineProperty = GetIntrinsic("%Object.defineProperty%", true);
          var $max = GetIntrinsic("%Math.max%");

          if ($defineProperty) {
            try {
              $defineProperty({}, "a", {
                value: 1
              });
            } catch (e) {
              $defineProperty = null;
            }
          }

          module.exports = function callBind(originalFunction) {
            var func = $reflectApply(bind, $call, arguments);

            if ($gOPD && $defineProperty) {
              var desc = $gOPD(func, "length");

              if (desc.configurable) {
                $defineProperty(func, "length", {
                  value: 1 + $max(0, originalFunction.length - (arguments.length - 1))
                });
              }
            }

            return func;
          };

          var applyBind = function applyBind2() {
            return $reflectApply(bind, $apply, arguments);
          };

          if ($defineProperty) {
            $defineProperty(module.exports, "apply", {
              value: applyBind
            });
          } else {
            module.exports.apply = applyBind;
          }
          /***/

        },

        /***/
        "./node_modules/function-bind/implementation.js":
        /*!******************************************************!*\
          !*** ./node_modules/function-bind/implementation.js ***!
          \******************************************************/

        /***/
        module => {
          "use strict";

          var ERROR_MESSAGE = "Function.prototype.bind called on incompatible ";
          var slice = Array.prototype.slice;
          var toStr = Object.prototype.toString;
          var funcType = "[object Function]";

          module.exports = function bind(that) {
            var target = this;

            if (typeof target !== "function" || toStr.call(target) !== funcType) {
              throw new TypeError(ERROR_MESSAGE + target);
            }

            var args = slice.call(arguments, 1);
            var bound;

            var binder = function () {
              if (this instanceof bound) {
                var result = target.apply(this, args.concat(slice.call(arguments)));

                if (Object(result) === result) {
                  return result;
                }

                return this;
              } else {
                return target.apply(that, args.concat(slice.call(arguments)));
              }
            };

            var boundLength = Math.max(0, target.length - args.length);
            var boundArgs = [];

            for (var i = 0; i < boundLength; i++) {
              boundArgs.push("$" + i);
            }

            bound = Function("binder", "return function (" + boundArgs.join(",") + "){ return binder.apply(this,arguments); }")(binder);

            if (target.prototype) {
              var Empty = function Empty2() {};

              Empty.prototype = target.prototype;
              bound.prototype = new Empty();
              Empty.prototype = null;
            }

            return bound;
          };
          /***/

        },

        /***/
        "./node_modules/function-bind/index.js":
        /*!*********************************************!*\
          !*** ./node_modules/function-bind/index.js ***!
          \*********************************************/

        /***/
        (module, __unused_webpack_exports, __webpack_require__) => {
          "use strict";

          var implementation = __webpack_require__(
          /*! ./implementation */
          "./node_modules/function-bind/implementation.js");

          module.exports = Function.prototype.bind || implementation;
          /***/
        },

        /***/
        "./node_modules/get-intrinsic/index.js":
        /*!*********************************************!*\
          !*** ./node_modules/get-intrinsic/index.js ***!
          \*********************************************/

        /***/
        (module, __unused_webpack_exports, __webpack_require__) => {
          "use strict";

          var undefined;
          var $SyntaxError = SyntaxError;
          var $Function = Function;
          var $TypeError = TypeError;

          var getEvalledConstructor = function (expressionSyntax) {
            try {
              return $Function('"use strict"; return (' + expressionSyntax + ").constructor;")();
            } catch (e) {}
          };

          var $gOPD = Object.getOwnPropertyDescriptor;

          if ($gOPD) {
            try {
              $gOPD({}, "");
            } catch (e) {
              $gOPD = null;
            }
          }

          var throwTypeError = function () {
            throw new $TypeError();
          };

          var ThrowTypeError = $gOPD ? function () {
            try {
              arguments.callee;
              return throwTypeError;
            } catch (calleeThrows) {
              try {
                return $gOPD(arguments, "callee").get;
              } catch (gOPDthrows) {
                return throwTypeError;
              }
            }
          }() : throwTypeError;

          var hasSymbols = __webpack_require__(
          /*! has-symbols */
          "./node_modules/has-symbols/index.js")();

          var getProto = Object.getPrototypeOf || function (x) {
            return x.__proto__;
          };

          var needsEval = {};
          var TypedArray = typeof Uint8Array === "undefined" ? undefined : getProto(Uint8Array);
          var INTRINSICS = {
            "%AggregateError%": typeof AggregateError === "undefined" ? undefined : AggregateError,
            "%Array%": Array,
            "%ArrayBuffer%": typeof ArrayBuffer === "undefined" ? undefined : ArrayBuffer,
            "%ArrayIteratorPrototype%": hasSymbols ? getProto([][Symbol.iterator]()) : undefined,
            "%AsyncFromSyncIteratorPrototype%": undefined,
            "%AsyncFunction%": needsEval,
            "%AsyncGenerator%": needsEval,
            "%AsyncGeneratorFunction%": needsEval,
            "%AsyncIteratorPrototype%": needsEval,
            "%Atomics%": typeof Atomics === "undefined" ? undefined : Atomics,
            "%BigInt%": typeof BigInt === "undefined" ? undefined : BigInt,
            "%Boolean%": Boolean,
            "%DataView%": typeof DataView === "undefined" ? undefined : DataView,
            "%Date%": Date,
            "%decodeURI%": decodeURI,
            "%decodeURIComponent%": decodeURIComponent,
            "%encodeURI%": encodeURI,
            "%encodeURIComponent%": encodeURIComponent,
            "%Error%": Error,
            "%eval%": eval,
            "%EvalError%": EvalError,
            "%Float32Array%": typeof Float32Array === "undefined" ? undefined : Float32Array,
            "%Float64Array%": typeof Float64Array === "undefined" ? undefined : Float64Array,
            "%FinalizationRegistry%": typeof FinalizationRegistry === "undefined" ? undefined : FinalizationRegistry,
            "%Function%": $Function,
            "%GeneratorFunction%": needsEval,
            "%Int8Array%": typeof Int8Array === "undefined" ? undefined : Int8Array,
            "%Int16Array%": typeof Int16Array === "undefined" ? undefined : Int16Array,
            "%Int32Array%": typeof Int32Array === "undefined" ? undefined : Int32Array,
            "%isFinite%": isFinite,
            "%isNaN%": isNaN,
            "%IteratorPrototype%": hasSymbols ? getProto(getProto([][Symbol.iterator]())) : undefined,
            "%JSON%": typeof JSON === "object" ? JSON : undefined,
            "%Map%": typeof Map === "undefined" ? undefined : Map,
            "%MapIteratorPrototype%": typeof Map === "undefined" || !hasSymbols ? undefined : getProto(new Map()[Symbol.iterator]()),
            "%Math%": Math,
            "%Number%": Number,
            "%Object%": Object,
            "%parseFloat%": parseFloat,
            "%parseInt%": parseInt,
            "%Promise%": typeof Promise === "undefined" ? undefined : Promise,
            "%Proxy%": typeof Proxy === "undefined" ? undefined : Proxy,
            "%RangeError%": RangeError,
            "%ReferenceError%": ReferenceError,
            "%Reflect%": typeof Reflect === "undefined" ? undefined : Reflect,
            "%RegExp%": RegExp,
            "%Set%": typeof Set === "undefined" ? undefined : Set,
            "%SetIteratorPrototype%": typeof Set === "undefined" || !hasSymbols ? undefined : getProto(new Set()[Symbol.iterator]()),
            "%SharedArrayBuffer%": typeof SharedArrayBuffer === "undefined" ? undefined : SharedArrayBuffer,
            "%String%": String,
            "%StringIteratorPrototype%": hasSymbols ? getProto(""[Symbol.iterator]()) : undefined,
            "%Symbol%": hasSymbols ? Symbol : undefined,
            "%SyntaxError%": $SyntaxError,
            "%ThrowTypeError%": ThrowTypeError,
            "%TypedArray%": TypedArray,
            "%TypeError%": $TypeError,
            "%Uint8Array%": typeof Uint8Array === "undefined" ? undefined : Uint8Array,
            "%Uint8ClampedArray%": typeof Uint8ClampedArray === "undefined" ? undefined : Uint8ClampedArray,
            "%Uint16Array%": typeof Uint16Array === "undefined" ? undefined : Uint16Array,
            "%Uint32Array%": typeof Uint32Array === "undefined" ? undefined : Uint32Array,
            "%URIError%": URIError,
            "%WeakMap%": typeof WeakMap === "undefined" ? undefined : WeakMap,
            "%WeakRef%": typeof WeakRef === "undefined" ? undefined : WeakRef,
            "%WeakSet%": typeof WeakSet === "undefined" ? undefined : WeakSet
          };

          var doEval = function doEval2(name) {
            var value;

            if (name === "%AsyncFunction%") {
              value = getEvalledConstructor("async function () {}");
            } else if (name === "%GeneratorFunction%") {
              value = getEvalledConstructor("function* () {}");
            } else if (name === "%AsyncGeneratorFunction%") {
              value = getEvalledConstructor("async function* () {}");
            } else if (name === "%AsyncGenerator%") {
              var fn = doEval2("%AsyncGeneratorFunction%");

              if (fn) {
                value = fn.prototype;
              }
            } else if (name === "%AsyncIteratorPrototype%") {
              var gen = doEval2("%AsyncGenerator%");

              if (gen) {
                value = getProto(gen.prototype);
              }
            }

            INTRINSICS[name] = value;
            return value;
          };

          var LEGACY_ALIASES = {
            "%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"],
            "%ArrayPrototype%": ["Array", "prototype"],
            "%ArrayProto_entries%": ["Array", "prototype", "entries"],
            "%ArrayProto_forEach%": ["Array", "prototype", "forEach"],
            "%ArrayProto_keys%": ["Array", "prototype", "keys"],
            "%ArrayProto_values%": ["Array", "prototype", "values"],
            "%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"],
            "%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"],
            "%AsyncGeneratorPrototype%": ["AsyncGeneratorFunction", "prototype", "prototype"],
            "%BooleanPrototype%": ["Boolean", "prototype"],
            "%DataViewPrototype%": ["DataView", "prototype"],
            "%DatePrototype%": ["Date", "prototype"],
            "%ErrorPrototype%": ["Error", "prototype"],
            "%EvalErrorPrototype%": ["EvalError", "prototype"],
            "%Float32ArrayPrototype%": ["Float32Array", "prototype"],
            "%Float64ArrayPrototype%": ["Float64Array", "prototype"],
            "%FunctionPrototype%": ["Function", "prototype"],
            "%Generator%": ["GeneratorFunction", "prototype"],
            "%GeneratorPrototype%": ["GeneratorFunction", "prototype", "prototype"],
            "%Int8ArrayPrototype%": ["Int8Array", "prototype"],
            "%Int16ArrayPrototype%": ["Int16Array", "prototype"],
            "%Int32ArrayPrototype%": ["Int32Array", "prototype"],
            "%JSONParse%": ["JSON", "parse"],
            "%JSONStringify%": ["JSON", "stringify"],
            "%MapPrototype%": ["Map", "prototype"],
            "%NumberPrototype%": ["Number", "prototype"],
            "%ObjectPrototype%": ["Object", "prototype"],
            "%ObjProto_toString%": ["Object", "prototype", "toString"],
            "%ObjProto_valueOf%": ["Object", "prototype", "valueOf"],
            "%PromisePrototype%": ["Promise", "prototype"],
            "%PromiseProto_then%": ["Promise", "prototype", "then"],
            "%Promise_all%": ["Promise", "all"],
            "%Promise_reject%": ["Promise", "reject"],
            "%Promise_resolve%": ["Promise", "resolve"],
            "%RangeErrorPrototype%": ["RangeError", "prototype"],
            "%ReferenceErrorPrototype%": ["ReferenceError", "prototype"],
            "%RegExpPrototype%": ["RegExp", "prototype"],
            "%SetPrototype%": ["Set", "prototype"],
            "%SharedArrayBufferPrototype%": ["SharedArrayBuffer", "prototype"],
            "%StringPrototype%": ["String", "prototype"],
            "%SymbolPrototype%": ["Symbol", "prototype"],
            "%SyntaxErrorPrototype%": ["SyntaxError", "prototype"],
            "%TypedArrayPrototype%": ["TypedArray", "prototype"],
            "%TypeErrorPrototype%": ["TypeError", "prototype"],
            "%Uint8ArrayPrototype%": ["Uint8Array", "prototype"],
            "%Uint8ClampedArrayPrototype%": ["Uint8ClampedArray", "prototype"],
            "%Uint16ArrayPrototype%": ["Uint16Array", "prototype"],
            "%Uint32ArrayPrototype%": ["Uint32Array", "prototype"],
            "%URIErrorPrototype%": ["URIError", "prototype"],
            "%WeakMapPrototype%": ["WeakMap", "prototype"],
            "%WeakSetPrototype%": ["WeakSet", "prototype"]
          };

          var bind = __webpack_require__(
          /*! function-bind */
          "./node_modules/function-bind/index.js");

          var hasOwn = __webpack_require__(
          /*! has */
          "./node_modules/has/src/index.js");

          var $concat = bind.call(Function.call, Array.prototype.concat);
          var $spliceApply = bind.call(Function.apply, Array.prototype.splice);
          var $replace = bind.call(Function.call, String.prototype.replace);
          var $strSlice = bind.call(Function.call, String.prototype.slice);
          var rePropName = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g;
          var reEscapeChar = /\\(\\)?/g;

          var stringToPath = function stringToPath2(string) {
            var first = $strSlice(string, 0, 1);
            var last = $strSlice(string, -1);

            if (first === "%" && last !== "%") {
              throw new $SyntaxError("invalid intrinsic syntax, expected closing `%`");
            } else if (last === "%" && first !== "%") {
              throw new $SyntaxError("invalid intrinsic syntax, expected opening `%`");
            }

            var result = [];
            $replace(string, rePropName, function (match, number, quote, subString) {
              result[result.length] = quote ? $replace(subString, reEscapeChar, "$1") : number || match;
            });
            return result;
          };

          var getBaseIntrinsic = function getBaseIntrinsic2(name, allowMissing) {
            var intrinsicName = name;
            var alias;

            if (hasOwn(LEGACY_ALIASES, intrinsicName)) {
              alias = LEGACY_ALIASES[intrinsicName];
              intrinsicName = "%" + alias[0] + "%";
            }

            if (hasOwn(INTRINSICS, intrinsicName)) {
              var value = INTRINSICS[intrinsicName];

              if (value === needsEval) {
                value = doEval(intrinsicName);
              }

              if (typeof value === "undefined" && !allowMissing) {
                throw new $TypeError("intrinsic " + name + " exists, but is not available. Please file an issue!");
              }

              return {
                alias,
                name: intrinsicName,
                value
              };
            }

            throw new $SyntaxError("intrinsic " + name + " does not exist!");
          };

          module.exports = function GetIntrinsic(name, allowMissing) {
            if (typeof name !== "string" || name.length === 0) {
              throw new $TypeError("intrinsic name must be a non-empty string");
            }

            if (arguments.length > 1 && typeof allowMissing !== "boolean") {
              throw new $TypeError('"allowMissing" argument must be a boolean');
            }

            var parts = stringToPath(name);
            var intrinsicBaseName = parts.length > 0 ? parts[0] : "";
            var intrinsic = getBaseIntrinsic("%" + intrinsicBaseName + "%", allowMissing);
            var intrinsicRealName = intrinsic.name;
            var value = intrinsic.value;
            var skipFurtherCaching = false;
            var alias = intrinsic.alias;

            if (alias) {
              intrinsicBaseName = alias[0];
              $spliceApply(parts, $concat([0, 1], alias));
            }

            for (var i = 1, isOwn = true; i < parts.length; i += 1) {
              var part = parts[i];
              var first = $strSlice(part, 0, 1);
              var last = $strSlice(part, -1);

              if ((first === '"' || first === "'" || first === "`" || last === '"' || last === "'" || last === "`") && first !== last) {
                throw new $SyntaxError("property names with quotes must have matching quotes");
              }

              if (part === "constructor" || !isOwn) {
                skipFurtherCaching = true;
              }

              intrinsicBaseName += "." + part;
              intrinsicRealName = "%" + intrinsicBaseName + "%";

              if (hasOwn(INTRINSICS, intrinsicRealName)) {
                value = INTRINSICS[intrinsicRealName];
              } else if (value != null) {
                if (!(part in value)) {
                  if (!allowMissing) {
                    throw new $TypeError("base intrinsic for " + name + " exists, but the property is not available.");
                  }

                  return void 0;
                }

                if ($gOPD && i + 1 >= parts.length) {
                  var desc = $gOPD(value, part);
                  isOwn = !!desc;

                  if (isOwn && "get" in desc && !("originalValue" in desc.get)) {
                    value = desc.get;
                  } else {
                    value = value[part];
                  }
                } else {
                  isOwn = hasOwn(value, part);
                  value = value[part];
                }

                if (isOwn && !skipFurtherCaching) {
                  INTRINSICS[intrinsicRealName] = value;
                }
              }
            }

            return value;
          };
          /***/

        },

        /***/
        "./node_modules/has-symbols/index.js":
        /*!*******************************************!*\
          !*** ./node_modules/has-symbols/index.js ***!
          \*******************************************/

        /***/
        (module, __unused_webpack_exports, __webpack_require__) => {
          "use strict";

          var origSymbol = typeof Symbol !== "undefined" && Symbol;

          var hasSymbolSham = __webpack_require__(
          /*! ./shams */
          "./node_modules/has-symbols/shams.js");

          module.exports = function hasNativeSymbols() {
            if (typeof origSymbol !== "function") {
              return false;
            }

            if (typeof Symbol !== "function") {
              return false;
            }

            if (typeof origSymbol("foo") !== "symbol") {
              return false;
            }

            if (typeof Symbol("bar") !== "symbol") {
              return false;
            }

            return hasSymbolSham();
          };
          /***/

        },

        /***/
        "./node_modules/has-symbols/shams.js":
        /*!*******************************************!*\
          !*** ./node_modules/has-symbols/shams.js ***!
          \*******************************************/

        /***/
        module => {
          "use strict";

          module.exports = function hasSymbols() {
            if (typeof Symbol !== "function" || typeof Object.getOwnPropertySymbols !== "function") {
              return false;
            }

            if (typeof Symbol.iterator === "symbol") {
              return true;
            }

            var obj = {};
            var sym = Symbol("test");
            var symObj = Object(sym);

            if (typeof sym === "string") {
              return false;
            }

            if (Object.prototype.toString.call(sym) !== "[object Symbol]") {
              return false;
            }

            if (Object.prototype.toString.call(symObj) !== "[object Symbol]") {
              return false;
            }

            var symVal = 42;
            obj[sym] = symVal;

            for (sym in obj) {
              return false;
            }

            if (typeof Object.keys === "function" && Object.keys(obj).length !== 0) {
              return false;
            }

            if (typeof Object.getOwnPropertyNames === "function" && Object.getOwnPropertyNames(obj).length !== 0) {
              return false;
            }

            var syms = Object.getOwnPropertySymbols(obj);

            if (syms.length !== 1 || syms[0] !== sym) {
              return false;
            }

            if (!Object.prototype.propertyIsEnumerable.call(obj, sym)) {
              return false;
            }

            if (typeof Object.getOwnPropertyDescriptor === "function") {
              var descriptor = Object.getOwnPropertyDescriptor(obj, sym);

              if (descriptor.value !== symVal || descriptor.enumerable !== true) {
                return false;
              }
            }

            return true;
          };
          /***/

        },

        /***/
        "./node_modules/has/src/index.js":
        /*!***************************************!*\
          !*** ./node_modules/has/src/index.js ***!
          \***************************************/

        /***/
        (module, __unused_webpack_exports, __webpack_require__) => {
          "use strict";

          var bind = __webpack_require__(
          /*! function-bind */
          "./node_modules/function-bind/index.js");

          module.exports = bind.call(Function.call, Object.prototype.hasOwnProperty);
          /***/
        },

        /***/
        "./node_modules/object-inspect/index.js":
        /*!**********************************************!*\
          !*** ./node_modules/object-inspect/index.js ***!
          \**********************************************/

        /***/
        (module, __unused_webpack_exports, __webpack_require__) => {
          var hasMap = typeof Map === "function" && Map.prototype;
          var mapSizeDescriptor = Object.getOwnPropertyDescriptor && hasMap ? Object.getOwnPropertyDescriptor(Map.prototype, "size") : null;
          var mapSize = hasMap && mapSizeDescriptor && typeof mapSizeDescriptor.get === "function" ? mapSizeDescriptor.get : null;
          var mapForEach = hasMap && Map.prototype.forEach;
          var hasSet = typeof Set === "function" && Set.prototype;
          var setSizeDescriptor = Object.getOwnPropertyDescriptor && hasSet ? Object.getOwnPropertyDescriptor(Set.prototype, "size") : null;
          var setSize = hasSet && setSizeDescriptor && typeof setSizeDescriptor.get === "function" ? setSizeDescriptor.get : null;
          var setForEach = hasSet && Set.prototype.forEach;
          var hasWeakMap = typeof WeakMap === "function" && WeakMap.prototype;
          var weakMapHas = hasWeakMap ? WeakMap.prototype.has : null;
          var hasWeakSet = typeof WeakSet === "function" && WeakSet.prototype;
          var weakSetHas = hasWeakSet ? WeakSet.prototype.has : null;
          var hasWeakRef = typeof WeakRef === "function" && WeakRef.prototype;
          var weakRefDeref = hasWeakRef ? WeakRef.prototype.deref : null;
          var booleanValueOf = Boolean.prototype.valueOf;
          var objectToString = Object.prototype.toString;
          var functionToString = Function.prototype.toString;
          var match = String.prototype.match;
          var bigIntValueOf = typeof BigInt === "function" ? BigInt.prototype.valueOf : null;
          var gOPS = Object.getOwnPropertySymbols;
          var symToString = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? Symbol.prototype.toString : null;
          var hasShammedSymbols = typeof Symbol === "function" && typeof Symbol.iterator === "object";
          var isEnumerable = Object.prototype.propertyIsEnumerable;
          var gPO = (typeof Reflect === "function" ? Reflect.getPrototypeOf : Object.getPrototypeOf) || ([].__proto__ === Array.prototype ? function (O) {
            return O.__proto__;
          } : null);

          var inspectCustom = __webpack_require__(
          /*! ./util.inspect */
          "?4f7e").custom;

          var inspectSymbol = inspectCustom && isSymbol(inspectCustom) ? inspectCustom : null;
          var toStringTag = typeof Symbol === "function" && typeof Symbol.toStringTag !== "undefined" ? Symbol.toStringTag : null;

          module.exports = function inspect_(obj, options, depth, seen) {
            var opts = options || {};

            if (has(opts, "quoteStyle") && opts.quoteStyle !== "single" && opts.quoteStyle !== "double") {
              throw new TypeError('option "quoteStyle" must be "single" or "double"');
            }

            if (has(opts, "maxStringLength") && (typeof opts.maxStringLength === "number" ? opts.maxStringLength < 0 && opts.maxStringLength !== Infinity : opts.maxStringLength !== null)) {
              throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');
            }

            var customInspect = has(opts, "customInspect") ? opts.customInspect : true;

            if (typeof customInspect !== "boolean" && customInspect !== "symbol") {
              throw new TypeError("option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`");
            }

            if (has(opts, "indent") && opts.indent !== null && opts.indent !== "	" && !(parseInt(opts.indent, 10) === opts.indent && opts.indent > 0)) {
              throw new TypeError('options "indent" must be "\\t", an integer > 0, or `null`');
            }

            if (typeof obj === "undefined") {
              return "undefined";
            }

            if (obj === null) {
              return "null";
            }

            if (typeof obj === "boolean") {
              return obj ? "true" : "false";
            }

            if (typeof obj === "string") {
              return inspectString(obj, opts);
            }

            if (typeof obj === "number") {
              if (obj === 0) {
                return Infinity / obj > 0 ? "0" : "-0";
              }

              return String(obj);
            }

            if (typeof obj === "bigint") {
              return String(obj) + "n";
            }

            var maxDepth = typeof opts.depth === "undefined" ? 5 : opts.depth;

            if (typeof depth === "undefined") {
              depth = 0;
            }

            if (depth >= maxDepth && maxDepth > 0 && typeof obj === "object") {
              return isArray(obj) ? "[Array]" : "[Object]";
            }

            var indent = getIndent(opts, depth);

            if (typeof seen === "undefined") {
              seen = [];
            } else if (indexOf(seen, obj) >= 0) {
              return "[Circular]";
            }

            function inspect(value, from, noIndent) {
              if (from) {
                seen = seen.slice();
                seen.push(from);
              }

              if (noIndent) {
                var newOpts = {
                  depth: opts.depth
                };

                if (has(opts, "quoteStyle")) {
                  newOpts.quoteStyle = opts.quoteStyle;
                }

                return inspect_(value, newOpts, depth + 1, seen);
              }

              return inspect_(value, opts, depth + 1, seen);
            }

            if (typeof obj === "function") {
              var name = nameOf(obj);
              var keys = arrObjKeys(obj, inspect);
              return "[Function" + (name ? ": " + name : " (anonymous)") + "]" + (keys.length > 0 ? " { " + keys.join(", ") + " }" : "");
            }

            if (isSymbol(obj)) {
              var symString = hasShammedSymbols ? String(obj).replace(/^(Symbol\(.*\))_[^)]*$/, "$1") : symToString.call(obj);
              return typeof obj === "object" && !hasShammedSymbols ? markBoxed(symString) : symString;
            }

            if (isElement(obj)) {
              var s = "<" + String(obj.nodeName).toLowerCase();
              var attrs = obj.attributes || [];

              for (var i = 0; i < attrs.length; i++) {
                s += " " + attrs[i].name + "=" + wrapQuotes(quote(attrs[i].value), "double", opts);
              }

              s += ">";

              if (obj.childNodes && obj.childNodes.length) {
                s += "...";
              }

              s += "</" + String(obj.nodeName).toLowerCase() + ">";
              return s;
            }

            if (isArray(obj)) {
              if (obj.length === 0) {
                return "[]";
              }

              var xs = arrObjKeys(obj, inspect);

              if (indent && !singleLineValues(xs)) {
                return "[" + indentedJoin(xs, indent) + "]";
              }

              return "[ " + xs.join(", ") + " ]";
            }

            if (isError(obj)) {
              var parts = arrObjKeys(obj, inspect);

              if (parts.length === 0) {
                return "[" + String(obj) + "]";
              }

              return "{ [" + String(obj) + "] " + parts.join(", ") + " }";
            }

            if (typeof obj === "object" && customInspect) {
              if (inspectSymbol && typeof obj[inspectSymbol] === "function") {
                return obj[inspectSymbol]();
              } else if (customInspect !== "symbol" && typeof obj.inspect === "function") {
                return obj.inspect();
              }
            }

            if (isMap(obj)) {
              var mapParts = [];
              mapForEach.call(obj, function (value, key) {
                mapParts.push(inspect(key, obj, true) + " => " + inspect(value, obj));
              });
              return collectionOf("Map", mapSize.call(obj), mapParts, indent);
            }

            if (isSet(obj)) {
              var setParts = [];
              setForEach.call(obj, function (value) {
                setParts.push(inspect(value, obj));
              });
              return collectionOf("Set", setSize.call(obj), setParts, indent);
            }

            if (isWeakMap(obj)) {
              return weakCollectionOf("WeakMap");
            }

            if (isWeakSet(obj)) {
              return weakCollectionOf("WeakSet");
            }

            if (isWeakRef(obj)) {
              return weakCollectionOf("WeakRef");
            }

            if (isNumber(obj)) {
              return markBoxed(inspect(Number(obj)));
            }

            if (isBigInt(obj)) {
              return markBoxed(inspect(bigIntValueOf.call(obj)));
            }

            if (isBoolean(obj)) {
              return markBoxed(booleanValueOf.call(obj));
            }

            if (isString(obj)) {
              return markBoxed(inspect(String(obj)));
            }

            if (!isDate(obj) && !isRegExp(obj)) {
              var ys = arrObjKeys(obj, inspect);
              var isPlainObject = gPO ? gPO(obj) === Object.prototype : obj instanceof Object || obj.constructor === Object;
              var protoTag = obj instanceof Object ? "" : "null prototype";
              var stringTag = !isPlainObject && toStringTag && Object(obj) === obj && toStringTag in obj ? toStr(obj).slice(8, -1) : protoTag ? "Object" : "";
              var constructorTag = isPlainObject || typeof obj.constructor !== "function" ? "" : obj.constructor.name ? obj.constructor.name + " " : "";
              var tag = constructorTag + (stringTag || protoTag ? "[" + [].concat(stringTag || [], protoTag || []).join(": ") + "] " : "");

              if (ys.length === 0) {
                return tag + "{}";
              }

              if (indent) {
                return tag + "{" + indentedJoin(ys, indent) + "}";
              }

              return tag + "{ " + ys.join(", ") + " }";
            }

            return String(obj);
          };

          function wrapQuotes(s, defaultStyle, opts) {
            var quoteChar = (opts.quoteStyle || defaultStyle) === "double" ? '"' : "'";
            return quoteChar + s + quoteChar;
          }

          function quote(s) {
            return String(s).replace(/"/g, "&quot;");
          }

          function isArray(obj) {
            return toStr(obj) === "[object Array]" && (!toStringTag || !(typeof obj === "object" && toStringTag in obj));
          }

          function isDate(obj) {
            return toStr(obj) === "[object Date]" && (!toStringTag || !(typeof obj === "object" && toStringTag in obj));
          }

          function isRegExp(obj) {
            return toStr(obj) === "[object RegExp]" && (!toStringTag || !(typeof obj === "object" && toStringTag in obj));
          }

          function isError(obj) {
            return toStr(obj) === "[object Error]" && (!toStringTag || !(typeof obj === "object" && toStringTag in obj));
          }

          function isString(obj) {
            return toStr(obj) === "[object String]" && (!toStringTag || !(typeof obj === "object" && toStringTag in obj));
          }

          function isNumber(obj) {
            return toStr(obj) === "[object Number]" && (!toStringTag || !(typeof obj === "object" && toStringTag in obj));
          }

          function isBoolean(obj) {
            return toStr(obj) === "[object Boolean]" && (!toStringTag || !(typeof obj === "object" && toStringTag in obj));
          }

          function isSymbol(obj) {
            if (hasShammedSymbols) {
              return obj && typeof obj === "object" && obj instanceof Symbol;
            }

            if (typeof obj === "symbol") {
              return true;
            }

            if (!obj || typeof obj !== "object" || !symToString) {
              return false;
            }

            try {
              symToString.call(obj);
              return true;
            } catch (e) {}

            return false;
          }

          function isBigInt(obj) {
            if (!obj || typeof obj !== "object" || !bigIntValueOf) {
              return false;
            }

            try {
              bigIntValueOf.call(obj);
              return true;
            } catch (e) {}

            return false;
          }

          var hasOwn = Object.prototype.hasOwnProperty || function (key) {
            return key in this;
          };

          function has(obj, key) {
            return hasOwn.call(obj, key);
          }

          function toStr(obj) {
            return objectToString.call(obj);
          }

          function nameOf(f) {
            if (f.name) {
              return f.name;
            }

            var m = match.call(functionToString.call(f), /^function\s*([\w$]+)/);

            if (m) {
              return m[1];
            }

            return null;
          }

          function indexOf(xs, x) {
            if (xs.indexOf) {
              return xs.indexOf(x);
            }

            for (var i = 0, l = xs.length; i < l; i++) {
              if (xs[i] === x) {
                return i;
              }
            }

            return -1;
          }

          function isMap(x) {
            if (!mapSize || !x || typeof x !== "object") {
              return false;
            }

            try {
              mapSize.call(x);

              try {
                setSize.call(x);
              } catch (s) {
                return true;
              }

              return x instanceof Map;
            } catch (e) {}

            return false;
          }

          function isWeakMap(x) {
            if (!weakMapHas || !x || typeof x !== "object") {
              return false;
            }

            try {
              weakMapHas.call(x, weakMapHas);

              try {
                weakSetHas.call(x, weakSetHas);
              } catch (s) {
                return true;
              }

              return x instanceof WeakMap;
            } catch (e) {}

            return false;
          }

          function isWeakRef(x) {
            if (!weakRefDeref || !x || typeof x !== "object") {
              return false;
            }

            try {
              weakRefDeref.call(x);
              return true;
            } catch (e) {}

            return false;
          }

          function isSet(x) {
            if (!setSize || !x || typeof x !== "object") {
              return false;
            }

            try {
              setSize.call(x);

              try {
                mapSize.call(x);
              } catch (m) {
                return true;
              }

              return x instanceof Set;
            } catch (e) {}

            return false;
          }

          function isWeakSet(x) {
            if (!weakSetHas || !x || typeof x !== "object") {
              return false;
            }

            try {
              weakSetHas.call(x, weakSetHas);

              try {
                weakMapHas.call(x, weakMapHas);
              } catch (s) {
                return true;
              }

              return x instanceof WeakSet;
            } catch (e) {}

            return false;
          }

          function isElement(x) {
            if (!x || typeof x !== "object") {
              return false;
            }

            if (typeof HTMLElement !== "undefined" && x instanceof HTMLElement) {
              return true;
            }

            return typeof x.nodeName === "string" && typeof x.getAttribute === "function";
          }

          function inspectString(str, opts) {
            if (str.length > opts.maxStringLength) {
              var remaining = str.length - opts.maxStringLength;
              var trailer = "... " + remaining + " more character" + (remaining > 1 ? "s" : "");
              return inspectString(str.slice(0, opts.maxStringLength), opts) + trailer;
            }

            var s = str.replace(/(['\\])/g, "\\$1").replace(/[\x00-\x1f]/g, lowbyte);
            return wrapQuotes(s, "single", opts);
          }

          function lowbyte(c) {
            var n = c.charCodeAt(0);
            var x = {
              8: "b",
              9: "t",
              10: "n",
              12: "f",
              13: "r"
            }[n];

            if (x) {
              return "\\" + x;
            }

            return "\\x" + (n < 16 ? "0" : "") + n.toString(16).toUpperCase();
          }

          function markBoxed(str) {
            return "Object(" + str + ")";
          }

          function weakCollectionOf(type) {
            return type + " { ? }";
          }

          function collectionOf(type, size, entries, indent) {
            var joinedEntries = indent ? indentedJoin(entries, indent) : entries.join(", ");
            return type + " (" + size + ") {" + joinedEntries + "}";
          }

          function singleLineValues(xs) {
            for (var i = 0; i < xs.length; i++) {
              if (indexOf(xs[i], "\n") >= 0) {
                return false;
              }
            }

            return true;
          }

          function getIndent(opts, depth) {
            var baseIndent;

            if (opts.indent === "	") {
              baseIndent = "	";
            } else if (typeof opts.indent === "number" && opts.indent > 0) {
              baseIndent = Array(opts.indent + 1).join(" ");
            } else {
              return null;
            }

            return {
              base: baseIndent,
              prev: Array(depth + 1).join(baseIndent)
            };
          }

          function indentedJoin(xs, indent) {
            if (xs.length === 0) {
              return "";
            }

            var lineJoiner = "\n" + indent.prev + indent.base;
            return lineJoiner + xs.join("," + lineJoiner) + "\n" + indent.prev;
          }

          function arrObjKeys(obj, inspect) {
            var isArr = isArray(obj);
            var xs = [];

            if (isArr) {
              xs.length = obj.length;

              for (var i = 0; i < obj.length; i++) {
                xs[i] = has(obj, i) ? inspect(obj[i], obj) : "";
              }
            }

            var syms = typeof gOPS === "function" ? gOPS(obj) : [];
            var symMap;

            if (hasShammedSymbols) {
              symMap = {};

              for (var k = 0; k < syms.length; k++) {
                symMap["$" + syms[k]] = syms[k];
              }
            }

            for (var key in obj) {
              if (!has(obj, key)) {
                continue;
              }

              if (isArr && String(Number(key)) === key && key < obj.length) {
                continue;
              }

              if (hasShammedSymbols && symMap["$" + key] instanceof Symbol) {
                continue;
              } else if (/[^\w$]/.test(key)) {
                xs.push(inspect(key, obj) + ": " + inspect(obj[key], obj));
              } else {
                xs.push(key + ": " + inspect(obj[key], obj));
              }
            }

            if (typeof gOPS === "function") {
              for (var j = 0; j < syms.length; j++) {
                if (isEnumerable.call(obj, syms[j])) {
                  xs.push("[" + inspect(syms[j]) + "]: " + inspect(obj[syms[j]], obj));
                }
              }
            }

            return xs;
          }
          /***/

        },

        /***/
        "./node_modules/qs/lib/formats.js":
        /*!****************************************!*\
          !*** ./node_modules/qs/lib/formats.js ***!
          \****************************************/

        /***/
        module => {
          "use strict";

          var replace = String.prototype.replace;
          var percentTwenties = /%20/g;
          var Format = {
            RFC1738: "RFC1738",
            RFC3986: "RFC3986"
          };
          module.exports = {
            "default": Format.RFC3986,
            formatters: {
              RFC1738: function (value) {
                return replace.call(value, percentTwenties, "+");
              },
              RFC3986: function (value) {
                return String(value);
              }
            },
            RFC1738: Format.RFC1738,
            RFC3986: Format.RFC3986
          };
          /***/
        },

        /***/
        "./node_modules/qs/lib/index.js":
        /*!**************************************!*\
          !*** ./node_modules/qs/lib/index.js ***!
          \**************************************/

        /***/
        (module, __unused_webpack_exports, __webpack_require__) => {
          "use strict";

          var stringify = __webpack_require__(
          /*! ./stringify */
          "./node_modules/qs/lib/stringify.js");

          var parse = __webpack_require__(
          /*! ./parse */
          "./node_modules/qs/lib/parse.js");

          var formats = __webpack_require__(
          /*! ./formats */
          "./node_modules/qs/lib/formats.js");

          module.exports = {
            formats,
            parse,
            stringify
          };
          /***/
        },

        /***/
        "./node_modules/qs/lib/parse.js":
        /*!**************************************!*\
          !*** ./node_modules/qs/lib/parse.js ***!
          \**************************************/

        /***/
        (module, __unused_webpack_exports, __webpack_require__) => {
          "use strict";

          var utils = __webpack_require__(
          /*! ./utils */
          "./node_modules/qs/lib/utils.js");

          var has = Object.prototype.hasOwnProperty;
          var isArray = Array.isArray;
          var defaults = {
            allowDots: false,
            allowPrototypes: false,
            allowSparse: false,
            arrayLimit: 20,
            charset: "utf-8",
            charsetSentinel: false,
            comma: false,
            decoder: utils.decode,
            delimiter: "&",
            depth: 5,
            ignoreQueryPrefix: false,
            interpretNumericEntities: false,
            parameterLimit: 1e3,
            parseArrays: true,
            plainObjects: false,
            strictNullHandling: false
          };

          var interpretNumericEntities = function (str) {
            return str.replace(/&#(\d+);/g, function ($0, numberStr) {
              return String.fromCharCode(parseInt(numberStr, 10));
            });
          };

          var parseArrayValue = function (val, options) {
            if (val && typeof val === "string" && options.comma && val.indexOf(",") > -1) {
              return val.split(",");
            }

            return val;
          };

          var isoSentinel = "utf8=%26%2310003%3B";
          var charsetSentinel = "utf8=%E2%9C%93";

          var parseValues = function parseQueryStringValues(str, options) {
            var obj = {};
            var cleanStr = options.ignoreQueryPrefix ? str.replace(/^\?/, "") : str;
            var limit = options.parameterLimit === Infinity ? void 0 : options.parameterLimit;
            var parts = cleanStr.split(options.delimiter, limit);
            var skipIndex = -1;
            var i;
            var charset = options.charset;

            if (options.charsetSentinel) {
              for (i = 0; i < parts.length; ++i) {
                if (parts[i].indexOf("utf8=") === 0) {
                  if (parts[i] === charsetSentinel) {
                    charset = "utf-8";
                  } else if (parts[i] === isoSentinel) {
                    charset = "iso-8859-1";
                  }

                  skipIndex = i;
                  i = parts.length;
                }
              }
            }

            for (i = 0; i < parts.length; ++i) {
              if (i === skipIndex) {
                continue;
              }

              var part = parts[i];
              var bracketEqualsPos = part.indexOf("]=");
              var pos = bracketEqualsPos === -1 ? part.indexOf("=") : bracketEqualsPos + 1;
              var key, val;

              if (pos === -1) {
                key = options.decoder(part, defaults.decoder, charset, "key");
                val = options.strictNullHandling ? null : "";
              } else {
                key = options.decoder(part.slice(0, pos), defaults.decoder, charset, "key");
                val = utils.maybeMap(parseArrayValue(part.slice(pos + 1), options), function (encodedVal) {
                  return options.decoder(encodedVal, defaults.decoder, charset, "value");
                });
              }

              if (val && options.interpretNumericEntities && charset === "iso-8859-1") {
                val = interpretNumericEntities(val);
              }

              if (part.indexOf("[]=") > -1) {
                val = isArray(val) ? [val] : val;
              }

              if (has.call(obj, key)) {
                obj[key] = utils.combine(obj[key], val);
              } else {
                obj[key] = val;
              }
            }

            return obj;
          };

          var parseObject = function (chain, val, options, valuesParsed) {
            var leaf = valuesParsed ? val : parseArrayValue(val, options);

            for (var i = chain.length - 1; i >= 0; --i) {
              var obj;
              var root = chain[i];

              if (root === "[]" && options.parseArrays) {
                obj = [].concat(leaf);
              } else {
                obj = options.plainObjects ? Object.create(null) : {};
                var cleanRoot = root.charAt(0) === "[" && root.charAt(root.length - 1) === "]" ? root.slice(1, -1) : root;
                var index = parseInt(cleanRoot, 10);

                if (!options.parseArrays && cleanRoot === "") {
                  obj = {
                    0: leaf
                  };
                } else if (!isNaN(index) && root !== cleanRoot && String(index) === cleanRoot && index >= 0 && options.parseArrays && index <= options.arrayLimit) {
                  obj = [];
                  obj[index] = leaf;
                } else {
                  obj[cleanRoot] = leaf;
                }
              }

              leaf = obj;
            }

            return leaf;
          };

          var parseKeys = function parseQueryStringKeys(givenKey, val, options, valuesParsed) {
            if (!givenKey) {
              return;
            }

            var key = options.allowDots ? givenKey.replace(/\.([^.[]+)/g, "[$1]") : givenKey;
            var brackets = /(\[[^[\]]*])/;
            var child = /(\[[^[\]]*])/g;
            var segment = options.depth > 0 && brackets.exec(key);
            var parent = segment ? key.slice(0, segment.index) : key;
            var keys = [];

            if (parent) {
              if (!options.plainObjects && has.call(Object.prototype, parent)) {
                if (!options.allowPrototypes) {
                  return;
                }
              }

              keys.push(parent);
            }

            var i = 0;

            while (options.depth > 0 && (segment = child.exec(key)) !== null && i < options.depth) {
              i += 1;

              if (!options.plainObjects && has.call(Object.prototype, segment[1].slice(1, -1))) {
                if (!options.allowPrototypes) {
                  return;
                }
              }

              keys.push(segment[1]);
            }

            if (segment) {
              keys.push("[" + key.slice(segment.index) + "]");
            }

            return parseObject(keys, val, options, valuesParsed);
          };

          var normalizeParseOptions = function normalizeParseOptions2(opts) {
            if (!opts) {
              return defaults;
            }

            if (opts.decoder !== null && opts.decoder !== void 0 && typeof opts.decoder !== "function") {
              throw new TypeError("Decoder has to be a function.");
            }

            if (typeof opts.charset !== "undefined" && opts.charset !== "utf-8" && opts.charset !== "iso-8859-1") {
              throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
            }

            var charset = typeof opts.charset === "undefined" ? defaults.charset : opts.charset;
            return {
              allowDots: typeof opts.allowDots === "undefined" ? defaults.allowDots : !!opts.allowDots,
              allowPrototypes: typeof opts.allowPrototypes === "boolean" ? opts.allowPrototypes : defaults.allowPrototypes,
              allowSparse: typeof opts.allowSparse === "boolean" ? opts.allowSparse : defaults.allowSparse,
              arrayLimit: typeof opts.arrayLimit === "number" ? opts.arrayLimit : defaults.arrayLimit,
              charset,
              charsetSentinel: typeof opts.charsetSentinel === "boolean" ? opts.charsetSentinel : defaults.charsetSentinel,
              comma: typeof opts.comma === "boolean" ? opts.comma : defaults.comma,
              decoder: typeof opts.decoder === "function" ? opts.decoder : defaults.decoder,
              delimiter: typeof opts.delimiter === "string" || utils.isRegExp(opts.delimiter) ? opts.delimiter : defaults.delimiter,
              depth: typeof opts.depth === "number" || opts.depth === false ? +opts.depth : defaults.depth,
              ignoreQueryPrefix: opts.ignoreQueryPrefix === true,
              interpretNumericEntities: typeof opts.interpretNumericEntities === "boolean" ? opts.interpretNumericEntities : defaults.interpretNumericEntities,
              parameterLimit: typeof opts.parameterLimit === "number" ? opts.parameterLimit : defaults.parameterLimit,
              parseArrays: opts.parseArrays !== false,
              plainObjects: typeof opts.plainObjects === "boolean" ? opts.plainObjects : defaults.plainObjects,
              strictNullHandling: typeof opts.strictNullHandling === "boolean" ? opts.strictNullHandling : defaults.strictNullHandling
            };
          };

          module.exports = function (str, opts) {
            var options = normalizeParseOptions(opts);

            if (str === "" || str === null || typeof str === "undefined") {
              return options.plainObjects ? Object.create(null) : {};
            }

            var tempObj = typeof str === "string" ? parseValues(str, options) : str;
            var obj = options.plainObjects ? Object.create(null) : {};
            var keys = Object.keys(tempObj);

            for (var i = 0; i < keys.length; ++i) {
              var key = keys[i];
              var newObj = parseKeys(key, tempObj[key], options, typeof str === "string");
              obj = utils.merge(obj, newObj, options);
            }

            if (options.allowSparse === true) {
              return obj;
            }

            return utils.compact(obj);
          };
          /***/

        },

        /***/
        "./node_modules/qs/lib/stringify.js":
        /*!******************************************!*\
          !*** ./node_modules/qs/lib/stringify.js ***!
          \******************************************/

        /***/
        (module, __unused_webpack_exports, __webpack_require__) => {
          "use strict";

          var getSideChannel = __webpack_require__(
          /*! side-channel */
          "./node_modules/side-channel/index.js");

          var utils = __webpack_require__(
          /*! ./utils */
          "./node_modules/qs/lib/utils.js");

          var formats = __webpack_require__(
          /*! ./formats */
          "./node_modules/qs/lib/formats.js");

          var has = Object.prototype.hasOwnProperty;
          var arrayPrefixGenerators = {
            brackets: function brackets(prefix) {
              return prefix + "[]";
            },
            comma: "comma",
            indices: function indices(prefix, key) {
              return prefix + "[" + key + "]";
            },
            repeat: function repeat(prefix) {
              return prefix;
            }
          };
          var isArray = Array.isArray;
          var push = Array.prototype.push;

          var pushToArray = function (arr, valueOrArray) {
            push.apply(arr, isArray(valueOrArray) ? valueOrArray : [valueOrArray]);
          };

          var toISO = Date.prototype.toISOString;
          var defaultFormat = formats["default"];
          var defaults = {
            addQueryPrefix: false,
            allowDots: false,
            charset: "utf-8",
            charsetSentinel: false,
            delimiter: "&",
            encode: true,
            encoder: utils.encode,
            encodeValuesOnly: false,
            format: defaultFormat,
            formatter: formats.formatters[defaultFormat],
            indices: false,
            serializeDate: function serializeDate(date) {
              return toISO.call(date);
            },
            skipNulls: false,
            strictNullHandling: false
          };

          var isNonNullishPrimitive = function isNonNullishPrimitive2(v) {
            return typeof v === "string" || typeof v === "number" || typeof v === "boolean" || typeof v === "symbol" || typeof v === "bigint";
          };

          var stringify = function stringify2(object, prefix, generateArrayPrefix, strictNullHandling, skipNulls, encoder, filter, sort, allowDots, serializeDate2, format, formatter, encodeValuesOnly, charset, sideChannel) {
            var obj = object;

            if (sideChannel.has(object)) {
              throw new RangeError("Cyclic object value");
            }

            if (typeof filter === "function") {
              obj = filter(prefix, obj);
            } else if (obj instanceof Date) {
              obj = serializeDate2(obj);
            } else if (generateArrayPrefix === "comma" && isArray(obj)) {
              obj = utils.maybeMap(obj, function (value2) {
                if (value2 instanceof Date) {
                  return serializeDate2(value2);
                }

                return value2;
              });
            }

            if (obj === null) {
              if (strictNullHandling) {
                return encoder && !encodeValuesOnly ? encoder(prefix, defaults.encoder, charset, "key", format) : prefix;
              }

              obj = "";
            }

            if (isNonNullishPrimitive(obj) || utils.isBuffer(obj)) {
              if (encoder) {
                var keyValue = encodeValuesOnly ? prefix : encoder(prefix, defaults.encoder, charset, "key", format);
                return [formatter(keyValue) + "=" + formatter(encoder(obj, defaults.encoder, charset, "value", format))];
              }

              return [formatter(prefix) + "=" + formatter(String(obj))];
            }

            var values = [];

            if (typeof obj === "undefined") {
              return values;
            }

            var objKeys;

            if (generateArrayPrefix === "comma" && isArray(obj)) {
              objKeys = [{
                value: obj.length > 0 ? obj.join(",") || null : void 0
              }];
            } else if (isArray(filter)) {
              objKeys = filter;
            } else {
              var keys = Object.keys(obj);
              objKeys = sort ? keys.sort(sort) : keys;
            }

            for (var i = 0; i < objKeys.length; ++i) {
              var key = objKeys[i];
              var value = typeof key === "object" && key.value !== void 0 ? key.value : obj[key];

              if (skipNulls && value === null) {
                continue;
              }

              var keyPrefix = isArray(obj) ? typeof generateArrayPrefix === "function" ? generateArrayPrefix(prefix, key) : prefix : prefix + (allowDots ? "." + key : "[" + key + "]");
              sideChannel.set(object, true);
              var valueSideChannel = getSideChannel();
              pushToArray(values, stringify2(value, keyPrefix, generateArrayPrefix, strictNullHandling, skipNulls, encoder, filter, sort, allowDots, serializeDate2, format, formatter, encodeValuesOnly, charset, valueSideChannel));
            }

            return values;
          };

          var normalizeStringifyOptions = function normalizeStringifyOptions2(opts) {
            if (!opts) {
              return defaults;
            }

            if (opts.encoder !== null && opts.encoder !== void 0 && typeof opts.encoder !== "function") {
              throw new TypeError("Encoder has to be a function.");
            }

            var charset = opts.charset || defaults.charset;

            if (typeof opts.charset !== "undefined" && opts.charset !== "utf-8" && opts.charset !== "iso-8859-1") {
              throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
            }

            var format = formats["default"];

            if (typeof opts.format !== "undefined") {
              if (!has.call(formats.formatters, opts.format)) {
                throw new TypeError("Unknown format option provided.");
              }

              format = opts.format;
            }

            var formatter = formats.formatters[format];
            var filter = defaults.filter;

            if (typeof opts.filter === "function" || isArray(opts.filter)) {
              filter = opts.filter;
            }

            return {
              addQueryPrefix: typeof opts.addQueryPrefix === "boolean" ? opts.addQueryPrefix : defaults.addQueryPrefix,
              allowDots: typeof opts.allowDots === "undefined" ? defaults.allowDots : !!opts.allowDots,
              charset,
              charsetSentinel: typeof opts.charsetSentinel === "boolean" ? opts.charsetSentinel : defaults.charsetSentinel,
              delimiter: typeof opts.delimiter === "undefined" ? defaults.delimiter : opts.delimiter,
              encode: typeof opts.encode === "boolean" ? opts.encode : defaults.encode,
              encoder: typeof opts.encoder === "function" ? opts.encoder : defaults.encoder,
              encodeValuesOnly: typeof opts.encodeValuesOnly === "boolean" ? opts.encodeValuesOnly : defaults.encodeValuesOnly,
              filter,
              format,
              formatter,
              serializeDate: typeof opts.serializeDate === "function" ? opts.serializeDate : defaults.serializeDate,
              skipNulls: typeof opts.skipNulls === "boolean" ? opts.skipNulls : defaults.skipNulls,
              sort: typeof opts.sort === "function" ? opts.sort : null,
              strictNullHandling: typeof opts.strictNullHandling === "boolean" ? opts.strictNullHandling : defaults.strictNullHandling
            };
          };

          module.exports = function (object, opts) {
            var obj = object;
            var options = normalizeStringifyOptions(opts);
            var objKeys;
            var filter;

            if (typeof options.filter === "function") {
              filter = options.filter;
              obj = filter("", obj);
            } else if (isArray(options.filter)) {
              filter = options.filter;
              objKeys = filter;
            }

            var keys = [];

            if (typeof obj !== "object" || obj === null) {
              return "";
            }

            var arrayFormat;

            if (opts && opts.arrayFormat in arrayPrefixGenerators) {
              arrayFormat = opts.arrayFormat;
            } else if (opts && "indices" in opts) {
              arrayFormat = opts.indices ? "indices" : "repeat";
            } else {
              arrayFormat = "indices";
            }

            var generateArrayPrefix = arrayPrefixGenerators[arrayFormat];

            if (!objKeys) {
              objKeys = Object.keys(obj);
            }

            if (options.sort) {
              objKeys.sort(options.sort);
            }

            var sideChannel = getSideChannel();

            for (var i = 0; i < objKeys.length; ++i) {
              var key = objKeys[i];

              if (options.skipNulls && obj[key] === null) {
                continue;
              }

              pushToArray(keys, stringify(obj[key], key, generateArrayPrefix, options.strictNullHandling, options.skipNulls, options.encode ? options.encoder : null, options.filter, options.sort, options.allowDots, options.serializeDate, options.format, options.formatter, options.encodeValuesOnly, options.charset, sideChannel));
            }

            var joined = keys.join(options.delimiter);
            var prefix = options.addQueryPrefix === true ? "?" : "";

            if (options.charsetSentinel) {
              if (options.charset === "iso-8859-1") {
                prefix += "utf8=%26%2310003%3B&";
              } else {
                prefix += "utf8=%E2%9C%93&";
              }
            }

            return joined.length > 0 ? prefix + joined : "";
          };
          /***/

        },

        /***/
        "./node_modules/qs/lib/utils.js":
        /*!**************************************!*\
          !*** ./node_modules/qs/lib/utils.js ***!
          \**************************************/

        /***/
        (module, __unused_webpack_exports, __webpack_require__) => {
          "use strict";

          var formats = __webpack_require__(
          /*! ./formats */
          "./node_modules/qs/lib/formats.js");

          var has = Object.prototype.hasOwnProperty;
          var isArray = Array.isArray;

          var hexTable = function () {
            var array = [];

            for (var i = 0; i < 256; ++i) {
              array.push("%" + ((i < 16 ? "0" : "") + i.toString(16)).toUpperCase());
            }

            return array;
          }();

          var compactQueue = function compactQueue2(queue) {
            while (queue.length > 1) {
              var item = queue.pop();
              var obj = item.obj[item.prop];

              if (isArray(obj)) {
                var compacted = [];

                for (var j = 0; j < obj.length; ++j) {
                  if (typeof obj[j] !== "undefined") {
                    compacted.push(obj[j]);
                  }
                }

                item.obj[item.prop] = compacted;
              }
            }
          };

          var arrayToObject = function arrayToObject2(source, options) {
            var obj = options && options.plainObjects ? Object.create(null) : {};

            for (var i = 0; i < source.length; ++i) {
              if (typeof source[i] !== "undefined") {
                obj[i] = source[i];
              }
            }

            return obj;
          };

          var merge = function merge2(target, source, options) {
            if (!source) {
              return target;
            }

            if (typeof source !== "object") {
              if (isArray(target)) {
                target.push(source);
              } else if (target && typeof target === "object") {
                if (options && (options.plainObjects || options.allowPrototypes) || !has.call(Object.prototype, source)) {
                  target[source] = true;
                }
              } else {
                return [target, source];
              }

              return target;
            }

            if (!target || typeof target !== "object") {
              return [target].concat(source);
            }

            var mergeTarget = target;

            if (isArray(target) && !isArray(source)) {
              mergeTarget = arrayToObject(target, options);
            }

            if (isArray(target) && isArray(source)) {
              source.forEach(function (item, i) {
                if (has.call(target, i)) {
                  var targetItem = target[i];

                  if (targetItem && typeof targetItem === "object" && item && typeof item === "object") {
                    target[i] = merge2(targetItem, item, options);
                  } else {
                    target.push(item);
                  }
                } else {
                  target[i] = item;
                }
              });
              return target;
            }

            return Object.keys(source).reduce(function (acc, key) {
              var value = source[key];

              if (has.call(acc, key)) {
                acc[key] = merge2(acc[key], value, options);
              } else {
                acc[key] = value;
              }

              return acc;
            }, mergeTarget);
          };

          var assign = function assignSingleSource(target, source) {
            return Object.keys(source).reduce(function (acc, key) {
              acc[key] = source[key];
              return acc;
            }, target);
          };

          var decode = function (str, decoder, charset) {
            var strWithoutPlus = str.replace(/\+/g, " ");

            if (charset === "iso-8859-1") {
              return strWithoutPlus.replace(/%[0-9a-f]{2}/gi, unescape);
            }

            try {
              return decodeURIComponent(strWithoutPlus);
            } catch (e) {
              return strWithoutPlus;
            }
          };

          var encode = function encode2(str, defaultEncoder, charset, kind, format) {
            if (str.length === 0) {
              return str;
            }

            var string = str;

            if (typeof str === "symbol") {
              string = Symbol.prototype.toString.call(str);
            } else if (typeof str !== "string") {
              string = String(str);
            }

            if (charset === "iso-8859-1") {
              return escape(string).replace(/%u[0-9a-f]{4}/gi, function ($0) {
                return "%26%23" + parseInt($0.slice(2), 16) + "%3B";
              });
            }

            var out = "";

            for (var i = 0; i < string.length; ++i) {
              var c = string.charCodeAt(i);

              if (c === 45 || c === 46 || c === 95 || c === 126 || c >= 48 && c <= 57 || c >= 65 && c <= 90 || c >= 97 && c <= 122 || format === formats.RFC1738 && (c === 40 || c === 41)) {
                out += string.charAt(i);
                continue;
              }

              if (c < 128) {
                out = out + hexTable[c];
                continue;
              }

              if (c < 2048) {
                out = out + (hexTable[192 | c >> 6] + hexTable[128 | c & 63]);
                continue;
              }

              if (c < 55296 || c >= 57344) {
                out = out + (hexTable[224 | c >> 12] + hexTable[128 | c >> 6 & 63] + hexTable[128 | c & 63]);
                continue;
              }

              i += 1;
              c = 65536 + ((c & 1023) << 10 | string.charCodeAt(i) & 1023);
              out += hexTable[240 | c >> 18] + hexTable[128 | c >> 12 & 63] + hexTable[128 | c >> 6 & 63] + hexTable[128 | c & 63];
            }

            return out;
          };

          var compact = function compact2(value) {
            var queue = [{
              obj: {
                o: value
              },
              prop: "o"
            }];
            var refs = [];

            for (var i = 0; i < queue.length; ++i) {
              var item = queue[i];
              var obj = item.obj[item.prop];
              var keys = Object.keys(obj);

              for (var j = 0; j < keys.length; ++j) {
                var key = keys[j];
                var val = obj[key];

                if (typeof val === "object" && val !== null && refs.indexOf(val) === -1) {
                  queue.push({
                    obj,
                    prop: key
                  });
                  refs.push(val);
                }
              }
            }

            compactQueue(queue);
            return value;
          };

          var isRegExp = function isRegExp2(obj) {
            return Object.prototype.toString.call(obj) === "[object RegExp]";
          };

          var isBuffer = function isBuffer2(obj) {
            if (!obj || typeof obj !== "object") {
              return false;
            }

            return !!(obj.constructor && obj.constructor.isBuffer && obj.constructor.isBuffer(obj));
          };

          var combine = function combine2(a, b) {
            return [].concat(a, b);
          };

          var maybeMap = function maybeMap2(val, fn) {
            if (isArray(val)) {
              var mapped = [];

              for (var i = 0; i < val.length; i += 1) {
                mapped.push(fn(val[i]));
              }

              return mapped;
            }

            return fn(val);
          };

          module.exports = {
            arrayToObject,
            assign,
            combine,
            compact,
            decode,
            encode,
            isBuffer,
            isRegExp,
            maybeMap,
            merge
          };
          /***/
        },

        /***/
        "./node_modules/side-channel/index.js":
        /*!********************************************!*\
          !*** ./node_modules/side-channel/index.js ***!
          \********************************************/

        /***/
        (module, __unused_webpack_exports, __webpack_require__) => {
          "use strict";

          var GetIntrinsic = __webpack_require__(
          /*! get-intrinsic */
          "./node_modules/get-intrinsic/index.js");

          var callBound = __webpack_require__(
          /*! call-bind/callBound */
          "./node_modules/call-bind/callBound.js");

          var inspect = __webpack_require__(
          /*! object-inspect */
          "./node_modules/object-inspect/index.js");

          var $TypeError = GetIntrinsic("%TypeError%");
          var $WeakMap = GetIntrinsic("%WeakMap%", true);
          var $Map = GetIntrinsic("%Map%", true);
          var $weakMapGet = callBound("WeakMap.prototype.get", true);
          var $weakMapSet = callBound("WeakMap.prototype.set", true);
          var $weakMapHas = callBound("WeakMap.prototype.has", true);
          var $mapGet = callBound("Map.prototype.get", true);
          var $mapSet = callBound("Map.prototype.set", true);
          var $mapHas = callBound("Map.prototype.has", true);

          var listGetNode = function (list, key) {
            for (var prev = list, curr; (curr = prev.next) !== null; prev = curr) {
              if (curr.key === key) {
                prev.next = curr.next;
                curr.next = list.next;
                list.next = curr;
                return curr;
              }
            }
          };

          var listGet = function (objects, key) {
            var node = listGetNode(objects, key);
            return node && node.value;
          };

          var listSet = function (objects, key, value) {
            var node = listGetNode(objects, key);

            if (node) {
              node.value = value;
            } else {
              objects.next = {
                key,
                next: objects.next,
                value
              };
            }
          };

          var listHas = function (objects, key) {
            return !!listGetNode(objects, key);
          };

          module.exports = function getSideChannel() {
            var $wm;
            var $m;
            var $o;
            var channel = {
              assert: function (key) {
                if (!channel.has(key)) {
                  throw new $TypeError("Side channel does not contain " + inspect(key));
                }
              },
              get: function (key) {
                if ($WeakMap && key && (typeof key === "object" || typeof key === "function")) {
                  if ($wm) {
                    return $weakMapGet($wm, key);
                  }
                } else if ($Map) {
                  if ($m) {
                    return $mapGet($m, key);
                  }
                } else {
                  if ($o) {
                    return listGet($o, key);
                  }
                }
              },
              has: function (key) {
                if ($WeakMap && key && (typeof key === "object" || typeof key === "function")) {
                  if ($wm) {
                    return $weakMapHas($wm, key);
                  }
                } else if ($Map) {
                  if ($m) {
                    return $mapHas($m, key);
                  }
                } else {
                  if ($o) {
                    return listHas($o, key);
                  }
                }

                return false;
              },
              set: function (key, value) {
                if ($WeakMap && key && (typeof key === "object" || typeof key === "function")) {
                  if (!$wm) {
                    $wm = new $WeakMap();
                  }

                  $weakMapSet($wm, key, value);
                } else if ($Map) {
                  if (!$m) {
                    $m = new $Map();
                  }

                  $mapSet($m, key, value);
                } else {
                  if (!$o) {
                    $o = {
                      key: {},
                      next: null
                    };
                  }

                  listSet($o, key, value);
                }
              }
            };
            return channel;
          };
          /***/

        },

        /***/
        "./src/platform/index.wx.js":
        /*!**********************************!*\
          !*** ./src/platform/index.wx.js ***!
          \**********************************/

        /***/
        (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
          "use strict";

          __webpack_require__.r(__webpack_exports__);
          /* harmony export */


          __webpack_require__.d(__webpack_exports__, {
            /* harmony export */
            "platformStorage": () =>
            /* binding */
            platformStorage,

            /* harmony export */
            "getAppId": () =>
            /* binding */
            getAppId,

            /* harmony export */
            "default": () => __WEBPACK_DEFAULT_EXPORT__
            /* harmony export */

          });

          var __defProp = Object.defineProperty;
          var __defProps = Object.defineProperties;
          var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
          var __getOwnPropSymbols = Object.getOwnPropertySymbols;
          var __hasOwnProp = Object.prototype.hasOwnProperty;
          var __propIsEnum = Object.prototype.propertyIsEnumerable;

          var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, {
            enumerable: true,
            configurable: true,
            writable: true,
            value
          }) : obj[key] = value;

          var __spreadValues = (a, b) => {
            for (var prop in b || (b = {})) if (__hasOwnProp.call(b, prop)) __defNormalProp(a, prop, b[prop]);

            if (__getOwnPropSymbols) for (var prop of __getOwnPropSymbols(b)) {
              if (__propIsEnum.call(b, prop)) __defNormalProp(a, prop, b[prop]);
            }
            return a;
          };

          var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));

          const platformStorage = {
            get(key) {
              return jd.getStorageSync(key);
            },

            set(key, data) {
              return jd.setStorageSync(key, data);
            },

            remove(key) {
              return jd.removeStorageSync(key);
            }

          };

          const getAppId = () => {
            const info = jd.getAccountInfoSync();

            if (info && info.miniProgram) {
              return info.miniProgram.appId;
            }
          };
          /* harmony default export */


          const __WEBPACK_DEFAULT_EXPORT__ = __spreadProps(__spreadValues({}, wx), {
            storage: platformStorage,
            getAppId
          });
          /***/

        },

        /***/
        "./src/reporter/index.js":
        /*!*******************************!*\
          !*** ./src/reporter/index.js ***!
          \*******************************/

        /***/
        (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
          "use strict";

          __webpack_require__.r(__webpack_exports__);
          /* harmony export */


          __webpack_require__.d(__webpack_exports__, {
            /* harmony export */
            "default": () => __WEBPACK_DEFAULT_EXPORT__
            /* harmony export */

          });
          /* harmony import */


          var _store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ../store */
          "./src/store/index.js");
          /* harmony import */


          var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ../../utils */
          "./utils/index.js");
          /* harmony import */


          var _platform__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../platform */
          "./src/platform/index.wx.js");
          /* harmony import */


          var qs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! qs */
          "./node_modules/qs/lib/index.js");
          /* harmony import */


          var qs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(qs__WEBPACK_IMPORTED_MODULE_3__);

          var __defProp = Object.defineProperty;
          var __defProps = Object.defineProperties;
          var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
          var __getOwnPropSymbols = Object.getOwnPropertySymbols;
          var __hasOwnProp = Object.prototype.hasOwnProperty;
          var __propIsEnum = Object.prototype.propertyIsEnumerable;

          var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, {
            enumerable: true,
            configurable: true,
            writable: true,
            value
          }) : obj[key] = value;

          var __spreadValues = (a, b) => {
            for (var prop in b || (b = {})) if (__hasOwnProp.call(b, prop)) __defNormalProp(a, prop, b[prop]);

            if (__getOwnPropSymbols) for (var prop of __getOwnPropSymbols(b)) {
              if (__propIsEnum.call(b, prop)) __defNormalProp(a, prop, b[prop]);
            }
            return a;
          };

          var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));

          class Reporter {
            constructor() {
              this.queue = [];
              this.timerId;
            }

            track(type, data = {}) {
              data.t = type;
              this.queue.push(qs__WEBPACK_IMPORTED_MODULE_3___default().stringify(data));

              if (!this.timerId) {
                this.timerId = setTimeout(() => {
                  this._flush();
                }, _store__WEBPACK_IMPORTED_MODULE_0__["default"].get("config").delay);
              }
            }

            _flush() {
              const config = _store__WEBPACK_IMPORTED_MODULE_0__["default"].get("config");

              const commonMsg = {
                ak: config.ak,
                cid: _utils__WEBPACK_IMPORTED_MODULE_1__.storage.get("cid"),
                ns: _store__WEBPACK_IMPORTED_MODULE_0__["default"].get("networkType"),
                uid: _utils__WEBPACK_IMPORTED_MODULE_1__.storage.get("uid") || 0,
                date: Date.now()
              };

              if (this.queue.length > 0) {
                const data = this.queue.shift();

                _platform__WEBPACK_IMPORTED_MODULE_2__["default"].request({
                  url: config.url,
                  timeout: config.request_timeout,
                  method: "POST",
                  header: {
                    "content-type": "application/x-www-form-urlencoded"
                  },
                  data: __spreadProps(__spreadValues({}, commonMsg), {
                    data
                  }),
                  success: () => {},
                  fail: errMsg => {
                    console.error(errMsg);
                  },
                  complete: () => {
                    setTimeout(() => {
                      this._flush();
                    }, _store__WEBPACK_IMPORTED_MODULE_0__["default"].get("config").delay);
                  }
                });
              } else {
                this.timerId = null;
              }
            }

          }
          /* harmony default export */


          const __WEBPACK_DEFAULT_EXPORT__ = new Reporter();
          /***/

        },

        /***/
        "./src/store/defaultConfig.js":
        /*!************************************!*\
          !*** ./src/store/defaultConfig.js ***!
          \************************************/

        /***/
        (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
          "use strict";

          __webpack_require__.r(__webpack_exports__);
          /* harmony export */


          __webpack_require__.d(__webpack_exports__, {
            /* harmony export */
            "defaultConfig": () =>
            /* binding */
            defaultConfig
            /* harmony export */

          });

          const defaultConfig = {
            url: "https://www.baidu.com",
            ak: "f128205523d8f4c5e9d186a28b171192c",
            autoTrack: {
              appLaunch: true,
              appShow: false,
              appHide: false,
              pageShow: true,
              pageLeave: false,
              pageShare: false,
              pageClickEvent: true
            },
            timeout: 5e3,
            delay: 1e3,
            octopus: false
          };
          /***/
        },

        /***/
        "./src/store/index.js":
        /*!****************************!*\
          !*** ./src/store/index.js ***!
          \****************************/

        /***/
        (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
          "use strict";

          __webpack_require__.r(__webpack_exports__);
          /* harmony export */


          __webpack_require__.d(__webpack_exports__, {
            /* harmony export */
            "default": () => __WEBPACK_DEFAULT_EXPORT__
            /* harmony export */

          });
          /* harmony import */


          var _defaultConfig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./defaultConfig */
          "./src/store/defaultConfig.js");
          /* harmony import */


          var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ../../utils */
          "./utils/index.js");

          class Store {
            constructor() {
              this.store = {
                config: _defaultConfig__WEBPACK_IMPORTED_MODULE_0__.defaultConfig,
                first_app_show: true,
                is_launched: false
              };
            }

            set(key, value) {
              if (key === "config") {
                (0, _utils__WEBPACK_IMPORTED_MODULE_1__.configMerge)(this.store[key], value);
              } else {
                this.store[key] = value;
              }
            }

            get(key) {
              return this.store[key];
            }

            del(key) {
              delete this.store[key];
            }

            clear() {
              this.store = {};
            }

          }
          /* harmony default export */


          const __WEBPACK_DEFAULT_EXPORT__ = new Store();
          /***/

        },

        /***/
        "./src/tracker/hooks.js":
        /*!******************************!*\
          !*** ./src/tracker/hooks.js ***!
          \******************************/

        /***/
        (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
          "use strict";

          __webpack_require__.r(__webpack_exports__);
          /* harmony export */


          __webpack_require__.d(__webpack_exports__, {
            /* harmony export */
            "appLaunch": () =>
            /* binding */
            appLaunch,

            /* harmony export */
            "appShow": () =>
            /* binding */
            appShow,

            /* harmony export */
            "appHide": () =>
            /* binding */
            appHide,

            /* harmony export */
            "pageShow": () =>
            /* binding */
            pageShow,

            /* harmony export */
            "pageHide": () =>
            /* binding */
            pageHide,

            /* harmony export */
            "pageUnLoad": () =>
            /* binding */
            pageUnLoad,

            /* harmony export */
            "pageShare": () =>
            /* binding */
            pageShare,

            /* harmony export */
            "pageClickEvent": () =>
            /* binding */
            pageClickEvent
            /* harmony export */

          });
          /* harmony import */


          var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ../../utils */
          "./utils/index.js");
          /* harmony import */


          var _reporter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ../reporter */
          "./src/reporter/index.js");
          /* harmony import */


          var _store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../store */
          "./src/store/index.js");

          var __defProp = Object.defineProperty;
          var __getOwnPropSymbols = Object.getOwnPropertySymbols;
          var __hasOwnProp = Object.prototype.hasOwnProperty;
          var __propIsEnum = Object.prototype.propertyIsEnumerable;

          var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, {
            enumerable: true,
            configurable: true,
            writable: true,
            value
          }) : obj[key] = value;

          var __spreadValues = (a, b) => {
            for (var prop in b || (b = {})) if (__hasOwnProp.call(b, prop)) __defNormalProp(a, prop, b[prop]);

            if (__getOwnPropSymbols) for (var prop of __getOwnPropSymbols(b)) {
              if (__propIsEnum.call(b, prop)) __defNormalProp(a, prop, b[prop]);
            }
            return a;
          };

          const CLICK_EVENT_TYPE = ["tap", "longtap", "longpress"];

          const appLaunch = oldOnLunch => _proxyHooks(oldOnLunch, function () {
            const data = __spreadValues({
              event: "$appLaunch"
            }, _store__WEBPACK_IMPORTED_MODULE_2__["default"].get("systemInfo"));

            _reporter__WEBPACK_IMPORTED_MODULE_1__["default"].track("devices", data);

            _store__WEBPACK_IMPORTED_MODULE_2__["default"].set("is_launched", true);
          });

          const appShow = oldOnShow => _proxyHooks(oldOnShow, function () {
            const is_first_app_show = _store__WEBPACK_IMPORTED_MODULE_2__["default"].get("first_app_show");

            const is_not_launch = _store__WEBPACK_IMPORTED_MODULE_2__["default"].get("is_launched");

            const data = __spreadValues({
              event: "$appShow"
            }, _store__WEBPACK_IMPORTED_MODULE_2__["default"].get("systemInfo"));

            if (is_first_app_show && !is_not_launch) {
              _reporter__WEBPACK_IMPORTED_MODULE_1__["default"].track("devices", data);

              _store__WEBPACK_IMPORTED_MODULE_2__["default"].set("first_app_show", false);
            }
          });

          const appHide = oldOnHide => {
            _proxyHooks(oldOnHide, function () {
              const data = __spreadValues({
                event: "$appHide"
              }, _store__WEBPACK_IMPORTED_MODULE_2__["default"].get("systemInfo"));

              _reporter__WEBPACK_IMPORTED_MODULE_1__["default"].track("devices", data);

              _store__WEBPACK_IMPORTED_MODULE_2__["default"].set("first_app_show", true);
            });
          };

          const pageShow = oldOnShow => _proxyHooks(oldOnShow, function () {
            const time = Date.now();
            const title2 = (0, _utils__WEBPACK_IMPORTED_MODULE_0__.getPageTitle)(this.route) || void 0;

            _store__WEBPACK_IMPORTED_MODULE_2__["default"].set("pageShowTime", time);

            const data = {
              event: "$pageShow",
              timestamp: time,
              dt: title2,
              dl: this.route,
              tp: time
            };

            _reporter__WEBPACK_IMPORTED_MODULE_1__["default"].track("document", data);
          });

          const pageHide = oldOnHide => _proxyHooks(oldOnHide, function () {
            const pageStayTime = _getPageStayTime();

            const data = {
              event: "$pageLeave",
              dt: title,
              dl: this.route,
              ck: pageStayTime
            };

            _store__WEBPACK_IMPORTED_MODULE_2__["default"].set("pageShowTime", -1);

            _reporter__WEBPACK_IMPORTED_MODULE_1__["default"].track("document", data);
          });

          const pageUnLoad = oldOnUnLoad => _proxyHooks(oldOnUnLoad, function () {
            const pageStayTime = _getPageStayTime();

            const data = {
              event: "$pageLeave",
              dt: title,
              dl: this.route,
              ck: pageStayTime
            };

            _store__WEBPACK_IMPORTED_MODULE_2__["default"].set("pageShowTime", -1);

            _reporter__WEBPACK_IMPORTED_MODULE_1__["default"].track("document", data);
          });

          const pageShare = function (oldShare) {
            return function () {
              const result = oldShare.apply(this);

              _reporter__WEBPACK_IMPORTED_MODULE_1__["default"].track("document", __spreadValues({
                event: "$pageShare"
              }, result));
            };
          };

          const pageClickEvent = oldEvent => _proxyHooks(oldEvent, function (e) {
            let xp;

            if (_store__WEBPACK_IMPORTED_MODULE_2__["default"].get("config").octopus && e) {
              const root = getCurrentPages()[0].data.root;
              xp = getXPath(e.target, root, "/page");
            }

            if (e && CLICK_EVENT_TYPE.includes(e.type) && e.target.id === e.currentTarget.id) {
              _reporter__WEBPACK_IMPORTED_MODULE_1__["default"].track("event", {
                event: "pageClick",
                xp
              });
            }
          });

          function _proxyHooks(fn = function () {}, cb) {
            return function () {
              fn.apply(this, arguments);

              if (cb) {
                cb.apply(this, arguments);
              }
            };
          }

          function _getPageStayTime() {
            const pageShowTime = _store__WEBPACK_IMPORTED_MODULE_2__["default"].get("pageShowTime");

            let pageStayTime;

            if (pageShowTime >= 0) {
              pageStayTime = (Date.now() - pageShowTime) / 1e3;
            }

            return pageStayTime;
          }

          function getXPath(target, root) {
            const id = target.id;
            let res = "";

            const help = (root2, path) => {
              for (let i = 0; i < root2.cn.length; i++) {
                let tmp = path + `/${root2.cn[i].te}[${i}]`;

                if (root2.cn[i].id === id) {
                  res = tmp;
                  return;
                }

                help(root2.cn[i], tmp);
              }
            };

            help(root, res);
            return res;
          }
          /***/

        },

        /***/
        "./src/tracker/index.js":
        /*!******************************!*\
          !*** ./src/tracker/index.js ***!
          \******************************/

        /***/
        (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
          "use strict";

          __webpack_require__.r(__webpack_exports__);
          /* harmony export */


          __webpack_require__.d(__webpack_exports__, {
            /* harmony export */
            "default": () => __WEBPACK_DEFAULT_EXPORT__
            /* harmony export */

          });
          /* harmony import */


          var _hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./hooks */
          "./src/tracker/hooks.js");
          /* harmony import */


          var _reporter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ../reporter */
          "./src/reporter/index.js");
          /* harmony import */


          var _store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../store */
          "./src/store/index.js");
          /* harmony import */


          var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../../utils */
          "./utils/index.js");

          const PAGE_LIFE_METHOD = ["onLoad", "onShow", "onReady", "onHide", "onUnload", "onPullDownRefresh", "onReachBottom", "onShareAppMessage", "onShareTimeline", "onAddToFavorites", "onPageScroll", "onResize", "onTabItemTap", "onSaveExitState"];

          class Tracker {
            constructor() {
              this._collector = {
                App,
                Page
              };

              this._trackInit();
            }

            init(config) {
              if (!_utils__WEBPACK_IMPORTED_MODULE_3__.storage.get("cid")) {
                _utils__WEBPACK_IMPORTED_MODULE_3__.storage.set("cid", (0, _utils__WEBPACK_IMPORTED_MODULE_3__.getUUID)());
              }

              if (config !== void 0) _store__WEBPACK_IMPORTED_MODULE_2__["default"].set("config", config);

              _store__WEBPACK_IMPORTED_MODULE_2__["default"].set("pageShowTime", Date.now());

              App = options => this._collector.App(this._proxyAppOptions(options));

              Page = options => this._collector.Page(this._proxyPageOptions(options));
            }

            _proxyAppOptions(options) {
              const autoTrack = _store__WEBPACK_IMPORTED_MODULE_2__["default"].get("config").autoTrack;

              options.$ta = {
                track: _reporter__WEBPACK_IMPORTED_MODULE_1__["default"].track.bind(_reporter__WEBPACK_IMPORTED_MODULE_1__["default"]),
                login: uid => this.login(uid)
              };

              if (autoTrack.appLaunch) {
                options.onLaunch = (0, _hooks__WEBPACK_IMPORTED_MODULE_0__.appLaunch)(options.onLaunch);
              }

              if (autoTrack.appShow) {
                options.onShow = (0, _hooks__WEBPACK_IMPORTED_MODULE_0__.appShow)(options.onShow);
              }

              if (autoTrack.appHide) {
                options.onHide = (0, _hooks__WEBPACK_IMPORTED_MODULE_0__.appHide)(options.onHide);
              }

              return options;
            }

            _proxyPageOptions(options) {
              const autoTrack = _store__WEBPACK_IMPORTED_MODULE_2__["default"].get("config").autoTrack;

              if (autoTrack.pageShow) {
                options.onShow = (0, _hooks__WEBPACK_IMPORTED_MODULE_0__.pageShow)(options.onShow);
              }

              if (autoTrack.pageLeave) {
                options.onHide = (0, _hooks__WEBPACK_IMPORTED_MODULE_0__.pageHide)(options.onHide);
                options.onUnload = (0, _hooks__WEBPACK_IMPORTED_MODULE_0__.pageUnLoad)(options.onUnLoad);
              }

              if (autoTrack.pageShare) {
                options.onShareAppMessage = (0, _hooks__WEBPACK_IMPORTED_MODULE_0__.pageShare)(options.onShareAppMessage);
              }

              if (autoTrack.pageClickEvent) {
                if (_store__WEBPACK_IMPORTED_MODULE_2__["default"].get("config").octopus) {
                  options.eh = (0, _hooks__WEBPACK_IMPORTED_MODULE_0__.pageClickEvent)(options.eh);
                } else {
                  for (let prop in options) {
                    if (typeof options[prop] === "function" && !PAGE_LIFE_METHOD.includes(prop)) {
                      options[prop] = (0, _hooks__WEBPACK_IMPORTED_MODULE_0__.pageClickEvent)(options[prop]);
                    }
                  }
                }
              }

              return options;
            }

            login(uid) {
              _utils__WEBPACK_IMPORTED_MODULE_3__.storage.set("uid", uid);
            }

            _trackInit() {
              (0, _utils__WEBPACK_IMPORTED_MODULE_3__.getSystemInfo)(data => {
                _store__WEBPACK_IMPORTED_MODULE_2__["default"].set("systemInfo", data);
              });
              (0, _utils__WEBPACK_IMPORTED_MODULE_3__.getNetworkType)(data => {
                _store__WEBPACK_IMPORTED_MODULE_2__["default"].set("networkType", data);
              });
            }

          }
          /* harmony default export */


          const __WEBPACK_DEFAULT_EXPORT__ = new Tracker();
          /***/

        },

        /***/
        "./utils/index.js":
        /*!************************!*\
          !*** ./utils/index.js ***!
          \************************/

        /***/
        (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
          "use strict";

          __webpack_require__.r(__webpack_exports__);
          /* harmony export */


          __webpack_require__.d(__webpack_exports__, {
            /* harmony export */
            "getSystemInfo": () =>
            /* reexport safe */
            _info__WEBPACK_IMPORTED_MODULE_0__.getSystemInfo,

            /* harmony export */
            "getUUID": () =>
            /* reexport safe */
            _info__WEBPACK_IMPORTED_MODULE_0__.getUUID,

            /* harmony export */
            "getNetworkType": () =>
            /* reexport safe */
            _info__WEBPACK_IMPORTED_MODULE_0__.getNetworkType,

            /* harmony export */
            "storage": () =>
            /* reexport safe */
            _storage__WEBPACK_IMPORTED_MODULE_1__.storage,

            /* harmony export */
            "getPageTitle": () =>
            /* reexport safe */
            _pageTitle__WEBPACK_IMPORTED_MODULE_2__.getPageTitle,

            /* harmony export */
            "configMerge": () =>
            /* binding */
            configMerge
            /* harmony export */

          });
          /* harmony import */


          var _info__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./info */
          "./utils/info.js");
          /* harmony import */


          var _storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ./storage */
          "./utils/storage.js");
          /* harmony import */


          var _pageTitle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ./pageTitle */
          "./utils/pageTitle.js");

          const configMerge = (origin, target) => {
            for (let key in target) {
              if (typeof target[key] !== "object") {
                origin[key] = target[key];
              } else {
                configMerge(origin[key], target[key]);
              }
            }
          };
          /***/

        },

        /***/
        "./utils/info.js":
        /*!***********************!*\
          !*** ./utils/info.js ***!
          \***********************/

        /***/
        (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
          "use strict";

          __webpack_require__.r(__webpack_exports__);
          /* harmony export */


          __webpack_require__.d(__webpack_exports__, {
            /* harmony export */
            "getUUID": () =>
            /* binding */
            getUUID,

            /* harmony export */
            "getNetworkType": () =>
            /* binding */
            getNetworkType,

            /* harmony export */
            "getSystemInfo": () =>
            /* binding */
            getSystemInfo
            /* harmony export */

          });
          /* harmony import */


          var _src_platform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ../src/platform */
          "./src/platform/index.wx.js");

          const getUUID = function () {
            return "" + Date.now() + "_" + Math.floor(1e7 * Math.random()) + "_" + Math.random().toString(16).replace(".", "") + "_" + String(Math.random() * 31242).replace(".", "").slice(0, 8);
          };

          const getNetworkType = cb => {
            _src_platform__WEBPACK_IMPORTED_MODULE_0__["default"].getNetworkType({
              success(res) {
                if (res) {
                  cb && cb(res.networkType.toUpperCase());
                }
              }

            });
          };

          function getSystemInfo(callback) {
            let _data = {};

            _src_platform__WEBPACK_IMPORTED_MODULE_0__["default"].getSystemInfo({
              success(res) {
                const system = res.system.split(" ");

                if (res) {
                  _data.osn = system[0];
                  _data.osv = system[1];
                  _data.br = res.brand;
                  _data.md = res.model;
                  _data.SDKVersion = res.SDKVersion;
                  _data.sr = `${res.screenWidth}x${res.screenHeight}`;
                }
              },

              complete() {
                callback && callback(_data);
              }

            });
          }
          /***/

        },

        /***/
        "./utils/pageTitle.js":
        /*!****************************!*\
          !*** ./utils/pageTitle.js ***!
          \****************************/

        /***/
        (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
          "use strict";

          __webpack_require__.r(__webpack_exports__);
          /* harmony export */


          __webpack_require__.d(__webpack_exports__, {
            /* harmony export */
            "getPageTitle": () =>
            /* binding */
            getPageTitle
            /* harmony export */

          });

          function getPageTitle(route) {
            route = route + ".html";

            try {
              if (__wxConfig) {
                const routeConfigList = __wxConfig.page || {};
                const current_page_config = routeConfigList[route].window;
                return current_page_config.navigationBarTitleText;
              }
            } catch (err) {}
          }
          /***/

        },

        /***/
        "./utils/storage.js":
        /*!**************************!*\
          !*** ./utils/storage.js ***!
          \**************************/

        /***/
        (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
          "use strict";

          __webpack_require__.r(__webpack_exports__);
          /* harmony export */


          __webpack_require__.d(__webpack_exports__, {
            /* harmony export */
            "storage": () =>
            /* binding */
            storage
            /* harmony export */

          });
          /* harmony import */


          var _src_platform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ../src/platform */
          "./src/platform/index.wx.js");

          const prefix = "terminus-track-";
          const storage = {
            set: (key, data) => {
              key = prefix + key;

              _src_platform__WEBPACK_IMPORTED_MODULE_0__["default"].storage.set(key, data);
            },
            get: key => {
              key = prefix + key;
              return _src_platform__WEBPACK_IMPORTED_MODULE_0__["default"].storage.get(key);
            },
            remove: key => {
              key = prefix + key;

              _src_platform__WEBPACK_IMPORTED_MODULE_0__["default"].storage.remove(key);
            }
          };
          /***/
        },

        /***/
        "?4f7e":
        /*!********************************!*\
          !*** ./util.inspect (ignored) ***!
          \********************************/

        /***/
        () => {
          /* (ignored) */

          /***/
        }
        /******/

      };
      /************************************************************************/

      /******/
      // The module cache

      /******/

      var __webpack_module_cache__ = {};
      /******/

      /******/
      // The require function

      /******/

      function __webpack_require__(moduleId) {
        /******/
        // Check if module is in cache

        /******/
        var cachedModule = __webpack_module_cache__[moduleId];
        /******/

        if (cachedModule !== undefined) {
          /******/
          return cachedModule.exports;
          /******/
        }
        /******/
        // Create a new module (and put it into the cache)

        /******/


        var module = __webpack_module_cache__[moduleId] = {
          /******/
          // no module.id needed

          /******/
          // no module.loaded needed

          /******/
          exports: {}
          /******/

        };
        /******/

        /******/
        // Execute the module function

        /******/

        __webpack_modules__[moduleId](module, module.exports, __webpack_require__);
        /******/

        /******/
        // Return the exports of the module

        /******/


        return module.exports;
        /******/
      }
      /******/

      /************************************************************************/

      /******/

      /* webpack/runtime/compat get default export */

      /******/


      (() => {
        /******/
        // getDefaultExport function for compatibility with non-harmony modules

        /******/
        __webpack_require__.n = module => {
          /******/
          var getter = module && module.__esModule ?
          /******/
          () => module['default'] :
          /******/
          () => module;
          /******/

          __webpack_require__.d(getter, {
            a: getter
          });
          /******/


          return getter;
          /******/
        };
        /******/

      })();
      /******/

      /******/

      /* webpack/runtime/define property getters */

      /******/


      (() => {
        /******/
        // define getter functions for harmony exports

        /******/
        __webpack_require__.d = (exports, definition) => {
          /******/
          for (var key in definition) {
            /******/
            if (__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
              /******/
              Object.defineProperty(exports, key, {
                enumerable: true,
                get: definition[key]
              });
              /******/
            }
            /******/

          }
          /******/

        };
        /******/

      })();
      /******/

      /******/

      /* webpack/runtime/hasOwnProperty shorthand */

      /******/


      (() => {
        /******/
        __webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop);
        /******/

      })();
      /******/

      /******/

      /* webpack/runtime/make namespace object */

      /******/


      (() => {
        /******/
        // define __esModule on exports

        /******/
        __webpack_require__.r = exports => {
          /******/
          if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
            /******/
            Object.defineProperty(exports, Symbol.toStringTag, {
              value: 'Module'
            });
            /******/
          }
          /******/


          Object.defineProperty(exports, '__esModule', {
            value: true
          });
          /******/
        };
        /******/

      })();
      /******/

      /************************************************************************/


      var __webpack_exports__ = {}; // This entry need to be wrapped in an IIFE because it need to be in strict mode.

      (() => {
        "use strict";
        /*!**********************!*\
          !*** ./src/index.js ***!
          \**********************/

        __webpack_require__.r(__webpack_exports__);
        /* harmony export */


        __webpack_require__.d(__webpack_exports__, {
          /* harmony export */
          "$ta": () =>
          /* binding */
          $ta,

          /* harmony export */
          "default": () => __WEBPACK_DEFAULT_EXPORT__
          /* harmony export */

        });
        /* harmony import */


        var _tracker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        /*! ./tracker */
        "./src/tracker/index.js");
        /* harmony import */


        var _reporter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
        /*! ./reporter */
        "./src/reporter/index.js");

        const $ta = {
          track: _reporter__WEBPACK_IMPORTED_MODULE_1__["default"].track.bind(_reporter__WEBPACK_IMPORTED_MODULE_1__["default"])
        };
        /* harmony default export */

        const __WEBPACK_DEFAULT_EXPORT__ = _tracker__WEBPACK_IMPORTED_MODULE_0__["default"];
      })();
      /******/


      return __webpack_exports__;
      /******/
    })()
  );
});