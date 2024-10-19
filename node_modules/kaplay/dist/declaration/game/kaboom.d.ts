import type { Vec2 } from "../math";
import type { CompList, GameObj } from "../types";
/**
 * @group Options
 */
export interface BoomOpt {
    /**
     * Animation speed.
     */
    speed?: number;
    /**
     * Scale.
     */
    scale?: number;
    /**
     * Additional components.
     *
     * @since v3000.0
     */
    comps?: CompList<any>;
}
export declare function addKaboom(p: Vec2, opt?: BoomOpt): GameObj;
//# sourceMappingURL=kaboom.d.ts.map