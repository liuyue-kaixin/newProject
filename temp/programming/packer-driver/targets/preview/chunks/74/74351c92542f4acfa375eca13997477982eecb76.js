System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, sp, _decorator, AnimatorBase, _dec, _class, _crd, ccclass, property, requireComponent, disallowMultiple, AnimatorSpine;

  function _reportPossibleCrUseOfAnimatorSpineSecondary(extras) {
    _reporterNs.report("AnimatorSpineSecondary", "./AnimatorSpineSecondary", _context.meta, extras);
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
      AnimatorBase = _unresolved_2.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "7fde8yJEfxMMqzjg+V4UVkT", "AnimatorSpine", undefined);

      __checkObsolete__(['sp', '_decorator']);

      ({
        ccclass,
        property,
        requireComponent,
        disallowMultiple
      } = _decorator);
      /** 
       * Spine状态机组件（主状态机），trackIndex为0
       */

      _export("default", AnimatorSpine = (_dec = requireComponent(sp.Skeleton), ccclass(_class = disallowMultiple(_class = _dec(_class = class AnimatorSpine extends (_crd && AnimatorBase === void 0 ? (_reportPossibleCrUseOfAnimatorBase({
        error: Error()
      }), AnimatorBase) : AnimatorBase) {
        constructor() {
          super(...arguments);

          /** spine组件 */
          this._spine = null;

          /** 动画完成的回调 */
          this._completeListenerMap = new Map();

          /** 次状态机注册的回调 */
          this._secondaryListenerMap = new Map();
        }

        start() {
          if (!this.PlayOnStart || this._hasInit) {
            return;
          }

          this._hasInit = true;
          this._spine = this.getComponent(sp.Skeleton);

          this._spine.setEventListener(this.onSpineEvent.bind(this));

          this._spine.setCompleteListener(this.onSpineComplete.bind(this));

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


        onInit() {
          if (this.PlayOnStart || this._hasInit) {
            return;
          }

          this._hasInit = true;
          this.initArgs(...arguments);
          this._spine = this.getComponent(sp.Skeleton);

          this._spine.setEventListener(this.onSpineEvent.bind(this));

          this._spine.setCompleteListener(this.onSpineComplete.bind(this));

          if (this.AssetRawUrl !== null) {
            this.initJson(this.AssetRawUrl.json);
          }
        }
        /** ---------- 后续扩展代码 开始 ---------- */


        getBone(name) {
          var bone = this._spine.findBone(name);

          return bone;
        }

        onSpineEvent(trackEntry, event) {
          var _this$_animationPlaye;

          var animationName = trackEntry.animation ? event.data.name : "";
          (_this$_animationPlaye = this._animationPlayer) == null || _this$_animationPlaye.onFrameEventCallback(animationName, this);
        }
        /** ---------- 后续扩展代码 结束 ---------- */


        onSpineComplete(entry) {
          entry.trackIndex === 0 && this.onAnimFinished();

          this._completeListenerMap.forEach((target, cb) => {
            target ? cb.call(target, entry) : cb(entry);
          });

          this._secondaryListenerMap.forEach((target, cb) => {
            entry.trackIndex === target.TrackIndex && cb.call(target, entry);
          });
        }
        /**
         * 播放动画
         * @override
         * @param animName 动画名
         * @param loop 是否循环播放
         */


        playAnimation(animName, loop) {
          if (animName) {
            this._spine.setAnimation(0, animName, loop);
          } else {
            this._spine.clearTrack(0);
          }
        }
        /**
         * 缩放动画播放速率
         * @override
         * @param scale 缩放倍率
         */


        scaleTime(scale) {
          if (scale > 0) this._spine.timeScale = scale;
        }
        /**
         * 注册次状态机动画结束的回调（状态机内部方法，不能由外部直接调用）
         */


        addSecondaryListener(cb, target) {
          this._secondaryListenerMap.set(cb, target);
        }
        /**
         * 注册动画完成时的监听
         * @param cb 回调
         * @param target 调用回调的this对象
         */


        addCompleteListener(cb, target) {
          if (target === void 0) {
            target = null;
          }

          if (this._completeListenerMap.has(cb)) {
            return;
          }

          this._completeListenerMap.set(cb, target);
        }
        /**
         * 注销动画完成的监听
         * @param cb 回调
         */


        removeCompleteListener(cb) {
          this._completeListenerMap.delete(cb);
        }
        /**
         * 清空动画完成的监听
         */


        clearCompleteListener() {
          this._completeListenerMap.clear;
        }

      }) || _class) || _class) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=74351c92542f4acfa375eca13997477982eecb76.js.map