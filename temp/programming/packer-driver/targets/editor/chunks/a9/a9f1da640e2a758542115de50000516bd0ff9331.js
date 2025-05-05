System.register(["cc", "cc/env"], function (_export, _context) {
  "use strict";

  var _cclegacy, EDITOR, VMEnv, _crd;

  _export("VMEnv", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_ccEnv) {
      EDITOR = _ccEnv.EDITOR;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "fdf72Q91PdCXpPQ+62s1ufi", "VMEnv", undefined);

      /** VM组件环境验证 */
      _export("VMEnv", VMEnv = class VMEnv {
        /** 编辑状态 */
        static get editor() {
          // @ts-ignore
          return EDITOR && !cc.GAME_VIEW;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=a9f1da640e2a758542115de50000516bd0ff9331.js.map