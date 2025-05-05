System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, AnimatorBase, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, menu, disallowMultiple, AnimatorCustomization;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfAnimatorBase(extras) {
    _reporterNs.report("AnimatorBase", "./core/AnimatorBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAnimationPlayer(extras) {
    _reporterNs.report("AnimationPlayer", "./core/AnimatorBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAnimatorStateLogic(extras) {
    _reporterNs.report("AnimatorStateLogic", "./core/AnimatorStateLogic", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      AnimatorBase = _unresolved_2.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "fe7aemTdvFBeJlAmC+6XphU", "AnimatorCustomization", undefined);

      __checkObsolete__(['_decorator']);

      ({
        ccclass,
        property,
        menu,
        disallowMultiple
      } = _decorator);
      /** 
       * 自定义动画控制的状态机组件
       */

      _export("default", AnimatorCustomization = (_dec = menu('animator/AnimatorCustomization'), _dec2 = property({
        override: true,
        visible: false
      }), ccclass(_class = disallowMultiple(_class = _dec(_class = (_class2 = class AnimatorCustomization extends (_crd && AnimatorBase === void 0 ? (_reportPossibleCrUseOfAnimatorBase({
        error: Error()
      }), AnimatorBase) : AnimatorBase) {
        constructor() {
          super(...arguments);

          /** 此组件必须主动调用onInit初始化 */
          _initializerDefineProperty(this, "PlayOnStart", _descriptor, this);
        }

        /**
         * 手动初始化状态机，可传入0-3个参数，类型如下
         * - onStateChangeCall 状态切换时的回调
         * - stateLogicMap 各个状态逻辑控制
         * - animationPlayer 自定义动画控制
         * @override
         */
        onInit() {
          if (this._hasInit) {
            return;
          }

          this._hasInit = true;
          this.initArgs(...arguments);

          if (this.AssetRawUrl !== null) {
            this.initJson(this.AssetRawUrl.json);
          }
        }
        /**
         * 播放动画
         * @override
         * @param animName 动画名
         * @param loop 是否循环播放
         */


        playAnimation(animName, loop) {
          if (this._animationPlayer && animName) {
            this._animationPlayer.playAnimation(animName, loop);
          }
        }
        /**
         * 缩放动画播放速率
         * @override
         * @param scale 缩放倍率
         */


        scaleTime(scale) {
          if (this._animationPlayer) {
            this._animationPlayer.scaleTime(scale);
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "PlayOnStart", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      })), _class2)) || _class) || _class) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=32dd050963bb6248c03a7c985ea272c5f0a80644.js.map