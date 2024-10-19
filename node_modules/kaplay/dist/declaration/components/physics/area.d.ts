import { Polygon, Vec2 } from "../../math/math";
import type { Collision, Comp, Cursor, GameObj, MouseButton, Shape, Tag } from "../../types";
import type { KEventController } from "../../utils/";
export declare function usesArea(): boolean;
/**
 * The {@link area `area()`} component.
 *
 * @group Component Types
 */
export interface AreaComp extends Comp {
    /**
     * Collider area info.
     */
    area: {
        /**
         * If we use a custom shape over render shape.
         */
        shape: Shape | null;
        /**
         * Area scale.
         */
        scale: Vec2;
        /**
         * Area offset.
         */
        offset: Vec2;
        /**
         * Cursor on hover.
         */
        cursor: Cursor | null;
    };
    /**
     * If this object should ignore collisions against certain other objects.
     *
     * @since v3000.0
     */
    collisionIgnore: Tag[];
    /**
     * If was just clicked on last frame.
     */
    isClicked(): boolean;
    /**
     * If is being hovered on.
     */
    isHovering(): boolean;
    /**
     * Check collision with another game obj.
     *
     * @since v3000.0
     */
    checkCollision(other: GameObj<AreaComp>): Collision | null;
    /**
     * Get all collisions currently happening.
     *
     * @since v3000.0
     */
    getCollisions(): Collision[];
    /**
     * If is currently colliding with another game obj.
     */
    isColliding(o: GameObj<AreaComp>): boolean;
    /**
     * If is currently overlapping with another game obj (like isColliding, but will return false if the objects are just touching edges).
     */
    isOverlapping(o: GameObj<AreaComp>): boolean;
    /**
     * Register an event runs when clicked.
     *
     * @since v2000.1
     */
    onClick(f: () => void, btn?: MouseButton): void;
    /**
     * Register an event runs once when hovered.
     *
     * @since v3000.0
     */
    onHover(action: () => void): KEventController;
    /**
     * Register an event runs every frame when hovered.
     *
     * @since v3000.0
     */
    onHoverUpdate(action: () => void): KEventController;
    /**
     * Register an event runs once when unhovered.
     *
     * @since v3000.0
     */
    onHoverEnd(action: () => void): KEventController;
    /**
     * Register an event runs once when collide with another game obj with certain tag.
     *
     * @since v2001.0
     */
    onCollide(tag: Tag, f: (obj: GameObj, col?: Collision) => void): void;
    /**
     * Register an event runs once when collide with another game obj.
     *
     * @since v2000.1
     */
    onCollide(f: (obj: GameObj, col?: Collision) => void): void;
    /**
     * Register an event runs every frame when collide with another game obj with certain tag.
     *
     * @since v3000.0
     */
    onCollideUpdate(tag: Tag, f: (obj: GameObj, col?: Collision) => void): KEventController;
    /**
     * Register an event runs every frame when collide with another game obj.
     *
     * @since v3000.0
     */
    onCollideUpdate(f: (obj: GameObj, col?: Collision) => void): KEventController;
    /**
     * Register an event runs once when stopped colliding with another game obj with certain tag.
     *
     * @since v3000.0
     */
    onCollideEnd(tag: Tag, f: (obj: GameObj) => void): KEventController;
    /**
     * Register an event runs once when stopped colliding with another game obj.
     *
     * @since v3000.0
     */
    onCollideEnd(f: (obj: GameObj) => void): void;
    /**
     * If has a certain point inside collider.
     */
    hasPoint(p: Vec2): boolean;
    /**
     * Push out from another solid game obj if currently overlapping.
     */
    resolveCollision(obj: GameObj): void;
    /**
     * Get the geometry data for the collider in local coordinate space.
     *
     * @since v3000.0
     */
    localArea(): Shape;
    /**
     * Get the geometry data for the collider in world coordinate space.
     */
    worldArea(): Polygon;
    /**
     * Get the geometry data for the collider in screen coordinate space.
     */
    screenArea(): Polygon;
}
/**
 * Options for the {@link area `area()`} component.
 *
 * @group Component Types
 */
export interface AreaCompOpt {
    /**
     * The shape of the area (currently only Rect and Polygon is supported).
     *
     * @example
     * ```js
     * add([
     *     sprite("butterfly"),
     *     pos(100, 200),
     *     // a triangle shape!
     *     area({ shape: new Polygon([vec2(0), vec2(100), vec2(-100, 100)]) }),
     * ])
     * ```
     */
    shape?: Shape;
    /**
     * Area scale.
     */
    scale?: number | Vec2;
    /**
     * Area offset.
     */
    offset?: Vec2;
    /**
     * Cursor on hover.
     */
    cursor?: Cursor;
    /**
     * If this object should ignore collisions against certain other objects.
     *
     * @since v3000.0
     */
    collisionIgnore?: Tag[];
}
export declare function area(opt?: AreaCompOpt): AreaComp;
//# sourceMappingURL=area.d.ts.map