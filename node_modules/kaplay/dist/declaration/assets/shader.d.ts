import { type GfxCtx } from "../gfx";
import { Color } from "../math/color";
import { Mat4, Vec2 } from "../math/math";
import type { RenderProps } from "../types";
import { Asset } from "./asset";
export type ShaderData = Shader;
/**
 * @group Math
 */
export type UniformValue = number | Vec2 | Color | Mat4 | number[] | Vec2[] | Color[];
/**
 * @group Math
 */
export type UniformKey = Exclude<string, "u_tex">;
/**
 * @group Math
 */
export type Uniform = Record<UniformKey, UniformValue>;
/**
 * @group GFX
 */
export declare class Shader {
    ctx: GfxCtx;
    glProgram: WebGLProgram;
    constructor(ctx: GfxCtx, vert: string, frag: string, attribs: string[]);
    bind(): void;
    unbind(): void;
    send(uniform: Uniform): void;
    free(): void;
}
export declare function makeShader(ggl: GfxCtx, vertSrc?: string | null, fragSrc?: string | null): Shader;
export declare function resolveShader(src: RenderProps["shader"]): ShaderData | Asset<ShaderData> | null;
export declare function getShader(name: string): Asset<ShaderData> | null;
export declare function loadShader(name: string | null, vert?: string, frag?: string): Asset<Shader>;
export declare function loadShaderURL(name: string | null, vert?: string, frag?: string): Asset<ShaderData>;
//# sourceMappingURL=shader.d.ts.map