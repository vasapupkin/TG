import type { GameObj, LerpValue, RNGValue } from "../types";
import { Color } from "./color";
/**
 * Possible arguments for a Vec2.
 *
 * @group Math
 */
export type Vec2Args = [number, number] | [number] | [Vec2] | [number | Vec2] | [];
export declare function deg2rad(deg: number): number;
export declare function rad2deg(rad: number): number;
export declare function clamp(val: number, min: number, max: number): number;
export declare function lerp<V extends LerpValue>(a: V, b: V, t: number): V;
export declare function map(v: number, l1: number, h1: number, l2: number, h2: number): number;
export declare function mapc(v: number, l1: number, h1: number, l2: number, h2: number): number;
export declare function step(edge: number, x: number): 0 | 1;
export declare function smoothstep(edge0: number, edge1: number, x: number): number;
/**
 * A 2D vector.
 *
 * @group Math
 */
export declare class Vec2 {
    /** The x coordinate */
    x: number;
    /** The y coordinate */
    y: number;
    constructor(x?: number, y?: number);
    /** Create a new Vec2 from an angle in degrees */
    static fromAngle(deg: number): Vec2;
    /** Create a new Vec2 from an array */
    static fromArray(arr: Array<number>): Vec2;
    static LEFT: Vec2;
    static RIGHT: Vec2;
    static UP: Vec2;
    static DOWN: Vec2;
    /** Clone the vector */
    clone(): Vec2;
    /** Returns the addition with another vector. */
    add(...args: Vec2Args): Vec2;
    /** Returns the subtraction with another vector. */
    sub(...args: Vec2Args): Vec2;
    /** Scale by another vector. or a single number */
    scale(...args: Vec2Args): Vec2;
    /** Get distance between another vector */
    dist(...args: Vec2Args): number;
    /** Get squared distance between another vector */
    sdist(...args: Vec2Args): number;
    len(): number;
    /**
     * Get squared length of the vector
     *
     * @since v3000.0
     */
    slen(): number;
    /**
     * Get the unit vector (length of 1).
     */
    unit(): Vec2;
    /**
     * Get the perpendicular vector.
     */
    normal(): Vec2;
    /**
     * Get the reflection of a vector with a normal.
     *
     * @since v3000.0
     */
    reflect(normal: Vec2): Vec2;
    /**
     * Get the projection of a vector onto another vector.
     *
     * @since v3000.0
     */
    project(on: Vec2): Vec2;
    /**
     * Get the rejection of a vector onto another vector.
     *
     * @since v3000.0
     */
    reject(on: Vec2): Vec2;
    /**
     * Get the dot product with another vector.
     */
    dot(p2: Vec2): number;
    /**
     * Get the cross product with another vector.
     *
     * @since v3000.0
     */
    cross(p2: Vec2): number;
    /**
     * Get the angle of the vector in degrees.
     */
    angle(...args: Vec2Args): number;
    /**
     * Get the angle between this vector and another vector.
     *
     * @since v3000.0
     */
    angleBetween(...args: Vec2Args): number;
    /**
     * Linear interpolate to a destination vector (for positions).
     */
    lerp(dest: Vec2, t: number): Vec2;
    /**
     * Spherical linear interpolate to a destination vector (for rotations).
     *
     * @since v3000.0
     */
    slerp(dest: Vec2, t: number): Vec2;
    /**
     * If the vector (x, y) is zero.
     *
     * @since v3000.0
     */
    isZero(): boolean;
    /**
     * To n precision floating point.
     */
    toFixed(n: number): Vec2;
    /**
     * Multiply by a Mat4.
     *
     * @since v3000.0
     */
    transform(m: Mat4): Vec2;
    eq(other: Vec2): boolean;
    bbox(): Rect;
    toString(): string;
    toArray(): Array<number>;
}
export declare function vec2(...args: Vec2Args): Vec2;
/**
 * @group Math
 */
export declare class Quad {
    x: number;
    y: number;
    w: number;
    h: number;
    constructor(x: number, y: number, w: number, h: number);
    scale(other: Quad): Quad;
    pos(): Vec2;
    clone(): Quad;
    eq(other: Quad): boolean;
    toString(): string;
}
export declare function quad(x: number, y: number, w: number, h: number): Quad;
declare class Mat2 {
    a: number;
    b: number;
    c: number;
    d: number;
    constructor(a: number, b: number, c: number, d: number);
    mul(other: Mat2): Mat2;
    transform(point: Vec2): Vec2;
    get inverse(): Mat2;
    get transpose(): Mat2;
    get eigenvalues(): number[];
    eigenvectors(e1: number, e2: number): number[][];
    get det(): number;
    get trace(): number;
    static rotation(radians: number): Mat2;
    static scale(x: number, y: number): Mat2;
}
/**
 * @group Math
 */
