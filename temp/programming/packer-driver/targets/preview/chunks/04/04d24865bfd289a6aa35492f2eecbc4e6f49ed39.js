System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, JsonAsset, oops, JsonUtil, _crd, path, data;

  function _reportPossibleCrUseOfoops(extras) {
    _reporterNs.report("oops", "../Oops", _context.meta, extras);
  }

  _export("JsonUtil", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      JsonAsset = _cc.JsonAsset;
    }, function (_unresolved_2) {
      oops = _unresolved_2.oops;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "1a24ank4nRC46jfzaIfOmtQ", "JsonUtil", undefined);
      /*
       * @Author: dgflash
       * @Date: 2021-08-18 17:00:59
       * @LastEditors: dgflash
       * @LastEditTime: 2023-08-22 15:48:02
       */


      __checkObsolete__(['JsonAsset']);

      /** 资源路径 */
      path = "config/game/";
      /** 数据缓存 */

      data = new Map();
      /** JSON数据表工具 */

      _export("JsonUtil", JsonUtil = class JsonUtil {
        /**
         * 通知资源名从缓存中获取一个Json数据表
         * @param name  资源名
         */
        static get(name) {
          if (data.has(name)) return data.get(name);
        }
        /**
         * 通知资源名加载Json数据表
         * @param name      资源名
         * @param callback  资源加载完成回调
         */


        static load(name, callback) {
          if (data.has(name)) callback(data.get(name));else {
            var url = path + name;
            (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
              error: Error()
            }), oops) : oops).res.load(url, JsonAsset, (err, content) => {
              if (err) {
                console.warn(err.message);
                callback(null);
              } else {
                data.set(name, content.json);
                callback(content.json);
              }
            });
          }
        }
        /**
         * 异步加载Json数据表
         * @param name 资源名
         */


        static loadAsync(name) {
          return new Promise((resolve, reject) => {
            if (data.has(name)) {
              resolve(data.get(name));
            } else {
              var url = path + name;
              (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
                error: Error()
              }), oops) : oops).res.load(url, JsonAsset, (err, content) => {
                if (err) {
                  console.warn(err.message);
                  resolve(null);
                } else {
                  data.set(name, content.json);
                  resolve(content.json);
                }
              });
            }
          });
        }
        /**
         * 通过指定资源名释放资源
         * @param name 资源名
         */


        static release(name) {
          var url = path + name;
          data.delete(name);
          (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
            error: Error()
          }), oops) : oops).res.release(url);
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=04d24865bfd289a6aa35492f2eecbc4e6f49ed39.js.map