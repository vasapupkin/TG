import { Rect } from "../../math/math";
import type { Comp } from "../../types";
/**
 * The {@link rect `rect()`} component.
 *
 * @group Component Types
 */
export interface RectComp extends Comp {
    draw: Comp["draw"];
    /**
     * Width of rectangle.
     */
    width: number;
    /**
     * Height of rectangle.
     */
    height: number;
    /**
     * The radius of each corner.
     */
    radius?: number | [number, number, number, number];
    /**
     * @since v3000.0
     */
    renderArea(): Rect;
}
/**
 * Options for the {@link rect `rect()`} component.
 *
 * @group Component Types
 */
export interface RectCompOpt {
    /**
     * Radius of the rectangle corners.
     */
    radius?: number | [number, number, number, number];
    /**
     * If fill the rectangle (useful if you only want to render outline with outline() component).
     */
    fill?: boolean;
}
export declare function rect(w: number, h: number, opt?: RectCompOpt): RectComp;
//# sourceMappingURL=rect.d.ts.map