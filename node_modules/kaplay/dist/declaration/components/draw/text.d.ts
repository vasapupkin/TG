import type { BitmapFontData } from "../../assets";
import { type CharTransform, type CharTransformFunc, type TextAlign } from "../../gfx";
import { Rect } from "../../math/math";
import type { Comp } from "../../types";
/**
 * The {@link text `text()`} component.
 *
 * @group Component Types
 */
export interface TextComp extends Comp {
    draw: Comp["draw"];
    /**
     * The text to render.
     */
    text: string;
    /**
     * The text after formatting.
     */
    renderedText: string;
    /**
     * The text size.
     */
    textSize: number;
    /**
     * The font to use.
     */
    font: string | BitmapFontData;
    /**
     * Width of text.
     */
    width: number;
    /**
     * Height of text.
     */
    height: number;
    /**
     * Text alignment ("left", "center" or "right", default "left").
     *
     * @since v3000.0
     */
    align: TextAlign;
    /**
     * The gap between each line.
     *
     * @since v2000.2
     */
    lineSpacing: number;
    /**
     * The gap between each character.
     *
     * @since v2000.2
     */
    letterSpacing: number;
    /**
     * Transform the pos, scale, rotation or color for each character based on the index or char.
     *
     * @since v2000.1
     */
    textTransform: CharTransform | CharTransformFunc;
    /**
     * Stylesheet for styled chunks, in the syntax of "this is a [style]text[/style] word".
     *
     * @since v2000.2
     */
    textStyles: Record<string, CharTransform | CharTransformFunc>;
    /**
     * @since v3000.0
     */
    renderArea(): Rect;
}
/**
 * Options for the {@link text `text()`} component.
 *
 * @group Component Types
 */
export interface TextCompOpt {
    /**
     * Height of text.
     */
    size?: number;
    /**
     * The font to use.
     */
    font?: string | BitmapFontData;
    /**
     * Wrap text to a certain width.
     */
    width?: number;
    /**
     * Text alignment ("left", "center" or "right", default "left").
     *
     * @since v3000.0
     */
    align?: TextAlign;
    /**
     * The gap between each line.
     *
     * @since v2000.2
     */
    lineSpacing?: number;
    /**
     * The gap between each character.
     *
     * @since v2000.2
     */
    letterSpacing?: number;
    /**
     * Transform the pos, scale, rotation or color for each character based on the index or char.
     *
     * @since v2000.1
     */
    transform?: CharTransform | CharTransformFunc;
    /**
     * Stylesheet for styled chunks, in the syntax of "this is a [style]text[/style] word".
     *
     * @since v2000.2
     */
    styles?: Record<string, CharTransform | CharTransformFunc>;
}
export declare function text(t: string, opt?: TextCompOpt): TextComp;
//# sourceMappingURL=text.d.ts.map