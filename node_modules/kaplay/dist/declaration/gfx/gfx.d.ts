import type { Shader, Uniform } from "../assets";
import type { ImageSource, TexFilter, TextureOpt } from "../types";
export type GfxCtx = ReturnType<typeof initGfx>;
export declare class Texture {
    ctx: GfxCtx;
    src: null | ImageSource;
    glTex: WebGLTexture;
    width: number;
    height: number;
    constructor(ctx: GfxCtx, w: number, h: number, opt?: TextureOpt);
    static fromImage(ctx: GfxCtx, img: ImageSource, opt?: TextureOpt): Texture;
    update(img: ImageSource, x?: number, y?: number): void;
    bind(): void;
    unbind(): void;
    /** Frees up texture memory. Call this once the texture is no longer being used to avoid memory leaks. */
    free(): void;
}
/**
 * @group GFX
 */
export declare class FrameBuffer {
    ctx: GfxCtx;
    tex: Texture;
    glFramebuffer: WebGLFramebuffer;
    glRenderbuffer: WebGLRenderbuffer;
    constructor(ctx: GfxCtx, w: number, h: number, opt?: TextureOpt);
    get width(): number;
    get height(): number;
    toImageData(): ImageData;
    toDataURL(): string;
    clear(): void;
    draw(action: () => void): void;
    bind(): void;
    unbind(): void;
    free(): void;
}
export type VertexFormat = {
    name: string;
    size: number;
}[];
export declare class BatchRenderer {
    ctx: GfxCtx;
    glVBuf: WebGLBuffer;
    glIBuf: WebGLBuffer;
    vqueue: number[];
    iqueue: number[];
    stride: number;
    maxVertices: number;
    maxIndices: number;
    vertexFormat: VertexFormat;
    numDraws: number;
    curPrimitive: GLenum | null;
    curTex: Texture | null;
    curShader: Shader | null;
    curUniform: Uniform;
    constructor(ctx: GfxCtx, format: VertexFormat, maxVertices: number, maxIndices: number);
    push(primitive: GLenum, verts: number[], indices: number[], shader: Shader, tex?: Texture | null, uniform?: Uniform): void;
    flush(): void;
    free(): void;
}
export declare class Mesh {
    ctx: GfxCtx;
    glVBuf: WebGLBuffer;
    glIBuf: WebGLBuffer;
    vertexFormat: VertexFormat;
    count: number;
    constructor(ctx: GfxCtx, format: VertexFormat, verts: number[], indices: number[]);
    draw(primitive?: GLenum): void;
    free(): void;
}
export declare function initGfx(gl: WebGLRenderingContext, opts?: {
    texFilter?: TexFilter;
}): {
    gl: WebGLRenderingContext;
    opts: {
        texFilter?: TexFilter;
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
    setVertexFormat: (fmt: VertexFormat) => void;
};
//# sourceMappingURL=gfx.d.ts.map