System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, Config, _crd;

  function _reportPossibleCrUseOfBuildTimeConstants(extras) {
    _reporterNs.report("BuildTimeConstants", "./BuildTimeConstants", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameConfig(extras) {
    _reporterNs.report("GameConfig", "./GameConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameQueryConfig(extras) {
    _reporterNs.report("GameQueryConfig", "./GameQueryConfig", _context.meta, extras);
  }

  _export("Config", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "5034dEezo5Frr6dhZGVgmTh", "Config", undefined);
      /*
       * @Author: dgflash
       * @Date: 2021-07-03 16:13:17
       * @LastEditors: dgflash
       * @LastEditTime: 2022-11-01 15:47:16
       */


      /** 游戏配置静态访问类 */
      _export("Config", Config = class Config {
        constructor() {
          /** 环境常量 */
          this.btc = void 0;

          /** 游戏配置数据，版本号、支持语种等数据 */
          this.game = void 0;

          /** 浏览器查询参数 */
          this.query = void 0;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=b215f843c95fdd11d7291d3daf060d91f9419aef.js.map