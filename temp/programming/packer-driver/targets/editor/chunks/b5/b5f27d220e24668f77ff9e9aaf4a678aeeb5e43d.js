System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, instantiate, Quat, Vec3, cObject, Trigger, _dec, _class, _class2, _crd, ccclass, property, tempPos, tempRot, Bullet;

  function _reportPossibleCrUseOfcBody(extras) {
    _reporterNs.report("cBody", "../../collision/Body", _context.meta, extras);
  }

  function _reportPossibleCrUseOfcObject(extras) {
    _reporterNs.report("cObject", "../../collision/Object", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTrigger(extras) {
    _reporterNs.report("Trigger", "../../collision/Object", _context.meta, extras);
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
      cObject = _unresolved_2.cObject;
      Trigger = _unresolved_2.Trigger;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "10c41wzOQZNApJbN8KIuhYr", "bullet", undefined);

      __checkObsolete__(['_decorator', 'instantiate', 'Prefab', 'Quat', 'Vec3']);

      ({
        ccclass,
        property
      } = _decorator);
      tempPos = new Vec3();
      tempRot = new Quat();

      _export("Bullet", Bullet = (_dec = ccclass('Bullet'), _dec(_class = (_class2 = class Bullet extends (_crd && cObject === void 0 ? (_reportPossibleCrUseOfcObject({
        error: Error()
      }), cObject) : cObject) {
        constructor(...args) {
          super(...args);
          //生命周期，回收时间
          this.lifeTime = 0;
        }

        static get(prefab) {
          let bullet = this.pools.pop() || null;

          if (!bullet) {
            let node = instantiate(prefab);
            bullet = node.getComponent(Bullet);
          }

          return bullet;
        }

        static put(bullet) {
          //压入缓存池管理节点
          this.pools.push(bullet); //移除node不回收body

          bullet.remove(false);
        }

        //attack: number = 0;
        update(dt) {
          this.lifeTime -= dt;

          if (this.lifeTime < 0) {
            //生命周期回收
            Bullet.put(this);
            return;
          } //计算新位置


          let pos = this.getPosition();
          let velocity = this.velocity;
          tempPos.x = pos.x + velocity.x * dt;
          tempPos.y = pos.y + velocity.y * dt;
          tempPos.z = pos.z + velocity.z * dt;
          this.setPosition(tempPos);
        }

        onTrigger(b, trigger) {
          if (trigger == (_crd && Trigger === void 0 ? (_reportPossibleCrUseOfTrigger({
            error: Error()
          }), Trigger) : Trigger).exit) return; //击中回收子弹

          Bullet.put(this); //播放爆炸特效
          //.........
        }

      }, _class2.pools = [], _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=b5f27d220e24668f77ff9e9aaf4a678aeeb5e43d.js.map