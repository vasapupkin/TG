import { Vec2 } from "../../math/math";
import type { Comp } from "../../types";
import type { KEventController } from "../../utils/";
/**
 * The {@link agent `agent()`} component.
 *
 * @group Component Types
 */
export interface AgentComp extends Comp {
    agentSpeed: number;
    allowDiagonals: boolean;
    getDistanceToTarget(): number;
    getNextLocation(): Vec2 | null;
    getPath(): Vec2[] | null;
    getTarget(): Vec2 | null;
    isNavigationFinished(): boolean;
    isTargetReachable(): boolean;
    isTargetReached(): boolean;
    setTarget(target: Vec2): void;
    onNavigationStarted(cb: () => void): KEventController;
    onNavigationNext(cb: () => void): KEventController;
    onNavigationEnded(cb: () => void): KEventController;
    onTargetReached(cb: () => void): KEventController;
}
/**
 * Options for the {@link agent `agent()`} component.
 *
 * @group Component Types
 */
export type AgentCompOpt = {
    speed?: number;
    allowDiagonals?: boolean;
};
export declare function agent(opts?: AgentCompOpt): AgentComp;
//# sourceMappingURL=agent.d.ts.map