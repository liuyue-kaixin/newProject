System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, NetManager, _crd;

  function _reportPossibleCrUseOfCallbackObject(extras) {
    _reporterNs.report("CallbackObject", "./NetInterface", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIRequestProtocol(extras) {
    _reporterNs.report("IRequestProtocol", "./NetInterface", _context.meta, extras);
  }

  function _reportPossibleCrUseOfNetData(extras) {
    _reporterNs.report("NetData", "./NetInterface", _context.meta, extras);
  }

  function _reportPossibleCrUseOfNetConnectOptions(extras) {
    _reporterNs.report("NetConnectOptions", "./NetNode", _context.meta, extras);
  }

  function _reportPossibleCrUseOfNetNode(extras) {
    _reporterNs.report("NetNode", "./NetNode", _context.meta, extras);
  }

  _export("NetManager", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "d8cd5el6GBGTYTW+N8b8EuJ", "NetManager", undefined);
      /*
       * @Author: dgflash
       * @Date: 2022-09-01 18:00:28
       * @LastEditors: dgflash
       * @LastEditTime: 2022-09-09 18:10:50
       */


      /*
       * 网络节点管理类
       */
      _export("NetManager", NetManager = class NetManager {
        constructor() {
          this._channels = {};
        }

        /** 网络管理单例对象 */
        static getInstance() {
          if (!this._instance) {
            this._instance = new NetManager();
          }

          return this._instance;
        }
        /**
         * 添加网络节点
         * @param node       网络节点
         * @param channelId  通道编号
         * @example
        // 游戏服务器心跳协议
        class GameProtocol extends NetProtocolPako { 
            // 自定义心跳协议
            getHearbeat(): NetData { 
                return '{"action":"LoginAction","method":"heart","data":"null","callback":"LoginAction_heart"}';
            }
        }
            
        var net = new NetNodeGame();
        var ws = new WebSock();        // WebSocket 网络连接对象
        var gp = new GameProtocol();   // 网络通讯协议对象
        var gt = new NetGameTips()     // 网络提示对象
        net.init(ws, gp, gt);
        NetManager.getInstance().setNetNode(net, NetChannelType.Game);
         */


        setNetNode(node, channelId = 0) {
          this._channels[channelId] = node;
        }
        /** 移除Node */


        removeNetNode(channelId) {
          delete this._channels[channelId];
        }
        /**
         * 网络节点连接服务器
         * @param options      连接参数
         * @param channelId    通道编号
         * @example
        var options = {
            url: 'ws://127.0.0.1:3000',
            autoReconnect: 0            // -1 永久重连，0不自动重连，其他正整数为自动重试次数
        }
        NetManager.getInstance().connect(options, NetChannelType.Game);
         */


        connect(options, channelId = 0) {
          if (this._channels[channelId]) {
            return this._channels[channelId].connect(options);
          }

          return false;
        }
        /** 节点连接发送数据*/


        send(buf, force = false, channelId = 0) {
          let node = this._channels[channelId];

          if (node) {
            return node.send(buf, force);
          }

          return -1;
        }
        /**
         * 发起请求，并在在结果返回时调用指定好的回调函数
         * @param reqProtocol 请求协议
         * @param rspObject   回调对象
         * @param showTips    是否触发请求提示
         * @param force       是否强制发送
         * @param channelId   通道编号
         * @example
        let protocol: IRequestProtocol = {
            action: action,
            method: method,
            data: JSON.stringify(data),
            isCompress: this.isCompress,
            channelid: netConfig.channelid
        }
        return this.request(protocol, rspObject, showTips, force);
         */


        request(reqProtocol, rspObject, showTips = true, force = false, channelId = 0) {
          let node = this._channels[channelId];

          if (node) {
            node.request(reqProtocol, rspObject, showTips, force);
          }
        }
        /**
         * 同request功能一致，但在request之前会先判断队列中是否已有rspCmd，如有重复的则直接返回
         * @param reqProtocol 请求协议
         * @param rspObject   回调对象
         * @param showTips    是否触发请求提示
         * @param force       是否强制发送
         * @param channelId   通道编号
         * @example
        let protocol: IRequestProtocol = {
            action: action,
            method: method,
            data: JSON.stringify(data),
            isCompress: this.isCompress,
            channelid: netConfig.channelid
        }
        return this.request(protocol, rspObject, showTips, force);
         */


        requestUnique(reqProtocol, rspObject, showTips = true, force = false, channelId = 0) {
          let node = this._channels[channelId];

          if (node) {
            return node.requestUnique(reqProtocol, rspObject, showTips, force);
          }

          return false;
        }
        /**
         * 节点网络断开
         * @param code        关闭码
         * @param reason      关闭原因
         * @param channelId   通道编号
         * @example 
         * NetManager.getInstance().close(undefined, undefined, NetChannelType.Game);
         */


        close(code, reason, channelId = 0) {
          if (this._channels[channelId]) {
            return this._channels[channelId].closeSocket(code, reason);
          }
        }

      });

      NetManager._instance = void 0;

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=e7fd4ca4f89d4464d7becf52cc9865ddd4089062.js.map