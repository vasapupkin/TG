import type { EmptyComp } from "../../types";
/**
 * The {@link lifespan `lifespan()`} component.
 *
 * @group Component Types
 */
export interface LifespanCompOpt {
    /**
     * Fade out duration (default 0 which is no fade out).
     */
    fade?: number;
}
export declare function lifespan(time: number, opt?: LifespanCompOpt): EmptyComp;
//# sourceMappingURL=lifespan.d.ts.map