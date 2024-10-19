import { Vec2, type Vec2Args } from "../../math/math";
import type { Comp } from "../../types";
/**
 * The {@link scale `scale()`} component.
 *
 * @group Component Types
 */
export interface ScaleComp extends Comp {
    /**
     * The current scale of the object
     *
     * @returns The current scale of the object as a {@link Vec2 `Vec2`}
     */
    scale: Vec2;
    /**
     * Set the scale of the object to a number
     */
    scaleTo(s: number): void;
    /**
     * Set the scale of the object to a Vec2
     */
    scaleTo(s: Vec2): void;
    /**
     * Set the scale of the object to a number for x and y
     */
    scaleTo(sx: number, sy: number): void;
    /**
     * Scale the object by a number
     */
    scaleBy(s: number): void;
    /**
     * Scale the object by a Vec2
     */
    scaleBy(s: Vec2): void;
    /**
     * Scale the object by a number for x and y
     */
    scaleBy(sx: number, sy: number): void;
}
export declare function scale(...args: Vec2Args): ScaleComp;
//# sourceMappingURL=scale.d.ts.map