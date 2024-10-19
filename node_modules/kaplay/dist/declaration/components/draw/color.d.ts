import { type Color, type ColorArgs } from "../../math/color";
import type { Comp } from "../../types";
/**
 * The {@link color `color()`} component.
 *
 * @group Component Types
 */
export interface ColorComp extends Comp {
    color: Color;
}
export declare function color(...args: ColorArgs): ColorComp;
//# sourceMappingURL=color.d.ts.map