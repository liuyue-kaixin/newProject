System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Mat4, Vec3, MathUtil, Vec3Util, _crd;

  function _reportPossibleCrUseOfMathUtil(extras) {
    _reporterNs.report("MathUtil", "./MathUtil", _context.meta, extras);
  }

  _export("Vec3Util", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Mat4 = _cc.Mat4;
      Vec3 = _cc.Vec3;
    }, function (_unresolved_2) {
      MathUtil = _unresolved_2.MathUtil;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "38947ih8d5EQ7HG4buug+SR", "Vec3Util", undefined);

      __checkObsolete__(['Mat4', 'Vec3']);

      /** 向量工具 */
      _export("Vec3Util", Vec3Util = class Vec3Util {
        /**
         * X轴
         */
        static get x() {
          return new Vec3(1, 0, 0);
        }
        /**
         * Y轴
         */


        static get y() {
          return new Vec3(0, 1, 0);
        }
        /**
         * Z轴
         */


        static get z() {
          return new Vec3(0, 0, 1);
        }
        /**
         * 左向量
         */


        static get left() {
          return new Vec3(-1, 0, 0);
        }
        /**
         * 右向量
         */


        static get right() {
          return new Vec3(1, 0, 0);
        }
        /**
         * 上向量
         */


        static get up() {
          return new Vec3(0, 1, 0);
        }
        /**
         * 下向量
         */


        static get down() {
          return new Vec3(0, -1, 0);
        }
        /**
         * 前向量
         */


        static get forward() {
          return new Vec3(0, 0, 1);
        }
        /**
         * 后向量
         */


        static get back() {
          return new Vec3(0, 0, -1);
        }
        /**
         * 1向量
         */


        static get one() {
          return new Vec3(1, 1, 1);
        }
        /**
         * 0向量
         */


        static get zero() {
          return new Vec3(0, 0, 0);
        }
        /**
         * 随时间变化进度值
         * @param start  起始位置
         * @param end    结束位置
         * @param t      进度[0，1]
         */


        static progress(start, end, t) {
          var current = new Vec3();
          current.x = (_crd && MathUtil === void 0 ? (_reportPossibleCrUseOfMathUtil({
            error: Error()
          }), MathUtil) : MathUtil).progress(start.x, end.x, t);
          current.y = (_crd && MathUtil === void 0 ? (_reportPossibleCrUseOfMathUtil({
            error: Error()
          }), MathUtil) : MathUtil).progress(start.y, end.y, t);
          current.z = (_crd && MathUtil === void 0 ? (_reportPossibleCrUseOfMathUtil({
            error: Error()
          }), MathUtil) : MathUtil).progress(start.z, end.z, t);
          return current;
        }
        /**
         * 求两个三维向量的和
         * @param pos1  向量1
         * @param pos2  向量2
         */


        static add(pos1, pos2) {
          var outPos = new Vec3();
          Vec3.add(outPos, pos1, pos2);
          return outPos;
        }
        /**
         * 求两个三维向量的差
         * @param pos1  向量1
         * @param pos2  向量2
         */


        static sub(pos1, pos2) {
          var outPos = new Vec3();
          Vec3.subtract(outPos, pos1, pos2);
          return outPos;
        }
        /**
         * 三维向量乘以常量
         * @param pos     向量
         * @param scalar  常量
         */


        static mul(pos, scalar) {
          var outPos = new Vec3();
          Vec3.multiplyScalar(outPos, pos, scalar);
          return outPos;
        }
        /**
         * 三维向量除常量
         * @param pos     向量
         * @param scalar  常量
         */


        static div(pos, scalar) {
          var outPos = new Vec3();
          outPos.x = pos.x / scalar;
          outPos.y = pos.y / scalar;
          outPos.z = pos.z / scalar;
          return outPos;
        }
        /**
         * 判断两个三维向量的值是否相等
         * @param pos1  向量1
         * @param pos2  向量2
         */


        static equals(pos1, pos2) {
          if (pos1.x == pos2.x && pos1.y == pos2.y && pos1.z == pos2.z) {
            return true;
          }

          return false;
        }
        /**
         * 三维向量的模
         * @param pos  向量
         */


        static magnitude(pos) {
          return pos.length();
        }
        /**
         * 三维向量归一化
         * @param pos  向量
         */


        static normalize(pos) {
          var outPos = new Vec3(pos.x, pos.y, pos.z);
          return outPos.normalize();
        }
        /**
         * 获得位置1，到位置2的方向
         * @param pos1  向量1
         * @param pos2  向量2
         */


        static direction(pos1, pos2) {
          var outPos = new Vec3();
          Vec3.subtract(outPos, pos2, pos1);
          return outPos.normalize();
        }
        /**
         * 获得两点间的距离
         * @param pos1  向量1
         * @param pos2  向量2
         */


        static distance(pos1, pos2) {
          return Vec3.distance(pos1, pos2);
        }
        /**
         * 插值运算
         * @param posStart  开始俏步
         * @param posEnd    结束位置
         * @param t         时间
         */


        static lerp(posStart, posEnd, t) {
          return this.bezierOne(t, posStart, posEnd);
        }
        /**
         * 球面插值
         * @param from  起点
         * @param to    终点
         * @param t     时间
         */


        static slerp(from, to, t) {
          if (t <= 0) {
            return from;
          } else if (t >= 1) {
            return to;
          }

          var dir = this.rotateTo(from, to, Vec3.angle(from, to) / Math.PI * 180 * t);
          var lenght = to.length() * t + from.length() * (1 - t);
          return dir.normalize().multiplyScalar(lenght);
        }
        /**
         * 向量旋转一个角度
         * @param from  起点
         * @param to    终点
         * @param angle 角并
         */


        static rotateTo(from, to, angle) {
          //如果两个方向角度为0，则返回目标
          if (Vec3.angle(from, to) == 0) {
            return to;
          }

          var axis = new Vec3(); // 获得旋转轴

          Vec3.cross(axis, from, to);
          axis.normalize();
          var radian = angle * Math.PI / 180; // 获得弧度

          var rotateMatrix = new Mat4();
          rotateMatrix.rotate(radian, axis);
          return new Vec3(from.x * rotateMatrix.m00 + from.y * rotateMatrix.m04 + from.z * rotateMatrix.m08, from.x * rotateMatrix.m01 + from.y * rotateMatrix.m05 + from.z * rotateMatrix.m09, from.x * rotateMatrix.m02 + from.y * rotateMatrix.m06 + from.z * rotateMatrix.m10);
        }
        /**
         * 一次贝塞尔即为线性插值函数
         * @param t 
         * @param posStart 
         * @param posEnd 
         * @returns 
         */


        static bezierOne(t, posStart, posEnd) {
          if (t > 1) {
            t = 1;
          } else if (t < 0) {
            t = 0;
          }

          var pStart = posStart.clone();
          var pEnd = posEnd.clone();
          return pStart.multiplyScalar(1 - t).add(pEnd.multiplyScalar(t));
        }
        /**
         * 二次贝塞尔曲线
         * @param t 
         * @param posStart 
         * @param posCon 
         * @param posEnd 
         * @returns 
         */


        static bezierTwo(t, posStart, posCon, posEnd) {
          if (t > 1) {
            t = 1;
          } else if (t < 0) {
            t = 0;
          }

          var n = 1 - t;
          var tt = t * t;
          var pStart = posStart.clone();
          var pos = new Vec3();
          var pCon = posCon.clone();
          var pEnd = posEnd.clone();
          pos.add(pStart.multiplyScalar(n * n));
          pos.add(pCon.multiplyScalar(2 * n * t));
          pos.add(pEnd.multiplyScalar(tt));
          return pos;
        }
        /**
         * 三次贝塞尔
         * @param t 
         * @param posStart 
         * @param posCon1 
         * @param posCon2 
         * @param posEnd 
         * @returns 
         */


        static bezierThree(t, posStart, posCon1, posCon2, posEnd) {
          if (t > 1) {
            t = 1;
          } else if (t < 0) {
            t = 0;
          }

          var n = 1 - t;
          var nn = n * n;
          var nnn = nn * n;
          var tt = t * t;
          var ttt = tt * t;
          var pStart = posStart.clone();
          var pos = posStart.clone();
          var pCon1 = posCon1.clone();
          var pCon2 = posCon2.clone();
          var pEnd = posEnd.clone();
          pos.add(pStart.multiplyScalar(nnn));
          pos.add(pCon1.multiplyScalar(3 * nn * t));
          pos.add(pCon2.multiplyScalar(3 * n * tt));
          pos.add(pEnd.multiplyScalar(ttt));
          return pos;
        }
        /**
         * 点乘
         * @param dir1 方向量1
         * @param dir2 方向量2
         */


        static dot(dir1, dir2) {
          var tempDir1 = dir1;
          var tempDir2 = dir2;
          return tempDir1.x * tempDir2.x + tempDir1.y * tempDir2.y + tempDir1.z * tempDir2.z;
        }
        /**
         * 叉乘
         * @param dir1 方向量1
         * @param dir2 方向量2
         */


        static cross(dir1, dir2) {
          var i = new Vec3(1, 0, 0);
          var j = new Vec3(0, 1, 0);
          var k = new Vec3(0, 0, 1);
          var tempDir1 = new Vec3(dir1.x, dir1.y, dir1.z);
          var tempDir2 = new Vec3(dir2.x, dir2.y, dir2.z);
          var iv = i.multiplyScalar(tempDir1.y * tempDir2.z - tempDir2.y * tempDir1.z);
          var jv = j.multiplyScalar(tempDir2.x * tempDir1.z - tempDir1.x * tempDir2.z);
          var kv = k.multiplyScalar(tempDir1.x * tempDir2.y - tempDir2.x * tempDir1.y);
          return iv.add(jv).add(kv);
        }
        /**
         * 获得两个方向向量的角度
         * @param dir1 方向量1
         * @param dir2 方向量2
         */


        static angle(dir1, dir2) {
          var dotValue = this.dot(dir1.clone().normalize(), dir2.clone().normalize());
          return Math.acos(dotValue) / Math.PI * 180 * Math.sign(dotValue);
        }
        /**
         * 获得方向a到方向b的角度（带有方向的角度）
         * @param a 角度a
         * @param b 角度b
         */


        static dirAngle(a, b) {
          var c = Vec3Util.cross(a, b);
          var angle = Vec3Util.angle(a, b); // a 到 b 的夹角

          var sign = Math.sign(Vec3Util.dot(c.normalize(), Vec3Util.cross(b.normalize(), a.normalize())));
          return angle * sign;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=cb887062ac3572787174be7d317cf3f9938da75f.js.map