System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Component, _decorator, EffectSingleCase, _dec, _class, _class2, _descriptor, _crd, ccclass, property, EffectDelayRelease;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfEffectSingleCase(extras) {
    _reporterNs.report("EffectSingleCase", "./EffectSingleCase", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Component = _cc.Component;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      EffectSingleCase = _unresolved_2.EffectSingleCase;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "01359fvxlFJZKx7BLUcTSWS", "EffectDelayRelease", undefined);
      /*
       * @Author: dgflash
       * @Date: 2021-08-11 16:41:12
       * @LastEditors: dgflash
       * @LastEditTime: 2022-09-22 14:54:17
       */


      __checkObsolete__(['Component', '_decorator']);

      ({
        ccclass,
        property
      } = _decorator);
      /** 延时释放特效 */

      _export("EffectDelayRelease", EffectDelayRelease = (_dec = ccclass('EffectDelayRelease'), _dec(_class = (_class2 = class EffectDelayRelease extends Component {
        constructor() {
          super(...arguments);

          /** 延时释放时间(单位秒) */
          _initializerDefineProperty(this, "delay", _descriptor, this);
        }

        onEnable() {
          this.scheduleOnce(this.onDelay, this.delay);
        }

        onDelay() {
          (_crd && EffectSingleCase === void 0 ? (_reportPossibleCrUseOfEffectSingleCase({
            error: Error()
          }), EffectSingleCase) : EffectSingleCase).instance.put(this.node);
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "delay", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 1;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=1a172afce0a3181296ea64ba5cfe5062f0b18028.js.map