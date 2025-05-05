System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, PhysicsSystem, Quat, Vec3, cObject, Trigger, Player, _dec, _class, _crd, ccclass, property, tempPos, tempRot, Enemy;

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

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      PhysicsSystem = _cc.PhysicsSystem;
      Quat = _cc.Quat;
      Vec3 = _cc.Vec3;
    }, function (_unresolved_2) {
      cObject = _unresolved_2.cObject;
      Trigger = _unresolved_2.Trigger;
    }, function (_unresolved_3) {
      Player = _unresolved_3.Player;
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
        constructor() {
          super(...arguments);
          //获取默认物理控制面板的分组信息
          this.PLAYER = PhysicsSystem.PhysicsGroup["player"];
          this.BULLET = PhysicsSystem.PhysicsGroup["bullet"];
        }

        init() {
          //重置状态
          this.follow(); //跟随速度和方向

          this.velocity.set(this.tryVelocity);
        }

        update(dt) {
          //计算新位置
          var pos = this.getPosition();
          var velocity = this.velocity;
          tempPos.x = pos.x + velocity.x * dt;
          tempPos.y = pos.y + velocity.y * dt;
          tempPos.z = pos.z + velocity.z * dt;
          this.setPosition(tempPos);
          this.follow();
        } //跟随主角


        follow() {
          var scale = this.node.worldScale;
          var pos = this.node.worldPosition;
          var tartet = (_crd && Player === void 0 ? (_reportPossibleCrUseOfPlayer({
            error: Error()
          }), Player) : Player).inst.node.worldPosition;
          Vec3.subtract(this.tryVelocity, tartet, pos).normalize(); //尝试最大跟随速度(有需要，可以自己设置)

          var maxVelocity = this.body.maxVelocity;
          this.tryVelocity.multiplyScalar(maxVelocity); //调整转向

          var x = Math.abs(scale.x),
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
//# sourceMappingURL=0e8f738c2b8696f0e11fa91dd83e01dc92caa9f4.js.map