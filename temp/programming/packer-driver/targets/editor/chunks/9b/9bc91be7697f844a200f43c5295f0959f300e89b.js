System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, LabelNumber, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, menu, LabelChange;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfLabelNumber(extras) {
    _reporterNs.report("LabelNumber", "./LabelNumber", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      LabelNumber = _unresolved_2.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "fff0fLwVNhNe59VirWTCPFJ", "LabelChange", undefined);
      /*
       * @Author: dgflash
       * @Date: 2022-04-14 17:08:01
       * @LastEditors: dgflash
       * @LastEditTime: 2023-08-11 10:00:51
       */


      __checkObsolete__(['_decorator']);

      ({
        ccclass,
        property,
        menu
      } = _decorator);
      /** 数值变化动画标签组件 */

      _export("LabelChange", LabelChange = (_dec = ccclass("LabelChange"), _dec2 = menu('ui/label/LabelChange'), _dec(_class = _dec2(_class = (_class2 = class LabelChange extends (_crd && LabelNumber === void 0 ? (_reportPossibleCrUseOfLabelNumber({
        error: Error()
      }), LabelNumber) : LabelNumber) {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "isInteger", _descriptor, this);

          this.duration = 0;
          // 持续时间
          this.callback = void 0;
          // 完成回调
          this.isBegin = false;
          // 是否开始
          this.speed = 0;
          // 变化速度
          this.end = 0;
        }

        // 最终值

        /**
         * 变化到某值,如果从当前开始的begin传入null
         * @param {number} duration 
         * @param {number} end 
         * @param {Function} [callback]
         */
        changeTo(duration, end, callback) {
          if (duration == 0) {
            if (callback) callback();
            return;
          }

          this.playAnim(duration, this.num, end, callback);
        }
        /**
         * 变化值,如果从当前开始的begin传入null
         * @param {number} duration 
         * @param {number} value 
         * @param {Function} [callback] 
         * @memberof LabelChange
         */


        changeBy(duration, value, callback) {
          if (duration == 0) {
            if (callback) callback();
            return;
          }

          this.playAnim(duration, this.num, this.num + value, callback);
        }
        /** 立刻停止 */


        stop(excCallback = true) {
          this.num = this.end;
          this.isBegin = false;
          if (excCallback && this.callback) this.callback();
        }
        /** 播放动画 */


        playAnim(duration, begin, end, callback) {
          this.duration = duration;
          this.end = end;
          this.callback = callback;
          this.speed = (end - begin) / duration;
          this.num = begin;
          this.isBegin = true;
        }
        /** 是否已经结束 */


        isEnd(num) {
          if (this.speed > 0) {
            return num >= this.end;
          } else {
            return num <= this.end;
          }
        }

        update(dt) {
          if (this.isBegin) {
            if (this.num == this.end) {
              this.isBegin = false;
              if (this.callback) this.callback();
              return;
            }

            let num = this.num + dt * this.speed;

            if (this.isInteger) {
              if (this.end < this.num) {
                num = Math.floor(num);
              } else {
                num = Math.ceil(num);
              }
            }
            /** 变化完成 */


            if (this.isEnd(num)) {
              num = this.end;
              this.isBegin = false;
              if (this.callback) this.callback();
            }

            this.num = num;
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "isInteger", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return false;
        }
      })), _class2)) || _class) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=9bc91be7697f844a200f43c5295f0959f300e89b.js.map