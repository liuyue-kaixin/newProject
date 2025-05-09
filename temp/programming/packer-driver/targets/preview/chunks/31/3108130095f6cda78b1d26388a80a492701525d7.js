System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, Logger, WebSock, _crd;

  function _reportPossibleCrUseOfLogger(extras) {
    _reporterNs.report("Logger", "../../core/common/log/Logger", _context.meta, extras);
  }

  function _reportPossibleCrUseOfISocket(extras) {
    _reporterNs.report("ISocket", "./NetInterface", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMessageFunc(extras) {
    _reporterNs.report("MessageFunc", "./NetInterface", _context.meta, extras);
  }

  function _reportPossibleCrUseOfNetData(extras) {
    _reporterNs.report("NetData", "./NetInterface", _context.meta, extras);
  }

  _export("WebSock", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      Logger = _unresolved_2.Logger;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "70df2VbIU9B66Fr+op8FKJp", "WebSock", undefined);
      /*
       * @Author: dgflash
       * @Date: 2021-07-03 16:13:17
       * @LastEditors: dgflash
       * @LastEditTime: 2022-09-09 17:42:19
       */


      /**
       * WebSocket 封装
       * 1. 连接/断开相关接口
       * 2. 网络异常回调
       * 3. 数据发送与接收
       */
      _export("WebSock", WebSock = class WebSock {
        constructor() {
          this._ws = null;
          // websocket对象

          /** 网络连接成功事件 */
          this.onConnected = null;

          /** 接受到网络数据事件 */
          this.onMessage = null;

          /** 网络错误事件 */
          this.onError = null;

          /** 网络断开事件 */
          this.onClosed = null;
        }

        /** 请求连接 */
        connect(options) {
          if (this._ws) {
            if (this._ws.readyState === WebSocket.CONNECTING) {
              (_crd && Logger === void 0 ? (_reportPossibleCrUseOfLogger({
                error: Error()
              }), Logger) : Logger).logNet("websocket connecting, wait for a moment...");
              return false;
            }
          }

          var url = null;

          if (options.url) {
            url = options.url;
          } else {
            var ip = options.ip;
            var port = options.port;
            var protocol = options.protocol;
            url = protocol + "://" + ip + ":" + port;
          }

          this._ws = new WebSocket(url);
          this._ws.binaryType = options.binaryType ? options.binaryType : "arraybuffer";

          this._ws.onmessage = event => {
            var onMessage = this.onMessage;
            onMessage(event.data);
          };

          this._ws.onopen = this.onConnected;
          this._ws.onerror = this.onError;
          this._ws.onclose = this.onClosed;
          return true;
        }
        /**
         * 发送数据 
         * @param buffer 网络数据
         */


        send(buffer) {
          if (this._ws && this._ws.readyState == WebSocket.OPEN) {
            this._ws.send(buffer);

            return 1;
          }

          return -1;
        }
        /**
         * 网络断开
         * @param code      关闭码
         * @param reason    关闭原因
         */


        close(code, reason) {
          if (this._ws) {
            this._ws.close(code, reason);
          }
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=3108130095f6cda78b1d26388a80a492701525d7.js.map