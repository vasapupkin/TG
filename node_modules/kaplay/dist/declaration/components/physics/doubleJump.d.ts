import type { Comp } from "../../types";
import type { KEventController } from "../../utils/";
/**
 * The {@link doubleJump `doubleJump()`} component.
 *
 * @group Component Types
 */
export interface DoubleJumpComp extends Comp {
    /**
     * Number of jumps allowed.
     */
    numJumps: number;
    /**
     * Performs double jump (the initial jump only happens if player is grounded).
     */
    doubleJump(force?: number): void;
    /**
     * Register an event that runs when the object performs the second jump when double jumping.
     */
    onDoubleJump(action: () => void): KEventController;
}
export declare function doubleJump(numJumps?: number): DoubleJumpComp;
//# sourceMappingURL=doubleJump.d.ts.map