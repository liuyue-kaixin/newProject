System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Component, sp, _decorator, oops, _dec, _class, _class2, _descriptor, _crd, ccclass, property, SpineFinishedRelease;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfoops(extras) {
    _reporterNs.report("oops", "../../../core/Oops", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Component = _cc.Component;
      sp = _cc.sp;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      oops = _unresolved_2.oops;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "9589eKB/RZKXpxoYhz5SyC7", "SpineFinishedRelease", undefined);
      /*
       * @Author: dgflash
       * @Date: 2021-10-12 14:11:04
       * @LastEditors: dgflash
       * @LastEditTime: 2022-04-08 15:42:16
       */


      __checkObsolete__(['Component', 'sp', '_decorator']);

      ({
        ccclass,
        property
      } = _decorator);
      /** 动画播放完隐藏特效 */

      _export("SpineFinishedRelease", SpineFinishedRelease = (_dec = ccclass('SpineFinishedRelease'), _dec(_class = (_class2 = class SpineFinishedRelease extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "isDestroy", _descriptor, this);

          this.spine = void 0;
          this.resPath = null;
        }

        /** 设置路径 */
        setResPath(path) {
          this.resPath = path;
        }

        onLoad() {
          this.spine = this.getComponent(sp.Skeleton);
          this.spine.setCompleteListener(this.onSpineComplete.bind(this));

          if (this.resPath) {
            (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
              error: Error()
            }), oops) : oops).res.load(this.resPath, sp.SkeletonData, (err, sd) => {
              if (err) {
                console.error("\u52A0\u8F7D\u3010" + this.resPath + "\u3011\u7684 SPINE \u8D44\u6E90\u4E0D\u5B58\u5728");
                return;
              }

              this.spine.skeletonData = sd;
              this.spine.setAnimation(0, "animation", false);
            });
          } else {
            this.spine.setAnimation(0, "animation", false);
          }
        }

        onSpineComplete() {
          if (this.isDestroy) {
            this.node.destroy();
          } else {
            this.node.removeFromParent();
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "isDestroy", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return true;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=2cb01b4a74a8eaa9028031e41f242564b9f8eb47.js.map