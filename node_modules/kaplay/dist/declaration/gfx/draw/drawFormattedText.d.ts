import type { Color } from "../../math/color";
import type { Quad, Vec2 } from "../../math/math";
import type { Texture } from "../gfx";
import type { DrawTextOpt } from "./drawText";
/**
 * Formatted text with info on how and where to render each character.
 */
export type FormattedText = {
    width: number;
    height: number;
    chars: FormattedChar[];
    opt: DrawTextOpt;
    renderedText: string;
};
/**
 * One formated character.
 */
export interface FormattedChar {
    ch: string;
    tex: Texture;
    width: number;
    height: number;
    quad: Quad;
    pos: Vec2;
    scale: Vec2;
    angle: number;
    color: Color;
    opacity: number;
}
export declare function drawFormattedText(ftext: FormattedText): void;
//# sourceMappingURL=drawFormattedText.d.ts.map