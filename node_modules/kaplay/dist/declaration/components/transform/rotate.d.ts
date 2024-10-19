import type { Comp } from "../../types";
/**
 * The {@link rotate `rotate()`} component.
 *
 * @group Component Types
 */
export interface RotateComp extends Comp {
    /**
     * Angle in degrees.
     */
    angle: number;
    /**
     * Rotate in degrees.
     */
    rotateBy(angle: number): void;
    /**
     * Rotate to a degree (like directly assign to .angle)
     *
     * @since v3000.0
     */
    rotateTo(s: number): void;
}
export declare function rotate(a?: number): RotateComp;
//# sourceMappingURL=rotate.d.ts.map