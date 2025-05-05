System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, AnimatorCondition, ParamType, AnimatorTransition, _crd;

  function _reportPossibleCrUseOfAnimatorCondition(extras) {
    _reporterNs.report("AnimatorCondition", "./AnimatorCondition", _context.meta, extras);
  }

  function _reportPossibleCrUseOfParamType(extras) {
    _reporterNs.report("ParamType", "./AnimatorCondition", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAnimatorController(extras) {
    _reporterNs.report("AnimatorController", "./AnimatorController", _context.meta, extras);
  }

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      AnimatorCondition = _unresolved_2.default;
      ParamType = _unresolved_2.ParamType;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "39224xRIkpEG7hvPJlKoGDy", "AnimatorTransition", undefined);

      /**
       * 状态过渡类
       */
      _export("default", AnimatorTransition = class AnimatorTransition {
        constructor(data, ac) {
          this._toStateName = '';
          this._hasExitTime = false;
          this._conditions = [];
          this._ac = null;
          this._toStateName = data.toState;
          this._hasExitTime = data.hasExitTime;
          this._ac = ac;

          for (var i = 0; i < data.conditions.length; i++) {
            var condition = new (_crd && AnimatorCondition === void 0 ? (_reportPossibleCrUseOfAnimatorCondition({
              error: Error()
            }), AnimatorCondition) : AnimatorCondition)(data.conditions[i], ac);

            this._conditions.push(condition);
          }
        }
        /**
         * 返回该transition是否有效，当未勾选hasExitTime以及没有添加任何condition时此transition无效并忽略
         */


        isValid() {
          return this._hasExitTime || this._conditions.length > 0;
        }
        /**
         * 判断是否满足所有转换条件
         */


        check() {
          if (this._toStateName === this._ac.curState.name) {
            return false;
          }

          if (this._hasExitTime && (this._ac.curState !== this._ac.animCompleteState || !this._ac.animComplete)) {
            return false;
          }

          for (var i = 0; i < this._conditions.length; i++) {
            if (!this._conditions[i].check()) {
              return false;
            }
          }

          return true;
        }
        /**
         * 转换状态
         */


        doTrans() {
          // 满足条件时重置动画播完标记
          if (this._hasExitTime) {
            this._ac.animComplete = false;
          } // 满足状态转换条件时重置trigger和autoTrigger


          for (var i = 0; i < this._conditions.length; i++) {
            var type = this._conditions[i].getParamType();

            var name = this._conditions[i].getParamName();

            if (type === (_crd && ParamType === void 0 ? (_reportPossibleCrUseOfParamType({
              error: Error()
            }), ParamType) : ParamType).TRIGGER) {
              this._ac.params.resetTrigger(name);
            } else if (type === (_crd && ParamType === void 0 ? (_reportPossibleCrUseOfParamType({
              error: Error()
            }), ParamType) : ParamType).AUTO_TRIGGER) {
              this._ac.params.resetAutoTrigger(name);
            }
          }

          this._ac.changeState(this._toStateName);
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=852c43bf98062a15cbeef5a6405461a8901bd676.js.map