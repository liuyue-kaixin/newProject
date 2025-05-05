System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, ccenum, Collider, Component, _decorator, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, CollisionType, GameCollision;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      ccenum = _cc.ccenum;
      Collider = _cc.Collider;
      Component = _cc.Component;
      _decorator = _cc._decorator;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "7fa3eqzDkpBUq8OUNr05VJh", "GameCollision", undefined);
      /*
       * @Author: dgflash
       * @Date: 2022-03-29 17:08:08
       * @LastEditors: dgflash
       * @LastEditTime: 2022-09-02 09:45:41
       */


      __checkObsolete__(['ccenum', 'Collider', 'Component', 'ICollisionEvent', 'ITriggerEvent', '_decorator']);

      ({
        ccclass,
        property
      } = _decorator);
      /** 碰撞物体类型 */

      _export("CollisionType", CollisionType = /*#__PURE__*/function (CollisionType) {
        CollisionType[CollisionType["Role"] = 0] = "Role";
        CollisionType[CollisionType["Ballistic"] = 1] = "Ballistic";
        CollisionType[CollisionType["Wall"] = 2] = "Wall";
        return CollisionType;
      }({}));

      ccenum(CollisionType);
      /** 碰撞器与触发器 */

      _export("GameCollision", GameCollision = (_dec = ccclass('GameCollision'), _dec2 = property({
        type: CollisionType,
        tooltip: '碰撞物体类型'
      }), _dec(_class = (_class2 = class GameCollision extends Component {
        constructor(...args) {
          super(...args);
          this.Event_TriggerEnter = "onTriggerEnter";
          this.Event_TriggerStay = "onTriggerStay";
          this.Event_TriggerExit = "onTriggerExit";
          this.Event_CollisionEnter = "onCollisionEnter";
          this.Event_CollisionStay = "onCollisionStay";
          this.Event_CollisionExit = "onCollisionExit";
          this.collider = null;

          _initializerDefineProperty(this, "type", _descriptor, this);
        }

        onLoad() {
          this.collider = this.getComponent(Collider);

          if (this.collider.isTrigger) {
            this.collider.on(this.Event_TriggerEnter, this.onTrigger, this);
            this.collider.on(this.Event_TriggerStay, this.onTrigger, this);
            this.collider.on(this.Event_TriggerExit, this.onTrigger, this);
          } else {
            this.collider.on(this.Event_CollisionEnter, this.onCollision, this);
            this.collider.on(this.Event_CollisionStay, this.onCollision, this);
            this.collider.on(this.Event_CollisionExit, this.onCollision, this);
          }
        }

        onTrigger(event) {
          switch (event.type) {
            case this.Event_TriggerEnter:
              this.onTriggerEnter(event);
              break;

            case this.Event_TriggerStay:
              this.onTriggerStay(event);
              break;

            case this.Event_TriggerExit:
              this.onTriggerExit(event);
              break;
          }
        }

        onTriggerEnter(event) {}

        onTriggerStay(event) {}

        onTriggerExit(event) {}

        onCollision(event) {
          switch (event.type) {
            case this.Event_CollisionEnter:
              this.onCollisionEnter(event);
              break;

            case this.Event_CollisionStay:
              this.onCollisionStay(event);
              break;

            case this.Event_CollisionExit:
              this.onCollisionExit(event);
              break;
          }
        }

        onCollisionEnter(event) {}

        onCollisionStay(event) {}

        onCollisionExit(event) {}

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "type", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return CollisionType.Ballistic;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=efc1a8261b8ce43ae4b07ab7050dba694633589a.js.map