export declare class Mat4 {
    m: number[];
    constructor(m?: number[]);
    static translate(p: Vec2): Mat4;
    static scale(s: Vec2): Mat4;
    static rotateX(a: number): Mat4;
    static rotateY(a: number): Mat4;
    static rotateZ(a: number): Mat4;
    translate(p: Vec2): this;
    scale(p: Vec2): this;
    rotate(a: number): Mat4;
    mult(other: Mat4): Mat4;
    multVec2(p: Vec2): Vec2;
    getTranslation(): Vec2;
    getScale(): Vec2;
    getRotation(): number;
    getSkew(): Vec2;
    invert(): Mat4;
    clone(): Mat4;
    toString(): string;
}
export declare function wave(lo: number, hi: number, t: number, f?: (t: number) => number): number;
/**
 * @group Math
 */
export declare class RNG {
    seed: number;
    constructor(seed: number);
    gen(): number;
    genNumber(a: number, b: number): number;
    genVec2(a: Vec2, b: Vec2): Vec2;
    genColor(a: Color, b: Color): Color;
    genAny<T = RNGValue>(...args: [] | [T] | [T, T]): T;
}
export declare function randSeed(seed?: number): number;
export declare function rand<T = number>(...args: [] | [T] | [T, T]): T;
export declare function randi(...args: [] | [number] | [number, number]): number;
export declare function chance(p: number): boolean;
export declare function shuffle<T>(list: T[]): T[];
export declare function chooseMultiple<T>(list: T[], count: number): T[];
export declare function choose<T>(list: T[]): T;
export declare function testRectRect2(r1: Rect, r2: Rect): boolean;
export declare function testRectRect(r1: Rect, r2: Rect): boolean;
export declare function testLineLineT(l1: Line, l2: Line): number | null;
export declare function testLineLine(l1: Line, l2: Line): Vec2 | null;
export declare function testRectLine(r: Rect, l: Line): boolean;
export declare function testRectPoint2(r: Rect, pt: Vec2): boolean;
export declare function testRectPoint(r: Rect, pt: Vec2): boolean;
export declare function testRectCircle(r: Rect, c: Circle): boolean;
export declare function testRectPolygon(r: Rect, p: Polygon): boolean;
export declare function testLinePoint(l: Line, pt: Vec2): boolean;
export declare function testLineCircle(l: Line, circle: Circle): boolean;
export declare function testLinePolygon(l: Line, p: Polygon): boolean;
export declare function testCirclePoint(c: Circle, p: Vec2): boolean;
export declare function testCircleCircle(c1: Circle, c2: Circle): boolean;
export declare function testCirclePolygon(c: Circle, p: Polygon): boolean;
export declare function testPolygonPolygon(p1: Polygon, p2: Polygon): boolean;
export declare function testPolygonPoint(poly: Polygon, pt: Vec2): boolean;
export declare function testEllipsePoint(ellipse: Ellipse, pt: Vec2): boolean;
export declare function testEllipseCircle(ellipse: Ellipse, circle: Circle): boolean;
export declare function testEllipseLine(ellipse: Ellipse, line: Line): boolean;
export declare function testEllipseEllipse(ellipse1: Ellipse, ellipse2: Ellipse): boolean;
export declare function testEllipseRect(ellipse: Ellipse, rect: Rect): boolean;
export declare function testEllipsePolygon(ellipse: Ellipse, poly: Polygon): boolean;
export declare function testPointPoint(p1: Vec2, p2: Vec2): boolean;
/**
 * @group Math
 */
export type ShapeType = Point | Circle | Line | Rect | Polygon | Ellipse;
export declare function testPointShape(point: Point, shape: ShapeType): boolean;
export declare function testLineShape(line: Line, shape: ShapeType | Vec2): boolean;
export declare function testCircleShape(circle: Circle, shape: ShapeType | Vec2): boolean;
export declare function testRectShape(rect: Rect, shape: ShapeType | Vec2): boolean;
export declare function testPolygonShape(polygon: Polygon, shape: ShapeType | Vec2): boolean;
export declare function testEllipseShape(ellipse: Ellipse, shape: ShapeType): boolean;
export declare function testShapeShape(shape1: ShapeType, shape2: ShapeType): boolean;
/**
 * @group Math
 */
