System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, CCFloat, Component, game, Game, Mask, UITransform, _decorator, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _crd, ccclass, property, executeInEditMode, disallowMultiple, requireComponent, menu, RoundRectMask;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      CCFloat = _cc.CCFloat;
      Component = _cc.Component;
      game = _cc.game;
      Game = _cc.Game;
      Mask = _cc.Mask;
      UITransform = _cc.UITransform;
      _decorator = _cc._decorator;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "da0f8CBQkZDqaekNuERqKjA", "RoundRectMask", undefined);

      __checkObsolete__(['CCFloat', 'Component', 'game', 'Game', 'Graphics', 'Mask', 'UITransform', '_decorator']);

      ({
        ccclass,
        property,
        executeInEditMode,
        disallowMultiple,
        requireComponent,
        menu
      } = _decorator);

      _export("RoundRectMask", RoundRectMask = (_dec = ccclass('RoundRectMask'), _dec2 = executeInEditMode(true), _dec3 = disallowMultiple(true), _dec4 = requireComponent(Mask), _dec5 = menu('渲染组件/圆角遮罩'), _dec6 = property({
        type: CCFloat,
        tooltip: '圆角半径:\n0-1之间为最小边长比例值, \n>1为具体像素值'
      }), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = _dec5(_class = (_class2 = class RoundRectMask extends Component {
        constructor() {
          super(...arguments);

          // 圆角半径
          _initializerDefineProperty(this, "propRadius", _descriptor, this);

          this.mask = null;
        }

        get radius() {
          return this.propRadius;
        }

        set radius(r) {
          this.propRadius = r;
          this.updateMask(r);
        }

        onEnable() {
          this.mask = this.getComponent(Mask);
          this.updateMask(this.radius);
        }

        updateMask(r) {
          var _radius = r >= 0 ? r : 0;

          if (_radius < 1) {
            var uiTransform = this.node.getComponent(UITransform);
            _radius = Math.min((uiTransform == null ? void 0 : uiTransform.width) || 0, (uiTransform == null ? void 0 : uiTransform.width) || 0) * _radius;
          }

          if (this.mask) {
            // @ts-ignore.
            this.mask['radius'] = _radius; // @ts-ignore.

            this.mask['onDraw'] = this.onDraw.bind(this.mask);
            this.mask['_updateGraphics'] = this._updateGraphics.bind(this.mask);
            this.mask.type = Mask.Type.GRAPHICS_RECT;
          }
        }

        _updateGraphics() {
          // @ts-ignore.
          var graphics = this._graphics;

          if (!graphics) {
            return;
          }

          this.onDraw(graphics);
        }
        /**
         * mask 用于绘制罩子的函数.
         * this 指向mask 对象,需要特别注意.
         * @param graphics
         */


        onDraw(graphics) {
          var uiTransform = this.node.getComponent(UITransform);
          graphics.clear();
          var width = uiTransform.width;
          var height = uiTransform.height;
          var x = -width * uiTransform.anchorX;
          var y = -height * uiTransform.anchorY;
          graphics.roundRect(x, y, width, height, this.radius || 0);

          if (game.renderType === Game.RENDER_TYPE_CANVAS) {
            graphics.stroke();
          } else {
            graphics.fill();
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "propRadius", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 50;
        }
      })), _class2)) || _class) || _class) || _class) || _class) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=f920d7c16cb6549d45a9c5649cf46ad74dbe0606.js.map