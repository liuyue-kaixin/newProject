System.register(["cc", "cc/env"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Component, input, Input, lerp, Node, Quat, Vec2, Vec3, _decorator, EDITOR, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _crd, ccclass, property, tempVec3, tempVec3_2, tempQuat, DeltaFactor, OrbitCamera;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Component = _cc.Component;
      input = _cc.input;
      Input = _cc.Input;
      lerp = _cc.lerp;
      Node = _cc.Node;
      Quat = _cc.Quat;
      Vec2 = _cc.Vec2;
      Vec3 = _cc.Vec3;
      _decorator = _cc._decorator;
    }, function (_ccEnv) {
      EDITOR = _ccEnv.EDITOR;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "4e454G/OQ1NB7tjzAUf269U", "OrbitCamera", undefined);

      __checkObsolete__(['Component', 'EventMouse', 'EventTouch', 'input', 'Input', 'lerp', 'Node', 'Quat', 'Vec2', 'Vec3', '_decorator']);

      ({
        ccclass,
        property
      } = _decorator);
      tempVec3 = new Vec3();
      tempVec3_2 = new Vec3();
      tempQuat = new Quat();
      DeltaFactor = 1 / 200;
      /** 
       * 轨道摄影机
       * 1、触摸自由旋转
       * 2、镜头远近鼠标滚轮调节
       * 3、固定为第三人称摄像机
       */

      _export("OrbitCamera", OrbitCamera = (_dec = ccclass('OrbitCamera'), _dec2 = property({
        tooltip: "是否启动触摸控制"
      }), _dec3 = property({
        tooltip: "是否开启启用缩放半径（鼠标滚轮控制摄像机与目标距离）"
      }), _dec4 = property({
        tooltip: "摄像机与目标的半径缩放速度",
        visible: function () {
          //@ts-ignore
          return this.enableScaleRadius === true;
        }
      }), _dec5 = property({
        tooltip: "摄像机与目标的半径最小值",
        visible: function () {
          //@ts-ignore
          return this.enableScaleRadius === true;
        }
      }), _dec6 = property({
        tooltip: "摄像机与目标的半径最大值",
        visible: function () {
          //@ts-ignore
          return this.enableScaleRadius === true;
        }
      }), _dec7 = property({
        tooltip: "自动旋转是否开启"
      }), _dec8 = property({
        tooltip: "自动旋转速度",
        visible: function () {
          //@ts-ignore
          return this.autoRotate === true;
        }
      }), _dec9 = property({
        tooltip: "旋转速度"
      }), _dec10 = property({
        tooltip: "跟随速度"
      }), _dec11 = property({
        tooltip: "X轴旋转范围（人物上下看的角度控制）"
      }), _dec12 = property({
        tooltip: "摄像机与目标的距离（以玩家为中心环绕球半径）"
      }), _dec13 = property({
        type: Node,
        tooltip: "跟随目标"
      }), _dec14 = property({
        type: Vec3,
        tooltip: "目标旋转偏移量（初始旋转向量）"
      }), _dec15 = property({
        tooltip: "是否跟随目标 Y 轴旋转"
      }), _dec(_class = (_class2 = class OrbitCamera extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "enableTouch", _descriptor, this);

          _initializerDefineProperty(this, "enableScaleRadius", _descriptor2, this);

          _initializerDefineProperty(this, "radiusScaleSpeed", _descriptor3, this);

          _initializerDefineProperty(this, "minRadius", _descriptor4, this);

          _initializerDefineProperty(this, "maxRadius", _descriptor5, this);

          _initializerDefineProperty(this, "autoRotate", _descriptor6, this);

          _initializerDefineProperty(this, "autoRotateSpeed", _descriptor7, this);

          _initializerDefineProperty(this, "rotateSpeed", _descriptor8, this);

          _initializerDefineProperty(this, "followSpeed", _descriptor9, this);

          _initializerDefineProperty(this, "xRotationRange", _descriptor10, this);

          _initializerDefineProperty(this, "_targetRadius", _descriptor11, this);

          _initializerDefineProperty(this, "_target", _descriptor12, this);

          _initializerDefineProperty(this, "_startRotation", _descriptor13, this);

          _initializerDefineProperty(this, "followTargetRotationY", _descriptor14, this);

          this._center = new Vec3();
          // 摄像机视口方向量
          this._targetCenter = new Vec3();
          // 摄像机中心点位置（目标位置）
          this._touched = false;
          // 是否触摸屏幕
          this._targetRotation = new Vec3();
          // 目标旋转向量
          this._rotation = new Quat();
          // 摄像机旋转四元素
          this._radius = 10;
        }

        get radius() {
          return this._targetRadius;
        }

        set radius(v) {
          this._targetRadius = v;
        }

        get target() {
          return this._target;
        }

        set target(v) {
          this._target = v;

          this._targetRotation.set(this._startRotation);

          this._targetCenter.set(v.worldPosition);
        }

        get targetRotation() {
          if (!EDITOR) {
            this._startRotation.set(this._targetRotation);
          }

          return this._startRotation;
        }

        set targetRotation(v) {
          this._targetRotation.set(v);

          this._startRotation.set(v);
        }

        // 当前玩家与目标半径距离
        start() {
          if (this.enableTouch) {
            input.on(Input.EventType.TOUCH_START, this.onTouchStart, this);
            input.on(Input.EventType.TOUCH_MOVE, this.onTouchMove, this);
            input.on(Input.EventType.TOUCH_END, this.onTouchEnd, this);
          }

          if (this.enableScaleRadius) {
            input.on(Input.EventType.MOUSE_WHEEL, this.onMouseWheel, this);
          }

          if (this.target) this.resetTargetRotation(); // 根据欧拉角信息计算摄像机四元数，旋转顺序为 YZX

          Quat.fromEuler(this._rotation, this._targetRotation.x, this._targetRotation.y, this._targetRotation.z);

          if (this.target) {
            this._targetCenter.set(this.target.worldPosition);

            this._center.set(this._targetCenter);
          }

          this._radius = this.radius;
          this.limitRotation();
        }
        /** 重置摄像机到初始位置 */


        resetTargetRotation() {
          let targetRotation = this._targetRotation.set(this._startRotation);

          if (this.followTargetRotationY) {
            targetRotation = tempVec3_2.set(targetRotation);
            Quat.toEuler(tempVec3, this.target.worldRotation);
            targetRotation.add(tempVec3);
          }
        }
        /** 限制 X 轴旋转（上下看） */


        limitRotation() {
          let rotation = this._targetRotation;

          if (rotation.x < this.xRotationRange.x) {
            rotation.x = this.xRotationRange.x;
          } else if (rotation.x > this.xRotationRange.y) {
            rotation.x = this.xRotationRange.y;
          }

          rotation.z = 0;
        } //#region Touch


        onTouchStart() {
          this._touched = true;
        }

        onTouchMove(event) {
          if (!this._touched) return;
          let delta = event.touch.getDelta();
          Quat.fromEuler(tempQuat, this._targetRotation.x, this._targetRotation.y, this._targetRotation.z);
          Quat.rotateX(tempQuat, tempQuat, -delta.y * DeltaFactor);
          Quat.rotateY(tempQuat, tempQuat, -delta.x * DeltaFactor);
          Quat.toEuler(this._targetRotation, tempQuat);
          this.limitRotation();
        }

        onTouchEnd() {
          this._touched = false;
        } //#endregion


        onMouseWheel(event) {
          let scrollY = event.getScrollY();
          this._targetRadius += this.radiusScaleSpeed * -Math.sign(scrollY); // 滚轮向前为负，滚轮向后为正

          this._targetRadius = Math.min(this.maxRadius, Math.max(this.minRadius, this._targetRadius));
        }

        update(dt) {
          let targetRotation = this._targetRotation; // 是否摄像机围绕 Y 轴自动旋转

          if (this.autoRotate && !this._touched) {
            targetRotation.y += this.autoRotateSpeed * dt;
          }

          if (this.target) {
            // 重置摄像机中心点
            this._targetCenter.set(this.target.worldPosition); // 是否跟随 Y 轴目标旋转


            if (this.followTargetRotationY) {
              targetRotation = tempVec3_2.set(targetRotation);
              Quat.toEuler(tempVec3, this.target.worldRotation);
              targetRotation.y += tempVec3.y; // 运行时，只变化 Y 旋转
            }
          }

          Quat.fromEuler(tempQuat, targetRotation.x, targetRotation.y, targetRotation.z); // 获取目标对象的旋转四元素（人物面向与摄像机一至）

          Quat.slerp(this._rotation, this._rotation, tempQuat, dt * 7 * this.rotateSpeed); // 旋转线性插值（平滑摄像机视口旋转）

          Vec3.lerp(this._center, this._center, this._targetCenter, dt * 5 * this.followSpeed); // 摄像机跟随位移线性插值（平滑摄像机节点位置移动）

          this._radius = lerp(this._radius, this._targetRadius, dt * 5); // 摄像机与目标距离半径线性插值（镜头平滑前后移动)

          Vec3.transformQuat(tempVec3, Vec3.FORWARD, this._rotation); // 计算摄像机旋转后的方向量

          Vec3.multiplyScalar(tempVec3, tempVec3, this._radius); // 计算摄像机与目标半径向量

          tempVec3.add(this._center); // 计算摄像机与目标偏移后的位置

          this.node.position = tempVec3; // 设置摄像机位置

          this.node.lookAt(this._center); // 设置摄像机视口方向
        }
        /** 摄像机立即跟随到制定目标的位置 */


        follow() {
          let targetRotation = this._targetRotation;

          if (this.target) {
            // 重置摄像机中心点
            this._targetCenter.set(this.target.worldPosition); // 是否跟随 Y 轴目标旋转


            if (this.followTargetRotationY) {
              targetRotation = tempVec3_2.set(targetRotation);
              Quat.toEuler(tempVec3, this.target.worldRotation);
              targetRotation.y += tempVec3.y; // 运行时，只变化 Y 旋转
            }
          }

          Quat.fromEuler(tempQuat, targetRotation.x, targetRotation.y, targetRotation.z); // 获取目标对象的旋转四元素（人物面向与摄像机一至）

          this._rotation = tempQuat;
          this._center = this._targetCenter;
          this._radius = this._targetRadius;
          Vec3.transformQuat(tempVec3, Vec3.FORWARD, this._rotation); // 计算摄像机旋转后的方向量

          Vec3.multiplyScalar(tempVec3, tempVec3, this._radius); // 计算摄像机与目标半径向量

          tempVec3.add(this._center); // 计算摄像机与目标偏移后的位置

          this.node.position = tempVec3; // 设置摄像机位置

          this.node.lookAt(this._center); // 设置摄像机视口方向
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "enableTouch", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return true;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "enableScaleRadius", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return false;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "radiusScaleSpeed", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 1;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "minRadius", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 5;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "maxRadius", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 10;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "autoRotate", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return false;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "autoRotateSpeed", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 90;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "rotateSpeed", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 1;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "followSpeed", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 1;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "xRotationRange", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return new Vec2(5, 70);
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "_targetRadius", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 10;
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "radius", [_dec12], Object.getOwnPropertyDescriptor(_class2.prototype, "radius"), _class2.prototype), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "_target", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "target", [_dec13], Object.getOwnPropertyDescriptor(_class2.prototype, "target"), _class2.prototype), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "_startRotation", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return new Vec3();
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "targetRotation", [_dec14], Object.getOwnPropertyDescriptor(_class2.prototype, "targetRotation"), _class2.prototype), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "followTargetRotationY", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return false;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=ef8d601c02b9d8ac178c95d03aea421b91b60280.js.map