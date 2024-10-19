import { Polygon, Vec2 } from "../../math";
import type { Comp, GameObj } from "../../types";
import type { BodyComp } from "./body";
export type SurfaceEffectorCompOpt = {
    speed: number;
    speedVariation?: number;
    forceScale?: number;
};
export interface SurfaceEffectorComp extends Comp {
    speed: number;
    speedVariation: number;
    forceScale: number;
}
export declare function surfaceEffector(opts: SurfaceEffectorCompOpt): SurfaceEffectorComp;
export type AreaEffectorCompOpt = {
    useGlobalAngle?: boolean;
    forceAngle: number;
    forceMagnitude: number;
    forceVariation?: number;
    linearDrag?: number;
};
export interface AreaEffectorComp extends Comp {
    useGlobalAngle: boolean;
    forceAngle: number;
    forceMagnitude: number;
    forceVariation: number;
    linearDrag?: number;
}
export declare function areaEffector(opts: AreaEffectorCompOpt): AreaEffectorComp;
export type ForceMode = "constant" | "inverseLinear" | "inverseSquared";
export type PointEffectorCompOpt = {
    forceMagnitude: number;
    forceVariation: number;
    distanceScale?: number;
    forceMode?: ForceMode;
    linearDrag?: number;
};
export interface PointEffectorComp extends Comp {
    forceMagnitude: number;
    forceVariation: number;
    distanceScale: number;
    forceMode: ForceMode;
    linearDrag: number;
}
export declare function pointEffector(opts: PointEffectorCompOpt): PointEffectorComp;
export type ConstantForceCompOpt = {
    force?: Vec2;
};
export interface ConstantForceComp extends Comp {
    force?: Vec2;
}
export declare function constantForce(opts: ConstantForceCompOpt): ConstantForceComp;
export type PlatformEffectorCompOpt = {
    surfaceArc?: number;
    useOneWay?: boolean;
};
export interface PlatformEffectorComp extends Comp {
    surfaceArc: number;
    useOneWay: boolean;
}
export declare function platformEffector(opt: PlatformEffectorCompOpt): PlatformEffectorComp;
export type BuoyancyEffectorCompOpt = {
    surfaceLevel: number;
    density?: number;
    linearDrag?: number;
    angularDrag?: number;
    flowAngle?: number;
    flowMagnitude?: number;
    flowVariation?: number;
};
export interface BuoyancyEffectorComp extends Comp {
    surfaceLevel: number;
    density: number;
    linearDrag: number;
    angularDrag: number;
    flowAngle: number;
    flowMagnitude: number;
    flowVariation: number;
    applyBuoyancy(body: GameObj<BodyComp>, submergedArea: Polygon): void;
    applyDrag(body: GameObj<BodyComp>, submergedArea: Polygon): void;
}
export declare function buoyancyEffector(opts: BuoyancyEffectorCompOpt): BuoyancyEffectorComp;
//# sourceMappingURL=effectors.d.ts.map