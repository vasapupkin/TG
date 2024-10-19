import { Vec2 } from "../../math/math";
import type { Comp, GameObj } from "../../types";
/**
 * The {@link follow `follow()`} component.
 *
 * @group Component Types
 */
export interface FollowComp extends Comp {
    follow: {
        obj: GameObj;
        offset: Vec2;
    };
}
export declare function follow(obj: GameObj, offset?: Vec2): FollowComp;
//# sourceMappingURL=follow.d.ts.map