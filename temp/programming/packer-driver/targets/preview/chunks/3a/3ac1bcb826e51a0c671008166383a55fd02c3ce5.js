System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Component, Node, Vec3, _decorator, Timer, Vec3Util, _dec, _class, _crd, ccclass, property, MoveTo;

  function _reportPossibleCrUseOfTimer(extras) {
    _reporterNs.report("Timer", "../../core/common/timer/Timer", _context.meta, extras);
  }

  function _reportPossibleCrUseOfVec3Util(extras) {
    _reporterNs.report("Vec3Util", "../../core/utils/Vec3Util", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Component = _cc.Component;
      Node = _cc.Node;
      Vec3 = _cc.Vec3;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      Timer = _unresolved_2.Timer;
    }, function (_unresolved_3) {
      Vec3Util = _unresolved_3.Vec3Util;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "5e22a+qWUpI6ZHSVRRj2DYT", "MoveTo", undefined);
      /*
       * @Author: dgflash
       * @Date: 2022-03-25 18:12:10
       * @LastEditors: dgflash
       * @LastEditTime: 2023-01-19 14:59:50
       */


      __checkObsolete__(['Component', 'Node', 'Vec3', '_decorator']);

      ({
        ccclass,
        property
      } = _decorator);
      /** 移动到指定目标位置 */

      _export("MoveTo", MoveTo = (_dec = ccclass('MoveTo'), _dec(_class = class MoveTo extends Component {
        constructor() {
          super(...arguments);

          /** 目标位置 */
          this.target = null;

          /** 移动方向 */
          this.velocity = (_crd && Vec3Util === void 0 ? (_reportPossibleCrUseOfVec3Util({
            error: Error()
          }), Vec3Util) : Vec3Util).zero;

          /** 移动速度（每秒移动的像素距离） */
          this.speed = 0;

          /** 是否计算将 Y 轴带入计算 */
          this.hasYAxis = true;

          /** 坐标标（默认本地坐标） */
          this.ns = Node.NodeSpace.LOCAL;

          /** 偏移距离 */
          this.offset = 0;

          /** 偏移向量 */
          this.offsetVector = null;

          /** 移动开始 */
          this.onStart = null;

          /** 移动完成回调 */
          this.onComplete = null;

          /** 距离变化时 */
          this.onChange = null;

          /** 延时触发器 */
          this.timer = new (_crd && Timer === void 0 ? (_reportPossibleCrUseOfTimer({
            error: Error()
          }), Timer) : Timer)();

          /** 终点备份 */
          this.end = null;
        }

        update(dt) {
          var end;
          console.assert(this.speed > 0, "移动速度必须要大于零");

          if (this.target instanceof Node) {
            end = this.ns == Node.NodeSpace.WORLD ? this.target.worldPosition : this.target.position;
          } else {
            end = this.target;
          } // 移动目标节点被释放时


          if (end == null) {
            this.exit();
            return;
          } // 目标移动后，重计算移动方向与移动到目标点的速度


          if (this.end == null || !this.end.strictEquals(end)) {
            var _this$onChange;

            var target = end.clone();

            if (this.offsetVector) {
              target = target.add(this.offsetVector);
            }

            if (this.hasYAxis == false) target.y = 0; // 移动方向与移动数度

            var start = this.ns == Node.NodeSpace.WORLD ? this.node.worldPosition : this.node.position;
            this.velocity = (_crd && Vec3Util === void 0 ? (_reportPossibleCrUseOfVec3Util({
              error: Error()
            }), Vec3Util) : Vec3Util).sub(target, start).normalize(); // 移动时间与目标偏位置计算

            var distance = Vec3.distance(start, target) - this.offset; // 目标位置修改事件

            (_this$onChange = this.onChange) == null || _this$onChange.call(this);

            if (distance <= 0) {
              this.exit();
              return;
            } else {
              var _this$onStart;

              (_this$onStart = this.onStart) == null || _this$onStart.call(this);
              this.timer.step = distance / this.speed;
              this.end = end.clone();
            }
          }

          if (this.speed > 0) {
            var trans = (_crd && Vec3Util === void 0 ? (_reportPossibleCrUseOfVec3Util({
              error: Error()
            }), Vec3Util) : Vec3Util).mul(this.velocity, this.speed * dt);
            if (this.ns == Node.NodeSpace.WORLD) this.node.worldPosition = (_crd && Vec3Util === void 0 ? (_reportPossibleCrUseOfVec3Util({
              error: Error()
            }), Vec3Util) : Vec3Util).add(this.node.worldPosition, trans);else this.node.position = (_crd && Vec3Util === void 0 ? (_reportPossibleCrUseOfVec3Util({
              error: Error()
            }), Vec3Util) : Vec3Util).add(this.node.position, trans);
          } // 移动完成事件


          if (this.timer.update(dt)) {
            if (this.offset == 0) {
              if (this.ns == Node.NodeSpace.WORLD) this.node.worldPosition = this.end;else this.node.position = this.end;
            }

            this.exit();
          }
        }

        exit() {
          var _this$onComplete;

          (_this$onComplete = this.onComplete) == null || _this$onComplete.call(this);
          this.destroy();
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=3ac1bcb826e51a0c671008166383a55fd02c3ce5.js.map