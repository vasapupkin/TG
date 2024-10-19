import { type Vec2 } from "../../math/math";
import type { Collision, Comp, GameObj } from "../../types";
import type { KEventController } from "../../utils/";
/**
 * The {@link body `body()`} component.
 *
 * @group Component Types
 */
export interface BodyComp extends Comp {
    /**
     * Object current velocity.
     *
     * @since v3001.0
     */
    vel: Vec2;
    /**
     * How much velocity decays (velocity *= (1 - drag) every frame).
     *
     * @since v3001.0
     */
    drag: number;
    /**
     * If object is static, won't move, and all non static objects won't move past it.
     */
    isStatic: boolean;
    /**
     * Initial speed in pixels per second for jump().
     */
    jumpForce: number;
    /**
     * Gravity multiplier.
     */
    gravityScale: number;
    /**
     * Mass of the body, decides how much a non-static body should move when resolves with another non-static body. (default 1).
     *
     * @since v3000.0
     */
    mass: number;
    /**
     * If object should move with moving platform (default true).
     *
     * @since v3000.0
     */
    stickToPlatform?: boolean;
    /**
     * Current platform landing on.
     */
    curPlatform(): GameObj | null;
    /**
     * If currently landing on a platform.
     *
     * @since v2000.1
     */
    isGrounded(): boolean;
    /**
     * If currently falling.
     *
     * @since v2000.1
     */
    isFalling(): boolean;
    /**
     * If currently rising.
     *
     * @since v3000.0
     */
    isJumping(): boolean;
    /**
     * Applies an impulse
     * @param impulse The impulse vector, applied directly
     */
    applyImpulse(impulse: Vec2): void;
    /**
     * Applies a force
     * @param force The force vector, applied after scaled by the inverse mass
     */
    addForce(force: Vec2): void;
    /**
     * Upward thrust.
     */
    jump(force?: number): void;
    /**
     * Register an event that runs when a collision is resolved.
     *
     * @since v3000.0
     */
    onPhysicsResolve(action: (col: Collision) => void): KEventController;
    /**
     * Register an event that runs before a collision would be resolved.
     *
     * @since v3000.0
     */
    onBeforePhysicsResolve(action: (col: Collision) => void): KEventController;
    /**
     * Register an event that runs when the object is grounded.
     *
     * @since v2000.1
     */
    onGround(action: () => void): KEventController;
    /**
     * Register an event that runs when the object starts falling.
     *
     * @since v2000.1
     */
    onFall(action: () => void): KEventController;
    /**
     * Register an event that runs when the object falls off platform.
     *
     * @since v3000.0
     */
    onFallOff(action: () => void): KEventController;
    /**
     * Register an event that runs when the object bumps into something on the head.
     *
     * @since v2000.1
     */
    onHeadbutt(action: () => void): KEventController;
    /**
     * Register an event that runs when an object lands on this object.
     *
     * @since v3001.0
     */
    onLand(action: (obj: GameObj) => void): KEventController;
    /**
     * Register an event that runs when the object is bumped by another object head.
     */
    onHeadbutted(action: (obj: GameObj) => void): KEventController;
}
/**
 * Options for the {@link body `body()`} component.
 *
 * @group Component Types
 */
export interface BodyCompOpt {
    /**
     * How much velocity decays (velocity *= (1 - drag) every frame).
     *
     * @since v3001.0
     */
    drag?: number;
    /**
     * Initial speed in pixels per second for jump().
     */
    jumpForce?: number;
    /**
     * Maximum velocity when falling.
     */
    maxVelocity?: number;
    /**
     * Gravity multiplier.
     */
    gravityScale?: number;
    /**
     * If object is static, won't move, and all non static objects won't move past it.
     *
     * @since v3000.0
     */
    isStatic?: boolean;
    /**
     * If object should move with moving platform (default true).
     *
     * @since v3000.0
     */
    stickToPlatform?: boolean;
    /**
     * Mass of the body, decides how much a non-static body should move when resolves with another non-static body. (default 1).
     *
     * @since v3000.0
     */
    mass?: number;
}
export declare function body(opt?: BodyCompOpt): BodyComp;
//# sourceMappingURL=body.d.ts.map