System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, NetProtocolPako, _crd, unzip, zip;

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

  _export("NetProtocolPako", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "88ae0lIg5BFWb1O1E8/Etwi", "NetProtocolPako", undefined);
      /*
       * @Author: dgflash
       * @Date: 2022-04-21 13:45:51
       * @LastEditors: dgflash
       * @LastEditTime: 2022-04-21 13:51:33
       */


      unzip = function unzip(str) {
        var charData = str.split('').map(function (x) {
          return x.charCodeAt(0);
        });
        var binData = new Uint8Array(charData); //@ts-ignore

        var data = pako.inflate(binData, {
          to: 'string'
        });
        return data;
      };

      zip = function zip(str) {
        //@ts-ignore
        var binaryString = pako.gzip(str, {
          to: 'string'
        });
        return binaryString;
      };
      /** Pako.js 数据压缩协议 */


      _export("NetProtocolPako", NetProtocolPako = class NetProtocolPako {
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
            if (respProtocol.isCompress) {
              respProtocol.data = unzip(respProtocol.data);
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

          if (reqProtocol.isCompress) {
            reqProtocol.data = zip(reqProtocol.data);
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
//# sourceMappingURL=ee785db7822255f07a6ae75b56eebb2fd97eefe2.js.map