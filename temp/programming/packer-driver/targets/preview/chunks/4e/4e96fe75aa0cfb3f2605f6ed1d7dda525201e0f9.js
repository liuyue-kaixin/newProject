System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Component, Material, sp, _decorator, _dec, _class, _crd, ccclass, property, FlashSpine;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Component = _cc.Component;
      Material = _cc.Material;
      sp = _cc.sp;
      _decorator = _cc._decorator;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "61de7pPhiNF5plXR5pVKfXu", "FlashSpine", undefined);

      __checkObsolete__(['Component', 'Material', 'sp', '_decorator']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("default", FlashSpine = (_dec = ccclass('FlashSpine'), _dec(_class = class FlashSpine extends Component {
        constructor() {
          super(...arguments);
          this.duration = 0.5;
          this._median = 0;
          this._time = 0;
          this._material = null;
          this._skeleton = null;
        }

        onLoad() {
          this._median = this.duration / 2; // 获取材质

          this._skeleton = this.node.getComponent(sp.Skeleton);
          this._material = this._skeleton.customMaterial; // 设置材质对应的属性

          this._material.setProperty("u_rate", 1);
        }

        update(dt) {
          if (this._time > 0) {
            this._time -= dt;
            this._time = this._time < 0 ? 0 : this._time;
            var rate = Math.abs(this._time - this._median) * 2 / this.duration;
            var mat = new Material();
            mat.copy(this._material);
            this._skeleton.customMaterial = mat;
            mat.setProperty("u_rate", rate);
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
//# sourceMappingURL=4e96fe75aa0cfb3f2605f6ed1d7dda525201e0f9.js.map