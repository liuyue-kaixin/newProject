System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Animation, AnimationClip, Sprite, _decorator, oops, ButtonSimple, _dec, _dec2, _dec3, _class, _class2, _descriptor, _crd, ccclass, property, menu, ButtonEffect;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfoops(extras) {
    _reporterNs.report("oops", "../../../core/Oops", _context.meta, extras);
  }

  function _reportPossibleCrUseOfButtonSimple(extras) {
    _reporterNs.report("ButtonSimple", "./ButtonSimple", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Animation = _cc.Animation;
      AnimationClip = _cc.AnimationClip;
      Sprite = _cc.Sprite;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      oops = _unresolved_2.oops;
    }, function (_unresolved_3) {
      ButtonSimple = _unresolved_3.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "1be36hrGO5Oz6Eapg6ygW03", "ButtonEffect", undefined);
      /*
       * @Author: dgflash
       * @Date: 2023-01-30 14:00:41
       * @LastEditors: dgflash
       * @LastEditTime: 2023-02-09 10:54:28
       */


      __checkObsolete__(['Animation', 'AnimationClip', 'EventTouch', 'Sprite', '_decorator']);

      ({
        ccclass,
        property,
        menu
      } = _decorator);

      _export("default", ButtonEffect = (_dec = ccclass("ButtonEffect"), _dec2 = menu('ui/button/ButtonEffect'), _dec3 = property({
        tooltip: "是否开启"
      }), _dec(_class = _dec2(_class = (_class2 = class ButtonEffect extends (_crd && ButtonSimple === void 0 ? (_reportPossibleCrUseOfButtonSimple({
        error: Error()
      }), ButtonSimple) : ButtonSimple) {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "disabledEffect", _descriptor, this);

          this.anim = void 0;
        }

        /** 按钮禁用效果 */
        get grayscale() {
          return this.node.getComponent(Sprite).grayscale;
        }

        set grayscale(value) {
          if (this.node.getComponent(Sprite)) {
            this.node.getComponent(Sprite).grayscale = value;
          }
        }

        onLoad() {
          this.anim = this.node.addComponent(Animation);
          var ac_start = (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
            error: Error()
          }), oops) : oops).res.get("common/anim/button_scale_start", AnimationClip);
          var ac_end = (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
            error: Error()
          }), oops) : oops).res.get("common/anim/button_scale_end", AnimationClip);
          this.anim.defaultClip = ac_start;
          this.anim.createState(ac_start, ac_start == null ? void 0 : ac_start.name);
          this.anim.createState(ac_end, ac_end == null ? void 0 : ac_end.name);
          super.onLoad();
        }

        onTouchtStart(event) {
          if (!this.disabledEffect) {
            this.anim.play("button_scale_start");
          }
        }

        onTouchEnd(event) {
          if (!this.disabledEffect) {
            this.anim.play("button_scale_end");
          }

          super.onTouchEnd(event);
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "disabledEffect", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      })), _class2)) || _class) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=0d634e9773ecc5b69eeda109f6880c39683e49ac.js.map