import { type Texture } from "../../gfx";
import { type Color } from "../../math/color";
import { Polygon, type Vec2 } from "../../math/math";
import type { Comp, DrawPolygonOpt } from "../../types";
/**
 * The {@link polygon `polygon()`} component.
 *
 * @since v3001.0
 * @group Component Types
 */
export interface PolygonComp extends Comp {
    draw: Comp["draw"];
    /**
     * Points in the polygon.
     */
    pts: Vec2[];
    /**
     * The radius of each corner.
     */
    radius?: number | number[];
    /**
     * The color of each vertex.
     */
    colors?: Color[];
    /**
     * The uv of each vertex.
     *
     * @since v3001.0
     */
    uv?: Vec2[];
    /**
     * The texture used when uv coordinates are present.
     *
     * @since v3001.0
     */
    tex?: Texture;
    renderArea(): Polygon;
}
/**
 * Options for the {@link polygon `polygon()`} component.
 *
 * @group Component Types
 */
export type PolygonCompOpt = Omit<DrawPolygonOpt, "pts">;
export declare function polygon(pts: Vec2[], opt?: PolygonCompOpt): PolygonComp;
//# sourceMappingURL=polygon.d.ts.map