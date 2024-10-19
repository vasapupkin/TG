import type { Vec2 } from "../../math/math";
import type { Anchor, Comp } from "../../types";
/**
 * The {@link anchor `anchor()`} component.
 *
 * @group Component Types
 */
export interface AnchorComp extends Comp {
    /**
     * Anchor point for render.
     */
    anchor: Anchor | Vec2;
}
export declare function anchor(o: Anchor | Vec2): AnchorComp;
//# sourceMappingURL=anchor.d.ts.map