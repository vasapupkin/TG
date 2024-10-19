import type { Comp } from "../../types";
import type { KEventController } from "../../utils/";
/**
 * The {@link health `health()`} component.
 *
 * @group Component Types
 */
export interface HealthComp extends Comp {
    /**
     * Decrease HP by n (defaults to 1).
     */
    hurt(n?: number): void;
    /**
     * Increase HP by n (defaults to 1).
     */
    heal(n?: number): void;
    /**
     * Current health points.
     */
    hp(): number;
    /**
     * Set current health points.
     */
    setHP(hp: number): void;
    /**
     * Max amount of HP.
     */
    maxHP(): number | null;
    /**
     * Set max amount of HP.
     */
    setMaxHP(hp: number): void;
    /**
     * Register an event that runs when hurt() is called upon the object.
     *
     * @since v2000.1
     */
    onHurt(action: (amount?: number) => void): KEventController;
    /**
     * Register an event that runs when heal() is called upon the object.
     *
     * @since v2000.1
     */
    onHeal(action: (amount?: number) => void): KEventController;
    /**
     * Register an event that runs when object's HP is equal or below 0.
     *
     * @since v2000.1
     */
    onDeath(action: () => void): KEventController;
}
export declare function health(hp: number, maxHP?: number): HealthComp;
//# sourceMappingURL=health.d.ts.map