System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _crd, EventMessage;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "beea7u9xnJD4rMj6ua/LTcF", "EventMessage", undefined);
      /*
       * @Author: dgflash
       * @Date: 2021-07-03 16:13:17
       * @LastEditors: dgflash
       * @LastEditTime: 2022-09-02 11:03:08
       */

      /**
       * 全局事件监听方法
       * @param event      事件名
       * @param args       事件参数
       */


      /** 框架内部全局事件  */
      _export("EventMessage", EventMessage = /*#__PURE__*/function (EventMessage) {
        EventMessage["GAME_ENTER"] = "EventMessage.GAME_ENTER";
        EventMessage["GAME_EXIT"] = "EventMessage.GAME_EXIT";
        EventMessage["GAME_RESIZE"] = "EventMessage.GAME_RESIZE";
        return EventMessage;
      }({}));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=3456032dfcd37e7321b2a3f25374f5be55e3c4d5.js.map