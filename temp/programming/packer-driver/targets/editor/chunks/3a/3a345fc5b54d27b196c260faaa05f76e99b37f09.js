System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, sp, _decorator, AnimatorSpine, AnimatorBase, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, requireComponent, AnimatorSpineSecondary;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfAnimatorSpine(extras) {
    _reporterNs.report("AnimatorSpine", "./AnimatorSpine", _context.meta, extras);
  }

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
      sp = _cc.sp;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      AnimatorSpine = _unresolved_2.default;
    }, function (_unresolved_3) {
      AnimatorBase = _unresolved_3.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "e47112s9c9Kwo8XQQ4KSW0c", "AnimatorSpineSecondary", undefined);

      __checkObsolete__(['sp', '_decorator']);

      ({
        ccclass,
        property,
        requireComponent
      } = _decorator);
      /** 
       * Spine状态机组件（次状态机），同一节点可添加多个，用于在不同track中播放动画，trackIndex必须大于0
       */

      _export("default", AnimatorSpineSecondary = (_dec = requireComponent(sp.Skeleton), _dec2 = property({
        tooltip: '动画播放的trackIndex，必须大于0'
      }), ccclass(_class = _dec(_class = (_class2 = class AnimatorSpineSecondary extends (_crd && AnimatorBase === void 0 ? (_reportPossibleCrUseOfAnimatorBase({
        error: Error()
      }), AnimatorBase) : AnimatorBase) {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "TrackIndex", _descriptor, this);

          /** 主状态机 */
          this._main = null;

          /** spine组件 */
          this._spine = null;
        }

        start() {
          if (!this.PlayOnStart || this._hasInit) {
            return;
          }

          this._hasInit = true;
          this._spine = this.getComponent(sp.Skeleton);
          this._main = this.getComponent(_crd && AnimatorSpine === void 0 ? (_reportPossibleCrUseOfAnimatorSpine({
            error: Error()
          }), AnimatorSpine) : AnimatorSpine);

          this._main.addSecondaryListener(this.onAnimFinished, this);

          if (this.AssetRawUrl !== null) {
            this.initJson(this.AssetRawUrl.json);
          }
        }
        /**
         * 手动初始化状态机，可传入0-3个参数，类型如下
         * - onStateChangeCall 状态切换时的回调
         * - stateLogicMap 各个状态逻辑控制
         * - animationPlayer 自定义动画控制
         * @override
         */


        onInit(...args) {
          if (this.PlayOnStart || this._hasInit) {
            return;
          }

          this._hasInit = true;
          this.initArgs(...args);
          this._spine = this.getComponent(sp.Skeleton);
          this._main = this.getComponent(_crd && AnimatorSpine === void 0 ? (_reportPossibleCrUseOfAnimatorSpine({
            error: Error()
          }), AnimatorSpine) : AnimatorSpine);

          this._main.addSecondaryListener(this.onAnimFinished, this);

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
          if (animName) {
            this._spine.setAnimation(this.TrackIndex, animName, loop);
          } else {
            this._spine.clearTrack(this.TrackIndex);
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "TrackIndex", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 1;
        }
      })), _class2)) || _class) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=3a345fc5b54d27b196c260faaa05f76e99b37f09.js.map