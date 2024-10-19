import type { Comp } from "../../types";
/**
 * The {@link named `named()`} component.
 *
 * @group Component Types
 */
export interface NamedComp extends Comp {
    /** The name assigned to this object. */
    name: string;
}
export declare function named(name: string): NamedComp;
//# sourceMappingURL=named.d.ts.map