System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, EventHandler, _decorator, ButtonEffect, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _crd, ccclass, property, menu, ButtonTouchLong;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfButtonEffect(extras) {
    _reporterNs.report("ButtonEffect", "./ButtonEffect", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      EventHandler = _cc.EventHandler;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      ButtonEffect = _unresolved_2.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "da96en7WYpPTaPIkO1l/Nux", "ButtonTouchLong", undefined);
      /*
       * @Author: dgflash
       * @Date: 2022-04-14 17:08:01
       * @LastEditors: dgflash
       * @LastEditTime: 2022-04-14 18:15:42
       */


      __checkObsolete__(['EventHandler', 'EventTouch', '_decorator']);

      ({
        ccclass,
        property,
        menu
      } = _decorator);

      _export("ButtonTouchLong", ButtonTouchLong = (_dec = ccclass("ButtonTouchLong"), _dec2 = menu('ui/button/ButtonTouchLong'), _dec3 = property({
        tooltip: "长按时间（秒）"
      }), _dec4 = property({
        type: [EventHandler],
        tooltip: "长按时间（秒）"
      }), _dec(_class = _dec2(_class = (_class2 = class ButtonTouchLong extends (_crd && ButtonEffect === void 0 ? (_reportPossibleCrUseOfButtonEffect({
        error: Error()
      }), ButtonEffect) : ButtonEffect) {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "time", _descriptor, this);

          _initializerDefineProperty(this, "clickEvents", _descriptor2, this);

          this._passTime = 0;
          this._isTouchLong = true;
          this._event = null;
        }

        onLoad() {
          this._isTouchLong = false;
          super.onLoad();
        }
        /** 触摸开始 */


        onTouchtStart(event) {
          this._event = event;
          this._passTime = 0;
          super.onTouchtStart(event);
        }
        /** 触摸结束 */


        onTouchEnd(event) {
          if (this._passTime > this.time) {
            event.propagationStopped = true;
          }

          this._event = null;
          this._passTime = 0;
          this._isTouchLong = false;
          super.onTouchEnd(event);
        }

        removeTouchLong() {
          this._event = null;
          this._isTouchLong = false;
        }
        /** 引擎更新事件 */


        update(dt) {
          if (this._event && !this._isTouchLong) {
            this._passTime += dt;

            if (this._passTime >= this.time) {
              this._isTouchLong = true;
              this.clickEvents.forEach(event => {
                event.emit([event.customEventData]);
              });
              this.removeTouchLong();
            }
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "time", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 1;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "clickEvents", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      })), _class2)) || _class) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=8d5688efe599050a108411437380f338714284b1.js.map