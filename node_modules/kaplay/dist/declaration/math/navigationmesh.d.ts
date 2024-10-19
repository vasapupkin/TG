import { Vec2 } from "./math";
import { type Graph } from "./navigation";
declare class NavEdge {
    a: Vec2;
    b: Vec2;
    polygon: WeakRef<NavPolygon>;
    constructor(a: Vec2, b: Vec2, polygon: NavPolygon);
    isLeft(x: number, y: number): number;
    get middle(): Vec2;
}
declare class NavPolygon {
    private _edges;
    private _centroid;
    private _id;
    constructor(id: number);
    get id(): number;
    set edges(edges: NavEdge[]);
    get edges(): NavEdge[];
    get centroid(): Vec2;
    contains(p: Vec2): boolean;
}
export declare class NavMesh implements Graph {
    private _polygons;
    private _pointCache;
    private _edgeCache;
    constructor();
    private _addPoint;
    private _addEdge;
    private _findEdge;
    private _findCommonEdge;
    addPolygon(vertices: Vec2[]): NavPolygon;
    addRect(pos: Vec2, size: Vec2): NavPolygon;
    private _getLocation;
    getNeighbours(index: number): number[];
    getCost(a: number, b: number): number;
    getHeuristic(indexA: number, indexB: number): number;
    getPath(start: number, goal: number): number[];
    getWaypointPath(start: Vec2, goal: Vec2, opt: any): Vec2[];
}
export {};
//# sourceMappingURL=navigationmesh.d.ts.map