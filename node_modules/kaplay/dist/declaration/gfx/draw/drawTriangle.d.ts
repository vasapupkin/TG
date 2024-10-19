import type { Vec2 } from "../../math/math";
import type { RenderProps } from "../../types";
/**
 * How the triangle should look like.
 */
export type DrawTriangleOpt = RenderProps & {
    /**
     * First point of triangle.
     */
    p1: Vec2;
    /**
     * Second point of triangle.
     */
    p2: Vec2;
    /**
     * Third point of triangle.
     */
    p3: Vec2;
    /**
     * If fill the shape with color (set this to false if you only want an outline).
     */
    fill?: boolean;
    /**
     * The radius of each corner.
     */
    radius?: number;
};
export declare function drawTriangle(opt: DrawTriangleOpt): void;
//# sourceMappingURL=drawTriangle.d.ts.map