System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, Agent, cBody, Dirty, Trigger, ShapeSupport, cCollider, _crd;

  function _reportPossibleCrUseOfAgent(extras) {
    _reporterNs.report("Agent", "./Agent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfcBody(extras) {
    _reporterNs.report("cBody", "./Body", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDirty(extras) {
    _reporterNs.report("Dirty", "./Object", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTrigger(extras) {
    _reporterNs.report("Trigger", "./Object", _context.meta, extras);
  }

  function _reportPossibleCrUseOfcObject(extras) {
    _reporterNs.report("cObject", "./Object", _context.meta, extras);
  }

  function _reportPossibleCrUseOfShapeSupport(extras) {
    _reporterNs.report("ShapeSupport", "./Shape", _context.meta, extras);
  }

  _export("cCollider", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      Agent = _unresolved_2.Agent;
    }, function (_unresolved_3) {
      cBody = _unresolved_3.cBody;
    }, function (_unresolved_4) {
      Dirty = _unresolved_4.Dirty;
      Trigger = _unresolved_4.Trigger;
    }, function (_unresolved_5) {
      ShapeSupport = _unresolved_5.ShapeSupport;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "e9918lPZAlNEZGC1kb/9cqo", "Collider", undefined);

      _export("cCollider", cCollider = class cCollider {
        constructor() {
          this.id = 0;
          this.pools = [];
          this.axis = -1;
          this.frameID = 0;
          this.insertID = 0;
          this.bodys = [];
          this.isDirty = false;
          this.pairs = new Map();
        }

        static get inst() {
          if (this._inst == null) {
            this._inst = new cCollider();
          }

          return this._inst;
        }

        create(obj) {
          let body = this.pools.pop();

          if (!body) {
            body = new (_crd && cBody === void 0 ? (_reportPossibleCrUseOfcBody({
              error: Error()
            }), cBody) : cBody)(obj);
            body.id = this.id++;
            return body;
          }

          body.object = obj;
          return body;
        } //插入 body, force 强制更新数据


        insert(body, force = false) {
          if (!body) return;

          if (!body.inCollider) {
            //不在列表,重新插入
            this.bodys.push(body);
            body.inCollider = true;
          } //复位状态


          body.isRemove = false;
          body.isRetrieve = false;
          body.fid = this.insertID++; //强制刷新body数据

          if (force && body.object) {
            body.object.isDirty = (_crd && Dirty === void 0 ? (_reportPossibleCrUseOfDirty({
              error: Error()
            }), Dirty) : Dirty).RTS; // body.updateBound(Dirty.RTS);
          }
        } //删除 body: 提前标记删除 , update中执行移除


        remove(body, retrieve = false) {
          if (!body) return;
          body.isRemove = true; //标记移除body

          body.isRetrieve = retrieve; //是否回收复用body?
        } //重置回收bodys


        reset() {
          this.axis = -1;
          this.frameID = 0;
          this.isDirty = true; //回收bodys

          let bodys = this.bodys;

          for (let i = bodys.length - 1; i >= 0; i--) {
            let body = bodys[i];
            this.pools.push(body);
            body.clear();
          }

          bodys.length = 0;
        } //退出释放bodys


        clear() {
          this.id = 0;
          this.axis = -1;
          this.frameID = 0;
          this.isDirty = true;
          this.pools.length = 0; //清空bodys

          let bodys = this.bodys;

          for (let i = bodys.length - 1; i >= 0; i--) {
            bodys[i].clear();
          }

          bodys.length = 0;
        }

        update(dt) {
          this.reBuild();
          this.triggers();
          (_crd && Agent === void 0 ? (_reportPossibleCrUseOfAgent({
            error: Error()
          }), Agent) : Agent).inst.process(this.bodys);
        } //相交碰撞测试


        triggers() {
          //resultCB: (a: Body, b: Body) => void
          ++this.frameID;
          let axis = this.axis,
              n = axis >> 2 & 0x3,
              m = axis >> 4 & 0x3;
          let bodys = this.bodys;
          let agentMgr = (_crd && Agent === void 0 ? (_reportPossibleCrUseOfAgent({
            error: Error()
          }), Agent) : Agent).inst;
          let i = 0,
              j = 0,
              N = bodys.length;

          for (i = 0; i < N; i++) {
            let bi = bodys[i];
            if (bi.isRemove) continue;
            let A = bi.aabb,
                an = A[n],
                am = A[m],
                mask = bi.mask,
                group = bi.group,
                upper = bi.upper,
                objA = bi.object;

            for (j = i + 1; j < N; j++) {
              let bj = bodys[j];
              if (bj.isRemove) continue;

              if (upper <= bj.lower) {
                break;
              }

              let B = bj.aabb,
                  objB = bj.object;
              let a2b = mask & bj.group,
                  b2a = bj.mask & group;

              if (!(an > B[n + 3] || B[n] > A[n + 3] || am > B[m + 3] || B[m] > A[m + 3])) {
                if (bi.isAgent && bj.isAgent) {
                  agentMgr.check(bi, bj);
                  agentMgr.check(bj, bi);
                }

                if (a2b || b2a) {
                  let at = objA.shape.type;
                  let bt = objB.shape.type;

                  if (at > bt) {
                    if (!(_crd && ShapeSupport === void 0 ? (_reportPossibleCrUseOfShapeSupport({
                      error: Error()
                    }), ShapeSupport) : ShapeSupport)[bt | at](bj, bi)) continue;
                  } else {
                    if (!(_crd && ShapeSupport === void 0 ? (_reportPossibleCrUseOfShapeSupport({
                      error: Error()
                    }), ShapeSupport) : ShapeSupport)[at | bt](bi, bj)) continue;
                  }

                  if (bi.id < bj.id) this.onTrigger(bj, bi, (b2a ? 1 : 0) | (a2b ? 2 : 0));else this.onTrigger(bi, bj, (a2b ? 1 : 0) | (b2a ? 2 : 0));
                }
              }
            }
          }

          this.endTrigger();
        }

        onTrigger(bi, bj, state) {
          let trigger = 0;
          let id = (bi.id * (bi.id + 1) >> 1) + bj.id - 1;
          let pairs = this.pairs;
          let data = pairs.get(id);

          if (data !== undefined) {
            trigger = (_crd && Trigger === void 0 ? (_reportPossibleCrUseOfTrigger({
              error: Error()
            }), Trigger) : Trigger).stay;

            if (data.fida != bi.fid || data.fidb != bj.fid) {
              trigger = (_crd && Trigger === void 0 ? (_reportPossibleCrUseOfTrigger({
                error: Error()
              }), Trigger) : Trigger).enter;
              data.fida = bi.fid;
              data.fidb = bj.fid;
            }

            data.frameID = this.frameID;
            data.state = state;
          } else {
            trigger = (_crd && Trigger === void 0 ? (_reportPossibleCrUseOfTrigger({
              error: Error()
            }), Trigger) : Trigger).enter;
            pairs.set(id, {
              id: id,
              a: bi,
              b: bj,
              fida: bi.fid,
              fidb: bj.fid,
              frameID: this.frameID,
              state: state
            });
          }

          let objA = bi.object;

          if (state & 1 && objA && objA.trigger && !bi.isRemove) {
            objA.onTrigger(bj, trigger);
          }

          let objB = bj.object;

          if (state & 2 && objB && objB.trigger && !bj.isRemove) {
            objB.onTrigger(bi, trigger);
          }
        }

        endTrigger() {
          let deletes = [];
          let pairs = this.pairs;
          let length = pairs.size;
          let frameID = this.frameID;
          let entries = pairs.values();

          for (let i = 0; i < length; i++) {
            let data = entries.next().value;
            let bi = data.a;
            let bj = data.b;

            if (data.frameID != frameID || bi.isRemove || bj.isRemove) {
              if (data.fida == bi.fid && data.fidb == bj.fid) {
                let objA = bi.object;
                if (objA && objA.trigger && !bi.isRemove) objA.onTrigger(bj, (_crd && Trigger === void 0 ? (_reportPossibleCrUseOfTrigger({
                  error: Error()
                }), Trigger) : Trigger).exit);
                let objB = bj.object;
                if (objB && objB.trigger && !bj.isRemove) objB.onTrigger(bi, (_crd && Trigger === void 0 ? (_reportPossibleCrUseOfTrigger({
                  error: Error()
                }), Trigger) : Trigger).exit);
              }

              deletes.push(data.id);
            }
          }

          length = deletes.length - 1;

          while (length >= 0) {
            pairs.delete(deletes[length--]);
          }

          deletes.length = 0;
        }

        reBuild() {
          let change = false;
          let axis = this.preBuildAxis();

          if ((axis & 0x3) != (this.axis & 0x3) || this.axis < 0) {
            this.axis = axis;
            change = true;
          }

          if (change || this.isDirty) {
            this.isDirty = false;
            let bodys = this.bodys;
            axis = this.axis & 0x3;

            for (let i = 0, N = bodys.length; i !== N; i++) {
              let bi = bodys[i];
              let aabb = bi.aabb;
              bi.lower = aabb[axis];
              bi.upper = aabb[axis + 3];
            }

            if (!change) this.sort(bodys);else bodys.sort((a, b) => a.lower - b.lower);
          }
        }

        sort(a) {
          let i = 0,
              j = 0,
              l = 0;

          for (i = 1, l = a.length; i < l; i++) {
            let v = a[i];
            let lower = v.lower;

            for (j = i - 1; j >= 0; j--) {
              let w = a[j];

              if (w.lower <= lower) {
                break;
              }

              a[j + 1] = w;
            }

            if (j + 1 != i) {
              a[j + 1] = v;
            }
          }
        }

        preBuildAxis() {
          let axis = 0,
              sumX = 0,
              sumX2 = 0,
              sumY = 0,
              sumY2 = 0,
              sumZ = 0,
              sumZ2 = 0,
              x = 0.0,
              y = 0.0,
              z = 0.0;
          let bodys = this.bodys;
          let N = bodys.length;
          let length = 0;
          let isDirty = false;

          for (let i = 0; i < N; i++) {
            let body = bodys[i]; //删除body

            if (body.isRemove) {
              //是否回收body
              if (body.isRetrieve) {
                this.pools.push(body);
                body.clear();
              } //已从collider移除


              body.inCollider = false;
              continue;
            }

            if (++length <= i) {
              bodys[length - 1] = body;
            }

            if (body.updateBound()) isDirty = true;
            let s = body.aabb,
                sx = s[3] - s[0],
                sy = s[4] - s[1],
                sz = s[5] - s[2];
            x += sx * sx, y += sy * sy;
            z += sz * sz;
            let cX = (s[3] + s[0]) * 0.5;
            sumX += cX, sumX2 += cX * cX;
            let cY = (s[4] + s[1]) * 0.5;
            sumY += cY, sumY2 += cY * cY;
            let cZ = (s[5] + s[2]) * 0.5;
            sumZ += cZ, sumZ2 += cZ * cZ;
          }

          this.bodys.length = length;
          this.isDirty = isDirty;
          let invN = 1.0 / length;
          x = x > 0 ? length / x : 0;
          y = y > 0 ? length / y : 0;
          z = z > 0 ? length / z : 0;
          let X = (sumX2 - sumX * sumX * invN) * x;
          let Y = (sumY2 - sumY * sumY * invN) * y;
          let Z = (sumZ2 - sumZ * sumZ * invN) * z;
          if (X == 0) X = x;
          if (Y == 0) Y = y;
          if (Z == 0) Z = z;

          if (X > Y) {
            if (X > Z) {
              axis = 0;
              axis |= Y > Z ? 1 << 2 | 2 << 4 : 1 << 4 | 2 << 2; //yz:zy;
            } else {
              axis = 2;
              axis |= X > Y ? 0 << 2 | 1 << 4 : 0 << 4 | 1 << 2; //xy:yx;
            }
          } else if (Y > Z) {
            axis = 1;
            axis |= X > Z ? 0 << 2 | 2 << 4 : 0 << 4 | 2 << 2; //xz:zx;
          } else {
            axis = 2;
            axis |= X > Y ? 0 << 2 | 1 << 4 : 0 << 4 | 1 << 2; //xy:yx;
          }

          return axis;
        }

      });

      cCollider._inst = null;

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=4bfaf3caebd80483a96c20d275ca7bb7ce61b838.js.map