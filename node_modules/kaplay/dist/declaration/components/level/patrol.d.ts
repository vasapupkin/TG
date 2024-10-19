import { Vec2 } from "../../math/math";
import type { Comp, GameObj } from "../../types";
import type { KEventController } from "../../utils/";
export interface PatrolComp extends Comp {
    waypoints: Vec2[] | undefined;
    patrolSpeed: number;
    nextLocation: Vec2 | undefined;
    /**
     * Attaches an event handler which is called when using "stop" and the end of the path is reached.
     * @param cb The event handler called when the patrol finishes.
     */
    onPatrolFinished(cb: (objects: GameObj[]) => void): KEventController;
}
type PatrolEndBehavior = "loop" | "ping-pong" | "stop";
export interface PatrolCompOpt {
    waypoints?: Vec2[];
    speed?: number;
    endBehavior?: PatrolEndBehavior;
}
export declare function patrol(opts?: PatrolCompOpt): PatrolComp;
export {};
//# sourceMappingURL=patrol.d.ts.map