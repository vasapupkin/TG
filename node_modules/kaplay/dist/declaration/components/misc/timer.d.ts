import type { Comp, LerpValue, TimerController, TweenController } from "../../types";
import type { KEventController } from "../../utils";
/**
 * The {@link timer `timer()`} component.
 *
 * @group Component Types
 */
export interface TimerComp extends Comp {
    /**
     * Run the callback after n seconds.
     */
    wait(time: number, action?: () => void): TimerController;
    /**
     * Run the callback every n seconds.
     *
     * @since v3000.0
     */
    loop(time: number, action: () => void): KEventController;
    /**
     * Tweeeeen! Note that this doesn't specifically mean tweening on this object's property, this just registers the timer on this object, so the tween will cancel with the object gets destroyed, or paused when obj.paused is true.
     *
     * @since v3000.0
     */
    tween<V extends LerpValue>(from: V, to: V, duration: number, setValue: (value: V) => void, easeFunc?: (t: number) => number): TweenController;
}
export declare function timer(): TimerComp;
//# sourceMappingURL=timer.d.ts.map