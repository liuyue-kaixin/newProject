System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Component, Node, Prefab, Quat, Vec3, _decorator, Bullet, BulletHell, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _crd, ccclass, property, tempPos, tempRot, Gun;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfBullet(extras) {
    _reporterNs.report("Bullet", "./bullet", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBulletHell(extras) {
    _reporterNs.report("BulletHell", "./bulletHell", _context.meta, extras);
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
      Prefab = _cc.Prefab;
      Quat = _cc.Quat;
      Vec3 = _cc.Vec3;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      Bullet = _unresolved_2.Bullet;
    }, function (_unresolved_3) {
      BulletHell = _unresolved_3.BulletHell;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "fe09d6P9R9NZ7Zg2YZ/bJ5g", "gun", undefined);

      __checkObsolete__(['Component', 'Node', 'Prefab', 'Quat', 'Vec3', '_decorator']);

      ({
        ccclass,
        property
      } = _decorator);
      tempPos = new Vec3();
      tempRot = new Quat();

      _export("Gun", Gun = (_dec = ccclass('Gun'), _dec2 = property(Prefab), _dec3 = property(Node), _dec(_class = (_class2 = class Gun extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "bullet", _descriptor, this);

          _initializerDefineProperty(this, "point", _descriptor2, this);

          //子弹射锚点
          _initializerDefineProperty(this, "speed", _descriptor3, this);

          //子弹飞行最大速度
          _initializerDefineProperty(this, "lifeTime", _descriptor4, this);

          //子弹飞行最长时间
          _initializerDefineProperty(this, "cycleTime", _descriptor5, this);

          //子弹发射间隔
          this.minDist = 0;
          //最近发射位置
          this.nextCycle = 0;
          //下次发射时间
          this.isShoot = false;
          //是否上弹
          this.direction = new Vec3();
        }

        //发射方向 
        shoot(targetWorldPos) {
          //是否可以上弹
          if (this.nextCycle > 0) return;
          Vec3.subtract(tempPos, targetWorldPos, this.node.worldPosition); //计算与怪的距离

          var lengthSqr = tempPos.lengthSqr();

          if (!this.isShoot) {
            //首次上弹记录
            this.isShoot = true;
            this.minDist = lengthSqr;
            this.direction.set(tempPos);
            return;
          } //保留最近的怪


          if (lengthSqr < this.minDist) {
            this.minDist = lengthSqr;
            this.direction.set(tempPos);
          }
        }

        update(dt) {
          this.nextCycle -= dt;

          if (this.isShoot) {
            this.isShoot = false;
            this.nextCycle = this.cycleTime;
            var parent = (_crd && BulletHell === void 0 ? (_reportPossibleCrUseOfBulletHell({
              error: Error()
            }), BulletHell) : BulletHell).inst.bullets;
            var bullet = (_crd && Bullet === void 0 ? (_reportPossibleCrUseOfBullet({
              error: Error()
            }), Bullet) : Bullet).get(this.bullet);
            bullet.insert(parent); //添加到显示父节点

            bullet.init(); //parent.getComponent(UITransform).convertToNodeSpaceAR(this.point.worldPosition,tempPos);
            //枪管挂点世界坐标和子弹父亲节点世界坐标的偏移坐标，就是实际当前的子坐标，其实和上面转换是等价的

            Vec3.subtract(tempPos, this.point.worldPosition, parent.worldPosition);
            bullet.setPosition(tempPos); //计算发射的起点
            //计算发射角度

            var dir = this.direction.normalize();
            var angle = Math.atan2(dir.y, dir.x);
            Quat.rotateZ(tempRot, Quat.IDENTITY, angle);
            bullet.setRotation(tempRot); //发射速度和生命时长

            bullet.velocity.set(dir).multiplyScalar(this.speed);
            bullet.lifeTime = this.lifeTime; //调整枪管瞄准方向

            this.node.rotation = tempRot;
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "bullet", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "point", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "speed", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 1.0;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "lifeTime", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.5;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "cycleTime", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.5;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=acc2ca401e1ec2a4819aefe60a3ba2f8793f1817.js.map