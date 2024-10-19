import { Rect } from "../../math/math";
import type { Comp } from "../../types";
/**
 * The {@link circle `circle()`} component.
 *
 * @group Component Types
 */
export interface CircleComp extends Comp {
    draw: Comp["draw"];
    /** Radius of circle. */
    radius: number;
    /**
     * Render area of the circle.
     *
     * @since v3000.0
     */
    renderArea(): Rect;
}
/**
 * Options for the {@link circle `circle()``} component.
 *
 * @group Component Types
 */
export interface CircleCompOpt {
    /**
     * If fill the circle (useful if you only want to render outline with
     * {@link outline `outline()`} component).
     */
    fill?: boolean;
}
export declare function circle(radius: number, opt?: CircleCompOpt): CircleComp;
//# sourceMappingURL=circle.d.ts.map