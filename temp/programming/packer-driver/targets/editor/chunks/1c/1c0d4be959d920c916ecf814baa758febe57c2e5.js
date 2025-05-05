System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Quat, Vec3, cObject, Trigger, Player, PhysicsGroup, _dec, _class, _crd, ccclass, property, tempPos, tempRot, Enemy;

  function _reportPossibleCrUseOfcBody(extras) {
    _reporterNs.report("cBody", "../../collision/Body", _context.meta, extras);
  }

  function _reportPossibleCrUseOfcObject(extras) {
    _reporterNs.report("cObject", "../../collision/Object", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTrigger(extras) {
    _reporterNs.report("Trigger", "../../collision/Object", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPlayer(extras) {
    _reporterNs.report("Player", "./player", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPhysicsGroup(extras) {
    _reporterNs.report("PhysicsGroup", "../../../game/common/config/ConstDefine", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Quat = _cc.Quat;
      Vec3 = _cc.Vec3;
    }, function (_unresolved_2) {
      cObject = _unresolved_2.cObject;
      Trigger = _unresolved_2.Trigger;
    }, function (_unresolved_3) {
      Player = _unresolved_3.Player;
    }, function (_unresolved_4) {
      PhysicsGroup = _unresolved_4.PhysicsGroup;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "ab37babyJFDhI5irIYLsBtw", "enemy", undefined);

      __checkObsolete__(['_decorator', 'instantiate', 'PhysicsSystem', 'Prefab', 'Quat', 'Vec3']);

      ({
        ccclass,
        property
      } = _decorator);
      tempPos = new Vec3();
      tempRot = new Quat();

      _export("Enemy", Enemy = (_dec = ccclass('Enemy'), _dec(_class = class Enemy extends (_crd && cObject === void 0 ? (_reportPossibleCrUseOfcObject({
        error: Error()
      }), cObject) : cObject) {
        constructor(...args) {
          super(...args);
          //获取默认物理控制面板的分组信息
          this.PLAYER = (_crd && PhysicsGroup === void 0 ? (_reportPossibleCrUseOfPhysicsGroup({
            error: Error()
          }), PhysicsGroup) : PhysicsGroup)["player"];
          this.BULLET = (_crd && PhysicsGroup === void 0 ? (_reportPossibleCrUseOfPhysicsGroup({
            error: Error()
          }), PhysicsGroup) : PhysicsGroup)["bullet"];
        }

        init() {
          //重置状态
          this.follow(); //跟随速度和方向

          this.velocity.set(this.tryVelocity);
        }

        update(dt) {
          //计算新位置
          let pos = this.getPosition();
          let velocity = this.velocity;
          tempPos.x = pos.x + velocity.x * dt;
          tempPos.y = pos.y + velocity.y * dt;
          tempPos.z = pos.z + velocity.z * dt;
          this.setPosition(tempPos);
          this.follow();
        } //跟随主角


        follow() {
          let scale = this.node.worldScale;
          let pos = this.node.worldPosition;
          let tartet = (_crd && Player === void 0 ? (_reportPossibleCrUseOfPlayer({
            error: Error()
          }), Player) : Player).inst.node.worldPosition;
          Vec3.subtract(this.tryVelocity, tartet, pos).normalize(); //尝试最大跟随速度(有需要，可以自己设置)

          let maxVelocity = this.body.maxVelocity;
          this.tryVelocity.multiplyScalar(maxVelocity); //调整转向

          let x = Math.abs(scale.x),
              y = scale.y,
              z = scale.z;
          scale.set(x * (this.tryVelocity.x < 0 ? -1 : 1), y, z);
          this.setScale(scale);
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
          }
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=1c0d4be959d920c916ecf814baa758febe57c2e5.js.map