System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, ParamType, AnimatorParams, _crd;

  function _reportPossibleCrUseOfParamType(extras) {
    _reporterNs.report("ParamType", "./AnimatorCondition", _context.meta, extras);
  }

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      ParamType = _unresolved_2.ParamType;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "13926xryDRPXJ50lCnLvy4J", "AnimatorParams", undefined);

      /**
       * 参数结构
       */

      /**
       * 状态机参数
       */
      _export("default", AnimatorParams = class AnimatorParams {
        constructor(dataArr) {
          this._paramMap = new Map();
          dataArr.forEach(data => {
            var param = {
              type: data.type,
              value: data.init
            };

            this._paramMap.set(data.param, param);
          });
        }

        getParamType(key) {
          var param = this._paramMap.get(key);

          if (param) {
            return param.type;
          } else {
            return null;
          }
        }

        setNumber(key, value) {
          var param = this._paramMap.get(key);

          if (param && param.type === (_crd && ParamType === void 0 ? (_reportPossibleCrUseOfParamType({
            error: Error()
          }), ParamType) : ParamType).NUMBER) {
            param.value = value;
          }
        }

        setBool(key, value) {
          var param = this._paramMap.get(key);

          if (param && param.type === (_crd && ParamType === void 0 ? (_reportPossibleCrUseOfParamType({
            error: Error()
          }), ParamType) : ParamType).BOOLEAN) {
            param.value = value ? 1 : 0;
          }
        }

        setTrigger(key) {
          var param = this._paramMap.get(key);

          if (param && param.type === (_crd && ParamType === void 0 ? (_reportPossibleCrUseOfParamType({
            error: Error()
          }), ParamType) : ParamType).TRIGGER) {
            param.value = 1;
          }
        }

        resetTrigger(key) {
          var param = this._paramMap.get(key);

          if (param && param.type === (_crd && ParamType === void 0 ? (_reportPossibleCrUseOfParamType({
            error: Error()
          }), ParamType) : ParamType).TRIGGER) {
            param.value = 0;
          }
        }

        autoTrigger(key) {
          var param = this._paramMap.get(key);

          if (param && param.type === (_crd && ParamType === void 0 ? (_reportPossibleCrUseOfParamType({
            error: Error()
          }), ParamType) : ParamType).AUTO_TRIGGER) {
            param.value = 1;
          }
        }

        resetAutoTrigger(key) {
          var param = this._paramMap.get(key);

          if (param && param.type === (_crd && ParamType === void 0 ? (_reportPossibleCrUseOfParamType({
            error: Error()
          }), ParamType) : ParamType).AUTO_TRIGGER) {
            param.value = 0;
          }
        }

        resetAllAutoTrigger() {
          this._paramMap.forEach((param, key) => {
            if (param.type === (_crd && ParamType === void 0 ? (_reportPossibleCrUseOfParamType({
              error: Error()
            }), ParamType) : ParamType).AUTO_TRIGGER) {
              param.value = 0;
            }
          });
        }

        getNumber(key) {
          var param = this._paramMap.get(key);

          if (param && param.type === (_crd && ParamType === void 0 ? (_reportPossibleCrUseOfParamType({
            error: Error()
          }), ParamType) : ParamType).NUMBER) {
            return param.value;
          } else {
            return 0;
          }
        }

        getBool(key) {
          var param = this._paramMap.get(key);

          if (param && param.type === (_crd && ParamType === void 0 ? (_reportPossibleCrUseOfParamType({
            error: Error()
          }), ParamType) : ParamType).BOOLEAN) {
            return param.value;
          } else {
            return 0;
          }
        }

        getTrigger(key) {
          var param = this._paramMap.get(key);

          if (param && param.type === (_crd && ParamType === void 0 ? (_reportPossibleCrUseOfParamType({
            error: Error()
          }), ParamType) : ParamType).TRIGGER) {
            return param.value;
          } else {
            return 0;
          }
        }

        getAutoTrigger(key) {
          var param = this._paramMap.get(key);

          if (param && param.type === (_crd && ParamType === void 0 ? (_reportPossibleCrUseOfParamType({
            error: Error()
          }), ParamType) : ParamType).AUTO_TRIGGER) {
            return param.value;
          } else {
            return 0;
          }
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=20d804646681ce50e4aa66fda72a8a520cc230df.js.map