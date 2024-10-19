import type { Texture } from "../gfx";
import type { DrawTextOpt } from "../gfx/draw/drawText";
import type { LoadFontOpt, Outline, TexFilter } from "../types";
import { Asset } from "./asset";
import { type BitmapFontData, type GfxFont } from "./bitmapFont";
export declare class FontData {
    fontface: FontFace;
    filter: TexFilter;
    outline: Outline | null;
    size: number;
    constructor(face: FontFace, opt?: LoadFontOpt);
}
export declare function resolveFont(src: DrawTextOpt["font"]): FontData | Asset<FontData> | BitmapFontData | Asset<BitmapFontData> | string | null | void;
export declare function getFont(name: string): Asset<FontData> | null;
export declare function loadFont(name: string, src: string | BinaryData, opt?: LoadFontOpt): Asset<FontData>;
export declare function makeFont(tex: Texture, gw: number, gh: number, chars: string): GfxFont;
//# sourceMappingURL=font.d.ts.map