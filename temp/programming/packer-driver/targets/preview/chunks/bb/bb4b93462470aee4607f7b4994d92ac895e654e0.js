System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Component, Node, PhysicsSystem, UITransform, Vec2, Vec3, _decorator, ccenum, cCollider, ShapeType, cBox, cPolygon, cSphere, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _crd, ccclass, property, Trigger, Dirty, cObject;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfcBody(extras) {
    _reporterNs.report("cBody", "./Body", _context.meta, extras);
  }

  function _reportPossibleCrUseOfcCollider(extras) {
    _reporterNs.report("cCollider", "./Collider", _context.meta, extras);
  }

  function _reportPossibleCrUseOfShapeType(extras) {
    _reporterNs.report("ShapeType", "./Shape", _context.meta, extras);
  }

  function _reportPossibleCrUseOfcBox(extras) {
    _reporterNs.report("cBox", "./Shape", _context.meta, extras);
  }

  function _reportPossibleCrUseOfcPolygon(extras) {
    _reporterNs.report("cPolygon", "./Shape", _context.meta, extras);
  }

  function _reportPossibleCrUseOfcShape(extras) {
    _reporterNs.report("cShape", "./Shape", _context.meta, extras);
  }

  function _reportPossibleCrUseOfcSphere(extras) {
    _reporterNs.report("cSphere", "./Shape", _context.meta, extras);
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
      PhysicsSystem = _cc.PhysicsSystem;
      UITransform = _cc.UITransform;
      Vec2 = _cc.Vec2;
      Vec3 = _cc.Vec3;
      _decorator = _cc._decorator;
      ccenum = _cc.ccenum;
    }, function (_unresolved_2) {
      cCollider = _unresolved_2.cCollider;
    }, function (_unresolved_3) {
      ShapeType = _unresolved_3.ShapeType;
      cBox = _unresolved_3.cBox;
      cPolygon = _unresolved_3.cPolygon;
      cSphere = _unresolved_3.cSphere;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "f834eM8pElOqJ717Yz/Xt9+", "Object", undefined);

      __checkObsolete__(['CCInteger', 'Color', 'Component', 'Node', 'PhysicsSystem', 'Quat', 'UITransform', 'Vec2', 'Vec3', '_decorator', 'ccenum']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Trigger", Trigger = /*#__PURE__*/function (Trigger) {
        Trigger[Trigger["default"] = 0] = "default";
        Trigger[Trigger["enter"] = 1] = "enter";
        Trigger[Trigger["stay"] = 2] = "stay";
        Trigger[Trigger["exit"] = 3] = "exit";
        return Trigger;
      }({}));

      ;

      _export("Dirty", Dirty = /*#__PURE__*/function (Dirty) {
        Dirty[Dirty["R"] = 1] = "R";
        Dirty[Dirty["T"] = 2] = "T";
        Dirty[Dirty["S"] = 4] = "S";
        Dirty[Dirty["RTS"] = 7] = "RTS";
        Dirty[Dirty["RS"] = 5] = "RS";
        Dirty[Dirty["NON"] = 0] = "NON";
        return Dirty;
      }({}));

      ;
      ccenum(_crd && ShapeType === void 0 ? (_reportPossibleCrUseOfShapeType({
        error: Error()
      }), ShapeType) : ShapeType);

      _export("cObject", cObject = (_dec = ccclass('cObject'), _dec2 = property({
        group: "Body"
      }), _dec3 = property({
        type: PhysicsSystem.PhysicsGroup,
        group: "Body"
      }), _dec4 = property({
        type: _crd && ShapeType === void 0 ? (_reportPossibleCrUseOfShapeType({
          error: Error()
        }), ShapeType) : ShapeType,
        group: "Shape"
      }), _dec5 = property({
        group: "Shape"
      }), _dec6 = property({
        group: "Shape",

        visible() {
          return this.type == (_crd && ShapeType === void 0 ? (_reportPossibleCrUseOfShapeType({
            error: Error()
          }), ShapeType) : ShapeType).Box;
        }

      }), _dec7 = property({
        group: "Shape",

        visible() {
          return this.type == (_crd && ShapeType === void 0 ? (_reportPossibleCrUseOfShapeType({
            error: Error()
          }), ShapeType) : ShapeType).Sphere;
        }

      }), _dec8 = property({
        type: [Vec2],
        group: "Shape",

        visible() {
          return this.type == (_crd && ShapeType === void 0 ? (_reportPossibleCrUseOfShapeType({
            error: Error()
          }), ShapeType) : ShapeType).Polygon;
        }

      }), _dec9 = property({
        group: "Agent"
      }), _dec10 = property({
        min: 0.01,
        max: 1.0,
        step: 0.01,
        group: "Agent",

        visible() {
          return this.agent;
        }

      }), _dec11 = property({
        group: "Agent",

        visible() {
          return this.agent;
        }

      }), _dec12 = property({
        group: "Agent",

        visible() {
          return this.agent;
        }

      }), _dec(_class = (_class2 = class cObject extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "trigger", _descriptor, this);

          //碰撞开关
          _initializerDefineProperty(this, "group", _descriptor2, this);

          //碰撞分组
          _initializerDefineProperty(this, "type", _descriptor3, this);

          //相交形状类型
          _initializerDefineProperty(this, "center", _descriptor4, this);

          //偏移位置，是shape相对node节点的中心偏移
          _initializerDefineProperty(this, "size", _descriptor5, this);

          //方块的长宽高
          _initializerDefineProperty(this, "radius", _descriptor6, this);

          //半径，sphere 或者 capsule
          _initializerDefineProperty(this, "points", _descriptor7, this);

          _initializerDefineProperty(this, "agent", _descriptor8, this);

          //Agent开关
          _initializerDefineProperty(this, "weight", _descriptor9, this);

          //Agent 权值越小，穿透力越强
          _initializerDefineProperty(this, "maxRadius", _descriptor10, this);

          //Agent碰撞半径,小于等于物体体积
          _initializerDefineProperty(this, "maxVelocity", _descriptor11, this);

          //Agent 最大速度上限
          this.tryVelocity = new Vec3();
          //最大期望速度
          this.velocity = new Vec3();
          //当前实际速度
          this.isDirty = Dirty.RTS;
          this.shape = null;
          this.body = null;
        }

        onLoad() {
          //创建碰撞形状
          switch (this.type) {
            case (_crd && ShapeType === void 0 ? (_reportPossibleCrUseOfShapeType({
              error: Error()
            }), ShapeType) : ShapeType).Box:
              this.shape = new (_crd && cBox === void 0 ? (_reportPossibleCrUseOfcBox({
                error: Error()
              }), cBox) : cBox)(this.center, this.size);
              break;

            case (_crd && ShapeType === void 0 ? (_reportPossibleCrUseOfShapeType({
              error: Error()
            }), ShapeType) : ShapeType).Sphere:
              this.shape = new (_crd && cSphere === void 0 ? (_reportPossibleCrUseOfcSphere({
                error: Error()
              }), cSphere) : cSphere)(this.center, this.radius);
              break;

            case (_crd && ShapeType === void 0 ? (_reportPossibleCrUseOfShapeType({
              error: Error()
            }), ShapeType) : ShapeType).Polygon:
              this.shape = new (_crd && cPolygon === void 0 ? (_reportPossibleCrUseOfcPolygon({
                error: Error()
              }), cPolygon) : cPolygon)(this.center, this.points);
              break;
          } //创建碰撞body容器


          this.body = (_crd && cCollider === void 0 ? (_reportPossibleCrUseOfcCollider({
            error: Error()
          }), cCollider) : cCollider).inst.create(this);
          this.body.shape = this.shape; //绑定碰撞形状

          this.body.group = this.group; //碰撞分组掩码

          this.body.isAgent = this.agent; // agent 检测开关

          this.body.weight = this.weight; // agent 避让优先级

          this.body.neighborDist = this.maxRadius; // agent 体积半径

          this.body.maxVelocity = this.maxVelocity; // agent 最大速度

          this.body.mask = PhysicsSystem.instance.collisionMatrix[this.group]; //把body加入碰撞管理

          (_crd && cCollider === void 0 ? (_reportPossibleCrUseOfcCollider({
            error: Error()
          }), cCollider) : cCollider).inst.insert(this.body);
          this.isDirty = Dirty.RTS; //首次更新标记
        } //同步位置到body


        setPosition(position) {
          this.node.position = position;
          this.isDirty |= Dirty.T;
        } //同步旋转到body


        setRotation(rotation) {
          this.node.rotation = rotation;
          this.isDirty |= Dirty.R;
        } //同步缩放到body


        setScale(scale) {
          this.node.scale = scale;
          this.isDirty |= Dirty.S;
        } //设置瞄点，2D专用


        setAnchor(anchor) {
          var c0 = this.center;
          var c1 = this.shape.center;
          var uts = this.node.getComponent(UITransform);

          if (uts) {
            uts.anchorPoint = anchor;
            var s = uts.contentSize;
            c1.x = (0.5 - anchor.x) * s.width + c0.x;
            c1.y = (0.5 - anchor.y) * s.height + c0.y;
            this.isDirty |= Dirty.T;
          }
        }

        getRotation() {
          return this.node.rotation;
        }

        getPosition() {
          return this.node.position;
        }

        getScale() {
          return this.node.scale;
        } //删除当前节点


        remove(retrieve) {
          if (retrieve === void 0) {
            retrieve = true;
          }

          //移除body, retrieve: 是否回收body ？
          (_crd && cCollider === void 0 ? (_reportPossibleCrUseOfcCollider({
            error: Error()
          }), cCollider) : cCollider).inst.remove(this.body, retrieve); //从父节点移除

          this.node.removeFromParent(); //最后node用户自己控制回收和释放
          //this.remove().destroy() // 回收body，释放node
          //pool.push(this.remove(false)); //不回收body , 回收node

          return this.node;
        } //重新添加到父节点


        insert(parent) {
          //插入body, 强制更新body数据
          (_crd && cCollider === void 0 ? (_reportPossibleCrUseOfcCollider({
            error: Error()
          }), cCollider) : cCollider).inst.insert(this.body, true); //添加到父节点

          if (this.node.parent != parent) parent.addChild(this.node);
        }

        setAnimation(name) {}

        setColor(color) {}

        init() {} //trigger 回调 enter,stay exit


        onTrigger(b, trigger) {
          switch (trigger) {
            case Trigger.enter:
              //onTriggerEnter();
              break;

            case Trigger.stay:
              //onTriggerStay();
              break;

            case Trigger.exit:
              //onTriggerExit();
              break;
          }
        }

        hasChangeDirty() {
          var isDirty = this.isDirty;
          var flag = this.node.hasChangedFlags;

          if (flag) {
            if (flag & Node.TransformBit.POSITION) isDirty |= Dirty.T;
            if (flag & Node.TransformBit.ROTATION) isDirty |= Dirty.R;
            if (flag & Node.TransformBit.SCALE) isDirty |= Dirty.S;
          }

          this.isDirty = Dirty.NON;
          return isDirty;
        }

        onDestroy() {
          (_crd && cCollider === void 0 ? (_reportPossibleCrUseOfcCollider({
            error: Error()
          }), cCollider) : cCollider).inst.remove(this.body, true);
          this.unscheduleAllCallbacks();
          this.shape = null;
          this.body = null;
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "trigger", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "group", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return PhysicsSystem.PhysicsGroup.DEFAULT;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "type", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return (_crd && ShapeType === void 0 ? (_reportPossibleCrUseOfShapeType({
            error: Error()
          }), ShapeType) : ShapeType).Box;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "center", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new Vec3();
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "size", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new Vec3();
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "radius", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "points", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "agent", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "weight", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.5;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "maxRadius", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "maxVelocity", [_dec12], {
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
//# sourceMappingURL=bb4b93462470aee4607f7b4994d92ac895e654e0.js.map