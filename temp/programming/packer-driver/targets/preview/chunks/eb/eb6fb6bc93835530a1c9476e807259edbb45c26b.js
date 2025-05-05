System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Mat3, Quat, Vec2, Vec3, Dirty, cBody, _crd;

  function _reportPossibleCrUseOfDirty(extras) {
    _reporterNs.report("Dirty", "./Object", _context.meta, extras);
  }

  function _reportPossibleCrUseOfcObject(extras) {
    _reporterNs.report("cObject", "./Object", _context.meta, extras);
  }

  function _reportPossibleCrUseOfcShape(extras) {
    _reporterNs.report("cShape", "./Shape", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLine(extras) {
    _reporterNs.report("Line", "./Maths", _context.meta, extras);
  }

  _export("cBody", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Mat3 = _cc.Mat3;
      Quat = _cc.Quat;
      Vec2 = _cc.Vec2;
      Vec3 = _cc.Vec3;
    }, function (_unresolved_2) {
      Dirty = _unresolved_2.Dirty;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "35d5eaYM9dJwrqPskERJ5FA", "Body", undefined);

      __checkObsolete__(['Mat3', 'Quat', 'Vec2', 'Vec3']);

      _export("cBody", cBody = class cBody {
        constructor(obj) {
          this.id = 0;
          this.fid = -1;
          this.mask = 0;
          this.group = 0;
          this.shape = null;
          this.object = null;
          this.weight = 0;
          //脏区更新标记
          this.isDirty = 1 | 2 | 4;
          //缓存
          this.lower = 0;
          this.upper = 0;
          this.aabb = [0, 0, 0, 0, 0, 0];
          //状态
          this.isRemove = false;
          this.isRetrieve = true;
          this.isIdentity = true;
          this.inCollider = false;
          //缓存
          this.raidus = 0;
          this.points = [];
          this.center = new Vec3();
          this.rotMat3 = new Mat3();
          this.halfSize = new Vec3();
          this.scale = new Vec3(1, 1, 1);
          //Agent
          this.isAgent = false;
          //Agent 开关
          this.maxNeighbors = 0;
          this.neighborDist = 0;
          //物体半径
          this.maxVelocity = 0;
          //最大速度
          this.newVelocity = new Vec3();
          this.prefVelocity = new Vec3();
          this.orcaLines = [];
          this.object = obj;
        }

        updateBound(isDirty) {
          if (isDirty === void 0) {
            isDirty = (_crd && Dirty === void 0 ? (_reportPossibleCrUseOfDirty({
              error: Error()
            }), Dirty) : Dirty).NON;
          }

          var object = this.object;
          isDirty |= object.hasChangeDirty();

          if (this.isAgent) {
            this.newVelocity.set(object.velocity); //当前速度

            this.prefVelocity.set(object.tryVelocity); //期望速度
            //强制跟随，在Agent没碰撞情况下，保证全速跟随

            object.velocity.set(object.tryVelocity);
          }

          if (isDirty > 0) {
            var aabbChange = false;
            var shape = this.shape;

            if (isDirty & (_crd && Dirty === void 0 ? (_reportPossibleCrUseOfDirty({
              error: Error()
            }), Dirty) : Dirty).S) {
              aabbChange = true;
              var s = this.getScale();
              this.scale.x = s.x >= 0 ? s.x : -s.x;
              this.scale.y = s.y >= 0 ? s.y : -s.y;
              this.scale.z = s.z >= 0 ? s.z : -s.z;
            }

            if (isDirty & (_crd && Dirty === void 0 ? (_reportPossibleCrUseOfDirty({
              error: Error()
            }), Dirty) : Dirty).R) {
              //旋转更新aabb
              this.isIdentity = false;
              var rot = this.getRotation();
              this.rotMat3.fromQuat(rot); //计算缓存Mat3

              if (rot.equals(Quat.IDENTITY, 0.0001)) {
                this.isIdentity = true;
              }

              aabbChange = true;
            }

            if (aabbChange) shape.updateAABB(this.getScale(), this.getRotMat3(), this.isIdentity);
            var AABB = this.aabb; // world aabb

            var aabb = shape.aabb; //local aabb

            var p = this.getPosition(); //world postion

            AABB[0] = aabb[0] + p.x;
            AABB[1] = aabb[1] + p.y;
            AABB[2] = aabb[2] + p.z;
            AABB[3] = aabb[3] + p.x;
            AABB[4] = aabb[4] + p.y;
            AABB[5] = aabb[5] + p.z;
            this.isDirty = 1 | 2 | 4 | 8; //设置脏区标记

            return true;
          }

          return false;
        }

        clear() {
          this.shape = null;
          this.object = null;
          this.isRemove = false;
          this.inCollider = false;
          this.orcaLines.length = 0;
        } //body 坐标统一使用世界数据进行计算


        getRotMat3() {
          return this.rotMat3;
        } //world rotate mat3


        getScale() {
          return this.object.node.worldScale;
        } // world scale 


        getPosition() {
          return this.object.node.worldPosition;
        } //wold position


        getRotation() {
          return this.object.node.worldRotation;
        } //world rotation


        getCenter() {
          if (this.isDirty & 1) {
            this.isDirty &= ~1;
            var aabb = this.aabb;
            var center = this.center;
            center.x = (aabb[0] + aabb[3]) * 0.5;
            center.y = (aabb[1] + aabb[4]) * 0.5;
            center.z = (aabb[2] + aabb[5]) * 0.5;
          }

          return this.center; //world center
        }

        getRaidus() {
          if (this.isDirty & 2) {
            this.isDirty &= ~2;
            var scale = this.scale;
            var raidus = this.shape.radius;
            this.raidus = Math.max(scale.x, scale.y, scale.z) * raidus;
          }

          return this.raidus; //world raidus
        }

        getHalfSize() {
          if (this.isDirty & 4) {
            this.isDirty &= ~4;
            var scale = this.scale;
            var size = this.shape.size;
            var halfSize = this.halfSize;
            halfSize.x = scale.x * size.x * 0.5;
            halfSize.y = scale.y * size.y * 0.5;
            halfSize.z = scale.z * size.z * 0.5;
          }

          return this.halfSize; //world halfsize
        }

        getPoints() {
          if (this.isDirty & 8) {
            this.isDirty &= ~8;
            var scale = this.scale;
            var m = this.getRotMat3();
            var center = this.getCenter();
            var points = this.points;
            var sp = this.shape.point2Ds;
            var length = sp.length;

            for (var i = 0; i < length; i++) {
              var x = sp[i].x * scale.x;
              var y = sp[i].y * scale.y;
              var z = 0;

              if (points[i] == undefined) {
                points[i] = new Vec2();
              }

              points[i].x = x * m.m00 + y * m.m03 + z * m.m06 + center.x;
              points[i].y = x * m.m01 + y * m.m04 + z * m.m07 + center.y; // out.z = x * m.m02 + y * m.m05 + z * m.m08;
            }

            points.length = length;
          }

          return this.points; //world points
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=eb6fb6bc93835530a1c9476e807259edbb45c26b.js.map