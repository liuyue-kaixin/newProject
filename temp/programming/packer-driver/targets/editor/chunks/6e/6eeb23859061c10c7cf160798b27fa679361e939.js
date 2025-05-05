System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, instantiate, Quat, Vec3, Trigger, Enemy, _dec, _class, _class2, _crd, ccclass, property, tempPos, tempRot, SnailTail;

  function _reportPossibleCrUseOfcBody(extras) {
    _reporterNs.report("cBody", "../../collision/Body", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTrigger(extras) {
    _reporterNs.report("Trigger", "../../collision/Object", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEnemy(extras) {
    _reporterNs.report("Enemy", "./enemy", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      instantiate = _cc.instantiate;
      Quat = _cc.Quat;
      Vec3 = _cc.Vec3;
    }, function (_unresolved_2) {
      Trigger = _unresolved_2.Trigger;
    }, function (_unresolved_3) {
      Enemy = _unresolved_3.Enemy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "d2a8aUstylHNbyhzHGRhhbK", "snailTail", undefined);

      __checkObsolete__(['_decorator', 'instantiate', 'Prefab', 'Quat', 'Vec3']);

      ({
        ccclass,
        property
      } = _decorator);
      tempPos = new Vec3();
      tempRot = new Quat();

      _export("SnailTail", SnailTail = (_dec = ccclass('SnailTail'), _dec(_class = (_class2 = class SnailTail extends (_crd && Enemy === void 0 ? (_reportPossibleCrUseOfEnemy({
        error: Error()
      }), Enemy) : Enemy) {
        static get(prefab) {
          let snailtail = this.pools.pop();

          if (!snailtail) {
            let node = instantiate(prefab);
            snailtail = node.getComponent(SnailTail);
          }

          return snailtail;
        }

        static put(snailtail) {
          //压入缓存池管理节点
          this.pools.push(snailtail); //移除node不回收body

          snailtail.remove(false);
        }

        onTrigger(b, trigger) {
          if (trigger == (_crd && Trigger === void 0 ? (_reportPossibleCrUseOfTrigger({
            error: Error()
          }), Trigger) : Trigger).exit) return;

          switch (b.group) {
            case this.BULLET:
              //碰到子弹
              break;

            case this.PLAYER:
              //碰到player
              break;
          } //碰撞自我加收


          SnailTail.put(this); //播放死亡特效
          //.........
        }

      }, _class2.pools = [], _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=6eeb23859061c10c7cf160798b27fa679361e939.js.map