System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Component, Node, Vec3, _decorator, oops, MathUtil, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _descriptor3, _crd, ccclass, property, Effect2DFollow3D;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfoops(extras) {
    _reporterNs.report("oops", "../../core/Oops", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMathUtil(extras) {
    _reporterNs.report("MathUtil", "../../core/utils/MathUtil", _context.meta, extras);
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
      Vec3 = _cc.Vec3;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      oops = _unresolved_2.oops;
    }, function (_unresolved_3) {
      MathUtil = _unresolved_3.MathUtil;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "f04f92UNY1J34UPA0VrEIsH", "Effect2DFollow3D", undefined);
      /*
       * @Author: dgflash
       * @Date: 2022-03-31 18:03:50
       * @LastEditors: dgflash
       * @LastEditTime: 2022-09-22 14:53:47
       */


      __checkObsolete__(['Camera', 'Component', 'Node', 'Vec3', '_decorator']);

      ({
        ccclass,
        property
      } = _decorator);
      /** 2D节点跟随3D节点 */

      _export("Effect2DFollow3D", Effect2DFollow3D = (_dec = ccclass("Effect2DFollow3D"), _dec2 = property({
        type: Node
      }), _dec3 = property({
        type: Node
      }), _dec(_class = (_class2 = class Effect2DFollow3D extends Component {
        constructor() {
          super(...arguments);

          /** 3D世界节点 */
          _initializerDefineProperty(this, "node3d", _descriptor, this);

          /** 2D界面界面 */
          _initializerDefineProperty(this, "nodeUi", _descriptor2, this);

          /** 距离 */
          _initializerDefineProperty(this, "distance", _descriptor3, this);

          /** 3D摄像机 */
          this.camera = null;
          this.pos = new Vec3();
        }

        /**
         * 设3D定位参考点，并更新位置
         * @param node 3D世界节点
         */
        setTarget(node) {
          this.node3d = node;
        }

        start() {
          var scale = this.zoom();
          this.node.setScale(scale, scale, 1);
        }

        lateUpdate(dt) {
          var scale = this.zoom();
          scale = (_crd && MathUtil === void 0 ? (_reportPossibleCrUseOfMathUtil({
            error: Error()
          }), MathUtil) : MathUtil).lerp(this.node.scale.x, scale, 0.1);
          this.node.setScale(scale, scale, 1);
        }

        zoom() {
          this.camera.convertToUINode(this.node3d.worldPosition, (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
            error: Error()
          }), oops) : oops).gui.game, this.pos);
          this.nodeUi.setPosition(this.pos); // @ts-ignore

          Vec3.transformMat4(this.pos, this.node3d.worldPosition, this.camera._camera.matView);
          var ratio = this.distance / Math.abs(this.pos.z);
          var value = Math.floor(ratio * 100) / 100;
          return value;
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "node3d", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "nodeUi", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "distance", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 10;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=aecde125ce4e45bd077a3da76356078c48cf6552.js.map