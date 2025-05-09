System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Component, Node, Vec3, _decorator, Vec3Util, _dec, _class, _crd, ccclass, property, MoveTranslate;

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
      Vec3Util = _unresolved_2.Vec3Util;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "e626612zClLO4OZDEWvT+fr", "MoveTranslate", undefined);
      /*
       * @Author: dgflash
       * @Date: 2022-03-25 18:12:10
       * @LastEditors: dgflash
       * @LastEditTime: 2022-07-25 11:52:23
       */


      __checkObsolete__(['Component', 'Node', 'Vec3', '_decorator']);

      ({
        ccclass,
        property
      } = _decorator);
      /** 角色坐标方式移动 */

      _export("MoveTranslate", MoveTranslate = (_dec = ccclass('MoveTranslate'), _dec(_class = class MoveTranslate extends Component {
        constructor(...args) {
          super(...args);

          /** 移动方向 */
          this.velocity = (_crd && Vec3Util === void 0 ? (_reportPossibleCrUseOfVec3Util({
            error: Error()
          }), Vec3Util) : Vec3Util).zero;

          /** 移动速度 */
          this.speed = 0;
          this.vector = new Vec3();
        }

        update(dt) {
          if (this.speed > 0) {
            Vec3.multiplyScalar(this.vector, this.velocity, this.speed * dt);
            this.node.translate(this.vector, Node.NodeSpace.WORLD);
          }
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=d453594a413b1c7d04c026ac6d6997925a03bf61.js.map