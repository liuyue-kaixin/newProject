System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Camera, Component, gfx, Node, RenderTexture, Sprite, SpriteFrame, UITransform, _decorator, _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _crd, ccclass, property, RtToSprite;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Camera = _cc.Camera;
      Component = _cc.Component;
      gfx = _cc.gfx;
      Node = _cc.Node;
      RenderTexture = _cc.RenderTexture;
      Sprite = _cc.Sprite;
      SpriteFrame = _cc.SpriteFrame;
      UITransform = _cc.UITransform;
      _decorator = _cc._decorator;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "f608cdDWBNEKLILVNBcQYvf", "RtToSprite", undefined);

      __checkObsolete__(['Camera', 'Component', 'EventTouch', 'gfx', 'Node', 'RenderTexture', 'Sprite', 'SpriteFrame', 'UITransform', 'Vec3', '_decorator']);

      ({
        ccclass,
        property
      } = _decorator);
      /** 三维模型显示到二维精灵上 */

      _export("RtToSprite", RtToSprite = (_dec = ccclass('RtToSprite'), _dec2 = property({
        type: Camera,
        tooltip: "渲染模型的三维摄像机"
      }), _dec3 = property({
        type: Sprite,
        tooltip: "显示模型的二维精灵组件"
      }), _dec4 = property({
        tooltip: "是否触摸控制旋转"
      }), _dec5 = property({
        type: Node,
        tooltip: "三维模型",
        visible: function visible() {
          //@ts-ignore
          return this.rotation === true;
        }
      }), _dec(_class = (_class2 = class RtToSprite extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "camera", _descriptor, this);

          _initializerDefineProperty(this, "sprite", _descriptor2, this);

          _initializerDefineProperty(this, "rotation", _descriptor3, this);

          _initializerDefineProperty(this, "model", _descriptor4, this);

          this.rt = new RenderTexture();
          this.touched = false;
        }

        // 是否触摸节点
        start() {
          var size = this.sprite.getComponent(UITransform);
          this.refreshRenderTexture(size.width, size.height);

          if (this.rotation) {
            this.sprite.node.on(Node.EventType.TOUCH_START, this.onTouchStart, this);
            this.sprite.node.on(Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
            this.sprite.node.on(Node.EventType.TOUCH_END, this.onTouchEnd, this);
            this.sprite.node.on(Node.EventType.TOUCH_CANCEL, this.onTouchEnd, this);
          }
        }

        onTouchStart(event) {
          this.touched = true;
        }

        onTouchMove(event) {
          if (this.touched) {
            var eulerAngles = this.model.eulerAngles;
            var deltaX = event.touch.getDelta().x;
            eulerAngles.y += -deltaX;
            this.model.eulerAngles = eulerAngles;
          }
        }

        onTouchEnd(event) {
          this.touched = false;
        }
        /** 刷新纹理内容 */


        refreshRenderTexture(w, h) {
          var colorAttachment = new gfx.ColorAttachment();
          var depthStencilAttachment = new gfx.DepthStencilAttachment();
          var pi = new gfx.RenderPassInfo([colorAttachment], depthStencilAttachment, []);
          this.rt.reset({
            width: w,
            height: h,
            passInfo: pi
          });
          var spriteframe = this.sprite.spriteFrame;
          var sp = new SpriteFrame();
          sp.reset({
            originalSize: spriteframe.originalSize,
            rect: spriteframe.rect,
            offset: spriteframe.offset,
            isRotate: spriteframe.rotated,
            borderTop: spriteframe.insetTop,
            borderLeft: spriteframe.insetLeft,
            borderBottom: spriteframe.insetBottom,
            borderRight: spriteframe.insetRight
          });
          this.camera.targetTexture = this.rt;
          sp.texture = this.rt;
          this.sprite.spriteFrame = sp;
        }

        onDestroy() {
          if (this.rotation) {
            this.sprite.node.off(Node.EventType.TOUCH_START, this.onTouchStart, this);
            this.sprite.node.off(Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
            this.sprite.node.off(Node.EventType.TOUCH_END, this.onTouchEnd, this);
            this.sprite.node.off(Node.EventType.TOUCH_CANCEL, this.onTouchEnd, this);
          }

          this.rt.destroy();
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "camera", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "sprite", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "rotation", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "model", [_dec5], {
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
//# sourceMappingURL=5de81ea44b00bef3de9478487aa99f52dc53b2ef.js.map