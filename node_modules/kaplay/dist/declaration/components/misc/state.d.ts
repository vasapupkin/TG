import type { Comp } from "../../types";
import { KEventController } from "../../utils/";
/**
 * The {@link state `state()`} component.
 *
 * @group Component Types
 */
export interface StateComp extends Comp {
    /**
     * Current state.
     */
    state: string;
    /**
     * Enter a state, trigger onStateEnd for previous state and onStateEnter for the new State state.
     */
    enterState: (state: string, ...args: any) => void;
    /**
     * Register event that runs once when a specific state transition happens. Accepts arguments passed from `enterState(name, ...args)`.
     *
     * @since v2000.2
     */
    onStateTransition(from: string, to: string, action: () => void): KEventController;
    /**
     * Register event that runs once when enters a specific state. Accepts arguments passed from `enterState(name, ...args)`.
     */
    onStateEnter: (state: string, action: (...args: any) => void) => KEventController;
    /**
     * Register an event that runs once when leaves a specific state.
     */
    onStateEnd: (state: string, action: () => void) => KEventController;
    /**
     * Register an event that runs every frame when in a specific state.
     */
    onStateUpdate: (state: string, action: () => void) => KEventController;
    /**
     * Register an event that runs every frame when in a specific state.
     */
    onStateDraw: (state: string, action: () => void) => KEventController;
}
export declare function state(initState: string, stateList?: string[], transitions?: Record<string, string | string[]>): StateComp;
//# sourceMappingURL=state.d.ts.map