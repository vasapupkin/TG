import { type Texture } from "../../gfx";
import { Color, Quad, type ShapeType, Vec2 } from "../../math";
import type { Comp } from "../../types";
/**
 * Options for the {@link particles `particles()`}'s component
 */
export type EmitterOpt = {
    shape?: ShapeType;
    lifetime?: number;
    rate?: number;
    direction: number;
    spread: number;
};
/**
 * Options for the {@link particles `particles()`}'s component
 *
 * @group Component Types
 */
export type ParticlesOpt = {
    max: number;
    lifeTime?: [number, number];
    speed?: [number, number];
    acceleration?: [Vec2, Vec2];
    damping?: [number, number];
    angle?: [number, number];
    angularVelocity?: [number, number];
    scales?: number[];
    colors?: Color[];
    opacities?: number[];
    quads?: Quad[];
    texture: Texture;
};
/**
 * The {@link particles `particles()`} component.
 *
 * @group Component Types
 */
export interface ParticlesComp extends Comp {
    emit(n: number): void;
    onEnd(cb: () => void): void;
}
export declare function particles(popt: ParticlesOpt, eopt: EmitterOpt): ParticlesComp;
//# sourceMappingURL=particles.d.ts.map