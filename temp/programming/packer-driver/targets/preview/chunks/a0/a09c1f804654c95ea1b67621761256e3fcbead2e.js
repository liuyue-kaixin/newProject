System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, AnimatorTransition, AnimatorState, _crd;

  function _reportPossibleCrUseOfAnimatorController(extras) {
    _reporterNs.report("AnimatorController", "./AnimatorController", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAnimatorTransition(extras) {
    _reporterNs.report("AnimatorTransition", "./AnimatorTransition", _context.meta, extras);
  }

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      AnimatorTransition = _unresolved_2.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "bd2d1/E71JL1Jj3HzsYH82H", "AnimatorState", undefined);

      /**
       * 状态管理类
       */
      _export("default", AnimatorState = class AnimatorState {
        /** 状态名 */
        get name() {
          return this._name;
        }
        /** 动画名 */


        get motion() {
          return this._motion;
        }
        /** 动画是否循环播放 */


        get loop() {
          return this._loop;
        }
        /** 动画播放速度的混合参数 */


        get multi() {
          return this._multi;
        }
        /** 动画播放速度 */


        get speed() {
          return this._speed;
        }

        set speed(value) {
          this._speed = value;
        }

        constructor(data, ac) {
          this._name = "";
          this._motion = "";
          this._loop = false;
          this._speed = 1;
          this._multi = "";
          this._transitions = [];
          this._ac = null;
          this._name = data.state;
          this._motion = data.motion || '';
          this._loop = data.loop || false;
          this._speed = data.speed || 1;
          this._multi = data.multiplier || '';
          this._ac = ac;

          for (var i = 0; i < data.transitions.length; i++) {
            var transition = new (_crd && AnimatorTransition === void 0 ? (_reportPossibleCrUseOfAnimatorTransition({
              error: Error()
            }), AnimatorTransition) : AnimatorTransition)(data.transitions[i], ac);
            transition.isValid() && this._transitions.push(transition);
          }
        }
        /**
         * 判断各个分支是否满足条件，满足则转换状态
         */


        checkAndTrans() {
          for (var i = 0; i < this._transitions.length; i++) {
            var transition = this._transitions[i];

            if (transition && transition.check()) {
              transition.doTrans();
              return;
            }
          }
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=a09c1f804654c95ea1b67621761256e3fcbead2e.js.map