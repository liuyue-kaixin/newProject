System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Label, _decorator, error, _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _crd, ccclass, property, menu, LabelNumber;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Label = _cc.Label;
      _decorator = _cc._decorator;
      error = _cc.error;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "f7b43F70BhPlrz4IPhZGmsL", "LabelNumber", undefined);
      /*
       * @Author: dgflash
       * @Date: 2022-04-14 17:08:01
       * @LastEditors: dgflash
       * @LastEditTime: 2023-08-11 10:27:04
       */


      __checkObsolete__(['Label', '_decorator', 'error']);

      ({
        ccclass,
        property,
        menu
      } = _decorator);
      /** 只能显示数字的标签组件 */

      _export("default", LabelNumber = (_dec = ccclass("LabelNumber"), _dec2 = menu('ui/label/LabelNumber'), _dec3 = property({
        tooltip: "数字"
      }), _dec4 = property({
        tooltip: "数字"
      }), _dec5 = property({
        tooltip: "货币符号"
      }), _dec(_class = _dec2(_class = (_class2 = class LabelNumber extends Label {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "_num", _descriptor, this);

          _initializerDefineProperty(this, "symbol", _descriptor2, this);
        }

        get num() {
          return this._num;
        }

        set num(value) {
          this._num = value;
          this.updateLabel();
        }

        start() {
          this.updateLabel();
        }
        /** 刷新文本 */


        updateLabel() {
          if (typeof this._num != "number") {
            error("[LabelNumber] num不是一个合法数字");
          }

          this.string = this.num.toString() + this.symbol;
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "_num", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0;
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "num", [_dec4], Object.getOwnPropertyDescriptor(_class2.prototype, "num"), _class2.prototype), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "symbol", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return "";
        }
      })), _class2)) || _class) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=d371d930a1ccc839eb97a5fa67d96b6b7853878e.js.map