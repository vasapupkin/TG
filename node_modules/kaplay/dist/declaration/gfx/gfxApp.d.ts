import { type Uniform } from "../assets/shader";
import { BatchRenderer, FrameBuffer, type GfxCtx, Texture } from "../gfx";
import { type Color } from "../math/color";
import { Mat4 } from "../math/math";
import type { KAPLAYOpt } from "../types";
export type AppGfxCtx = ReturnType<typeof initAppGfx>;
export declare const initAppGfx: (gopt: KAPLAYOpt, ggl: GfxCtx) => {
    lastDrawCalls: number;
    ggl: {
        gl: WebGLRenderingContext;
        opts: {
            texFilter?: import("..").TexFilter;
        };
        onDestroy: (action: () => unknown) => void;
        destroy: () => void;
        pushTexture2D: (item: WebGLTexture) => void;
        popTexture2D: () => void;
        pushArrayBuffer: (item: WebGLBuffer) => void;
        popArrayBuffer: () => void;
        pushElementArrayBuffer: (item: WebGLBuffer) => void;
        popElementArrayBuffer: () => void;
        pushFramebuffer: (item: WebGLFramebuffer) => void;
        popFramebuffer: () => void;
        pushRenderbuffer: (item: WebGLRenderbuffer) => void;
        popRenderbuffer: () => void;
        pushViewport: (item: {
            x: number;
            y: number;
            w: number;
            h: number;
        }) => void;
        popViewport: () => void;
        pushProgram: (item: WebGLProgram) => void;
        popProgram: () => void;
        setVertexFormat: (fmt: import("./gfx").VertexFormat) => void;
    };
    defShader: import("..").Shader;
    defTex: Texture;
    frameBuffer: FrameBuffer;
    postShader: string | null;
    postShaderUniform: Uniform | (() => Uniform) | null;
    renderer: BatchRenderer;
    transform: Mat4;
    transformStack: Mat4[];
    bgTex: Texture;
    bgColor: Color | null;
    bgAlpha: number;
    width: number;
    height: number;
    viewport: {
        x: number;
        y: number;
        width: number;
        height: number;
    };
    fixed: boolean;
};
//# sourceMappingURL=gfxApp.d.ts.map