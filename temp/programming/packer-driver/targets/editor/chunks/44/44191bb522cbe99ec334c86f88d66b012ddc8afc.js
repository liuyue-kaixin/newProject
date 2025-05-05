System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Camera, Component, gfx, MeshRenderer, RenderTexture, view, _decorator, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _crd, ccclass, property, RtToModel;

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
      MeshRenderer = _cc.MeshRenderer;
      RenderTexture = _cc.RenderTexture;
      view = _cc.view;
      _decorator = _cc._decorator;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "dbd7dMQYutDs7I7uj+3zIiU", "RtToModel", undefined);

      __checkObsolete__(['Camera', 'Component', 'gfx', 'MeshRenderer', 'RenderTexture', 'view', '_decorator']);

      ({
        ccclass,
        property
      } = _decorator);
      /** 三维摄像机内容显示到模型上 */

      _export("RtToModel", RtToModel = (_dec = ccclass('RtToModel'), _dec2 = property(Camera), _dec3 = property(MeshRenderer), _dec(_class = (_class2 = class RtToModel extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "camara", _descriptor, this);

          _initializerDefineProperty(this, "model", _descriptor2, this);

          this.rt = new RenderTexture();
        }

        start() {
          const size = view.getVisibleSize();
          const colorAttachment = new gfx.ColorAttachment();
          const depthStencilAttachment = new gfx.DepthStencilAttachment();
          const pi = new gfx.RenderPassInfo([colorAttachment], depthStencilAttachment, []);
          this.rt.reset({
            width: size.width,
            height: size.height,
            passInfo: pi
          });
          this.camara.targetTexture = this.rt;
          const mat = this.model.material;
          mat.setProperty('mainTexture', this.rt);
        }

        onDestroy() {
          this.rt.destroy();
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "camara", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "model", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=44191bb522cbe99ec334c86f88d66b012ddc8afc.js.map