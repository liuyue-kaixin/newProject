System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, error, AnimatorCondition, _crd, ParamType, LogicType;

  function _reportPossibleCrUseOfAnimatorController(extras) {
    _reporterNs.report("AnimatorController", "./AnimatorController", _context.meta, extras);
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
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "8ade2h2C/ZA86thhI0NNuqu", "AnimatorCondition", undefined);

      __checkObsolete__(['error']);

      /** 参数类型 */
      _export("ParamType", ParamType = /*#__PURE__*/function (ParamType) {
        ParamType[ParamType["COMPLETE"] = 0] = "COMPLETE";
        ParamType[ParamType["BOOLEAN"] = 1] = "BOOLEAN";
        ParamType[ParamType["NUMBER"] = 2] = "NUMBER";
        ParamType[ParamType["TRIGGER"] = 3] = "TRIGGER";
        ParamType[ParamType["AUTO_TRIGGER"] = 4] = "AUTO_TRIGGER";
        return ParamType;
      }({}));
      /** 逻辑类型 */


      _export("LogicType", LogicType = /*#__PURE__*/function (LogicType) {
        LogicType[LogicType["EQUAL"] = 0] = "EQUAL";
        LogicType[LogicType["NOTEQUAL"] = 1] = "NOTEQUAL";
        LogicType[LogicType["GREATER"] = 2] = "GREATER";
        LogicType[LogicType["LESS"] = 3] = "LESS";
        LogicType[LogicType["GREATER_EQUAL"] = 4] = "GREATER_EQUAL";
        LogicType[LogicType["LESS_EQUAL"] = 5] = "LESS_EQUAL";
        return LogicType;
      }({}));
      /**
       * 单项条件
       */


      _export("default", AnimatorCondition = class AnimatorCondition {
        constructor(data, ac) {
          this._ac = void 0;

          /** 此条件对应的参数名 */
          this._param = "";

          /** 此条件对应的值 */
          this._value = 0;

          /** 此条件与值比较的逻辑 */
          this._logic = LogicType.EQUAL;
          this._ac = ac;
          this._param = data.param;
          this._value = data.value;
          this._logic = data.logic;
        }

        getParamName() {
          return this._param;
        }

        getParamType() {
          return this._ac.params.getParamType(this._param);
        }
        /** 判断此条件是否满足 */


        check() {
          var type = this.getParamType();

          if (type === ParamType.BOOLEAN) {
            return this._ac.params.getBool(this._param) === this._value;
          } else if (type === ParamType.NUMBER) {
            var value = this._ac.params.getNumber(this._param);

            switch (this._logic) {
              case LogicType.EQUAL:
                return value === this._value;

              case LogicType.NOTEQUAL:
                return value !== this._value;

              case LogicType.GREATER:
                return value > this._value;

              case LogicType.LESS:
                return value < this._value;

              case LogicType.GREATER_EQUAL:
                return value >= this._value;

              case LogicType.LESS_EQUAL:
                return value <= this._value;

              default:
                return false;
            }
          } else if (type === ParamType.AUTO_TRIGGER) {
            return this._ac.params.getAutoTrigger(this._param) !== 0;
          } else if (type === ParamType.TRIGGER) {
            return this._ac.params.getTrigger(this._param) !== 0;
          } else {
            error("[AnimatorCondition.check] \u9519\u8BEF\u7684type: " + type);
            return false;
          }
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=fade2fb1837678ae65eea94fe67982a4de9e4861.js.map