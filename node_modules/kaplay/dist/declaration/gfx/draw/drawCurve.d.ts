import type { Vec2 } from "../../math/math";
import type { RenderProps } from "../../types";
export type DrawCurveOpt = RenderProps & {
    /**
     * The amount of line segments to draw.
     */
    segments?: number;
    /**
     * The width of the line.
     */
    width?: number;
};
export declare function drawCurve(curve: (t: number) => Vec2, opt: DrawCurveOpt): void;
//# sourceMappingURL=drawCurve.d.ts.map