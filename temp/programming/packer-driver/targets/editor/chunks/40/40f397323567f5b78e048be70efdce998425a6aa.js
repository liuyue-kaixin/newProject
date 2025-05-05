System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, CCInteger, color, Component, Enum, Label, Layers, Mask, Node, Overflow, Sprite, SpriteFrame, UITransform, Vec3, _decorator, RoundRectMask, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _class3, _crd, ccclass, property, Position, Badge;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfRoundRectMask(extras) {
    _reporterNs.report("RoundRectMask", "./RoundRectMask", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      CCInteger = _cc.CCInteger;
      color = _cc.color;
      Component = _cc.Component;
      Enum = _cc.Enum;
      Label = _cc.Label;
      Layers = _cc.Layers;
      Mask = _cc.Mask;
      Node = _cc.Node;
      Overflow = _cc.Overflow;
      Sprite = _cc.Sprite;
      SpriteFrame = _cc.SpriteFrame;
      UITransform = _cc.UITransform;
      Vec3 = _cc.Vec3;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      RoundRectMask = _unresolved_2.RoundRectMask;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "bac76ow94VI+IpAB1DQUKfq", "Badge", undefined);

      __checkObsolete__(['CCInteger', 'color', 'Component', 'Enum', 'Label', 'Layers', 'Mask', 'math', 'Node', 'Overflow', 'Sprite', 'SpriteFrame', 'UITransform', 'Vec3', '_decorator']);

      ({
        ccclass,
        property
      } = _decorator); // 徽标位置

      _export("Position", Position = /*#__PURE__*/function (Position) {
        Position[Position["TOP_LEFT"] = 0] = "TOP_LEFT";
        Position[Position["TOP_RIGHT"] = 1] = "TOP_RIGHT";
        return Position;
      }({}));

      Enum(Position);

      _export("Badge", Badge = (_dec = ccclass('Badge'), _dec2 = property({
        type: SpriteFrame,
        tooltip: '背景'
      }), _dec3 = property({
        tooltip: '内容'
      }), _dec4 = property({
        type: CCInteger,
        tooltip: '宽'
      }), _dec5 = property({
        type: CCInteger,
        tooltip: '高'
      }), _dec6 = property({
        type: CCInteger,
        tooltip: '圆角'
      }), _dec7 = property({
        type: Position,
        tooltip: '位置\n 0: 左上角 \n 1: 右上角'
      }), _dec(_class = (_class2 = (_class3 = class Badge extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "bg", _descriptor, this);

          _initializerDefineProperty(this, "string", _descriptor2, this);

          _initializerDefineProperty(this, "width", _descriptor3, this);

          _initializerDefineProperty(this, "height", _descriptor4, this);

          _initializerDefineProperty(this, "radius", _descriptor5, this);

          _initializerDefineProperty(this, "position", _descriptor6, this);

          this.badgeNode = null;
          this.color = color(214, 30, 30, 240);
          this.textColor = color(255, 255, 255, 255);
          this.labelNode = null;
        }

        get text() {
          return this.string;
        }

        set text(text) {
          this.string = text;
          this.setText(text);
        }

        onLoad() {
          this.initBadge();
        } // 初始化badge，插入节点等操作


        initBadge() {
          const badgeNode = this.createBadge();
          this.node.addChild(badgeNode);
        } // 设置位置


        setPosition(position) {
          var _this$node$getCompone, _this$badgeNode$getCo;

          const parentSize = (_this$node$getCompone = this.node.getComponent(UITransform)) == null ? void 0 : _this$node$getCompone.contentSize;
          const badgeSize = (_this$badgeNode$getCo = this.badgeNode.getComponent(UITransform)) == null ? void 0 : _this$badgeNode$getCo.contentSize;

          switch (position) {
            case Position.TOP_LEFT:
              {
                const x = -parentSize.width / 2;
                const y = parentSize.height / 2;
                this.badgeNode.setPosition(new Vec3(x, y, 0));
                break;
              }

            case Position.TOP_RIGHT:
              {
                const x = parentSize.width / 2;
                const y = parentSize.height / 2;
                this.badgeNode.setPosition(new Vec3(x, y, 0));
                break;
              }
          }
        } // 设置文字


        setText(text) {
          this.text = text;
          const label = this.labelNode.getComponent(Label);

          if (label) {
            label.string = this.text;
            label.color = this.textColor;
          }

          return this;
        }

        createBadge() {
          var _this$badgeNode$getCo2, _backgroundNode$getCo, _label$getComponent;

          this.badgeNode = new Node('BadgeNode');
          const backgroundNode = new Node('backgroundNode');
          this.labelNode = new Node('labelNode');
          this.badgeNode.layer = Layers.Enum.UI_2D;
          backgroundNode.layer = Layers.Enum.UI_2D;
          this.labelNode.layer = Layers.Enum.UI_2D; // 设置mask

          this.badgeNode.addComponent(Mask);
          this.badgeNode.addComponent(_crd && RoundRectMask === void 0 ? (_reportPossibleCrUseOfRoundRectMask({
            error: Error()
          }), RoundRectMask) : RoundRectMask).radius = this.radius;
          (_this$badgeNode$getCo2 = this.badgeNode.getComponent(UITransform)) == null || _this$badgeNode$getCo2.setContentSize(this.width, this.height);
          this.badgeNode.active = true; // 设置背景

          const _sprite = backgroundNode.addComponent(Sprite);

          _sprite.type = Sprite.Type.SIMPLE;
          _sprite.color = this.color;
          _sprite.spriteFrame = this.bg;
          (_backgroundNode$getCo = backgroundNode.getComponent(UITransform)) == null || _backgroundNode$getCo.setContentSize(this.width, this.height); // 设置label信息

          const _label = this.labelNode.addComponent(Label);

          (_label$getComponent = _label.getComponent(UITransform)) == null || _label$getComponent.setContentSize(this.width, this.height);
          _label.string = this.text;
          _label.color = this.textColor;
          _label.fontSize = 18;
          _label.isBold = true;
          _label.horizontalAlign = Label.HorizontalAlign.CENTER;
          _label.verticalAlign = Label.VerticalAlign.CENTER;
          _label.lineHeight = 0;
          _label.overflow = Overflow.NONE;
          _label.enableWrapText = false; // 添加节点

          this.badgeNode.addChild(backgroundNode);
          this.badgeNode.addChild(this.labelNode);
          this.setPosition(this.position);
          return this.badgeNode;
        }

        start() {}

      }, _class3.POSITION = void 0, _class3), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "bg", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "string", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return '6';
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "width", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 30;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "height", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 26;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "radius", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 6;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "position", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return Position.TOP_LEFT;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=40f397323567f5b78e048be70efdce998425a6aa.js.map