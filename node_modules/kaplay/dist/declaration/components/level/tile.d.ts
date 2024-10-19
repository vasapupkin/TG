import { Vec2 } from "../../math/math";
import { type Comp, type Edge, EdgeMask, type GameObj, type LevelComp } from "../../types";
/**
 * The {@link tile `tile()`} component.
 *
 * @group Component Types
 */
export interface TileComp extends Comp {
    /**
     * The tile position inside the level.
     */
    tilePos: Vec2;
    /**
     * If the tile is an obstacle in pathfinding.
     */
    isObstacle: boolean;
    /**
     * How much a tile is cost to traverse in pathfinding (default 0).
     */
    cost: number;
    /**
     * If the tile has hard edges that cannot pass in pathfinding.
     */
    edges: Edge[];
    /**
     * Position offset when setting `tilePos`.
     */
    tilePosOffset: Vec2;
    readonly edgeMask: EdgeMask;
    getLevel(): GameObj<LevelComp>;
    moveLeft(): void;
    moveRight(): void;
    moveUp(): void;
    moveDown(): void;
}
/**
 * Options for the {@link tile `tile()`} component.
 *
 * @group Component Types
 */
export type TileCompOpt = {
    /**
     * If the tile is an obstacle in pathfinding.
     */
    isObstacle?: boolean;
    /**
     * How much a tile is cost to traverse in pathfinding (default 0).
     */
    cost?: number;
    /**
     * If the tile has hard edges that cannot pass in pathfinding.
     */
    edges?: Edge[];
    /**
     * Position offset when setting `tilePos`.
     */
    offset?: Vec2;
};
export declare function tile(opts?: TileCompOpt): TileComp;
//# sourceMappingURL=tile.d.ts.map