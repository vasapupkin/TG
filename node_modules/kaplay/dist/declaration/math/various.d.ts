import type { GameObj } from "../types";
import { Mat4, Vec2 } from "./math";
export declare function calcTransform(obj: GameObj): Mat4;
export declare function screen2ndc(pt: Vec2): Vec2;
export declare function getArcPts(pos: Vec2, radiusX: number, radiusY: number, start: number, end: number, res?: number): Vec2[];
//# sourceMappingURL=various.d.ts.map