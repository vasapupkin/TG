import type { Uniform } from "../../assets";
import type { Comp } from "../../types";
/**
 * The {@link shader `shader()`} component.
 *
 * @group Component Types
 */
export interface ShaderComp extends Comp {
    uniform?: Uniform;
    shader: string;
}
export declare function shader(id: string, uniform?: Uniform | (() => Uniform)): ShaderComp;
//# sourceMappingURL=shader.d.ts.map