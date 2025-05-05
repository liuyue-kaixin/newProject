System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, CCInteger, Component, instantiate, Node, Prefab, Quat, Sprite, Vec2, Vec3, cCollider, Bullet, Ghost, Player, SnailTail, Skill, Joystick, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _class3, _crd, ccclass, property, tempPos, tempRot, BulletHell;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfcCollider(extras) {
    _reporterNs.report("cCollider", "../../collision/Collider", _context.meta, extras);
  }

  function _reportPossibleCrUseOfcObject(extras) {
    _reporterNs.report("cObject", "../../collision/Object", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBullet(extras) {
    _reporterNs.report("Bullet", "./bullet", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGhost(extras) {
    _reporterNs.report("Ghost", "./ghost", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPlayer(extras) {
    _reporterNs.report("Player", "./player", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSnailTail(extras) {
    _reporterNs.report("SnailTail", "./snailTail", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSkill(extras) {
    _reporterNs.report("Skill", "./skill", _context.meta, extras);
  }

  function _reportPossibleCrUseOfJoystick(extras) {
    _reporterNs.report("Joystick", "../../Joystick", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      CCInteger = _cc.CCInteger;
      Component = _cc.Component;
      instantiate = _cc.instantiate;
      Node = _cc.Node;
      Prefab = _cc.Prefab;
      Quat = _cc.Quat;
      Sprite = _cc.Sprite;
      Vec2 = _cc.Vec2;
      Vec3 = _cc.Vec3;
    }, function (_unresolved_2) {
      cCollider = _unresolved_2.cCollider;
    }, function (_unresolved_3) {
      Bullet = _unresolved_3.Bullet;
    }, function (_unresolved_4) {
      Ghost = _unresolved_4.Ghost;
    }, function (_unresolved_5) {
      Player = _unresolved_5.Player;
    }, function (_unresolved_6) {
      SnailTail = _unresolved_6.SnailTail;
    }, function (_unresolved_7) {
      Skill = _unresolved_7.Skill;
    }, function (_unresolved_8) {
      Joystick = _unresolved_8.Joystick;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "14305yAyJ1MjZu4r7sFo1Ka", "bulletHell", undefined);

      __checkObsolete__(['_decorator', 'CCInteger', 'Component', 'instantiate', 'Node', 'Prefab', 'Quat', 'Sprite', 'Vec2', 'Vec3']);

      ({
        ccclass,
        property
      } = _decorator);
      tempPos = new Vec3();
      tempRot = new Quat();

      _export("BulletHell", BulletHell = (_dec = ccclass('BulletHell'), _dec2 = property(Prefab), _dec3 = property(Prefab), _dec4 = property(Prefab), _dec5 = property(Node), _dec6 = property(Node), _dec7 = property(Node), _dec8 = property(_crd && Joystick === void 0 ? (_reportPossibleCrUseOfJoystick({
        error: Error()
      }), Joystick) : Joystick), _dec9 = property({
        type: CCInteger,
        group: "Enemy Config"
      }), _dec10 = property({
        group: "Enemy Config"
      }), _dec11 = property({
        group: "Enemy Config"
      }), _dec(_class = (_class2 = (_class3 = class BulletHell extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "ghost", _descriptor, this);

          //敌人
          _initializerDefineProperty(this, "snailTail", _descriptor2, this);

          //敌人
          _initializerDefineProperty(this, "player", _descriptor3, this);

          //主角
          _initializerDefineProperty(this, "objects", _descriptor4, this);

          //enemy 显示挂载点
          _initializerDefineProperty(this, "bullets", _descriptor5, this);

          //bullet 显示挂载点
          _initializerDefineProperty(this, "camera", _descriptor6, this);

          //跟随相机
          _initializerDefineProperty(this, "joystick", _descriptor7, this);

          //主角摇杆
          //简单模拟在周期时间内，以主角为中心的半径内产生敌人
          _initializerDefineProperty(this, "max", _descriptor8, this);

          //多敌人同屏数
          _initializerDefineProperty(this, "raidus", _descriptor9, this);

          //刷怪最大半径 
          _initializerDefineProperty(this, "cyclTime", _descriptor10, this);
        }

        static get inst() {
          return this._inst;
        }

        onLoad() {
          BulletHell._inst = this;
        }

        onDestroy() {
          (_crd && cCollider === void 0 ? (_reportPossibleCrUseOfcCollider({
            error: Error()
          }), cCollider) : cCollider).inst.clear();
          (_crd && Ghost === void 0 ? (_reportPossibleCrUseOfGhost({
            error: Error()
          }), Ghost) : Ghost).pools.length = 0;
          (_crd && Skill === void 0 ? (_reportPossibleCrUseOfSkill({
            error: Error()
          }), Skill) : Skill).pools.length = 0;
          (_crd && Bullet === void 0 ? (_reportPossibleCrUseOfBullet({
            error: Error()
          }), Bullet) : Bullet).pools.length = 0;
          (_crd && SnailTail === void 0 ? (_reportPossibleCrUseOfSnailTail({
            error: Error()
          }), SnailTail) : SnailTail).pools.length = 0;
        }

        start() {
          //创建主角直接挂在场景下
          let node = instantiate(this.player);
          this.node.addChild(node);
          const phi2 = 1.3247179572447458;
          const a1 = 1.0 / (phi2 * phi2);
          const a2 = 1.0 / phi2; //定时刷怪

          let i = 1;
          this.schedule(() => {
            if (this.objects.children.length < this.max) {
              let x = (0.5 + a2 * i) % 1;
              let y = (0.5 + a1 * i) % 1;
              let center = (_crd && Player === void 0 ? (_reportPossibleCrUseOfPlayer({
                error: Error()
              }), Player) : Player).inst.getPosition();
              x = (x - 0.5) * this.raidus + center.x;
              y = (y - 0.5) * this.raidus + center.y;
              this.createEnemy(x, y);
              i++;
            }
          }, this.cyclTime);
        }

        createEnemy(x, y) {
          var _enemy, _enemy2, _enemy3;

          let enemy; //随机产生两种

          if (Math.random() > 0.5) enemy = (_crd && Ghost === void 0 ? (_reportPossibleCrUseOfGhost({
            error: Error()
          }), Ghost) : Ghost).get(this.ghost);else enemy = (_crd && SnailTail === void 0 ? (_reportPossibleCrUseOfSnailTail({
            error: Error()
          }), SnailTail) : SnailTail).get(this.snailTail);
          (_enemy = enemy) == null || _enemy.insert(this.objects);
          tempPos.set(x, y, 0);
          (_enemy2 = enemy) == null || _enemy2.setPosition(tempPos);
          (_enemy3 = enemy) == null || _enemy3.init(); //初始化
        }

        update(dt) {
          //运行碰撞检测
          (_crd && cCollider === void 0 ? (_reportPossibleCrUseOfcCollider({
            error: Error()
          }), cCollider) : cCollider).inst.update(dt);
        }

        lateUpdate(dt) {
          //相机跟随
          const position = (_crd && Player === void 0 ? (_reportPossibleCrUseOfPlayer({
            error: Error()
          }), Player) : Player).inst.getPosition();
          Vec3.lerp(tempPos, this.camera.position, position, 0.25);
          this.camera.position = tempPos; //背景跟随

          let bg = this.node.getChildByName("bg");
          let sprite = bg == null ? void 0 : bg.getComponent(Sprite);
          let material = sprite == null ? void 0 : sprite.getSharedMaterial(0);
          let uvOffset = new Vec2(position.x / 512.0, -position.y / 512.0);
          material == null || material.setProperty("tilingOffset", uvOffset);
          bg.position = position;
        }

      }, _class3._inst = void 0, _class3), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "ghost", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "snailTail", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "player", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "objects", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "bullets", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "camera", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "joystick", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "max", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 1000;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "raidus", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 2000;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "cyclTime", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0.03;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=e797b40f805777abfb985d771a58329b399df1f7.js.map