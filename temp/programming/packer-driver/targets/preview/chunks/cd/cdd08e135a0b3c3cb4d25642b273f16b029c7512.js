System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Component, Sprite, _decorator, _dec, _class, _crd, ccclass, property, FlashSprite;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Component = _cc.Component;
      Sprite = _cc.Sprite;
      _decorator = _cc._decorator;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "a7a9eXWbUpJ3rONqlgUYCY/", "FlashSprite", undefined);

      __checkObsolete__(['Component', 'Material', 'Sprite', '_decorator']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("default", FlashSprite = (_dec = ccclass('FlashSprite'), _dec(_class = class FlashSprite extends Component {
        constructor() {
          super(...arguments);
          this.duration = 0.5;
          this._median = 0;
          this._time = 0;
          this._material = null;
        }

        onLoad() {
          this._median = this.duration / 2; // 获取材质

          this._material = this.node.getComponent(Sprite).getMaterial(0); // 设置材质对应的属性

          this._material.setProperty("u_rate", 1);
        }

        update(dt) {
          if (this._time > 0) {
            this._time -= dt;
            this._time = this._time < 0 ? 0 : this._time;
            var rate = Math.abs(this._time - this._median) * 2 / this.duration;

            this._material.setProperty("u_rate", rate);
          }
        }

        clickFlash() {
          this._time = this.duration;
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=cdd08e135a0b3c3cb4d25642b273f16b029c7512.js.map