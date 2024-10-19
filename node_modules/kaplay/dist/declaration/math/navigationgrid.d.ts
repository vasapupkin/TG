import { Vec2 } from "./math";
import { type Graph } from "./navigation";
/**
 * A grid is a graph consisting of connected grid cells
 */
export declare class Grid implements Graph {
    private _columns;
    private _rows;
    private _tileWidth;
    private _tileHeight;
    private _data;
    private _diagonals;
    private _connMap;
    /**
     * @param data Grid data
     * @param options Navigation options
     */
    constructor(width: number, height: number, { diagonals, tileWidth, tileHeight }?: {
        diagonals?: boolean | undefined;
        tileWidth?: number | undefined;
        tileHeight?: number | undefined;
    });
    private _buildConnectivityMap;
    private _getTile;
    private _getTileX;
    private _getTileY;
    getNeighbours(tile: number): number[];
    getCost(a: number, b: number): number;
    getHeuristic(a: number, b: number): number;
    getPath(start: number, goal: number): number[];
    getWaypointPath(start: Vec2, goal: Vec2): Vec2[];
}
//# sourceMappingURL=navigationgrid.d.ts.map