System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, error, AnimatorParams, AnimatorState, AnimatorController, _crd;

  function _reportPossibleCrUseOfAnimatorBase(extras) {
    _reporterNs.report("AnimatorBase", "./AnimatorBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAnimatorParams(extras) {
    _reporterNs.report("AnimatorParams", "./AnimatorParams", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAnimatorState(extras) {
    _reporterNs.report("AnimatorState", "./AnimatorState", _context.meta, extras);
  }

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      error = _cc.error;
    }, function (_unresolved_2) {
      AnimatorParams = _unresolved_2.default;
    }, function (_unresolved_3) {
      AnimatorState = _unresolved_3.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "01df9SMBjRCyYDE7SgbZxua", "AnimatorController", undefined);

      __checkObsolete__(['error']);

      /**
       * 状态机控制类
       */
      _export("default", AnimatorController = class AnimatorController {
        /** 当前运行的状态 */
        get curState() {
          return this._curState;
        }

        get params() {
          return this._params;
        }

        get states() {
          return this._states;
        }

        constructor(player, json) {
          this._jsonData = null;
          this._animator = null;
          this._params = null;
          this._states = null;
          this._anyState = null;
          this._curState = null;

          /** 状态切换次数 */
          this._changeCount = 0;

          /** 对应animComplete的状态 */
          this.animCompleteState = null;

          /** 动画播放完毕的标记 */
          this.animComplete = false;
          this._animator = player;
          this._jsonData = json;
          this._states = new Map();
          this._params = new (_crd && AnimatorParams === void 0 ? (_reportPossibleCrUseOfAnimatorParams({
            error: Error()
          }), AnimatorParams) : AnimatorParams)(json.parameters);
          this.init(json);
        }
        /**
         * 初始化状态机所有动画状态
         */


        init(json) {
          if (json.states.length <= 0) {
            error("[AnimatorController.init] \u72B6\u6001\u673Ajson\u9519\u8BEF");
            return;
          }

          var defaultState = json.defaultState;
          this._anyState = new (_crd && AnimatorState === void 0 ? (_reportPossibleCrUseOfAnimatorState({
            error: Error()
          }), AnimatorState) : AnimatorState)(json.anyState, this);

          for (var i = 0; i < json.states.length; i++) {
            var state = new (_crd && AnimatorState === void 0 ? (_reportPossibleCrUseOfAnimatorState({
              error: Error()
            }), AnimatorState) : AnimatorState)(json.states[i], this);

            this._states.set(state.name, state);
          }

          this.changeState(defaultState);
        }

        updateState() {
          this._curState.checkAndTrans();

          if (this._curState !== this._anyState && this._anyState !== null) {
            this._anyState.checkAndTrans();
          }
        }
        /**
         * 更新状态机逻辑
         */


        updateAnimator() {
          // 重置计数
          this._changeCount = 0;
          this.updateState(); // 重置动画完成标记

          if (this.animComplete && this.animCompleteState.loop) {
            this.animComplete = false;
          } // 重置autoTrigger


          this.params.resetAllAutoTrigger();
        }

        onAnimationComplete() {
          this.animComplete = true;
          this.animCompleteState = this._curState; // cc.log(`animation complete: ${this._curState.name}`);
        }
        /**
         * 无视条件直接跳转状态
         * @param 状态名
         */


        play(stateName) {
          if (!this._states.has(stateName) || this._curState.name === stateName) {
            return;
          } // 重置动画完成标记


          this.animComplete = false;
          this.changeState(stateName);
        }
        /**
         * 切换动画状态
         */


        changeState(stateName) {
          this._changeCount++;

          if (this._changeCount > 1000) {
            error('[AnimatorController.changeState] error: 状态切换递归调用超过1000次，transition设置可能出错!');
            return;
          }

          if (this._states.has(stateName) && (this._curState === null || this._curState.name !== stateName)) {
            var oldState = this._curState;
            this._curState = this._states.get(stateName);

            this._animator.onStateChange(oldState, this._curState);

            this.updateState();
          } else {
            error("[AnimatorController.changeState] error state: " + stateName);
          }
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=28ce4402c6610628b64b4193322910cdd6be4dd8.js.map