export type RaycastHit = {
    fraction: number;
    normal: Vec2;
    point: Vec2;
    gridPos?: Vec2;
    object?: GameObj;
};
/**
 * @group Math
 */
export type RaycastResult = RaycastHit | null;
export declare function raycastGrid(origin: Vec2, direction: Vec2, gridPosHit: (gridPos: Vec2) => boolean | RaycastResult, maxDistance?: number): RaycastResult | null;
export declare class Point {
    pt: Vec2;
    constructor(pt: Vec2);
    transform(m: Mat4): Point;
    bbox(): Rect;
    area(): number;
    clone(): Point;
    collides(shape: ShapeType): boolean;
    contains(point: Vec2): boolean;
    raycast(origin: Vec2, direction: Vec2): RaycastResult;
    random(): Vec2;
}
/**
 * @group Math
 */
export declare class Line {
    p1: Vec2;
    p2: Vec2;
    constructor(p1: Vec2, p2: Vec2);
    transform(m: Mat4): Line;
    bbox(): Rect;
    area(): number;
    clone(): Line;
    collides(shape: ShapeType | Vec2): boolean;
    contains(point: Vec2): boolean;
    raycast(origin: Vec2, direction: Vec2): RaycastResult;
    random(): Vec2;
}
/**
 * @group Math
 */
export declare class Rect {
    pos: Vec2;
    width: number;
    height: number;
    constructor(pos: Vec2, width: number, height: number);
    static fromPoints(p1: Vec2, p2: Vec2): Rect;
    center(): Vec2;
    points(): [Vec2, Vec2, Vec2, Vec2];
    transform(m: Mat4): Polygon;
    bbox(): Rect;
    area(): number;
    clone(): Rect;
    distToPoint(p: Vec2): number;
    sdistToPoint(p: Vec2): number;
    collides(shape: ShapeType | Vec2): boolean;
    contains(point: Vec2): boolean;
    raycast(origin: Vec2, direction: Vec2): RaycastResult;
    random(): Vec2;
}
/**
 * @group Math
 */
export declare class Circle {
    center: Vec2;
    radius: number;
    constructor(center: Vec2, radius: number);
    transform(tr: Mat4): Ellipse;
    bbox(): Rect;
    area(): number;
    clone(): Circle;
    collides(shape: ShapeType | Vec2): boolean;
    contains(point: Vec2): boolean;
    raycast(origin: Vec2, direction: Vec2): RaycastResult;
    random(): Vec2;
}
/**
 * @group Math
 */
export declare class Ellipse {
    center: Vec2;
    radiusX: number;
    radiusY: number;
    angle: number;
    constructor(center: Vec2, rx: number, ry: number, degrees?: number);
    static fromMat2(tr: Mat2): Ellipse;
    toMat2(): Mat2;
    transform(tr: Mat4): Ellipse;
    bbox(): Rect;
    area(): number;
    clone(): Ellipse;
    collides(shape: ShapeType): boolean;
    contains(point: Vec2): boolean;
    raycast(origin: Vec2, direction: Vec2): RaycastResult;
    random(): Vec2;
}
/**
 * @group Math
 */
export declare class Polygon {
    pts: Vec2[];
    constructor(pts: Vec2[]);
    transform(m: Mat4): Polygon;
    bbox(): Rect;
    area(): number;
    clone(): Polygon;
    collides(shape: ShapeType | Vec2): boolean;
    contains(point: Vec2): boolean;
    raycast(origin: Vec2, direction: Vec2): RaycastResult;
    random(): Vec2;
    cut(a: Vec2, b: Vec2): [Polygon | null, Polygon | null];
}
export declare function evaluateQuadratic(pt1: Vec2, pt2: Vec2, pt3: Vec2, t: number): Vec2;
export declare function evaluateQuadraticFirstDerivative(pt1: Vec2, pt2: Vec2, pt3: Vec2, t: number): Vec2;
export declare function evaluateQuadraticSecondDerivative(pt1: Vec2, pt2: Vec2, pt3: Vec2, t: number): Vec2;
export declare function evaluateBezier(pt1: Vec2, pt2: Vec2, pt3: Vec2, pt4: Vec2, t: number): Vec2;
export declare function evaluateBezierFirstDerivative(pt1: Vec2, pt2: Vec2, pt3: Vec2, pt4: Vec2, t: number): Vec2;
export declare function evaluateBezierSecondDerivative(pt1: Vec2, pt2: Vec2, pt3: Vec2, pt4: Vec2, t: number): Vec2;
export declare function evaluateCatmullRom(pt1: Vec2, pt2: Vec2, pt3: Vec2, pt4: Vec2, t: number): Vec2;
export declare function evaluateCatmullRomFirstDerivative(pt1: Vec2, pt2: Vec2, pt3: Vec2, pt4: Vec2, t: number): Vec2;
export declare function normalizedCurve(curve: (t: number) => Vec2): (s: number) => Vec2;
export declare function curveLengthApproximation(curve: (t: number) => Vec2, entries?: number, detail?: number): (t: number, inverse?: boolean) => number;
/**
 * A second order function returning an evaluator for the given 1D Hermite curve
 * @param pt1 First point
 * @param m1 First control point (tangent)
 * @param m2 Second control point (tangent)
 * @param pt2 Second point
 * @returns A function which gives the value on the 1D Hermite curve at t
 */
