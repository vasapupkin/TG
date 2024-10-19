import type { LineCap, LineJoin } from "../../gfx";
import { Color } from "../../math/color";
import type { Comp, Outline } from "../../types";
/**
 * The {@link outline `outline()`} component.
 *
 * @group Component Types
 */
export interface OutlineComp extends Comp {
    outline: Outline;
}
export declare function outline(width?: number, color?: Color, opacity?: number, join?: LineJoin, miterLimit?: number, cap?: LineCap): OutlineComp;
//# sourceMappingURL=outline.d.ts.map