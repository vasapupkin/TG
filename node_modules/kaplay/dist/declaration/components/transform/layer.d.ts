import type { Comp } from "../../types";
/**
 * The {@link layer `layer()`} component.
 *
 * @group Component Types
 */
export interface LayerComp extends Comp {
    /**
     * Get the index of the current layer the object is assigned to.
     *
     * @returns The index of the layer the object is assigned to, or `null` if the layer does not exist.
     */
    get layerIndex(): number | null;
    /**
     * Get the name of the current layer the object is assigned to.
     *
     * @returns The name of the layer the object is assigned to.
     */
    get layer(): string | null;
    /**
     * Set the name of the layer the object should be assigned to.
     */
    set layer(name: string);
}
export declare function layer(layer: string): LayerComp;
//# sourceMappingURL=layer.d.ts.map