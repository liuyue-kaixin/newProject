System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Component, EPSILON, RigidBody, Vec3, _decorator, _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _crd, ccclass, property, v3_0, v3_1, MoveRigidBody;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Component = _cc.Component;
      EPSILON = _cc.EPSILON;
      RigidBody = _cc.RigidBody;
      Vec3 = _cc.Vec3;
      _decorator = _cc._decorator;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "4e8cedkWeJDEZoUMtauac/M", "MoveRigidBody", undefined);

      __checkObsolete__(['Component', 'EPSILON', 'RigidBody', 'Vec3', '_decorator']);

      ({
        ccclass,
        property
      } = _decorator);
      v3_0 = new Vec3();
      v3_1 = new Vec3();
      /** 
       * 物理方式移动
       * 1. 施加线性数度
       * 2. 施加阻尼
       * 3. 施加重力
       * 4. 控制移动速度或速度比率
       */

      _export("MoveRigidBody", MoveRigidBody = (_dec = ccclass('MoveRigidBody'), _dec2 = property({
        tooltip: '阻尼'
      }), _dec3 = property({
        tooltip: '重力'
      }), _dec4 = property({
        tooltip: '移动速度'
      }), _dec5 = property({
        tooltip: '速度比率'
      }), _dec(_class = (_class2 = class MoveRigidBody extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "damping", _descriptor, this);

          _initializerDefineProperty(this, "gravity", _descriptor2, this);

          _initializerDefineProperty(this, "_speed", _descriptor3, this);

          _initializerDefineProperty(this, "_ratio", _descriptor4, this);

          this._rigidBody = null;
          this._grounded = true;
          // 是否着地
          this._curMaxSpeed = 0;
          // 当前最大速度
          this._prevAngleY = 0;
          // 之前的Y角度值
          this._stateX = 0;
          this._stateZ = 0;
          this._velocity = new Vec3();
        }

        get speed() {
          return this._speed;
        }

        set speed(value) {
          this._speed = value;
          this._curMaxSpeed = value * this.ratio;
        }

        get ratio() {
          return this._ratio;
        }

        set ratio(value) {
          this._ratio = value;
          this._curMaxSpeed = this.speed * value;
        }

        /** 是否着地 */
        get grounded() {
          return this._grounded;
        }

        /** 移动方向 */
        get velocity() {
          return this._velocity;
        }

        set velocity(value) {
          this._velocity = value;
          var x = value.x;
          var z = value.z;

          if (x > 0 && this._stateX < 0 || x < 0 && this._stateX > 0 || z > 0 && this._stateZ < 0 || z < 0 && this._stateZ > 0) {
            this._rigidBody.clearVelocity(); // 当前跟之前方向不一致则清除速度,避免惯性太大

          }

          this._stateX = x;
          this._stateZ = z;
        }

        start() {
          this._rigidBody = this.getComponent(RigidBody);
          this._prevAngleY = this.node.eulerAngles.y;
        }
        /** 刚体停止移动 */


        stop() {
          this._stateX = 0;
          this._stateZ = 0;

          this._rigidBody.clearVelocity(); // 清除移动速度

        }

        update(dt) {
          // 施加重力
          this.applyGravity(); // 施加阻尼

          this.applyDamping(dt); // 未落地无法移动

          if (!this.grounded) return; // 施加移动

          this.applyLinearVelocity(v3_0, 1);
        }
        /** 施加重力 */


        applyGravity() {
          var g = this.gravity;
          var m = this._rigidBody.mass;
          v3_1.set(0, m * g, 0);

          this._rigidBody.applyForce(v3_1);
        }
        /** 施加阻尼 */


        applyDamping(dt) {
          // 获取线性速度
          this._rigidBody.getLinearVelocity(v3_1);

          if (v3_1.lengthSqr() > EPSILON) {
            v3_1.multiplyScalar(Math.pow(1.0 - this.damping, dt));

            this._rigidBody.setLinearVelocity(v3_1);
          }
        }
        /**
         * 施加移动
         * @param {Vec3} dir        方向
         * @param {number} speed    移动数度
         */


        applyLinearVelocity(dir, speed) {
          if (this._stateX || this._stateZ) {
            v3_0.set(this._stateX, 0, this._stateZ);
            v3_0.normalize(); // 获取线性速度

            this._rigidBody.getLinearVelocity(v3_1);

            Vec3.scaleAndAdd(v3_1, v3_1, dir, speed);
            var ms = this._curMaxSpeed;
            var len = v3_1.lengthSqr();
            var ratio = 1;

            if (len > ms) {
              if (Math.abs(this.node.eulerAngles.y - this._prevAngleY) >= 10) {
                ratio = 2;
              }

              this._prevAngleY = this.node.eulerAngles.y;
              v3_1.normalize();
              v3_1.multiplyScalar(ms / ratio);
            }

            this._rigidBody.setLinearVelocity(v3_1);
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "damping", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.5;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "gravity", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return -10;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "_speed", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 5;
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "speed", [_dec4], Object.getOwnPropertyDescriptor(_class2.prototype, "speed"), _class2.prototype), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "_ratio", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 1;
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "ratio", [_dec5], Object.getOwnPropertyDescriptor(_class2.prototype, "ratio"), _class2.prototype)), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=25ed24151ced8628e6ffcf0e34b5659f14b5a40b.js.map