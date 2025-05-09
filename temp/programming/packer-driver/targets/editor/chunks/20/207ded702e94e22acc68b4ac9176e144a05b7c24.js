System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Label, _decorator, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _crd, ccclass, property, menu, LabelTime;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Label = _cc.Label;
      _decorator = _cc._decorator;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "57786GMN6RPbaAT9b9RmX18", "LabelTime", undefined);

      __checkObsolete__(['Label', '_decorator']);

      ({
        ccclass,
        property,
        menu
      } = _decorator);

      _export("default", LabelTime = (_dec = ccclass("LabelTime"), _dec2 = menu('ui/label/LabelTime'), _dec3 = property({
        tooltip: "到计时间总时间（单位秒）"
      }), _dec4 = property({
        tooltip: "天数数据格式化"
      }), _dec5 = property({
        tooltip: "时间格式化"
      }), _dec6 = property({
        tooltip: "是否有00"
      }), _dec(_class = _dec2(_class = (_class2 = class LabelTime extends Label {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "countDown", _descriptor, this);

          _initializerDefineProperty(this, "dayFormat", _descriptor2, this);

          _initializerDefineProperty(this, "timeFormat", _descriptor3, this);

          _initializerDefineProperty(this, "zeroize", _descriptor4, this);

          this.dateDisable = void 0;
          this.result = void 0;

          /** 每秒触发事件 */
          this.onSecond = null;

          /** 倒计时完成事件 */
          this.onComplete = null;
        }

        replace(value, ...args) {
          return value.replace(/\{(\d+)\}/g, function (m, i) {
            return args[i];
          });
        }
        /** 格式化字符串 */


        format() {
          let c = this.countDown;
          let date = Math.floor(c / 86400);
          c = c - date * 86400;
          let hours = Math.floor(c / 3600);
          c = c - hours * 3600;
          let minutes = Math.floor(c / 60);
          c = c - minutes * 60;
          let seconds = c;
          this.dateDisable = this.dateDisable || false;

          if (date == 0 && hours == 0 && minutes == 0 && seconds == 0) {
            if (this.zeroize) {
              this.result = this.replace(this.timeFormat, "00", "00", "00");
            } else {
              this.result = this.replace(this.timeFormat, "0", "0", "0");
            }
          } else if (date > 0 && !this.dateDisable) {
            let dataFormat = this.dayFormat;
            let index = dataFormat.indexOf("{1}");

            if (hours == 0 && index > -1) {
              dataFormat = dataFormat.substring(0, index - 1);
            }

            let df = dataFormat;

            if (date > 1 && dataFormat.indexOf("days") < 0) {
              df = df.replace("day", "days");
            }

            if (date < 2) {
              df = df.replace("days", "day");
            }

            this.result = this.replace(df, date, hours); // 如果天大于1，则显示 "1 Day..."
          } else {
            hours += date * 24;

            if (this.zeroize) {
              this.result = this.replace(this.timeFormat, this.coverString(hours), this.coverString(minutes), this.coverString(seconds)); // 否则显示 "01:12:24"
            } else {
              this.result = this.replace(this.timeFormat, hours, minutes, seconds);
            }
          }

          this.string = this.result;
        }
        /** 个位数的时间数据将字符串补位 */


        coverString(value) {
          if (value < 10) return "0" + value;
          return value.toString();
        }
        /** 设置时间能否由天数显示 */


        setDateDisable(flag) {
          this.dateDisable = flag;
        }
        /** 设置倒计时时间 */


        setTime(second) {
          this.countDown = second; // 倒计时，初始化显示字符串

          this.timing_end();
          this.timing_start();
        }

        start() {
          this.timing_start();
        }

        onScheduleSecond() {
          this.countDown--;
          this.format();
          if (this.onSecond) this.onSecond(this.node);

          if (this.countDown == 0) {
            this.onScheduleComplete();
          }
        }

        onScheduleComplete() {
          this.timing_end();
          if (this.onComplete) this.onComplete(this.node);
        }
        /** 开始计时 */


        timing_start() {
          this.schedule(this.onScheduleSecond, 1);
          this.format();
        }

        timing_end() {
          this.unscheduleAllCallbacks();
          this.format();
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "countDown", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 1000;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "dayFormat", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return "{0} day";
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "timeFormat", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return "{0}:{1}:{2}";
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "zeroize", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return true;
        }
      })), _class2)) || _class) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=207ded702e94e22acc68b4ac9176e144a05b7c24.js.map