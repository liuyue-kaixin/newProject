System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Color, Sprite, cObject, Trigger, _dec, _class, _crd, ccclass, property, Sprite2d;

  function _reportPossibleCrUseOfcBody(extras) {
    _reporterNs.report("cBody", "../collision/Body", _context.meta, extras);
  }

  function _reportPossibleCrUseOfcObject(extras) {
    _reporterNs.report("cObject", "../collision/Object", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTrigger(extras) {
    _reporterNs.report("Trigger", "../collision/Object", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Color = _cc.Color;
      Sprite = _cc.Sprite;
    }, function (_unresolved_2) {
      cObject = _unresolved_2.cObject;
      Trigger = _unresolved_2.Trigger;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "a1d56boT3VNfoNbbf/ozJuZ", "Sprite2d", undefined);

      __checkObsolete__(['_decorator', 'Color', 'Sprite']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Sprite2d", Sprite2d = (_dec = ccclass('Sprite2d'), _dec(_class = class Sprite2d extends (_crd && cObject === void 0 ? (_reportPossibleCrUseOfcObject({
        error: Error()
      }), cObject) : cObject) {
        constructor() {
          super(...arguments);
          this.sprite = null;
          this.isHit = false;
        }

        start() {
          this.sprite = this.node.getComponent(Sprite);
        }

        setColor(color) {
          if (this.sprite) this.sprite.color = color;
        }

        update(dt) {
          this.setColor(this.isHit ? Color.GREEN : Color.WHITE);
          this.isHit = false;
        } // remove(): void {
        //     super.remove();
        //     //如需要改善性能，自行回收到内存池
        //     this.node.removeFromParent();
        //     this.node.destroy();
        // }


        onTrigger(b, trigger) {
          var isHit = trigger != (_crd && Trigger === void 0 ? (_reportPossibleCrUseOfTrigger({
            error: Error()
          }), Trigger) : Trigger).exit;

          if (isHit && !this.isHit) {
            this.isHit = isHit;
          }
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=8d1c52ea50387b60712c9f6d46634b45a801b2d6.js.map