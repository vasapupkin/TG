import { Vec2 } from "./math";
export interface Graph {
    getNeighbours(node: number): number[];
    getCost(node: number, neighbor: number): number;
    getHeuristic(node: number, goal: number): number;
    getPath(from: number, to: number): number[];
    getWaypointPath(from: Vec2, to: Vec2, opt: any): Vec2[];
}
export declare function breadthFirstSearch(graph: Graph, start: number, goal: number): number[] | null;
export declare function dijkstraSearch(graph: Graph, start: number, goal: number): number[] | null;
export declare function aStarSearch(graph: Graph, start: number, goal: number): number[];
//# sourceMappingURL=navigation.d.ts.map