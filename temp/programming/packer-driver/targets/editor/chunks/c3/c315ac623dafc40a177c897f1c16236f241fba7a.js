System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _crd, GameEvent;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "28ac0rWU79HGpJWrnyK01Gn", "GameEvent", undefined);

      /*
       * @Author: dgflash
       * @Date: 2021-11-23 15:28:39
       * @LastEditors: dgflash
       * @LastEditTime: 2022-01-26 16:42:00
       */

      /** 游戏事件 */
      _export("GameEvent", GameEvent = /*#__PURE__*/function (GameEvent) {
        GameEvent["GameServerConnected"] = "GameServerConnected";
        GameEvent["LoginSuccess"] = "LoginSuccess";
        return GameEvent;
      }({}));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=c315ac623dafc40a177c897f1c16236f241fba7a.js.map