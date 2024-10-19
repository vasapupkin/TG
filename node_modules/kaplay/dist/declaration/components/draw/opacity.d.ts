import type { Comp, EaseFunc, TweenController } from "../../types";
/**
 * The {@link opacity `opacity()`} component.
 *
 * @group Component Types
 */
export interface OpacityComp extends Comp {
    /** Opacity of the current object. */
    opacity: number;
    /** Fade in at the start. */
    fadeIn(time?: number, easeFunc?: EaseFunc): TweenController;
    /** Fade out at the start. */
    fadeOut(time?: number, easeFunc?: EaseFunc): TweenController;
}
export declare function opacity(a: number): OpacityComp;
//# sourceMappingURL=opacity.d.ts.map