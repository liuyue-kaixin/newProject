System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, CCInteger, Component, Sprite, _decorator, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, Ambilight;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      CCInteger = _cc.CCInteger;
      Component = _cc.Component;
      Sprite = _cc.Sprite;
      _decorator = _cc._decorator;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "73c69GH9M9F2Ilsm0fvjTCX", "Ambilight", undefined);

      __checkObsolete__(['CCInteger', 'Component', 'Material', 'Sprite', '_decorator']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Ambilight", Ambilight = (_dec = ccclass('Ambilight'), _dec2 = property(CCInteger), _dec(_class = (_class2 = class Ambilight extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "_max", _descriptor, this);

          this._start = 0;
          this._material = void 0;
        }

        get max() {
          return this._max;
        }

        set max(value) {
          this._max = value;
        }

        update(dt) {
          this._material = this.node.getComponent(Sprite).getSharedMaterial(0);

          if (this.node.active && this._material) {
            this._setShaderTime(dt);
          }
        }

        _setShaderTime(dt) {
          let start = this._start;
          if (start > this.max) start = 0;
          start += 0.015;

          this._material.setProperty('speed', start);

          this._start = start;
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "_max", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 1;
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "max", [_dec2], Object.getOwnPropertyDescriptor(_class2.prototype, "max"), _class2.prototype)), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=17881bdc2d41627d15a76d57f918eda71f6901ab.js.map