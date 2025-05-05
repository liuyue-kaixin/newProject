System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, error, warn, Logger, NetNode, _crd, NetNodeStateStrs, NetTipsType, NetNodeState;

  function _reportPossibleCrUseOfLogger(extras) {
    _reporterNs.report("Logger", "../../core/common/log/Logger", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCallbackObject(extras) {
    _reporterNs.report("CallbackObject", "./NetInterface", _context.meta, extras);
  }

  function _reportPossibleCrUseOfINetworkTips(extras) {
    _reporterNs.report("INetworkTips", "./NetInterface", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIProtocolHelper(extras) {
    _reporterNs.report("IProtocolHelper", "./NetInterface", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIRequestProtocol(extras) {
    _reporterNs.report("IRequestProtocol", "./NetInterface", _context.meta, extras);
  }

  function _reportPossibleCrUseOfISocket(extras) {
    _reporterNs.report("ISocket", "./NetInterface", _context.meta, extras);
  }

  function _reportPossibleCrUseOfNetCallFunc(extras) {
    _reporterNs.report("NetCallFunc", "./NetInterface", _context.meta, extras);
  }

  function _reportPossibleCrUseOfNetData(extras) {
    _reporterNs.report("NetData", "./NetInterface", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRequestObject(extras) {
    _reporterNs.report("RequestObject", "./NetInterface", _context.meta, extras);
  }

  _export("NetNode", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      error = _cc.error;
      warn = _cc.warn;
    }, function (_unresolved_2) {
      Logger = _unresolved_2.Logger;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "57f0fB90kNBUJ98yyu+jxjx", "NetNode", undefined);

      __checkObsolete__(['error', 'warn']);

      /*
      *   CocosCreator网络节点基类，以及网络相关接口定义
      *   1. 网络连接、断开、请求发送、数据接收等基础功能
      *   2. 心跳机制
      *   3. 断线重连 + 请求重发
      *   4. 调用网络屏蔽层
      */
      NetNodeStateStrs = ["已关闭", "连接中", "验证中", "可传输数据"];
      /** 网络提示类型枚举 */

      _export("NetTipsType", NetTipsType = /*#__PURE__*/function (NetTipsType) {
        NetTipsType[NetTipsType["Connecting"] = 0] = "Connecting";
        NetTipsType[NetTipsType["ReConnecting"] = 1] = "ReConnecting";
        NetTipsType[NetTipsType["Requesting"] = 2] = "Requesting";
        return NetTipsType;
      }({}));
      /** 网络状态枚举 */


      _export("NetNodeState", NetNodeState = /*#__PURE__*/function (NetNodeState) {
        NetNodeState[NetNodeState["Closed"] = 0] = "Closed";
        NetNodeState[NetNodeState["Connecting"] = 1] = "Connecting";
        NetNodeState[NetNodeState["Checking"] = 2] = "Checking";
        NetNodeState[NetNodeState["Working"] = 3] = "Working";
        return NetNodeState;
      }({}));
      /** 网络连接参数 */


      /** 网络节点 */
      _export("NetNode", NetNode = class NetNode {
        constructor() {
          this._connectOptions = null;
          this._autoReconnect = 0;
          this._isSocketInit = false;
          // Socket是否初始化过
          this._isSocketOpen = false;
          // Socket是否连接成功过
          this._state = NetNodeState.Closed;
          // 节点当前状态
          this._socket = null;
          // Socket对象（可能是原生socket、websocket、wx.socket...)
          this._networkTips = null;
          // 网络提示ui对象（请求提示、断线重连提示等）
          this._protocolHelper = null;
          // 包解析对象
          this._connectedCallback = null;
          // 连接完成回调
          this._disconnectCallback = null;
          // 断线回调
          this._callbackExecuter = null;
          // 回调执行
          this._keepAliveTimer = null;
          // 心跳定时器
          this._receiveMsgTimer = null;
          // 接收数据定时器
          this._reconnectTimer = null;
          // 重连定时器
          this._heartTime = 10000;
          // 心跳间隔
          this._receiveTime = 6000000;
          // 多久没收到数据断开
          this._reconnetTimeOut = 8000000;
          // 重连间隔
          this._requests = Array();
          // 请求列表
          this._listener = {};
        }

        // 监听者列表

        /********************** 网络相关处理 *********************/
        init(socket, protocol, networkTips = null, execFunc = null) {
          (_crd && Logger === void 0 ? (_reportPossibleCrUseOfLogger({
            error: Error()
          }), Logger) : Logger).logNet(`网络初始化`);
          this._socket = socket;
          this._protocolHelper = protocol;
          this._networkTips = networkTips;
          this._callbackExecuter = execFunc ? execFunc : (callback, buffer) => {
            callback.callback.call(callback.target, buffer);
          };
        }
        /**
         * 请求连接服务器
         * @param options 连接参数
         */


        connect(options) {
          if (this._socket && this._state == NetNodeState.Closed) {
            if (!this._isSocketInit) {
              this.initSocket();
            }

            this._state = NetNodeState.Connecting;

            if (!this._socket.connect(options)) {
              this.updateNetTips(NetTipsType.Connecting, false);
              return false;
            }

            if (this._connectOptions == null && typeof options.autoReconnect == "number") {
              this._autoReconnect = options.autoReconnect;
            }

            this._connectOptions = options;
            this.updateNetTips(NetTipsType.Connecting, true);
            return true;
          }

          return false;
        }

        initSocket() {
          if (this._socket) {
            this._socket.onConnected = event => {
              this.onConnected(event);
            };

            this._socket.onMessage = msg => {
              this.onMessage(msg);
            };

            this._socket.onError = event => {
              this.onError(event);
            };

            this._socket.onClosed = event => {
              this.onClosed(event);
            };

            this._isSocketInit = true;
          }
        }

        updateNetTips(tipsType, isShow) {
          if (this._networkTips) {
            if (tipsType == NetTipsType.Requesting) {
              this._networkTips.requestTips(isShow);
            } else if (tipsType == NetTipsType.Connecting) {
              this._networkTips.connectTips(isShow);
            } else if (tipsType == NetTipsType.ReConnecting) {
              this._networkTips.reconnectTips(isShow);
            }
          }
        }
        /** 网络连接成功 */


        onConnected(event) {
          (_crd && Logger === void 0 ? (_reportPossibleCrUseOfLogger({
            error: Error()
          }), Logger) : Logger).logNet("网络已连接");
          this._isSocketOpen = true; // 如果设置了鉴权回调，在连接完成后进入鉴权阶段，等待鉴权结束

          if (this._connectedCallback !== null) {
            this._state = NetNodeState.Checking;

            this._connectedCallback(() => {
              this.onChecked();
            });
          } else {
            this.onChecked();
          }

          (_crd && Logger === void 0 ? (_reportPossibleCrUseOfLogger({
            error: Error()
          }), Logger) : Logger).logNet(`网络已连接当前状态为【${NetNodeStateStrs[this._state]}】`);
        }
        /** 连接验证成功，进入工作状态 */


        onChecked() {
          (_crd && Logger === void 0 ? (_reportPossibleCrUseOfLogger({
            error: Error()
          }), Logger) : Logger).logNet("连接验证成功，进入工作状态");
          this._state = NetNodeState.Working; // 关闭连接或重连中的状态显示

          this.updateNetTips(NetTipsType.Connecting, false);
          this.updateNetTips(NetTipsType.ReConnecting, false); // 重发待发送信息

          var requests = this._requests.concat();

          if (requests.length > 0) {
            (_crd && Logger === void 0 ? (_reportPossibleCrUseOfLogger({
              error: Error()
            }), Logger) : Logger).logNet(`请求【${this._requests.length}】个待发送的信息`);

            for (var i = 0; i < requests.length;) {
              let req = requests[i];

              this._socket.send(req.buffer);

              if (req.rspObject == null || req.rspCmd != "") {
                requests.splice(i, 1);
              } else {
                ++i;
              }
            } // 如果还有等待返回的请求，启动网络请求层


            this.updateNetTips(NetTipsType.Requesting, this._requests.length > 0);
          }
        }
        /** 接收到一个完整的消息包 */


        onMessage(msg) {
          // Logger.logNet(`接受消息状态为【${NetNodeStateStrs[this._state]}】`);
          var json = JSON.parse(msg); // 进行头部的校验（实际包长与头部长度是否匹配）

          if (!this._protocolHelper.checkResponsePackage(json)) {
            error(`校验接受消息数据异常`);
            return;
          } // 处理相应包数据


          if (!this._protocolHelper.handlerResponsePackage(json)) {
            if (this._networkTips) this._networkTips.responseErrorCode(json.code);
          } // 接受到数据，重新定时收数据计时器


          this.resetReceiveMsgTimer(); // 重置心跳包发送器

          this.resetHearbeatTimer(); // 触发消息执行

          let rspCmd = this._protocolHelper.getPackageId(json);

          (_crd && Logger === void 0 ? (_reportPossibleCrUseOfLogger({
            error: Error()
          }), Logger) : Logger).logNet(`接受到命令【${rspCmd}】的消息`); // 优先触发request队列

          if (this._requests.length > 0) {
            for (let reqIdx in this._requests) {
              let req = this._requests[reqIdx];

              if (req.rspCmd == rspCmd && req.rspObject) {
                (_crd && Logger === void 0 ? (_reportPossibleCrUseOfLogger({
                  error: Error()
                }), Logger) : Logger).logNet(`触发请求命令【${rspCmd}】的回调`);

                this._callbackExecuter(req.rspObject, json.data);

                this._requests.splice(parseInt(reqIdx), 1);

                break;
              }
            }

            if (this._requests.length == 0) {
              this.updateNetTips(NetTipsType.Requesting, false);
            } else {
              (_crd && Logger === void 0 ? (_reportPossibleCrUseOfLogger({
                error: Error()
              }), Logger) : Logger).logNet(`请求队列中还有【${this._requests.length}】个请求在等待`);
            }
          }

          let listeners = this._listener[rspCmd];

          if (null != listeners) {
            for (const rsp of listeners) {
              (_crd && Logger === void 0 ? (_reportPossibleCrUseOfLogger({
                error: Error()
              }), Logger) : Logger).logNet(`触发监听命令【${rspCmd}】的回调`);

              this._callbackExecuter(rsp, json.data);
            }
          }
        }

        onError(event) {
          error(event);
        }

        onClosed(event) {
          this.clearTimer(); // 执行断线回调，返回false表示不进行重连

          if (this._disconnectCallback && !this._disconnectCallback()) {
            (_crd && Logger === void 0 ? (_reportPossibleCrUseOfLogger({
              error: Error()
            }), Logger) : Logger).logNet(`断开连接`);
            return;
          } // 自动重连


          if (this.isAutoReconnect()) {
            this.updateNetTips(NetTipsType.ReConnecting, true);
            this._reconnectTimer = setTimeout(() => {
              this._socket.close();

              this._state = NetNodeState.Closed;
              this.connect(this._connectOptions);

              if (this._autoReconnect > 0) {
                this._autoReconnect -= 1;
              }
            }, this._reconnetTimeOut);
          } else {
            this._state = NetNodeState.Closed;
          }
        }
        /**
         * 断开网络
         * @param code      关闭码
         * @param reason    关闭原因
         */


        close(code, reason) {
          this.clearTimer();
          this._listener = {};
          this._requests.length = 0;

          if (this._networkTips) {
            this._networkTips.connectTips(false);

            this._networkTips.reconnectTips(false);

            this._networkTips.requestTips(false);
          }

          if (this._socket) {
            this._socket.close(code, reason);
          } else {
            this._state = NetNodeState.Closed;
          }
        }
        /**
         * 只是关闭Socket套接字（仍然重用缓存与当前状态）
         * @param code      关闭码
         * @param reason    关闭原因
         */


        closeSocket(code, reason) {
          if (this._socket) {
            this._socket.close(code, reason);
          }
        }
        /**
         * 发起请求，如果当前处于重连中，进入缓存列表等待重连完成后发送
         * @param buf       网络数据
         * @param force     是否强制发送
         */


        send(buf, force = false) {
          if (this._state == NetNodeState.Working || force) {
            return this._socket.send(buf);
          } else if (this._state == NetNodeState.Checking || this._state == NetNodeState.Connecting) {
            this._requests.push({
              buffer: buf,
              rspCmd: "",
              rspObject: null
            });

            (_crd && Logger === void 0 ? (_reportPossibleCrUseOfLogger({
              error: Error()
            }), Logger) : Logger).logNet(`当前状态为【${NetNodeStateStrs[this._state]}】,繁忙并缓冲发送数据`);
            return 0;
          } else {
            error(`当前状态为【${NetNodeStateStrs[this._state]}】,请求错误`);
            return -1;
          }
        }
        /**
         * 发起请求，并进入缓存列表
         * @param reqProtocol 请求协议
         * @param rspObject   回调对象
         * @param showTips    是否触发请求提示
         * @param force       是否强制发送
         */


        request(reqProtocol, rspObject, showTips = true, force = false) {
          var rspCmd = this._protocolHelper.handlerRequestPackage(reqProtocol);

          this.base_request(reqProtocol, rspCmd, rspObject, showTips, force);
        }
        /**
         * 唯一request，确保没有同一响应的请求（避免一个请求重复发送，netTips界面的屏蔽也是一个好的方法）
         * @param reqProtocol 请求协议
         * @param rspObject   回调对象
         * @param showTips    是否触发请求提示
         * @param force       是否强制发送
         */


        requestUnique(reqProtocol, rspObject, showTips = true, force = false) {
          var rspCmd = this._protocolHelper.handlerRequestPackage(reqProtocol);

          for (let i = 0; i < this._requests.length; ++i) {
            if (this._requests[i].rspCmd == rspCmd) {
              (_crd && Logger === void 0 ? (_reportPossibleCrUseOfLogger({
                error: Error()
              }), Logger) : Logger).logNet(`命令【${rspCmd}】重复请求`);
              return false;
            }
          }

          this.base_request(reqProtocol, rspCmd, rspObject, showTips, force);
          return true;
        }

        base_request(reqProtocol, rspCmd, rspObject, showTips = true, force = false) {
          var buf = JSON.stringify(reqProtocol); // 转为二进制流发送

          if (this._state == NetNodeState.Working || force) {
            this._socket.send(buf);
          }

          (_crd && Logger === void 0 ? (_reportPossibleCrUseOfLogger({
            error: Error()
          }), Logger) : Logger).logNet(`队列命令为【${rspCmd}】的请求，等待请求数据的回调`); // 进入发送缓存列表

          this._requests.push({
            buffer: buf,
            rspCmd,
            rspObject
          }); // 启动网络请求层


          if (showTips) {
            this.updateNetTips(NetTipsType.Requesting, true);
          }
        }
        /********************** 回调相关处理 *********************/

        /**
         * 设置一个唯一的服务器推送监听
         * @param cmd       命令字串
         * @param callback  回调方法
         * @param target    目标对象
         */


        setResponeHandler(cmd, callback, target) {
          if (callback == null) {
            error(`命令为【${cmd}】设置响应处理程序错误`);
            return false;
          }

          this._listener[cmd] = [{
            target,
            callback
          }];
          return true;
        }
        /**
         * 可添加多个同类返回消息的监听
         * @param cmd       命令字串
         * @param callback  回调方法
         * @param target    目标对象
         * @returns 
         */


        addResponeHandler(cmd, callback, target) {
          if (callback == null) {
            error(`命令为【${cmd}】添加响应处理程序错误`);
            return false;
          }

          let rspObject = {
            target,
            callback
          };

          if (null == this._listener[cmd]) {
            this._listener[cmd] = [rspObject];
          } else {
            let index = this.getNetListenersIndex(cmd, rspObject);

            if (-1 == index) {
              this._listener[cmd].push(rspObject);
            }
          }

          return true;
        }
        /**
         * 删除一个监听中指定子回调
         * @param cmd       命令字串
         * @param callback  回调方法
         * @param target    目标对象
         */


        removeResponeHandler(cmd, callback, target) {
          if (null != this._listener[cmd] && callback != null) {
            let index = this.getNetListenersIndex(cmd, {
              target,
              callback
            });

            if (-1 != index) {
              this._listener[cmd].splice(index, 1);
            }
          }
        }
        /**
         * 清除所有监听或指定命令的监听
         * @param cmd  命令字串（默认不填为清除所有）
         */


        cleanListeners(cmd = "") {
          if (cmd == "") {
            this._listener = {};
          } else {
            delete this._listener[cmd];
          }
        }

        getNetListenersIndex(cmd, rspObject) {
          let index = -1;

          for (let i = 0; i < this._listener[cmd].length; i++) {
            let iterator = this._listener[cmd][i];

            if (iterator.callback == rspObject.callback && iterator.target == rspObject.target) {
              index = i;
              break;
            }
          }

          return index;
        }
        /********************** 心跳、超时相关处理 *********************/


        resetReceiveMsgTimer() {
          if (this._receiveMsgTimer !== null) {
            clearTimeout(this._receiveMsgTimer);
          }

          this._receiveMsgTimer = setTimeout(() => {
            warn("接收消息定时器关闭网络连接");

            this._socket.close();
          }, this._receiveTime);
        }

        resetHearbeatTimer() {
          if (this._keepAliveTimer !== null) {
            clearTimeout(this._keepAliveTimer);
          }

          this._keepAliveTimer = setTimeout(() => {
            (_crd && Logger === void 0 ? (_reportPossibleCrUseOfLogger({
              error: Error()
            }), Logger) : Logger).logNet("网络节点保持活跃发送心跳信息");
            this.send(this._protocolHelper.getHearbeat());
          }, this._heartTime);
        }

        clearTimer() {
          if (this._receiveMsgTimer !== null) {
            clearTimeout(this._receiveMsgTimer);
          }

          if (this._keepAliveTimer !== null) {
            clearTimeout(this._keepAliveTimer);
          }

          if (this._reconnectTimer !== null) {
            clearTimeout(this._reconnectTimer);
          }
        }
        /** 是否自动重连接 */


        isAutoReconnect() {
          return this._autoReconnect != 0;
        }
        /** 拒绝重新连接 */


        rejectReconnect() {
          this._autoReconnect = 0;
          this.clearTimer();
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=fb01ee12c8d2bcd582a6de7903fd4d01848bde89.js.map