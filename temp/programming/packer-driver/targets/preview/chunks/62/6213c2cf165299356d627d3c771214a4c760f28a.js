System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Component, gfx, macro, Material, MeshRenderer, utils, Vec3, _decorator, _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _crd, ccclass, property, DrawMeshSector;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Component = _cc.Component;
      gfx = _cc.gfx;
      macro = _cc.macro;
      Material = _cc.Material;
      MeshRenderer = _cc.MeshRenderer;
      utils = _cc.utils;
      Vec3 = _cc.Vec3;
      _decorator = _cc._decorator;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "ea0c13ef6VL451GZLWgDtle", "DrawMeshSector", undefined);
      /*
       * @Author: dgflash
       * @Date: 2022-02-10 09:50:41
       * @LastEditors: dgflash
       * @LastEditTime: 2022-04-08 17:22:27
       */


      __checkObsolete__(['Component', 'gfx', 'macro', 'Material', 'MeshRenderer', 'utils', 'Vec3', '_decorator']);

      ({
        ccclass,
        property
      } = _decorator);
      /** 绘制扇形网格 */

      _export("DrawMeshSector", DrawMeshSector = (_dec = ccclass('DrawSectorMesh'), _dec2 = property({
        type: Material
      }), _dec3 = property({
        tooltip: "外圈半径"
      }), _dec4 = property({
        tooltip: "内圈半径"
      }), _dec5 = property({
        tooltip: "扇形角度"
      }), _dec(_class = (_class2 = class DrawMeshSector extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "mat", _descriptor, this);

          _initializerDefineProperty(this, "radius", _descriptor2, this);

          _initializerDefineProperty(this, "innerRadius", _descriptor3, this);

          _initializerDefineProperty(this, "angledegree", _descriptor4, this);
        }

        start() {
          this.createMesh();
        }

        createMesh() {
          var model = this.addComponent(MeshRenderer);
          var segments = Math.floor(this.angledegree / 4) + 1; // 三角形个数（平滑度）

          var positions = []; // 顶点位置数据
          // 组装顶点数据

          var vertices_count = segments * 2 + 2; // vertices(顶点)的个数与triangles（索引三角形顶点数）匹配

          var vertices = new Array(vertices_count);
          var angleRad = this.angledegree * macro.RAD; // 角度转弧度

          var angleCur = angleRad;
          var angledelta = angleRad / segments; // 每个三角形的弧度

          for (var i = 0; i < vertices_count; i += 2) {
            // 扇形每二个三角形之间共用2个顶点，所有生成时每次循环生成二个顶点
            var cosA = Math.cos(angleCur);
            var sinA = Math.sin(angleCur);
            vertices[i] = new Vec3(this.radius * cosA, 0, this.radius * sinA); // 已知扇形外圈半径为斜边求x、z值，得到第一个顶点位置（外圈半径顶点）

            vertices[i + 1] = new Vec3(this.innerRadius * cosA, 0, this.innerRadius * sinA); // 已知扇形内圈半径为斜边求x、z值，得到第二个顶点位置（内圈半径顶点）

            angleCur -= angledelta;
            positions.push(vertices[i].x);
            positions.push(vertices[i].y);
            positions.push(vertices[i].z);
            positions.push(vertices[i + 1].x);
            positions.push(vertices[i + 1].y);
            positions.push(vertices[i + 1].z);
          } // 组装三角形数据


          var indice_count = segments * 6; // 扇形外圈与扇形内圈会生成一个四边形，即二个三角形，6个顶点索引

          var indices = new Array(indice_count);

          for (var i = 0, vi = 0; i < indice_count; i += 6, vi += 2) {
            // i为三角形顶点索引号，vi为顶点位置索引
            indices[i] = vi;
            indices[i + 1] = vi + 3;
            indices[i + 2] = vi + 1;
            indices[i + 3] = vi + 2;
            indices[i + 4] = vi + 3;
            indices[i + 5] = vi;
          } // 组装UV数据


          var uvs = [];

          for (var i = 0; i < vertices_count; i++) {
            var u = vertices[i].x / this.radius / 2 + 0.5;
            var v = vertices[i].z / this.radius / 2 + 0.5;
            uvs.push(u, v);
          }

          var primitiveMode = gfx.PrimitiveMode.TRIANGLE_FAN;
          var attributes = [{
            name: gfx.AttributeName.ATTR_NORMAL,
            format: gfx.Format.RGB32F
          }];
          var IGeometry = {
            positions: positions,
            indices: indices,
            uvs: uvs,
            primitiveMode: primitiveMode,
            // 默认值效果一样，需要研究作用
            attributes: attributes // 默认值效果一样，需要研究作用

          };
          var mesh = utils.createMesh(IGeometry);
          model.mesh = mesh;
          model.material = this.mat;
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "mat", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "radius", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 5;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "innerRadius", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 1;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "angledegree", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 60;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=6213c2cf165299356d627d3c771214a4c760f28a.js.map