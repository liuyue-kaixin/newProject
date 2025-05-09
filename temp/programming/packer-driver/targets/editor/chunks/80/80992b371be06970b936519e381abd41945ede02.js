System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Input, Prefab, Quat, Vec3, _decorator, Trigger, cObject, BulletHell, Gun, Skill, _dec, _dec2, _class, _class2, _descriptor, _class3, _crd, ccclass, property, tempPos, tempRot, Player;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfcBody(extras) {
    _reporterNs.report("cBody", "../../collision/Body", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTrigger(extras) {
    _reporterNs.report("Trigger", "../../collision/Object", _context.meta, extras);
  }

  function _reportPossibleCrUseOfcObject(extras) {
    _reporterNs.report("cObject", "../../collision/Object", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBulletHell(extras) {
    _reporterNs.report("BulletHell", "./bulletHell", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGun(extras) {
    _reporterNs.report("Gun", "./gun", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSkill(extras) {
    _reporterNs.report("Skill", "./skill", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Input = _cc.Input;
      Prefab = _cc.Prefab;
      Quat = _cc.Quat;
      Vec3 = _cc.Vec3;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      Trigger = _unresolved_2.Trigger;
      cObject = _unresolved_2.cObject;
    }, function (_unresolved_3) {
      BulletHell = _unresolved_3.BulletHell;
    }, function (_unresolved_4) {
      Gun = _unresolved_4.Gun;
    }, function (_unresolved_5) {
      Skill = _unresolved_5.Skill;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "069bfPViMNIZohyngFLLVnE", "player", undefined);

      __checkObsolete__(['Input', 'Prefab', 'Quat', 'Vec3', '_decorator']);

      ({
        ccclass,
        property
      } = _decorator);
      tempPos = new Vec3();
      tempRot = new Quat();

      _export("Player", Player = (_dec = ccclass('Player'), _dec2 = property(Prefab), _dec(_class = (_class2 = (_class3 = class Player extends (_crd && cObject === void 0 ? (_reportPossibleCrUseOfcObject({
        error: Error()
      }), cObject) : cObject) {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "skill", _descriptor, this);

          this.guns = [];
          this.velocity = new Vec3();
        }

        static get inst() {
          return this._inst;
        }

        onLoad() {
          super.onLoad();
          Player._inst = this;
        }

        start() {
          //获取当前枪枝
          this.guns = this.node.getComponentsInChildren(_crd && Gun === void 0 ? (_reportPossibleCrUseOfGun({
            error: Error()
          }), Gun) : Gun); //绑定摇杆回调

          const joystick = (_crd && BulletHell === void 0 ? (_reportPossibleCrUseOfBulletHell({
            error: Error()
          }), BulletHell) : BulletHell).inst.joystick;

          if (joystick) {
            joystick.init(event => {
              let angle = event.angle;
              let ratio = event.ratio;

              switch (event.type) {
                case Input.EventType.TOUCH_START:
                  this.velocity.set(Vec3.ZERO);
                  break;

                case Input.EventType.TOUCH_MOVE:
                  this.velocity.set(Math.cos(angle), Math.sin(angle), 0);
                  this.velocity.multiplyScalar(this.maxVelocity * ratio);
                  break;

                case Input.EventType.TOUCH_END:
                  this.velocity.set(Vec3.ZERO);
                  break;
              }
            });
          }
        }

        update(dt) {
          //计算新位置
          let pos = this.getPosition();
          let velocity = this.velocity;
          tempPos.x = pos.x + velocity.x * dt;
          tempPos.y = pos.y + velocity.y * dt;
          tempPos.z = pos.z + velocity.z * dt;
          this.setPosition(tempPos);
        }

        onAttack(b) {
          //进入攻击范围
          let guns = this.guns;
          let length = guns.length;

          for (let i = 0; i < length; i++) {
            let postion = b.getCenter();
            guns[i].shoot(postion);
          }
        }

        onSkill() {
          let angle = Math.random() * Math.PI * 2;

          for (let i = 0; i < 3; i++) {
            let parent = (_crd && BulletHell === void 0 ? (_reportPossibleCrUseOfBulletHell({
              error: Error()
            }), BulletHell) : BulletHell).inst.bullets;
            let skill = (_crd && Skill === void 0 ? (_reportPossibleCrUseOfSkill({
              error: Error()
            }), Skill) : Skill).get(this.skill);

            if (skill) {
              skill.insert(parent);
              skill.init();
              Vec3.subtract(tempPos, this.node.worldPosition, parent.worldPosition);
              skill.setPosition(tempPos); //发射速度和生命时长

              let speed = 300;
              angle += Math.PI * 2 / 3;
              let x = Math.cos(angle),
                  y = Math.sin(angle);
              skill.velocity.set(x, y, 0).multiplyScalar(speed);
              skill.angle = 0;
              skill.lifeTime = 3;
            }
          }
        }

        onCollect(b) {//进入拾取范围
        }

        onTrigger(b, trigger) {
          if (trigger == (_crd && Trigger === void 0 ? (_reportPossibleCrUseOfTrigger({
            error: Error()
          }), Trigger) : Trigger).exit) return; //碰撞到敌方
          //自行扣血或者死亡
        }

      }, _class3._inst = null, _class3), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "skill", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=80992b371be06970b936519e381abd41945ede02.js.map