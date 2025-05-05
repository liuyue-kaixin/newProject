System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, Timer, _crd;

  _export("Timer", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "6021fct1uhJsImEuhdFWC0f", "Timer", undefined);

      /*
       * @Author: dgflash
       * @Date: 2023-01-19 11:09:38
       * @LastEditors: dgflash
       * @LastEditTime: 2023-01-19 14:28:05
       */

      /** 
       * 定时跳动组件 
       * @example
          export class Test extends Component {
              // 创建一个定时跳动组件
              private timer: Timer = new Timer(1);
      
              update(dt: number) {
                  if (this.timer.update(this.dt)) {
                      console.log(每一秒触发一次);
                  }
              }
          }
       */
      _export("Timer", Timer = class Timer {
        get elapsedTime() {
          return this._elapsedTime;
        }

        /** 触发间隔时间（秒） */
        get step() {
          return this._step;
        }

        set step(step) {
          this._step = step; // 每次修改时间

          this._elapsedTime = 0; // 逝去时间
        }

        get progress() {
          return this._elapsedTime / this._step;
        }

        constructor(step) {
          if (step === void 0) {
            step = 0;
          }

          this.callback = null;
          this._elapsedTime = 0;
          this._step = -1;
          this.step = step;
        }

        update(dt) {
          if (this.step <= 0) return false;
          this._elapsedTime += dt;

          if (this._elapsedTime >= this._step) {
            var _this$callback;

            this._elapsedTime -= this._step;
            (_this$callback = this.callback) == null || _this$callback.call(this);
            return true;
          }

          return false;
        }

        reset() {
          this._elapsedTime = 0;
        }

        stop() {
          this._elapsedTime = 0;
          this.step = -1;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=b15d13ae5ae9484fd7cbba27f5559f4bb7bd934c.js.map