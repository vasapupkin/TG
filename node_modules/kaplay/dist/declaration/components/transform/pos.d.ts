import { Vec2, type Vec2Args } from "../../math/math";
import type { Comp, GameObj } from "../../types";
import type { FixedComp } from "./fixed";
/**
 * The {@link pos `pos()`} component.
 *
 * @group Component Types
 */
export interface PosComp extends Comp {
    /**
     * Object's current world position.
     */
    pos: Vec2;
    /**
     * Move how many pixels per second. If object is 'solid', it won't move into other 'solid' objects.
     */
    move(xVel: number, yVel: number): void;
    move(vel: Vec2): void;
    /**
     * Move how many pixels, without multiplying dt, but still checking for 'solid'.
     */
    moveBy(dx: number, dy: number): void;
    moveBy(d: Vec2): void;
    /**
     * Move to a spot with a speed (pixels per second), teleports if speed is not given.
     */
    moveTo(dest: Vec2, speed?: number): void;
    moveTo(x: number, y: number, speed?: number): void;
    /**
     * Get the position of the object on the screen.
     */
    screenPos(): Vec2 | null;
    /**
     * Get the position of the object relative to the root.
     */
    worldPos(): Vec2 | null;
    /**
     * Transform a local point (relative to this) to a screen point (relative to the camera)
     */
    toScreen(this: GameObj<PosComp | FixedComp>, p: Vec2): Vec2;
    /**
     * Transform a local point (relative to this) to a world point (relative to the root)
     * @since v3001.0
     */
    toWorld(this: GameObj<PosComp>, p: Vec2): Vec2;
    /**
     * Transform a screen point (relative to the camera) to a local point (relative to this)
     * @since v3001.0
     */
    fromScreen(this: GameObj<PosComp | FixedComp>, p: Vec2): Vec2;
    /**
     * Transform a world point (relative to the root) to a local point (relative to this)
     * @since v3001.0
     */
    fromWorld(this: GameObj<PosComp>, p: Vec2): Vec2;
    /**
     * Transform a point relative to this to a point relative to other
     * @since v3001.0
     */
    toOther(this: GameObj<PosComp>, other: GameObj<PosComp>, p: Vec2): Vec2;
    /**
     * Transform a point relative to other to a point relative to this
     * @since v3001.0
     */
    fromOther(this: GameObj<PosComp>, other: GameObj<PosComp>, p: Vec2): Vec2;
}
export declare function pos(...args: Vec2Args): PosComp;
//# sourceMappingURL=pos.d.ts.map