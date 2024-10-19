import type { Comp } from "../../types";
/**
 * The {@link stay `stay()`} component.
 *
 * @group Component Types
 */
export interface StayComp extends Comp {
    /**
     * If the obj should not be destroyed on scene switch.
     */
    stay: boolean;
    /**
     * Array of scenes that the obj will stay on.
     */
    scenesToStay?: string[];
}
export declare function stay(scenesToStay?: string[]): StayComp;
//# sourceMappingURL=stay.d.ts.map