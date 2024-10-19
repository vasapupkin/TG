import { Vec2 } from "../../math/math";
import type { RenderProps } from "../../types";
/**
 * How the line should look like.
 */
export type DrawLineOpt = Omit<RenderProps, "angle" | "scale"> & {
    /**
     * Starting point of the line.
     */
    p1: Vec2;
    /**
     * Ending point of the line.
     */
    p2: Vec2;
    /**
     * The width, or thickness of the line,
     */
    width?: number;
};
export declare function drawLine(opt: DrawLineOpt): void;
export type LineJoin = "none" | "round" | "bevel" | "miter";
export type LineCap = "butt" | "round" | "square";
/**
 * How the lines should look like.
 */
export type DrawLinesOpt = Omit<RenderProps, "angle" | "scale"> & {
    /**
     * The points that should be connected with a line.
     */
    pts: Vec2[];
    /**
     * The width, or thickness of the lines,
     */
    width?: number;
    /**
     * The radius of each corner.
     */
    radius?: number | number[];
    /**
     * Line join style (default "none").
     */
    join?: LineJoin;
    /**
     * Line cap style (default "none").
     */
    cap?: LineCap;
    /**
     * Maximum miter length, anything longer becomes bevel.
     */
    miterLimit?: number;
};
export declare function _drawLinesBevel(opt: DrawLinesOpt): void;
export declare function _drawLinesRound(opt: DrawLinesOpt): void;
export declare function _drawLinesMiter(opt: DrawLinesOpt): void;
export declare function drawLines(opt: DrawLinesOpt): void;
//# sourceMappingURL=drawLine.d.ts.map