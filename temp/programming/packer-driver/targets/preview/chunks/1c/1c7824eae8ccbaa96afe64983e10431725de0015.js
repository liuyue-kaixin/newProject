System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Component, Label, Node, Prefab, Slider, _decorator, instantiate, setDisplayStats, BulletHell, Player, Config, demo2d, demo3d, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _crd, ccclass, property, main;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfBulletHell(extras) {
    _reporterNs.report("BulletHell", "./demos/bulletHell/bulletHell", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPlayer(extras) {
    _reporterNs.report("Player", "./demos/bulletHell/player", _context.meta, extras);
  }

  function _reportPossibleCrUseOfConfig(extras) {
    _reporterNs.report("Config", "./demos/collisions/Config", _context.meta, extras);
  }

  function _reportPossibleCrUseOfdemo2d(extras) {
    _reporterNs.report("demo2d", "./demos/collisions/demo2d", _context.meta, extras);
  }

  function _reportPossibleCrUseOfdemo3d(extras) {
    _reporterNs.report("demo3d", "./demos/collisions/demo3d", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Component = _cc.Component;
      Label = _cc.Label;
      Node = _cc.Node;
      Prefab = _cc.Prefab;
      Slider = _cc.Slider;
      _decorator = _cc._decorator;
      instantiate = _cc.instantiate;
      setDisplayStats = _cc.setDisplayStats;
    }, function (_unresolved_2) {
      BulletHell = _unresolved_2.BulletHell;
    }, function (_unresolved_3) {
      Player = _unresolved_3.Player;
    }, function (_unresolved_4) {
      Config = _unresolved_4.Config;
    }, function (_unresolved_5) {
      demo2d = _unresolved_5.demo2d;
    }, function (_unresolved_6) {
      demo3d = _unresolved_6.demo3d;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "70f4fBQ365GaohfCZx0VPZN", "main", undefined);

      __checkObsolete__(['Component', 'EventTouch', 'Label', 'Node', 'Prefab', 'Slider', 'Toggle', '_decorator', 'instantiate', 'setDisplayStats']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("main", main = (_dec = ccclass('main'), _dec2 = property(Prefab), _dec3 = property(Prefab), _dec4 = property(Prefab), _dec5 = property(Node), _dec6 = property(Slider), _dec7 = property(Slider), _dec8 = property(Label), _dec9 = property(Label), _dec10 = property(Label), _dec11 = property(Label), _dec(_class = (_class2 = class main extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "demo2d", _descriptor, this);

          _initializerDefineProperty(this, "demo3d", _descriptor2, this);

          _initializerDefineProperty(this, "demoBullet", _descriptor3, this);

          _initializerDefineProperty(this, "demosNode", _descriptor4, this);

          _initializerDefineProperty(this, "sbox", _descriptor5, this);

          _initializerDefineProperty(this, "sSphere", _descriptor6, this);

          _initializerDefineProperty(this, "boxTxt", _descriptor7, this);

          _initializerDefineProperty(this, "sphereTxt", _descriptor8, this);

          _initializerDefineProperty(this, "speedTxt", _descriptor9, this);

          _initializerDefineProperty(this, "totalTxt", _descriptor10, this);

          this.currScense = null;
        }

        start() {
          setDisplayStats(true);
          this.changeDemos(); //刷新物体个数

          this.schedule(() => {
            var length = 0;

            switch ((_crd && Config === void 0 ? (_reportPossibleCrUseOfConfig({
              error: Error()
            }), Config) : Config).demoIdx) {
              case 0:
                length = this.currScense.getComponentInChildren(_crd && demo2d === void 0 ? (_reportPossibleCrUseOfdemo2d({
                  error: Error()
                }), demo2d) : demo2d).objects.length;
                break;

              case 1:
                length = this.currScense.getComponentInChildren(_crd && demo3d === void 0 ? (_reportPossibleCrUseOfdemo3d({
                  error: Error()
                }), demo3d) : demo3d).objects.length;
                break;

              case 2:
                length = this.currScense.getComponentInChildren(_crd && BulletHell === void 0 ? (_reportPossibleCrUseOfBulletHell({
                  error: Error()
                }), BulletHell) : BulletHell).objects.children.length;
                break;
            }

            this.totalTxt.string = "" + length;
          }, 0.1);
        }

        changeDemos() {
          if (this.currScense) {
            //释放旧场景
            this.currScense.removeFromParent();
            this.currScense.destroy();
            this.currScense = null;
          }

          switch ((_crd && Config === void 0 ? (_reportPossibleCrUseOfConfig({
            error: Error()
          }), Config) : Config).demoIdx) {
            case 0:
              this.currScense = instantiate(this.demo2d);
              this.node.getChildByName("Left").active = true;
              this.node.getChildByName("Skill").active = false;
              break;

            case 1:
              this.currScense = instantiate(this.demo3d);
              this.node.getChildByName("Left").active = true;
              this.node.getChildByName("Skill").active = false;
              break;

            case 2:
              this.currScense = instantiate(this.demoBullet);
              this.node.getChildByName("Left").active = false;
              this.node.getChildByName("Skill").active = true;
              break;
          } //下一帧加载新场景


          this.scheduleOnce(() => {
            this.demosNode.addChild(this.currScense);
          });
        }

        onDemos(event) {
          var idx = event.target.getSiblingIndex();

          if (idx != (_crd && Config === void 0 ? (_reportPossibleCrUseOfConfig({
            error: Error()
          }), Config) : Config).demoIdx) {
            (_crd && Config === void 0 ? (_reportPossibleCrUseOfConfig({
              error: Error()
            }), Config) : Config).demoIdx = idx;
            this.changeDemos();
          }
        }

        onSpeed(event) {
          (_crd && Config === void 0 ? (_reportPossibleCrUseOfConfig({
            error: Error()
          }), Config) : Config).maxSpeed = event.progress;
          this.speedTxt.string = "speed:" + Math.round((_crd && Config === void 0 ? (_reportPossibleCrUseOfConfig({
            error: Error()
          }), Config) : Config).maxSpeed * 100);
        }

        onRotation(event) {
          if ((_crd && Config === void 0 ? (_reportPossibleCrUseOfConfig({
            error: Error()
          }), Config) : Config).isRotate == event.isChecked) return;
          (_crd && Config === void 0 ? (_reportPossibleCrUseOfConfig({
            error: Error()
          }), Config) : Config).isRotate = event.isChecked; // if (!Config.isRotate) {

          switch ((_crd && Config === void 0 ? (_reportPossibleCrUseOfConfig({
            error: Error()
          }), Config) : Config).demoIdx) {
            case 0:
              if (!(_crd && Config === void 0 ? (_reportPossibleCrUseOfConfig({
                error: Error()
              }), Config) : Config).isRotate) this.currScense.getComponentInChildren(_crd && demo2d === void 0 ? (_reportPossibleCrUseOfdemo2d({
                error: Error()
              }), demo2d) : demo2d).resetRotation();else this.currScense.getComponentInChildren(_crd && demo2d === void 0 ? (_reportPossibleCrUseOfdemo2d({
                error: Error()
              }), demo2d) : demo2d).randomRotation();
              break;

            case 1:
              if (!(_crd && Config === void 0 ? (_reportPossibleCrUseOfConfig({
                error: Error()
              }), Config) : Config).isRotate) this.currScense.getComponentInChildren(_crd && demo3d === void 0 ? (_reportPossibleCrUseOfdemo3d({
                error: Error()
              }), demo3d) : demo3d).resetRotation();else this.currScense.getComponentInChildren(_crd && demo3d === void 0 ? (_reportPossibleCrUseOfdemo3d({
                error: Error()
              }), demo3d) : demo3d).randomRotation();
              break;
          } // }

        }

        onSphere(event) {
          var max = (_crd && Config === void 0 ? (_reportPossibleCrUseOfConfig({
            error: Error()
          }), Config) : Config).maxNum;
          var progress = event.progress;

          if (progress + (_crd && Config === void 0 ? (_reportPossibleCrUseOfConfig({
            error: Error()
          }), Config) : Config).box >= 1) {
            this.boxTxt.string = "box:" + Math.round((1 - progress) * max);
            this.sbox.progress = 1 - progress;
            (_crd && Config === void 0 ? (_reportPossibleCrUseOfConfig({
              error: Error()
            }), Config) : Config).box = 1 - progress;
          }

          this.sphereTxt.string = "sphere:" + Math.round(progress * max);
          event.progress = progress;
          (_crd && Config === void 0 ? (_reportPossibleCrUseOfConfig({
            error: Error()
          }), Config) : Config).sphere = progress;
        }

        onBox(event) {
          var max = (_crd && Config === void 0 ? (_reportPossibleCrUseOfConfig({
            error: Error()
          }), Config) : Config).maxNum;
          var progress = event.progress;

          if (progress + (_crd && Config === void 0 ? (_reportPossibleCrUseOfConfig({
            error: Error()
          }), Config) : Config).sphere >= 1) {
            this.sphereTxt.string = "sphere:" + Math.round((1 - progress) * max);
            this.sSphere.progress = 1 - progress;
            (_crd && Config === void 0 ? (_reportPossibleCrUseOfConfig({
              error: Error()
            }), Config) : Config).sphere = 1 - progress;
          }

          this.boxTxt.string = "box:" + Math.round(progress * max);
          event.progress = progress;
          (_crd && Config === void 0 ? (_reportPossibleCrUseOfConfig({
            error: Error()
          }), Config) : Config).box = progress;
        }

        onSkill(event) {
          (_crd && Player === void 0 ? (_reportPossibleCrUseOfPlayer({
            error: Error()
          }), Player) : Player).inst.onSkill(); //示范做了个定时

          event.target.active = false;
          this.scheduleOnce(() => {
            if ((_crd && Config === void 0 ? (_reportPossibleCrUseOfConfig({
              error: Error()
            }), Config) : Config).demoIdx == 2) {
              event.target.active = true;
            }
          }, 5);
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "demo2d", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "demo3d", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "demoBullet", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "demosNode", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "sbox", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "sSphere", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "boxTxt", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "sphereTxt", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "speedTxt", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "totalTxt", [_dec11], {
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
//# sourceMappingURL=1c7824eae8ccbaa96afe64983e10431725de0015.js.map