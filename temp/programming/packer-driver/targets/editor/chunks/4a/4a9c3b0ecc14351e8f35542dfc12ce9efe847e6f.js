System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, PhysicsSystem, Vec3, _decorator, Dirty, Trigger, cObject, Player, _dec, _class, _class2, _descriptor, _descriptor2, _crd, ccclass, property, detector;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfcBody(extras) {
    _reporterNs.report("cBody", "../../collision/Body", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDirty(extras) {
    _reporterNs.report("Dirty", "../../collision/Object", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTrigger(extras) {
    _reporterNs.report("Trigger", "../../collision/Object", _context.meta, extras);
  }

  function _reportPossibleCrUseOfcObject(extras) {
    _reporterNs.report("cObject", "../../collision/Object", _context.meta, extras);
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
      PhysicsSystem = _cc.PhysicsSystem;
      Vec3 = _cc.Vec3;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      Dirty = _unresolved_2.Dirty;
      Trigger = _unresolved_2.Trigger;
      cObject = _unresolved_2.cObject;
    }, function (_unresolved_3) {
      Player = _unresolved_3.Player;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "d96b6StHElCqLiLQGDzzA38", "detector", undefined);

      __checkObsolete__(['PhysicsSystem', 'Vec3', '_decorator']);

      ({
        ccclass,
        property
      } = _decorator); //Payer 探测触发器

      _export("detector", detector = (_dec = ccclass('detector'), _dec(_class = (_class2 = class detector extends (_crd && cObject === void 0 ? (_reportPossibleCrUseOfcObject({
        error: Error()
      }), cObject) : cObject) {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "attackRaidus", _descriptor, this);

          _initializerDefineProperty(this, "collectRaidus", _descriptor2, this);

          //获取默认物理控制面板的分组信息
          this.GOODS = PhysicsSystem.PhysicsGroup["goods"];
          this.ENEMY = PhysicsSystem.PhysicsGroup["enemy"];
        }

        start() {
          //自定义设置掩码,收集范围内的敌人和物品
          this.body.group = 0; //不接受任何掩码

          this.body.mask = this.ENEMY | this.GOODS;
        }

        update(dt) {
          //需要实时，同步更新 player 位置
          this.isDirty |= (_crd && Dirty === void 0 ? (_reportPossibleCrUseOfDirty({
            error: Error()
          }), Dirty) : Dirty).T;
        }

        onTrigger(b, trigger) {
          if (trigger == (_crd && Trigger === void 0 ? (_reportPossibleCrUseOfTrigger({
            error: Error()
          }), Trigger) : Trigger).exit) return; //世界中心坐标

          let cb = b.getCenter(); // b.getPosition()

          let ca = this.body.getCenter(); // this.body.getPosition();

          let lengthSqr = Vec3.squaredDistance(ca, cb); //攻击半径

          if (lengthSqr < this.attackRaidus * this.attackRaidus) {
            if (b.group == this.ENEMY) {
              (_crd && Player === void 0 ? (_reportPossibleCrUseOfPlayer({
                error: Error()
              }), Player) : Player).inst.onAttack(b);
            }
          } //收集半径


          if (lengthSqr < this.collectRaidus * this.collectRaidus) {
            if (b.group == this.GOODS) {
              (_crd && Player === void 0 ? (_reportPossibleCrUseOfPlayer({
                error: Error()
              }), Player) : Player).inst.onCollect(b);
            }
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "attackRaidus", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "collectRaidus", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=4a9c3b0ecc14351e8f35542dfc12ce9efe847e6f.js.map