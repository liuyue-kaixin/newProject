System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, MathUtil, _crd;

  _export("MathUtil", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "8c615ZS4PRMPKPA9ZqKjiJC", "MathUtil", undefined);

      /** 数学工具 */
      _export("MathUtil", MathUtil = class MathUtil {
        /**
         * 获得随机方向
         * @param x -1为左，1为右
         * @returns 
         */
        static sign(x) {
          if (x > 0) {
            return 1;
          }

          if (x < 0) {
            return -1;
          }

          return 0;
        }
        /**
         * 随时间变化进度值
         * @param start 初始值
         * @param end   结束值
         * @param t     时间
         */


        static progress(start, end, t) {
          return start + (end - start) * t;
        }
        /**
         * 插值
         * @param numStart 开始数值
         * @param numEnd   结束数值
         * @param t        时间
         */


        static lerp(numStart, numEnd, t) {
          if (t > 1) {
            t = 1;
          } else if (t < 0) {
            t = 0;
          }

          return numStart * (1 - t) + numEnd * t;
        }
        /**
         * 角度插值
         * @param angle1 角度1
         * @param angle2 角度2
         * @param t      时间
         */


        static lerpAngle(current, target, t) {
          current %= 360;
          target %= 360;
          var dAngle = target - current;

          if (dAngle > 180) {
            target = current - (360 - dAngle);
          } else if (dAngle < -180) {
            target = current + (360 + dAngle);
          }

          return (MathUtil.lerp(current, target, t) % 360 + 360) % 360;
        }
        /**
         * 按一定的速度从一个角度转向令一个角度
         * @param current 当前角度
         * @param target  目标角度
         * @param speed   速度
         */


        static angleTowards(current, target, speed) {
          current %= 360;
          target %= 360;
          var dAngle = target - current;

          if (dAngle > 180) {
            target = current - (360 - dAngle);
          } else if (dAngle < -180) {
            target = current + (360 + dAngle);
          }

          var dir = target - current;

          if (speed > Math.abs(dir)) {
            return target;
          }

          return ((current + speed * Math.sign(dir)) % 360 + 360) % 360;
        }
        /**
         * 获取方位内值，超过时获取对应边界值
         * @param value     值
         * @param minLimit  最小值
         * @param maxLimit  最大值
         */


        static clamp(value, minLimit, maxLimit) {
          if (value < minLimit) {
            return minLimit;
          }

          if (value > maxLimit) {
            return maxLimit;
          }

          return value;
        }
        /**
         * 获得一个值的概率
         * @param value 值
         */


        static probability(value) {
          return Math.random() < value;
        }

      });

      /**
       * 角度转弧度
       */
      MathUtil.deg2Rad = Math.PI / 180;

      /**
       * 弧度转角度
       */
      MathUtil.rad2Deg = 180 / Math.PI;

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=bee678dd436473087ac7018f17cd7c9d6c1313fa.js.map