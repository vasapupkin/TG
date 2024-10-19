import { Rect } from "../../math/math";
import type { Comp } from "../../types";
/**
 * The {@link uvquad `uvquad()`} component.
 *
 * @group Component Types
 */
export interface UVQuadComp extends Comp {
    draw: Comp["draw"];
    /**
     * Width of rect.
     */
    width: number;
    /**
     * Height of height.
     */
    height: number;
    /**
     * @since v3000.0
     */
    renderArea(): Rect;
}
export declare function uvquad(w: number, h: number): UVQuadComp;
//# sourceMappingURL=uvquad.d.ts.map