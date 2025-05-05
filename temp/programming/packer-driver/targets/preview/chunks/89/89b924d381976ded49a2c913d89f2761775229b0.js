System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Component, game, Node, _decorator, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _crd, ccclass, property, menu, ButtonSimple;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Component = _cc.Component;
      game = _cc.game;
      Node = _cc.Node;
      _decorator = _cc._decorator;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "8d645yObX1FvJfk2sbi0rxp", "ButtonSimple", undefined);

      __checkObsolete__(['Component', 'EventTouch', 'game', 'Node', '_decorator']);

      ({
        ccclass,
        property,
        menu
      } = _decorator);

      _export("default", ButtonSimple = (_dec = ccclass("ButtonSimple"), _dec2 = menu('ui/button/ButtonSimple'), _dec3 = property({
        tooltip: "是否只能触发一次"
      }), _dec4 = property({
        tooltip: "每次触发间隔"
      }), _dec(_class = _dec2(_class = (_class2 = class ButtonSimple extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "once", _descriptor, this);

          _initializerDefineProperty(this, "interval", _descriptor2, this);

          this.touchCount = 0;
          this.touchtEndTime = 0;
        }

        onLoad() {
          this.node.on(Node.EventType.TOUCH_START, this.onTouchtStart, this);
          this.node.on(Node.EventType.TOUCH_END, this.onTouchEnd, this);
          this.node.on(Node.EventType.TOUCH_CANCEL, this.onTouchEnd, this);
        }
        /** 触摸开始 */


        onTouchtStart(event) {}
        /** 触摸结束 */


        onTouchEnd(event) {
          if (this.once) {
            if (this.touchCount > 0) {
              event.propagationStopped = true;
              return;
            }

            this.touchCount++;
          } // 防连点500毫秒出发一次事件


          if (this.touchtEndTime && game.totalTime - this.touchtEndTime < this.interval) {
            event.propagationStopped = true;
          } else {
            this.touchtEndTime = game.totalTime;
          }
        }

        onDestroy() {
          this.node.off(Node.EventType.TOUCH_START, this.onTouchtStart, this);
          this.node.off(Node.EventType.TOUCH_END, this.onTouchEnd, this);
          this.node.off(Node.EventType.TOUCH_CANCEL, this.onTouchEnd, this);
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "once", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "interval", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 500;
        }
      })), _class2)) || _class) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=89b924d381976ded49a2c913d89f2761775229b0.js.map