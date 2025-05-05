System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _crd, PhysicsGroup;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "128b89Yf+lIsYdf7X01SH1s", "ConstDefine", undefined);

      _export("PhysicsGroup", PhysicsGroup = /*#__PURE__*/function (PhysicsGroup) {
        PhysicsGroup[PhysicsGroup["DEFAULT"] = 1] = "DEFAULT";
        PhysicsGroup[PhysicsGroup["enemy"] = 8] = "enemy";
        PhysicsGroup[PhysicsGroup["player"] = 16] = "player";
        PhysicsGroup[PhysicsGroup["bullet"] = 32] = "bullet";
        PhysicsGroup[PhysicsGroup["goods"] = 64] = "goods";
        return PhysicsGroup;
      }({}));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=a179620fcdb242c842f524ce6d75b193b8ff193c.js.map