import type { Color } from "../../math/color";
import { Vec2 } from "../../math/math";
import type { Anchor, RenderProps } from "../../types";
/**
 * How the rectangle should look like.
 */
export type DrawRectOpt = RenderProps & {
    /**
     * Width of the rectangle.
     */
    width: number;
    /**
     * Height of the rectangle.
     */
    height: number;
    /**
     * Use gradient instead of solid color.
     *
     * @since v3000.0
     */
    gradient?: [Color, Color];
    /**
     * If the gradient should be horizontal.
     *
     * @since v3000.0
     */
    horizontal?: boolean;
    /**
     * If fill the shape with color (set this to false if you only want an outline).
     */
    fill?: boolean;
    /**
     * The radius of each corner.
     */
    radius?: number | number[];
    /**
     * The anchor point, or the pivot point. Default to "topleft".
     */
    anchor?: Anchor | Vec2;
};
export declare function drawRect(opt: DrawRectOpt): void;
//# sourceMappingURL=drawRect.d.ts.map