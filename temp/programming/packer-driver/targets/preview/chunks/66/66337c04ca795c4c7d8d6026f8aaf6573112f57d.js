System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Camera, clamp, Component, input, Input, Node, Quat, toRadian, Vec2, Vec3, _decorator, _dec, _dec2, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _crd, ccclass, property, Camera3D;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Camera = _cc.Camera;
      clamp = _cc.clamp;
      Component = _cc.Component;
      input = _cc.input;
      Input = _cc.Input;
      Node = _cc.Node;
      Quat = _cc.Quat;
      toRadian = _cc.toRadian;
      Vec2 = _cc.Vec2;
      Vec3 = _cc.Vec3;
      _decorator = _cc._decorator;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "449d7ylCR5NjpZiA2yOF6Nk", "Camera3D", undefined);

      __checkObsolete__(['Camera', 'clamp', 'Component', 'input', 'Input', 'Node', 'Quat', 'toRadian', 'Vec2', 'Vec3', '_decorator']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Camera3D", Camera3D = (_dec = ccclass('Camera3D'), _dec2 = property(Node), _dec(_class = (_class2 = class Camera3D extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "distance", _descriptor, this);

          _initializerDefineProperty(this, "vertical", _descriptor2, this);

          _initializerDefineProperty(this, "horizontal", _descriptor3, this);

          _initializerDefineProperty(this, "target", _descriptor4, this);

          this.camera = void 0;
          this.rot = new Quat();
          this.curXY = new Vec2();
          this.curScale = 1;
          this.touchCount = 0;
          this.touchs = [{
            id: -1,
            pre: new Vec2(),
            cur: new Vec2()
          }, {
            id: -1,
            pre: new Vec2(),
            cur: new Vec2()
          }];
          this.rotTemp = new Quat();
        }

        start() {
          this.camera = this.getComponentInChildren(Camera);
          this.curXY.set(toRadian(this.horizontal), -toRadian(this.vertical));

          if (this.camera) {
            this.camera.node.position = new Vec3(0, 0, this.distance);
          }
        }

        onEnable() {
          input.on(Input.EventType.MOUSE_WHEEL, this.onMouseScale, this);
          input.on(Input.EventType.TOUCH_START, this.onTouchStart, this);
          input.on(Input.EventType.TOUCH_MOVE, this.onTouchMove, this);
          input.on(Input.EventType.TOUCH_CANCEL, this.onTouchEnd, this);
          input.on(Input.EventType.TOUCH_END, this.onTouchEnd, this);
        }

        onDisable() {
          input.off(Input.EventType.MOUSE_WHEEL, this.onMouseScale, this);
          input.off(Input.EventType.TOUCH_START, this.onTouchStart, this);
          input.off(Input.EventType.TOUCH_MOVE, this.onTouchMove, this);
          input.off(Input.EventType.TOUCH_CANCEL, this.onTouchEnd, this);
          input.off(Input.EventType.TOUCH_END, this.onTouchEnd, this);
        }

        updateRotate() {
          var node = this.node;
          var rotation = this.rot;
          this.curXY.y = clamp(this.curXY.y, toRadian(-60), toRadian(30));
          Quat.rotateY(rotation, Quat.IDENTITY, -this.curXY.x);
          Quat.rotateX(rotation, rotation, this.curXY.y);
          Quat.slerp(rotation, node.rotation, rotation, 0.25);
          node.rotation = rotation;

          if (this.target) {
            var rotate = this.target.rotation;
            node.position.lerp(this.target.position, 0.25);
            Quat.fromAxisAngle(this.rotTemp, Vec3.UNIT_Y, -this.curXY.x);
            this.target.rotation = rotate.lerp(this.rotTemp, 0.25);
          }
        }

        onMouseScale(event) {
          var scale = event.getScrollY() > 0 ? 1 : -1;
          this.curScale = clamp(this.curScale - scale * 0.1, 0.25, 1.5);
          this.node.scale = new Vec3(this.curScale, this.curScale, this.curScale);
        }

        onTouchStart(event) {
          var id = event.getID();
          var pos = event.getUILocation();

          for (var i = 0; i < 2; i++) {
            var t = this.touchs[i];

            if (t.id == -1) {
              t.id = id;
              t.pre.set(pos);
              t.cur.set(pos);
              this.touchCount++;
              break;
            }
          }
        }

        onTouchMove(event) {
          var curTouch = null;
          var id = event.getID();
          var pos = event.getUILocation();

          for (var i = 0; i < 2; i++) {
            var t = this.touchs[i];

            if (t.id == id) {
              t.cur.set(pos);
              curTouch = t;
            }
          }

          if (this.touchCount == 1) {
            var scale = 0.008;
            var cur = event.getUIDelta();
            this.curXY.x += cur.x * scale;
            this.curXY.y += cur.y * scale; // this.updateRotate();
          } else if (this.touchCount == 2) {
            var p0 = this.touchs[0];
            var p1 = this.touchs[1];
            var curLen = Vec2.distance(p0.cur, p1.cur);
            var oldLen = Vec2.distance(p0.pre, p1.pre);
            this.curScale = clamp(this.curScale - (curLen - oldLen) * 0.002, 0.25, 1.5);
            this.node.scale = new Vec3(this.curScale, this.curScale, this.curScale);
          }

          if (curTouch) {
            curTouch.pre.set(curTouch.cur);
          }
        }

        onTouchEnd(event) {
          var id = event.getID();

          for (var i = 0; i < 2; i++) {
            var t = this.touchs[i];

            if (t.id == id) {
              t.id = -1;
              this.touchCount--;
            }
          }
        }

        update(dt) {
          this.updateRotate();
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "distance", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 25;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "vertical", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 30;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "horizontal", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 45;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "target", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=66337c04ca795c4c7d8d6026f8aaf6573112f57d.js.map