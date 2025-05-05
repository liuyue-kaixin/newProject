System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, CCFloat, game, SkeletalAnimation, _decorator, AnimatorAnimation, _dec, _dec2, _dec3, _class, _class2, _descriptor, _crd, ccclass, property, requireComponent, disallowMultiple, menu, AnimatorSkeletal;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfAnimatorAnimation(extras) {
    _reporterNs.report("AnimatorAnimation", "./AnimatorAnimation", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      CCFloat = _cc.CCFloat;
      game = _cc.game;
      SkeletalAnimation = _cc.SkeletalAnimation;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      AnimatorAnimation = _unresolved_2.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "8c545jBn4xF7LWXjl506avi", "AnimatorSkeletal", undefined);
      /*
       * @Author: dgflash
       * @Date: 2021-06-30 13:56:26
       * @LastEditors: dgflash
       * @LastEditTime: 2021-11-04 10:46:00
       */


      __checkObsolete__(['CCFloat', 'game', 'SkeletalAnimation', '_decorator']);

      ({
        ccclass,
        property,
        requireComponent,
        disallowMultiple,
        menu
      } = _decorator);

      _export("AnimatorSkeletal", AnimatorSkeletal = (_dec = requireComponent(SkeletalAnimation), _dec2 = menu('animator/AnimatorSkeletal'), _dec3 = property({
        type: CCFloat,
        tooltip: "动画切换过度时间"
      }), ccclass(_class = disallowMultiple(_class = _dec(_class = _dec2(_class = (_class2 = class AnimatorSkeletal extends (_crd && AnimatorAnimation === void 0 ? (_reportPossibleCrUseOfAnimatorAnimation({
        error: Error()
      }), AnimatorAnimation) : AnimatorAnimation) {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "duration", _descriptor, this);

          this.cross_duration = 0;
          // 防止切换动画时间少于间隔时间导致动画状态错乱的问题
          this.current_time = 0;
        }

        // 上一次切换状态时间
        onLoad() {
          this.cross_duration = this.duration * 1000;
        }
        /**
          * 播放动画
          * @override
          * @param animName 动画名
          * @param loop 是否循环播放
          */


        playAnimation(animName, loop) {
          if (!animName) {
            return;
          }

          if (game.totalTime - this.current_time > this.cross_duration) {
            this._animation.crossFade(animName, this.duration);
          } else {
            this._animation.play(animName);
          }

          this.current_time = game.totalTime;
          this._animState = this._animation.getState(animName);

          if (!this._animState) {
            return;
          }

          if (!this._wrapModeMap.has(this._animState)) {
            this._wrapModeMap.set(this._animState, this._animState.wrapMode);
          } // this._animState.wrapMode = loop ? 2 : this._wrapModeMap.get(this._animState)!;


          this._animState.wrapMode = loop ? 2 : 1; // 2为循环播放，1为单次播放
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "duration", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0.3;
        }
      })), _class2)) || _class) || _class) || _class) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=44fef7ea85aad61cc9fcc50136d8673ced6c77e8.js.map