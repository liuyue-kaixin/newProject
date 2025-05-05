System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, AnimatorStateLogic, _crd;

  _export("AnimatorStateLogic", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "b06fbd3UdNKvooAUeDi9UTc", "AnimatorStateLogic", undefined);

      /**
       * 状态逻辑基类
       */
      _export("AnimatorStateLogic", AnimatorStateLogic = class AnimatorStateLogic {
        /**
         * 进入状态时调用
         * @virtual
         */
        onEntry() {}
        /**
         * 每次状态机逻辑更新时调用
         * @virtual
         */


        onUpdate() {}
        /**
         * 离开状态时调用
         * @virtual
         */


        onExit() {}

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=f50dae2a3af20fdfba338c0acfe5ee45268807f5.js.map