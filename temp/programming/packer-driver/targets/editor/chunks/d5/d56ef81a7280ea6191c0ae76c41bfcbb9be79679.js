System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, NetProtocolProtobuf, _crd;

  function _reportPossibleCrUseOfIProtocolHelper(extras) {
    _reporterNs.report("IProtocolHelper", "./NetInterface", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIRequestProtocol(extras) {
    _reporterNs.report("IRequestProtocol", "./NetInterface", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIResponseProtocol(extras) {
    _reporterNs.report("IResponseProtocol", "./NetInterface", _context.meta, extras);
  }

  function _reportPossibleCrUseOfNetData(extras) {
    _reporterNs.report("NetData", "./NetInterface", _context.meta, extras);
  }

  _export("NetProtocolProtobuf", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "5714auyGttOSrOXeVsvIAUz", "NetProtocolProtobuf", undefined);
      /*
       * @Author: dgflash
       * @Date: 2022-04-21 13:48:44
       * @LastEditors: dgflash
       * @LastEditTime: 2022-04-21 14:11:25
       */


      /** Protobuf.js 数据压缩协议 */
      _export("NetProtocolProtobuf", NetProtocolProtobuf = class NetProtocolProtobuf {
        getHeadlen() {
          return 0;
        }

        getHearbeat() {
          return "";
        }

        getPackageLen(msg) {
          return msg.toString().length;
        }

        checkResponsePackage(respProtocol) {
          return true;
        }

        handlerResponsePackage(respProtocol) {
          if (respProtocol.code == 1) {
            if (respProtocol.isCompress) {// respProtocol.data
              // const p = Person.decode(msg);
            }

            respProtocol.data = JSON.parse(respProtocol.data);
            return true;
          } else {
            return false;
          }
        }

        handlerRequestPackage(reqProtocol) {
          var rspCmd = reqProtocol.cmd;
          reqProtocol.callback = rspCmd;

          if (reqProtocol.isCompress) {// reqProtocol.data
            // const msg = Person.encode({ name: "dgflash", id: 1 }).finish();
          }

          return rspCmd;
        }

        getPackageId(respProtocol) {
          return respProtocol.callback;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=d56ef81a7280ea6191c0ae76c41bfcbb9be79679.js.map