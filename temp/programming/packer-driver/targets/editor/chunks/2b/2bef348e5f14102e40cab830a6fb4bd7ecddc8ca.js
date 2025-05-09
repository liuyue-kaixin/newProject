System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Animation, _decorator, AnimatorBase, _dec, _dec2, _class, _crd, ccclass, property, requireComponent, disallowMultiple, menu, AnimatorAnimation;

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
      Animation = _cc.Animation;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      AnimatorBase = _unresolved_2.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "64571Qy/TlCEZI/28RxIG+E", "AnimatorAnimation", undefined);

      __checkObsolete__(['Animation', 'AnimationState', '_decorator']);

      ({
        ccclass,
        property,
        requireComponent,
        disallowMultiple,
        menu
      } = _decorator);
      /** 
       * Cocos Animation状态机组件
       */

      _export("default", AnimatorAnimation = (_dec = requireComponent(Animation), _dec2 = menu('animator/AnimatorAnimation'), ccclass(_class = disallowMultiple(_class = _dec(_class = _dec2(_class = class AnimatorAnimation extends (_crd && AnimatorBase === void 0 ? (_reportPossibleCrUseOfAnimatorBase({
        error: Error()
      }), AnimatorBase) : AnimatorBase) {
        constructor(...args) {
          super(...args);

          /** Animation组件 */
          this._animation = null;

          /** 当前的动画实例 */
          this._animState = null;

          /** 记录初始的wrapmode */
          this._wrapModeMap = new Map();
        }

        start() {
          if (!this.PlayOnStart || this._hasInit) {
            return;
          }

          this._hasInit = true;
          this._animation = this.getComponent(Animation);

          this._animation.on(Animation.EventType.FINISHED, this.onAnimFinished, this);

          this._animation.on(Animation.EventType.LASTFRAME, this.onAnimFinished, this);

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
          this._animation = this.getComponent(Animation);

          this._animation.on(Animation.EventType.FINISHED, this.onAnimFinished, this);

          this._animation.on(Animation.EventType.LASTFRAME, this.onAnimFinished, this);

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
          if (!animName) {
            return;
          }

          this._animation.play(animName);

          this._animState = this._animation.getState(animName);

          if (!this._animState) {
            return;
          }

          if (!this._wrapModeMap.has(this._animState)) {
            this._wrapModeMap.set(this._animState, this._animState.wrapMode);
          }

          this._animState.wrapMode = loop ? 2 : this._wrapModeMap.get(this._animState);
        }
        /**
         * 缩放动画播放速率
         * @override
         * @param scale 缩放倍率
         */


        scaleTime(scale) {
          if (this._animState) {
            this._animState.speed = scale;
          }
        }

      }) || _class) || _class) || _class) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=2bef348e5f14102e40cab830a6fb4bd7ecddc8ca.js.map