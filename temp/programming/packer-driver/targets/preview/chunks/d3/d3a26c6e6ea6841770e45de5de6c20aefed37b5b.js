System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Component, StringUtil, Timer, TimerManager, _crd;

  function _reportPossibleCrUseOfStringUtil(extras) {
    _reporterNs.report("StringUtil", "../../utils/StringUtil", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTimer(extras) {
    _reporterNs.report("Timer", "./Timer", _context.meta, extras);
  }

  _export("TimerManager", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Component = _cc.Component;
    }, function (_unresolved_2) {
      StringUtil = _unresolved_2.StringUtil;
    }, function (_unresolved_3) {
      Timer = _unresolved_3.Timer;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "73600VLsIBLOKhOhd7td4P8", "TimerManager", undefined);
      /*
       * @Author: dgflash
       * @Date: 2023-01-19 10:33:49
       * @LastEditors: dgflash
       * @LastEditTime: 2023-01-19 14:37:19
       */


      __checkObsolete__(['Component']);

      /** 时间管理 */
      _export("TimerManager", TimerManager = class TimerManager extends Component {
        constructor() {
          super(...arguments);

          /** 倒计时数据 */
          this.times = {};

          /** 当前游戏进入的时间毫秒值 */
          this.initTime = new Date().getTime();

          /** 服务器时间与本地时间同步 */
          this.serverTime = 0;
        }

        update(dt) {
          // 后台管理倒计时完成事件
          for (var key in this.times) {
            var data = this.times[key];
            var timer = data.timer;

            if (timer.update(dt)) {
              if (data.object[data.field] > 0) {
                data.object[data.field]--; // 倒计时结束触发

                if (data.object[data.field] == 0) {
                  this.onTimerComplete(data);
                } // 触发每秒回调事件  
                else if (data.onSecond) {
                  data.onSecond.call(data.object);
                }
              }
            }
          }
        }
        /** 触发倒计时完成事件 */


        onTimerComplete(data) {
          if (data.onComplete) data.onComplete.call(data.object);
          if (data.event) this.node.dispatchEvent(data.event);
          delete this.times[data.id];
        }
        /**
         * 在指定对象上注册一个倒计时的回调管理器
         * @param object        注册定时器的对象
         * @param field         时间字段
         * @param onSecond      每秒事件
         * @param onComplete    倒计时完成事件
         * @returns 
         * @example
        export class Test extends Component {
            private timeId!: string;
            
            start() {
                // 在指定对象上注册一个倒计时的回调管理器
                this.timeId = oops.timer.register(this, "countDown", this.onSecond, this.onComplete);
            }
            
            private onSecond() {
                console.log("每秒触发一次");
            }
              private onComplete() {
                console.log("倒计时完成触发");
            }
        }
         */


        register(object, field, onSecond, onComplete) {
          var timer = new (_crd && Timer === void 0 ? (_reportPossibleCrUseOfTimer({
            error: Error()
          }), Timer) : Timer)();
          timer.step = 1;
          var data = {};
          data.id = (_crd && StringUtil === void 0 ? (_reportPossibleCrUseOfStringUtil({
            error: Error()
          }), StringUtil) : StringUtil).guid();
          data.timer = timer;
          data.object = object; // 管理对象

          data.field = field; // 时间字段

          data.onSecond = onSecond; // 每秒事件

          data.onComplete = onComplete; // 倒计时完成事件

          this.times[data.id] = data;
          return data.id;
        }
        /** 
         * 在指定对象上注销一个倒计时的回调管理器 
         * @param id         时间对象唯一表示
         * @example
        export class Test extends Component {
            private timeId!: string;
              start() {
                this.timeId = oops.timer.register(this, "countDown", this.onSecond, this.onComplete);
            }
              onDestroy() {
                // 在指定对象上注销一个倒计时的回调管理器
                oops.timer.unRegister(this.timeId);
            }
        }
         */


        unRegister(id) {
          if (this.times[id]) delete this.times[id];
        }
        /**
         * 服务器时间与本地时间同步
         * @param val   服务器时间刻度
         * 
         */


        setServerTime(val) {
          if (val) {
            this.serverTime = val;
          }

          return this.serverTime;
        }

        getServerTime() {
          return this.serverTime + this.getTime();
        }
        /**
         * 格式化日期显示
         * @param format 格式化字符串（例：yyyy-MM-dd hh:mm:ss）
         * @param date   时间对象
         */


        format(format, date) {
          var o = {
            "M+": date.getMonth() + 1,
            // month 
            "d+": date.getDate(),
            // day 
            "h+": date.getHours(),
            // hour 
            "m+": date.getMinutes(),
            // minute 
            "s+": date.getSeconds(),
            // second 
            "q+": Math.floor((date.getMonth() + 3) / 3),
            // quarter 
            "S": date.getMilliseconds() // millisecond 

          };

          if (/(y+)/.test(format)) {
            format = format.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
          }

          for (var k in o) {
            if (new RegExp("(" + k + ")").test(format)) {
              format = format.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length));
            }
          }

          return format;
        }
        /** 获取游戏开始到现在逝去的时间 */


        getTime() {
          return this.getLocalTime() - this.initTime;
        }
        /** 获取本地时间刻度 */


        getLocalTime() {
          return Date.now();
        }
        /** 游戏最小化时记录时间数据 */


        save() {
          for (var key in this.times) {
            this.times[key].startTime = this.getTime();
          }
        }
        /** 游戏最大化时回复时间数据 */


        load() {
          for (var key in this.times) {
            var interval = Math.floor((this.getTime() - (this.times[key].startTime || this.getTime())) / 1000);
            var data = this.times[key];
            data.object[data.field] = data.object[data.field] - interval;

            if (data.object[data.field] < 0) {
              data.object[data.field] = 0;
              this.onTimerComplete(data);
            }

            this.times[key].startTime = null;
          }
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=d3a26c6e6ea6841770e45de5de6c20aefed37b5b.js.map