import { Vec2 } from "../../math/math";
import { type Graph } from "../../math/navigation";
import type { Comp } from "../../types";
export interface PathfinderMapComp extends Comp {
    navigate(origin: Vec2, target: Vec2, navigationOpt: any): Vec2[] | undefined;
    graph: Graph | undefined;
}
export interface PathfinderMapCompOpt {
    graph?: Graph;
}
export declare function pathfinderMap(opts: PathfinderMapCompOpt): PathfinderMapComp;
export interface PathfinderComp extends Comp {
    navigateTo(target: Vec2): Vec2[] | undefined;
    graph: Graph | undefined;
}
export interface PathfinderCompOpt {
    graph?: Graph;
    navigationOpt?: any;
}
export declare function pathfinder(opts: PathfinderCompOpt): PathfinderComp;
//# sourceMappingURL=pathfinder.d.ts.map