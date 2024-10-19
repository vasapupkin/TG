import type { ImageSource } from "../types";
import { type GfxCtx, Texture } from "../gfx";
import { Quad } from "../math/math";
export default class TexPacker {
    private textures;
    private bigTextures;
    private canvas;
    private c2d;
    private x;
    private y;
    private curHeight;
    private gfx;
    constructor(gfx: GfxCtx, w: number, h: number);
    add(img: ImageSource): [Texture, Quad];
    free(): void;
}
//# sourceMappingURL=texPacker.d.ts.map