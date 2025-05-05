System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, CCInteger, clamp, Component, instantiate, MeshRenderer, Prefab, primitives, Quat, utils, Vec3, cCollider, cObject, ShapeType, Config, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _crd, ccclass, property, tempPos, tempRot, boxMesh, sphereMesh, demo3d;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfcCollider(extras) {
    _reporterNs.report("cCollider", "../../collision/Collider", _context.meta, extras);
  }

  function _reportPossibleCrUseOfcObject(extras) {
    _reporterNs.report("cObject", "../../collision/Object", _context.meta, extras);
  }

  function _reportPossibleCrUseOfShapeType(extras) {
    _reporterNs.report("ShapeType", "../../collision/Shape", _context.meta, extras);
  }

  function _reportPossibleCrUseOfConfig(extras) {
    _reporterNs.report("Config", "./Config", _context.meta, extras);
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
      clamp = _cc.clamp;
      Component = _cc.Component;
      instantiate = _cc.instantiate;
      MeshRenderer = _cc.MeshRenderer;
      Prefab = _cc.Prefab;
      primitives = _cc.primitives;
      Quat = _cc.Quat;
      utils = _cc.utils;
      Vec3 = _cc.Vec3;
    }, function (_unresolved_2) {
      cCollider = _unresolved_2.cCollider;
    }, function (_unresolved_3) {
      cObject = _unresolved_3.cObject;
    }, function (_unresolved_4) {
      ShapeType = _unresolved_4.ShapeType;
    }, function (_unresolved_5) {
      Config = _unresolved_5.Config;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "66d84cnnQ1L/JC3OW0bDZP/", "demo3d", undefined);

      __checkObsolete__(['_decorator', 'CCInteger', 'clamp', 'Component', 'instantiate', 'Mesh', 'MeshRenderer', 'Prefab', 'primitives', 'Quat', 'utils', 'Vec3']);

      ({
        ccclass,
        property
      } = _decorator);
      tempPos = new Vec3();
      tempRot = new Quat();
      boxMesh = utils.createMesh(primitives.box());
      sphereMesh = utils.createMesh(primitives.sphere(0.5, {
        segments: 12
      }));

      _export("demo3d", demo3d = (_dec = ccclass('demo3d'), _dec2 = property(Prefab), _dec3 = property(Prefab), _dec4 = property(CCInteger), _dec5 = property(CCInteger), _dec6 = property(Vec3), _dec(_class = (_class2 = class demo3d extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "box", _descriptor, this);

          _initializerDefineProperty(this, "sphere", _descriptor2, this);

          _initializerDefineProperty(this, "capacity", _descriptor3, this);

          _initializerDefineProperty(this, "speed", _descriptor4, this);

          _initializerDefineProperty(this, "world", _descriptor5, this);

          this.objects = [];
          this.boxNum = 0;
          this.sphereNum = 0;
        }

        resetRotation() {
          let objects = this.objects;
          let length = objects.length;

          for (let i = 0; i < length; i++) {
            let obj = objects[i];
            obj.setRotation(Quat.IDENTITY);
          }
        }

        randomRotation() {
          let objects = this.objects;
          let length = objects.length;

          for (let i = 0; i < length; i++) {
            let obj = objects[i];
            Quat.fromEuler(tempRot, Math.random() * 360, Math.random() * 360, Math.random() * 360);
            obj.setRotation(tempRot); //更新节点旋转
          }
        }

        onDestroy() {
          this.boxNum = 0;
          this.sphereNum = 0;
          this.objects.length = 0;
          (_crd && cCollider === void 0 ? (_reportPossibleCrUseOfcCollider({
            error: Error()
          }), cCollider) : cCollider).inst.reset(); //重置复用
        }

        addObjects(num, prefab, mesh = null) {
          for (let i = 0; i < num; i++) {
            let node = instantiate(prefab);
            this.node.addChild(node);

            if (mesh != null) {
              let render = node.getComponent(MeshRenderer);
              render.mesh = mesh;
            }

            tempPos.x = (Math.random() - 0.5) * this.world.x;
            tempPos.y = (Math.random() - 0.5) * this.world.y;
            tempPos.z = (Math.random() - 0.5) * this.world.z;
            node.position = tempPos; //更新位置

            let object = node.getComponent(_crd && cObject === void 0 ? (_reportPossibleCrUseOfcObject({
              error: Error()
            }), cObject) : cObject);
            let speed = this.speed * (Math.random() * 0.9 + 0.1);
            tempPos.normalize().multiplyScalar(speed);
            object.velocity.set(tempPos);

            if ((_crd && Config === void 0 ? (_reportPossibleCrUseOfConfig({
              error: Error()
            }), Config) : Config).isRotate) {
              //开启旋转检测
              Quat.fromEuler(tempRot, Math.random() * 360, Math.random() * 360, Math.random() * 360);
              object.setRotation(tempRot);
            }

            this.objects.push(object);
          }
        }

        worldManager(dt) {
          //控制全局速度      
          dt *= (_crd && Config === void 0 ? (_reportPossibleCrUseOfConfig({
            error: Error()
          }), Config) : Config).maxSpeed; //动态增加 box 

          let boxNum = Math.round((_crd && Config === void 0 ? (_reportPossibleCrUseOfConfig({
            error: Error()
          }), Config) : Config).box * (_crd && Config === void 0 ? (_reportPossibleCrUseOfConfig({
            error: Error()
          }), Config) : Config).maxNum);

          if (boxNum > this.boxNum) {
            let max = clamp(boxNum - this.boxNum, 0, 20); //分帧

            this.addObjects(max, this.box, boxMesh);
            this.boxNum += max;
          } //动态增加 sphere


          let sphereNum = Math.round((_crd && Config === void 0 ? (_reportPossibleCrUseOfConfig({
            error: Error()
          }), Config) : Config).sphere * (_crd && Config === void 0 ? (_reportPossibleCrUseOfConfig({
            error: Error()
          }), Config) : Config).maxNum);

          if (sphereNum > this.sphereNum) {
            let max = clamp(sphereNum - this.sphereNum, 0, 20); //分帧

            this.addObjects(max, this.sphere, sphereMesh);
            this.sphereNum += max;
          }

          let objects = this.objects;

          for (let i = 0; i < objects.length; i++) {
            let obj = objects[i];
            let velocity = obj.velocity;
            tempPos.set(obj.node.position);

            if (Math.abs(tempPos.x + velocity.x * dt) > this.world.x / 2) {
              velocity.x = -velocity.x;
            }

            if (Math.abs(tempPos.y + velocity.y * dt) > this.world.y / 2) {
              velocity.y = -velocity.y;
            }

            if (Math.abs(tempPos.z + velocity.z * dt) > this.world.z / 2) {
              velocity.z = -velocity.z;
            }

            tempPos.x += velocity.x * dt;
            tempPos.y += velocity.y * dt;
            tempPos.z += velocity.z * dt; //更新节点位置

            obj.setPosition(tempPos); //动态删除box

            if (boxNum < this.boxNum) {
              if (obj.type == (_crd && ShapeType === void 0 ? (_reportPossibleCrUseOfShapeType({
                error: Error()
              }), ShapeType) : ShapeType).Box) {
                //回收body删除node
                obj.remove().destroy();
                objects.splice(i--, 1);
                this.boxNum--;
              }
            } //动态删除Sphere


            if (sphereNum < this.sphereNum) {
              if (obj.type == (_crd && ShapeType === void 0 ? (_reportPossibleCrUseOfShapeType({
                error: Error()
              }), ShapeType) : ShapeType).Sphere) {
                //回收body删除node
                obj.remove().destroy();
                objects.splice(i--, 1);
                this.sphereNum--;
              }
            }
          }
        }

        update(dt) {
          this.worldManager(dt);
          (_crd && cCollider === void 0 ? (_reportPossibleCrUseOfcCollider({
            error: Error()
          }), cCollider) : cCollider).inst.update(dt);
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "box", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "sphere", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "capacity", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 1024;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "speed", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 20;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "world", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return new Vec3(10, 10, 10);
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=0c19905dafc8f2e50830880979b7acdba90aea73.js.map