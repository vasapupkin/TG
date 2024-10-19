import { Texture } from "../gfx";
import type { Quad } from "../math/math";
import type { TexFilter } from "../types";
import { type Asset } from "./asset";
export interface GfxFont {
    tex: Texture;
    map: Record<string, Quad>;
    size: number;
}
export type BitmapFontData = GfxFont;
export declare function getBitmapFont(name: string): Asset<BitmapFontData> | null;
export interface LoadBitmapFontOpt {
    chars?: string;
    filter?: TexFilter;
    outline?: number;
}
export declare function loadBitmapFont(name: string | null, src: string, gw: number, gh: number, opt?: LoadBitmapFontOpt): Asset<BitmapFontData>;
//# sourceMappingURL=bitmapFont.d.ts.map