import type { Comp } from "../../types";
/**
 * The {@link z `z()`} component.
 *
 * @group Component Types
 */
export interface ZComp extends Comp {
    /**
     * Defines the z-index of this game obj
     */
    z: number;
}
export declare function z(z: number): ZComp;
//# sourceMappingURL=z.d.ts.map