export declare function hermite(pt1: number, m1: number, m2: number, pt2: number): (t: number) => number;
/**
 * A second order function returning an evaluator for the given 2D Cardinal curve
 * @param pt1 Previous point
 * @param pt2 First point
 * @param pt3 Second point
 * @param pt4 Next point
 * @param tension The tension of the curve, [0..1] from round to tight.
 * @param h The hermite function or one of its derivatives.
 * @returns A function which gives the value on the 2D Cardinal curve at t
 */
export declare function cardinal(pt1: Vec2, pt2: Vec2, pt3: Vec2, pt4: Vec2, tension: number, h?: typeof hermite): (t: number) => Vec2;
/**
 * A second order function returning an evaluator for the given 2D Catmull-Rom curve
 * @param pt1 Previous point
 * @param pt2 First point
 * @param pt3 Second point
 * @param pt4 Next point
 * @returns A function which gives the value on the 2D Catmull-Rom curve at t
 */
export declare function catmullRom(pt1: Vec2, pt2: Vec2, pt3: Vec2, pt4: Vec2, h?: typeof hermite): (t: number) => Vec2;
/**
 * A second order function returning an evaluator for the given 2D quadratic Bezier curve
 * @param pt1 First point
 * @param pt2 First control point
 * @param pt3 Second control point
 * @param pt4 Second point
 * @returns A function which gives the value on the 2D quadratic Bezier curve at t
 */
export declare function bezier(pt1: Vec2, pt2: Vec2, pt3: Vec2, pt4: Vec2, h?: typeof hermite): (t: number) => Vec2;
/**
 * A second order function returning an evaluator for the given 2D Kochanek–Bartels curve
 * @param pt1 Previous point
 * @param pt2 First point
 * @param pt3 Second point
 * @param pt4 Next point
 * @param tension The tension of the curve, [-1..1] from round to tight.
 * @param continuity The continuity of the curve, [-1..1] from box corners to inverted corners.
 * @param bias The bias of the curve, [-1..1] from pre-shoot to post-shoot.
 * @returns A function which gives the value on the 2D Kochanek–Bartels curve at t
 */
export declare function kochanekBartels(pt1: Vec2, pt2: Vec2, pt3: Vec2, pt4: Vec2, tension: number, continuity: number, bias: number, h?: typeof hermite): (t: number) => Vec2;
/**
 * A second order function returning an evaluator for the derivative of the given 1D Hermite curve
 * @param pt1 First point
 * @param m1 First control point (tangent)
 * @param m2 Second control point (tangent)
 * @param pt2 Second point
 * @returns A function which gives the first derivative on the 1D Hermite curve at t
 */
export declare function hermiteFirstDerivative(pt1: number, m1: number, m2: number, pt2: number): (t: number) => number;
export declare function easingLinear(keys: Vec2[]): (x: number) => number;
export declare function easingCubicBezier(p1: Vec2, p2: Vec2): (x: number) => number;
export type StepPosition = "jump-start" | "jump-end" | "jump-none" | "jump-both";
export declare function easingSteps(steps: number, position?: StepPosition): (x: number) => number;
export type SatResult = {
    normal: Vec2;
    distance: number;
};
export declare function sat(p1: Polygon, p2: Polygon): SatResult | null;
export declare function triangulate(pts: Vec2[]): Vec2[][];
export declare function isConvex(pts: Vec2[]): boolean;
export {};
//# sourceMappingURL=math.d.ts.map