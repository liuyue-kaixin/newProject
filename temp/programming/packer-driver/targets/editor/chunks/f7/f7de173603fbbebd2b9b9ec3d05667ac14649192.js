System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, dragonBones, _decorator, AnimatorBase, _dec, _class, _crd, ccclass, property, requireComponent, disallowMultiple, AnimatorDragonBones;

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
      dragonBones = _cc.dragonBones;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      AnimatorBase = _unresolved_2.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "dc324J03ptB8b2JV9Ljduzh", "AnimatorDragonBones", undefined);

      __checkObsolete__(['dragonBones', '_decorator']);

      ({
        ccclass,
        property,
        requireComponent,
        disallowMultiple
      } = _decorator);
      /** 
       * DragonBones状态机组件
       */

      _export("default", AnimatorDragonBones = (_dec = requireComponent(dragonBones.ArmatureDisplay), ccclass(_class = disallowMultiple(_class = _dec(_class = class AnimatorDragonBones extends (_crd && AnimatorBase === void 0 ? (_reportPossibleCrUseOfAnimatorBase({
        error: Error()
      }), AnimatorBase) : AnimatorBase) {
        constructor(...args) {
          super(...args);

          /** DragonBones组件 */
          this._dragonBones = null;
        }

        start() {
          if (!this.PlayOnStart || this._hasInit) {
            return;
          }

          this._hasInit = true;
          this._dragonBones = this.getComponent(dragonBones.ArmatureDisplay);

          this._dragonBones.addEventListener('complete', this.onAnimFinished, this);

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
          this._dragonBones = this.getComponent(dragonBones.ArmatureDisplay);

          this._dragonBones.addEventListener('complete', this.onAnimFinished, this);

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
          if (animName) this._dragonBones.playAnimation(animName, loop ? 0 : -1);
        }
        /**
         * 缩放动画播放速率
         * @override
         * @param scale 缩放倍率
         */


        scaleTime(scale) {
          if (scale > 0) this._dragonBones.timeScale = scale;
        }

      }) || _class) || _class) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=f7de173603fbbebd2b9b9ec3d05667ac14649192.js.map