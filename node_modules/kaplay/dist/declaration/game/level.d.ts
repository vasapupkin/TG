import { type PosComp } from "../components";
import { type Vec2 } from "../math/math";
import type { CompList, GameObj, LevelComp } from "../types";
/**
 * @group Options
 */
export interface LevelOpt {
    /**
     * Width of each block.
     */
    tileWidth: number;
    /**
     * Height of each block.
     */
    tileHeight: number;
    /**
     * Position of the first block.
     */
    pos?: Vec2;
    /**
     * Definition of each tile.
     */
    tiles: {
        [sym: string]: (pos: Vec2) => CompList<any>;
    };
    /**
     * Called when encountered a symbol not defined in "tiles".
     */
    wildcardTile?: (sym: string, pos: Vec2) => CompList<any> | null | undefined;
}
export declare function addLevel(map: string[], opt: LevelOpt): GameObj<PosComp | LevelComp>;
//# sourceMappingURL=level.d.ts.map