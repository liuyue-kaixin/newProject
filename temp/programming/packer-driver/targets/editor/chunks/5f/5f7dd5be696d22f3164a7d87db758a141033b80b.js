System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Vec2, Vec3, Intersection2D, obbIntersect, sphereAABBDistance, sphereOBBDistance, cShape, cBox, cSphere, cPolygon, _crd, ShapeType, center, center2, ShapeSupport;

  function _reportPossibleCrUseOfIntersection2D(extras) {
    _reporterNs.report("Intersection2D", "./AILib", _context.meta, extras);
  }

  function _reportPossibleCrUseOfobbIntersect(extras) {
    _reporterNs.report("obbIntersect", "./AILib", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsphereAABBDistance(extras) {
    _reporterNs.report("sphereAABBDistance", "./AILib", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsphereOBBDistance(extras) {
    _reporterNs.report("sphereOBBDistance", "./AILib", _context.meta, extras);
  }

  function _reportPossibleCrUseOfcBody(extras) {
    _reporterNs.report("cBody", "./Body", _context.meta, extras);
  }

  _export({
    cShape: void 0,
    cBox: void 0,
    cSphere: void 0,
    cPolygon: void 0
  });

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Vec2 = _cc.Vec2;
      Vec3 = _cc.Vec3;
    }, function (_unresolved_2) {
      Intersection2D = _unresolved_2.default;
      obbIntersect = _unresolved_2.obbIntersect;
      sphereAABBDistance = _unresolved_2.sphereAABBDistance;
      sphereOBBDistance = _unresolved_2.sphereOBBDistance;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "83d94jbLnZF7oVs2WQ1jJK+", "Shape", undefined);

      __checkObsolete__(['Mat3', 'Vec2', 'Vec3']);

      _export("ShapeType", ShapeType = /*#__PURE__*/function (ShapeType) {
        ShapeType[ShapeType["Box"] = 1] = "Box";
        ShapeType[ShapeType["Sphere"] = 2] = "Sphere";
        ShapeType[ShapeType["Polygon"] = 4] = "Polygon";
        return ShapeType;
      }({}));

      ;

      _export("cShape", cShape = class cShape {
        constructor(center, type) {
          this.radius = 0;
          this.height = 0;
          this.type = ShapeType.Box;
          this.point2Ds = [];
          this.size = {
            x: 0,
            y: 0,
            z: 0
          };
          this.scale = {
            x: 1,
            y: 1,
            z: 1
          };
          this.center = {
            x: 0,
            y: 0,
            z: 0
          };
          this.aabb = [0, 0, 0, 0, 0, 0];
          this.type = type; // this.isDirty = true;

          this.center.x = center.x;
          this.center.y = center.y;
          this.center.z = center.z;
        }

        updateAABB(scale, world, isIdentity = true) {
          const size = this.size;
          const center = this.center;
          const sx = scale.x,
                sy = scale.y,
                sz = scale.z;
          const cx = center.x,
                cy = center.y,
                cz = center.z;
          let x = size.x * 0.5,
              y = size.y * 0.5,
              z = size.z * 0.5;
          const aabb = this.aabb;

          if (!isIdentity) {
            const uX = world.m00 * sx,
                  uY = world.m01 * sx,
                  uZ = world.m02 * sx;
            const vX = world.m03 * sy,
                  vY = world.m04 * sy,
                  vZ = world.m05 * sy;
            const wX = world.m06 * sz,
                  wY = world.m07 * sz,
                  wZ = world.m08 * sz; // 计算新的中心点

            const cX = uX * cx + vX * cy + wX * cz;
            const cY = uY * cx + vY * cy + wY * cz;
            const cZ = uZ * cx + vZ * cy + wZ * cz; // 计算新的包围盒宽度、高度和深度

            const absU = Math.abs(uX) * x + Math.abs(vX) * y + Math.abs(wX) * z;
            const absV = Math.abs(uY) * x + Math.abs(vY) * y + Math.abs(wY) * z;
            const absW = Math.abs(uZ) * x + Math.abs(vZ) * y + Math.abs(wZ) * z; // 计算新的最小和最大顶点

            aabb[0] = cX - absU, aabb[1] = cY - absV, aabb[2] = cZ - absW;
            aabb[3] = cX + absU, aabb[4] = cY + absV, aabb[5] = cZ + absW;
          } else {
            x = Math.abs(x * sx);
            y = Math.abs(y * sy);
            z = Math.abs(z * sz);
            aabb[0] = cx * sx - x;
            aabb[1] = cy * sy - y;
            aabb[2] = cz * sz - z;
            aabb[3] = cx * sx + x;
            aabb[4] = cy * sy + y;
            aabb[5] = cz * sz + z;
          }

          return aabb;
        }

      });

      _export("cBox", cBox = class cBox extends cShape {
        constructor(center, size) {
          super(center, ShapeType.Box);
          this.size.x = size.x;
          this.size.y = size.y;
          this.size.z = size.z; //2d 多边形, 点队列

          let points = this.point2Ds;
          points[0] = new Vec2(-size.x / 2, size.y / 2);
          points[1] = new Vec2(size.x / 2, size.y / 2);
          points[2] = new Vec2(size.x / 2, -size.y / 2);
          points[3] = new Vec2(-size.x / 2, -size.y / 2);
        }

      });

      _export("cSphere", cSphere = class cSphere extends cShape {
        constructor(center, radius) {
          super(center, ShapeType.Sphere);
          this.radius = radius;
          this.size.x = radius * 2;
          this.size.y = radius * 2;
          this.size.z = radius * 2;
        }

      }); //默认y轴竖向


      _export("cPolygon", cPolygon = class cPolygon extends cShape {
        constructor(center, points) {
          super(center, ShapeType.Polygon); //2d 多边形, 点队列

          this.point2Ds = points;
          let minX = points[0].x;
          let minY = points[0].y;
          let maxX = minX,
              maxY = minY;
          let length = points.length;

          for (let i = 1; i < length; i++) {
            let x = points[i].x;
            let y = points[i].y;
            if (minX >= x) minX = x;else if (maxX <= x) maxX = x;
            if (minY >= y) minY = y;else if (maxY <= y) maxY = y;
          }

          this.size.x = maxX - minX;
          this.size.y = maxY - minY;
          this.size.z = 0;
        }

      });

      center = new Vec3();
      center2 = new Vec2();

      _export("ShapeSupport", ShapeSupport = []);

      ShapeSupport[ShapeType.Box | ShapeType.Box] = function (a, b) {
        //a,b 没有旋转,已进行AABB处理 , 直接返回 true
        if (a.isIdentity && b.isIdentity) return true;
        return (_crd && obbIntersect === void 0 ? (_reportPossibleCrUseOfobbIntersect({
          error: Error()
        }), obbIntersect) : obbIntersect)(a.getCenter(), a.getHalfSize(), a.getRotMat3(), b.getCenter(), b.getHalfSize(), b.getRotMat3());
      };

      ShapeSupport[ShapeType.Box | ShapeType.Sphere] = function (a, b) {
        //a没有旋转当AABB处理 
        if (a.isIdentity) {
          // 转换到 aabb 坐标系下
          Vec3.subtract(center, b.getCenter(), a.getCenter());
          return (_crd && sphereAABBDistance === void 0 ? (_reportPossibleCrUseOfsphereAABBDistance({
            error: Error()
          }), sphereAABBDistance) : sphereAABBDistance)(center, b.getRaidus(), a.getHalfSize());
        }

        return (_crd && sphereOBBDistance === void 0 ? (_reportPossibleCrUseOfsphereOBBDistance({
          error: Error()
        }), sphereOBBDistance) : sphereOBBDistance)(b.getCenter(), b.getRaidus(), a.getCenter(), a.getRotation(), a.getHalfSize());
      };

      ShapeSupport[ShapeType.Sphere | ShapeType.Sphere] = function (a, b) {
        let ca = a.getCenter();
        let cb = b.getCenter();
        Vec3.subtract(center, ca, cb);
        let lengthSqr = center.lengthSqr();
        let radii = a.getRaidus() + b.getRaidus();
        return lengthSqr <= radii * radii;
      };

      ShapeSupport[ShapeType.Box | ShapeType.Polygon] = function (a, b) {
        //AI TODO
        return (_crd && Intersection2D === void 0 ? (_reportPossibleCrUseOfIntersection2D({
          error: Error()
        }), Intersection2D) : Intersection2D).polygonPolygon(a.getPoints(), b.getPoints());
      };

      ShapeSupport[ShapeType.Sphere | ShapeType.Polygon] = function (a, b) {
        //AI TODO
        let ca = a.getCenter();
        let radius = a.getRaidus();
        center2.x = ca.x, center2.y = ca.y;
        return (_crd && Intersection2D === void 0 ? (_reportPossibleCrUseOfIntersection2D({
          error: Error()
        }), Intersection2D) : Intersection2D).polygonCircle(b.getPoints(), center2, radius);
      };

      ShapeSupport[ShapeType.Polygon | ShapeType.Polygon] = function (a, b) {
        //AI TODO
        return (_crd && Intersection2D === void 0 ? (_reportPossibleCrUseOfIntersection2D({
          error: Error()
        }), Intersection2D) : Intersection2D).polygonPolygon(a.getPoints(), b.getPoints());
      };

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=5f7dd5be696d22f3164a7d87db758a141033b80b.js.map