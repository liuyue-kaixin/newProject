export  class Line
{
    public weight:number = 0.5;
    public direction: Vector2;
    public point: Vector2;
}

export  class Vector2
{
    public x: number;
    public y: number;
    constructor(x: number = 0, y: number = 0)
    {
        this.x = x;
        this.y = y;
    }

    public static multiply(vector1: Vector2, vector2: Vector2)
    {
        return vector1.x * vector2.x + vector1.y * vector2.y;
    }


    public static multiply2(scalar: number, vector: Vector2)
    {
        return new Vector2(vector.x * scalar, vector.y * scalar);
    }

 
    public static division(vector: Vector2, scalar: number)
    {
        if(scalar == 0 ) scalar = 1;
        return new Vector2(vector.x / scalar, vector.y / scalar);
    }

 
    public static subtract(vector1: Vector2, vector2: Vector2)
    {
        return new Vector2(vector1.x - vector2.x, vector1.y - vector2.y)
    }

 
    public static addition(vector1: Vector2, vector2: Vector2)
    {
        return new Vector2(vector1.x + vector2.x, vector1.y + vector2.y);
    }
}


export class RVOMath
{
    public static readonly RVO_EPSILON = 0.00001;
    public static readonly RVO_POSITIVEINFINITY = 10000000000000;

    public static abs(vector: Vector2)
    {
        return this.sqrt(this.absSq(vector));
    }

    public static absSq(vector: Vector2)
    {
        return Vector2.multiply(vector, vector);
    }

    public static normalize(vector: Vector2)
    {
        return Vector2.division(vector, this.abs(vector));
    }

    public static det(vector1: Vector2, vector2: Vector2)
    {
        return vector1.x * vector2.y - vector1.y * vector2.x;
    }

    public static distSqPointLineSegment(vector1: Vector2, vector2: Vector2, vector3: Vector2)
    {
        let r = Vector2.multiply(Vector2.subtract(vector3, vector1), Vector2.subtract(vector2, vector1)) / this.absSq(Vector2.subtract(vector2, vector1));
        if (r < 0)
        {
            return this.absSq(Vector2.subtract(vector3, vector1));
        }
        if (r > 1)
        {
            return this.absSq(Vector2.subtract(vector3, vector2));
        }
        return this.absSq(Vector2.subtract(vector3, Vector2.addition(vector1, Vector2.multiply2(r, Vector2.subtract(vector2, vector1)))));
    }

    public static fabs(scalar: number)
    {
        return Math.abs(scalar);
    }

    public static leftOf(a: Vector2, b: Vector2, c: Vector2)
    {
        return this.det(Vector2.subtract(a, c), Vector2.subtract(b, a));
    }

    public static sqr(scalar: number)
    {
        return scalar * scalar;
    }

    public static sqrt(scalar: number)
    {
        return Math.sqrt(scalar);
    }

    public static transfromFloat(value: number)
    {
        return Math.floor(value * 10) / 10;
    }
}