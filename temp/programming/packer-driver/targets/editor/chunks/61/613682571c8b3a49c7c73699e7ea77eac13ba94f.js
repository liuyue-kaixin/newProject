System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, Line, Vector2, RVOMath, _crd;

  _export({
    Line: void 0,
    Vector2: void 0,
    RVOMath: void 0
  });

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "82bedpBhDZGm7EUB0uAnjUn", "Maths", undefined);

      _export("Line", Line = class Line {
        constructor() {
          this.weight = 0.5;
          this.direction = void 0;
          this.point = void 0;
        }

      });

      _export("Vector2", Vector2 = class Vector2 {
        constructor(x = 0, y = 0) {
          this.x = void 0;
          this.y = void 0;
          this.x = x;
          this.y = y;
        }

        static multiply(vector1, vector2) {
          return vector1.x * vector2.x + vector1.y * vector2.y;
        }

        static multiply2(scalar, vector) {
          return new Vector2(vector.x * scalar, vector.y * scalar);
        }

        static division(vector, scalar) {
          if (scalar == 0) scalar = 1;
          return new Vector2(vector.x / scalar, vector.y / scalar);
        }

        static subtract(vector1, vector2) {
          return new Vector2(vector1.x - vector2.x, vector1.y - vector2.y);
        }

        static addition(vector1, vector2) {
          return new Vector2(vector1.x + vector2.x, vector1.y + vector2.y);
        }

      });

      _export("RVOMath", RVOMath = class RVOMath {
        static abs(vector) {
          return this.sqrt(this.absSq(vector));
        }

        static absSq(vector) {
          return Vector2.multiply(vector, vector);
        }

        static normalize(vector) {
          return Vector2.division(vector, this.abs(vector));
        }

        static det(vector1, vector2) {
          return vector1.x * vector2.y - vector1.y * vector2.x;
        }

        static distSqPointLineSegment(vector1, vector2, vector3) {
          let r = Vector2.multiply(Vector2.subtract(vector3, vector1), Vector2.subtract(vector2, vector1)) / this.absSq(Vector2.subtract(vector2, vector1));

          if (r < 0) {
            return this.absSq(Vector2.subtract(vector3, vector1));
          }

          if (r > 1) {
            return this.absSq(Vector2.subtract(vector3, vector2));
          }

          return this.absSq(Vector2.subtract(vector3, Vector2.addition(vector1, Vector2.multiply2(r, Vector2.subtract(vector2, vector1)))));
        }

        static fabs(scalar) {
          return Math.abs(scalar);
        }

        static leftOf(a, b, c) {
          return this.det(Vector2.subtract(a, c), Vector2.subtract(b, a));
        }

        static sqr(scalar) {
          return scalar * scalar;
        }

        static sqrt(scalar) {
          return Math.sqrt(scalar);
        }

        static transfromFloat(value) {
          return Math.floor(value * 10) / 10;
        }

      });

      RVOMath.RVO_EPSILON = 0.00001;
      RVOMath.RVO_POSITIVEINFINITY = 10000000000000;

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=613682571c8b3a49c7c73699e7ea77eac13ba94f.js.map