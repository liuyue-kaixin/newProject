System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Color, Component, macro, MeshRenderer, Node, v2, Vec2, Vec3, _decorator, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _crd, ccclass, property, NavLine;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Color = _cc.Color;
      Component = _cc.Component;
      macro = _cc.macro;
      MeshRenderer = _cc.MeshRenderer;
      Node = _cc.Node;
      v2 = _cc.v2;
      Vec2 = _cc.Vec2;
      Vec3 = _cc.Vec3;
      _decorator = _cc._decorator;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "41dce0XCUNII74J0zSeaDUf", "NavLine", undefined);
      /*
       * @Author: dgflash
       * @Date: 2022-03-25 10:53:30
       * @LastEditors: dgflash
       * @LastEditTime: 2022-03-25 23:43:25
       */


      __checkObsolete__(['Color', 'Component', 'macro', 'MeshRenderer', 'Node', 'renderer', 'v2', 'Vec2', 'Vec3', '_decorator']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("NavLine", NavLine = (_dec = ccclass('NavLine - 导航钱组件'), _dec2 = property({
        type: Node,
        displayName: "玩家模型节点"
      }), _dec3 = property({
        type: MeshRenderer,
        displayName: "箭头网格",
        tooltip: "拖MeshRenderer组件到这里"
      }), _dec4 = property({
        displayName: "导航线颜色"
      }), _dec5 = property({
        displayName: "执行间隔",
        tooltip: "多少帧执行一次，数值越大动画越流程，建议3-5",
        min: 1
      }), _dec6 = property({
        displayName: "箭头速度",
        tooltip: "控制材质texture位移，数值越大动画播放越快",
        min: 0.1
      }), _dec7 = property({
        displayName: "箭头密度",
        tooltip: "控制箭头的密度，数值越大越密",
        min: 0.1
      }), _dec8 = property({
        displayName: "角度变化",
        tooltip: "箭头是否有 x 欧拉角度变化，有高度的地形引导开启"
      }), _dec(_class = (_class2 = class NavLine extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "player", _descriptor, this);

          _initializerDefineProperty(this, "mesh", _descriptor2, this);

          _initializerDefineProperty(this, "color", _descriptor3, this);

          _initializerDefineProperty(this, "interval", _descriptor4, this);

          _initializerDefineProperty(this, "speed", _descriptor5, this);

          _initializerDefineProperty(this, "density", _descriptor6, this);

          _initializerDefineProperty(this, "xEuler", _descriptor7, this);

          /* 材质 */
          this.mat = null;

          /* 导航线是否启动 */
          this.inited = false;
          this.distance = 0;
          this.frame = 0;
          this.start_pos = new Vec3();
          this.target_pos = new Vec3();
          this.tOffset = new Vec2(1, 1);
        }

        start() {
          this.mat = this.mesh.material;
          this.mat.setProperty("textureMoveSpeed", v2(0, this.speed)); // 根据需求也可以是 x 轴，动画移动

          this.hide();
        }
        /** 开始提示 */


        show(pos) {
          this.node.setRotationFromEuler(0, this.player.eulerAngles.y, 0);
          this.mesh.node.active = true;
          this.frame = 0;
          this.inited = true;
          this.mat.setProperty("mainColor", this.color);
          this.start_pos.set(this.player.worldPosition);
          this.target_pos.set(pos);
          this.setDistance();
        }
        /** 结束提示 */


        hide() {
          this.inited = false;
          this.mesh.node.active = false;
        }
        /** 距离实时计算 */


        setDistance() {
          // 目标与
          this.distance = Vec3.distance(this.target_pos, this.player.worldPosition);
          this.node.setScale(this.node.scale.x, this.node.scale.y, this.distance);
          this.node.setWorldPosition(this.player.worldPosition);
          this.tOffset.y = this.distance * this.density;
          this.mat.setProperty("tilingOffset", this.tOffset);
          if (this.xEuler) this.rotation(this.start_pos, this.target_pos);
        }
        /** 旋转朝向 */


        rotation(start, end) {
          // 角色转动的角度, 相对Z轴，逆时针为正方向
          var angle = Math.asin(Math.sin(Math.abs(end.y - start.y) / this.distance)) * macro.DEG % 360;
          var x = end.y - start.y > 0 ? -angle : angle;
          this.node.setRotationFromEuler(x, this.player.eulerAngles.y, 0);
        }

        update(dt) {
          if (this.inited) {
            this.frame++;

            if (this.frame >= this.interval) {
              this.setDistance();
              this.frame = 0;
            }
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "player", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "mesh", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "color", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return new Color(255, 0, 0, 255);
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "interval", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 5;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "speed", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 2;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "density", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 1;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "xEuler", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return true;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=bce3adaca4fab49888c2857d4b1824d1fa77fc9f.js.map