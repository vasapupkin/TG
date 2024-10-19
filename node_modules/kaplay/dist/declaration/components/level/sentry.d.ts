import { Vec2 } from "../../math/math";
import type { Comp, GameObj, QueryOpt } from "../../types";
import type { KEventController } from "../../utils/";
import type { PosComp } from "../transform/pos";
/**
 * The {@link sentry `sentry()`} component.
 *
 * @group Component Types
 */
export interface SentryComp extends Comp {
    direction?: Vec2;
    directionAngle?: number;
    fieldOfView?: number;
    spotted: GameObj<any>[];
    /**
     * Attaches an event handler which is called when objects of interest are spotted.
     * @param cb The event handler called when objects are spotted.
     */
    onObjectsSpotted(cb: (objects: GameObj[]) => void): KEventController;
    /**
     * Returns true if the object is within the field of view.
     * @param obj The object to test.
     * @param direction The direction to look at.
     * @param fieldOfView The field of view in degrees.
     */
    isWithinFieldOfView(obj: GameObj<PosComp>, direction?: Vec2, fieldOfView?: number): boolean;
    /**
     * Returns true if there is a line of sight to the object.
     * @param obj The object to test.
     */
    hasLineOfSight(obj: GameObj<PosComp>): boolean;
}
/**
 * Options for the {@link sentry `sentry()`} component.
 *
 * @group Component Types
 */
export interface SentryCompOpt {
    direction?: Vec2 | number;
    fieldOfView?: number;
    lineOfSight?: boolean;
    raycastExclude?: string[];
    checkFrequency?: number;
}
export type SentryCandidatesCb = () => GameObj<any>[];
export type SentryCandidates = SentryCandidatesCb | QueryOpt;
export declare function sentry(candidates: SentryCandidates, opts?: SentryCompOpt): SentryComp;
//# sourceMappingURL=sentry.d.ts.map