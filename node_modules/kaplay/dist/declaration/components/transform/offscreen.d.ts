import type { Comp } from "../../types";
import type { KEventController } from "../../utils/";
/**
 * The {@link offscreen `offscreen()`} component.
 *
 * @group Component Types
 */
export interface OffScreenComp extends Comp {
    /**
     * If object is currently out of view.
     */
    isOffScreen(): boolean;
    /**
     * Register an event that runs when object goes out of view.
     */
    onExitScreen(action: () => void): KEventController;
    /**
     * Register an event that runs when object enters view.
     */
    onEnterScreen(action: () => void): KEventController;
}
/**
 * Options for {@link offscreen `offscreen()`} component.
 *
 * @group Component Types
 */
export interface OffScreenCompOpt {
    /**
     * If hide object when out of view.
     */
    hide?: boolean;
    /**
     * If pause object when out of view.
     */
    pause?: boolean;
    /**
     * If destroy object when out of view.
     */
    destroy?: boolean;
    /**
     * The distance when out of view is triggered (default 200).
     *
     * @since v3000.0
     */
    distance?: number;
}
export declare function offscreen(opt?: OffScreenCompOpt): OffScreenComp;
//# sourceMappingURL=offscreen.d.ts.map