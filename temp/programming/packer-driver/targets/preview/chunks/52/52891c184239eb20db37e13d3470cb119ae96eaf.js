System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Quat, toRadian, Vec3, Vec3Util, RotateUtil, _crd;

  function _reportPossibleCrUseOfVec3Util(extras) {
    _reporterNs.report("Vec3Util", "./Vec3Util", _context.meta, extras);
  }

  _export("RotateUtil", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Quat = _cc.Quat;
      toRadian = _cc.toRadian;
      Vec3 = _cc.Vec3;
    }, function (_unresolved_2) {
      Vec3Util = _unresolved_2.Vec3Util;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "103324kr75Hi5d7RZCcRt3P", "RotateUtil", undefined);
      /*
       * @Author: dgflash
       * @Date: 2022-07-26 15:29:57
       * @LastEditors: dgflash
       * @LastEditTime: 2022-09-02 12:08:28
       */


      __checkObsolete__(['Node', 'Quat', 'toRadian', 'Vec3']);

      /** 旋转工具 */
      _export("RotateUtil", RotateUtil = class RotateUtil {
        /**
         * 自由旋转
         * @param target     旋转目标
         * @param axis       围绕旋转的轴
         * @param rad        旋转弧度
         */
        static rotateAround(target, axis, rad) {
          var quat = new Quat();
          Quat.rotateAround(quat, target.getRotation(), axis.normalize(), rad);
          target.setRotation(quat);
        }
        /**
         * 参考瞄准目标,使当前物体围绕瞄准目标旋转
         * 1、先通过弧度计算旋转四元数
         * 2、通过旋转中心点或当前目标点向量相减计算出移动方向
         * 3、计算起始向量旋转后的向量
         * 4、计算旋转后的坐标点
         * @param lookAt  瞄准目标
         * @param target        旋转目标
         * @param axis          围绕旋转的轴(例：Vec3.UP为Y轴)
         * @param rad           旋转弧度(例：delta.x * 1e-2)
         */


        static rotateAroundTarget(lookAt, target, axis, rad) {
          // 计算坐标
          var point_lookAt = lookAt.worldPosition; // 锚点坐标

          var point_target = target.worldPosition; // 目标坐标

          var quat = new Quat();
          var vec3 = new Vec3(); // 算出坐标点的旋转四元数

          Quat.fromAxisAngle(quat, axis, rad); // 计算旋转点和现有点的向量

          Vec3.subtract(vec3, point_target, point_lookAt); // 计算将向量做旋转操作后的向量

          Vec3.transformQuat(vec3, vec3, quat); // 计算目标旋转后的点

          Vec3.add(vec3, point_lookAt, vec3);
          target.setWorldPosition(vec3); // 计算目标朝向瞄准点

          Quat.rotateAround(quat, target.worldRotation, axis, rad);
          Quat.normalize(quat, quat);
          target.setWorldRotation(quat);
        }
        /**
         * 获取心半径边上的位置
         * @param center    圆心
         * @param radius    半径
         * @param angle     角度
         */


        static circularEdgePosition(center, radius, angle) {
          var edge = (_crd && Vec3Util === void 0 ? (_reportPossibleCrUseOfVec3Util({
            error: Error()
          }), Vec3Util) : Vec3Util).z.multiplyScalar(radius); // 距离圆心Z抽的距离

          var dir = (_crd && Vec3Util === void 0 ? (_reportPossibleCrUseOfVec3Util({
            error: Error()
          }), Vec3Util) : Vec3Util).sub(edge, center); // 初始圆心与目标位置的方向

          var vec3 = new Vec3();
          var quat = new Quat(); // 算出坐标点的旋转四元数

          Quat.fromAxisAngle(quat, Vec3.UP, toRadian(angle)); // 计算将向量做旋转操作后的向量

          Vec3.transformQuat(vec3, dir, quat); // 计算目标旋转后的点

          Vec3.add(vec3, center, vec3);
          return vec3;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=52891c184239eb20db37e13d3470cb119ae96eaf.js.map