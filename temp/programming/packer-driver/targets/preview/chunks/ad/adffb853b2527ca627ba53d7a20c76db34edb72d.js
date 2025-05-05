System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Vec3, _decorator, Dirty, Trigger, cObject, Player, PhysicsGroup, _dec, _class, _class2, _descriptor, _descriptor2, _crd, ccclass, property, detector;

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
      Vec3 = _cc.Vec3;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      Dirty = _unresolved_2.Dirty;
      Trigger = _unresolved_2.Trigger;
      cObject = _unresolved_2.cObject;
    }, function (_unresolved_3) {
      Player = _unresolved_3.Player;
    }, function (_unresolved_4) {
      PhysicsGroup = _unresolved_4.PhysicsGroup;
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
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "attackRaidus", _descriptor, this);

          _initializerDefineProperty(this, "collectRaidus", _descriptor2, this);

          //获取默认物理控制面板的分组信息
          this.GOODS = (_crd && PhysicsGroup === void 0 ? (_reportPossibleCrUseOfPhysicsGroup({
            error: Error()
          }), PhysicsGroup) : PhysicsGroup).goods;
          this.ENEMY = (_crd && PhysicsGroup === void 0 ? (_reportPossibleCrUseOfPhysicsGroup({
            error: Error()
          }), PhysicsGroup) : PhysicsGroup).enemy;
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

          var cb = b.getCenter(); // b.getPosition()

          var ca = this.body.getCenter(); // this.body.getPosition();

          var lengthSqr = Vec3.squaredDistance(ca, cb); //攻击半径

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
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "collectRaidus", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=adffb853b2527ca627ba53d7a20c76db34edb72d.js.map