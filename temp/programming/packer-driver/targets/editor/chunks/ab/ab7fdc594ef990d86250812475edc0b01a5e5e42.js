System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Color, MeshRenderer, cObject, Trigger, _dec, _class, _crd, ccclass, property, Sprite3d;

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
      MeshRenderer = _cc.MeshRenderer;
    }, function (_unresolved_2) {
      cObject = _unresolved_2.cObject;
      Trigger = _unresolved_2.Trigger;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "56ae8Cu2nlC9o6PKDYcYpcB", "Sprite3d", undefined);

      __checkObsolete__(['_decorator', 'Color', 'MeshRenderer']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Sprite3d", Sprite3d = (_dec = ccclass('Sprite3d'), _dec(_class = class Sprite3d extends (_crd && cObject === void 0 ? (_reportPossibleCrUseOfcObject({
        error: Error()
      }), cObject) : cObject) {
        constructor(...args) {
          super(...args);
          this.isHit = false;
          this.color = new Color();
          this.sprite = null;
          this.colorData = new Float32Array(4);
        }

        start() {
          this.sprite = this.node.getComponent(MeshRenderer);
          this.sprite.model["_worldBounds"] = null;
          this.setColor(Color.WHITE);
        }

        setColor(color) {
          if (this.sprite) {
            if (!this.color.equals(color)) {
              let data = this.colorData;
              data[0] = color.r / 255.0;
              data[1] = color.g / 255.0;
              data[2] = color.b / 255.0;
              data[3] = color.a / 255.0;
              this.sprite.setInstancedAttribute("i_color", this.colorData);
            }
          }
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
          let isHit = trigger != (_crd && Trigger === void 0 ? (_reportPossibleCrUseOfTrigger({
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
//# sourceMappingURL=ab7fdc594ef990d86250812475edc0b01a5e5e42.js.map