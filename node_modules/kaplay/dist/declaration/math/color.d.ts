export type RGBValue = [number, number, number];
export type RGBAValue = [number, number, number, number];
/**
 * 0-255 RGBA color.
 *
 * @group Math
 */
export declare class Color {
    /** Red (0-255. */
    r: number;
    /** Green (0-255). */
    g: number;
    /** Blue (0-255). */
    b: number;
    constructor(r: number, g: number, b: number);
    static fromArray(arr: number[]): Color;
    /**
     * Create color from hex string or literal.
     *
     * @example
     * ```js
     * Color.fromHex(0xfcef8d)
     * Color.fromHex("#5ba675")
     * Color.fromHex("d46eb3")
     * ```
     *
     * @since v3000.0
     */
    static fromHex(hex: string | number): Color;
    static fromHSL(h: number, s: number, l: number): Color;
    static RED: Color;
    static GREEN: Color;
    static BLUE: Color;
    static YELLOW: Color;
    static MAGENTA: Color;
    static CYAN: Color;
    static WHITE: Color;
    static BLACK: Color;
    clone(): Color;
    /** Lighten the color (adds RGB by n). */
    lighten(a: number): Color;
    /** Darkens the color (subtracts RGB by n). */
    darken(a: number): Color;
    invert(): Color;
    mult(other: Color): Color;
    /**
     * Linear interpolate to a destination color.
     *
     * @since v3000.0
     */
    lerp(dest: Color, t: number): Color;
    /**
     * Convert color into HSL format.
     *
     * @since v3001.0
     */
    toHSL(): [number, number, number];
    eq(other: Color): boolean;
    toString(): string;
    /**
     * Return the hex string of color.
     *
     * @since v3000.0
     */
    toHex(): string;
    /**
     * Return the color converted to an array.
     *
     * @since v3001.0
     */
    toArray(): Array<number>;
}
export type ColorArgs = [Color]
/**
 * rgb(new Color(255, 255, 255), 1)
 *
 * This is only used to parse directly the color of background. This
 * syntax shouldn't be used to set opacity. Use `opacity()` comp instead.
 */
 | [Color, number] | RGBValue
/**
 * rgb(255, 255, 255, 1)
 *
 * This is only used to parse directly the color of background. This
 * syntax shouldn't be used to set opacity. Use `opacity()` comp instead.
 */
 | RGBAValue | [string] | [number[]] | [];
export declare function rgb(...args: ColorArgs): Color;
export declare const hsl2rgb: (h: number, s: number, l: number) => Color;
//# sourceMappingURL=color.d.ts.map