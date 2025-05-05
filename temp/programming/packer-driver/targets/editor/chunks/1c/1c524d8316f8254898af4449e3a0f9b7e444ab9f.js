System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Component, _decorator, _dec, _class, _crd, ccclass, property, GameMain;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Component = _cc.Component;
      _decorator = _cc._decorator;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "46770277MVCUJmttx/Kqt/a", "GameMain", undefined);
      /*
       * @Author: dgflash
       * @Date: 2021-07-03 16:13:17
       * @LastEditors: dgflash
       * @LastEditTime: 2023-08-28 17:23:59
       */


      __checkObsolete__(['Component', '_decorator']);

      ({
        ccclass,
        property
      } = _decorator); // 视图层实体是空的

      _export("GameMain", GameMain = (_dec = ccclass('GameMain'), _dec(_class = class GameMain extends Component {
        async onLoad() {}

        start() {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=1c524d8316f8254898af4449e3a0f9b7e444ab9f.js.map