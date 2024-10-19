import { Asset } from "../assets";
import type { DrawSpriteOpt } from "../gfx";
import type { Texture } from "../gfx/gfx";
import { Quad } from "../math/math";
import { type ImageSource } from "../types";
/**
 * Frame-based animation configuration.
 */
export type SpriteAnim = number | {
    /**
     * The starting frame.
     */
    from: number;
    /**
     * The end frame.
     */
    to: number;
    /**
     * If this anim should be played in loop.
     */
    loop?: boolean;
    /**
     * When looping should it move back instead of go to start frame again.
     */
    pingpong?: boolean;
    /**
     * This anim's speed in frames per second.
     */
    speed?: number;
};
/**
 * A dict of name <-> animation.
 */
export type SpriteAnims = Record<string, SpriteAnim>;
/**
 * Sprite loading configuration.
 */
export interface LoadSpriteOpt {
    /**
     * If the defined area contains multiple sprites, how many frames are in the area hozizontally.
     */
    sliceX?: number;
    /**
     * If the defined area contains multiple sprites, how many frames are in the area vertically.
     */
    sliceY?: number;
    /**
     * 9 slice sprite for proportional scaling.
     *
     * @since v3000.0
     */
    slice9?: NineSlice;
    /**
     * Individual frames.
     *
     * @since v3000.0
     */
    frames?: Quad[];
    /**
     * Animation configuration.
     */
    anims?: SpriteAnims;
}
export type NineSlice = {
    /**
     * The width of the 9-slice's left column.
     */
    left: number;
    /**
     * The width of the 9-slice's right column.
     */
    right: number;
    /**
     * The height of the 9-slice's top row.
     */
    top: number;
    /**
     * The height of the 9-slice's bottom row.
     */
    bottom: number;
};
export type LoadSpriteSrc = string | ImageSource;
export declare class SpriteData {
    tex: Texture;
    frames: Quad[];
    anims: SpriteAnims;
    slice9: NineSlice | null;
    constructor(tex: Texture, frames?: Quad[], anims?: SpriteAnims, slice9?: NineSlice | null);
    /**
     * @since v3001.0
     */
    get width(): number;
    get height(): number;
    static from(src: LoadSpriteSrc, opt?: LoadSpriteOpt): Promise<SpriteData>;
    static fromImage(data: ImageSource, opt?: LoadSpriteOpt): SpriteData;
    static fromURL(url: string, opt?: LoadSpriteOpt): Promise<SpriteData>;
}
export declare function resolveSprite(src: DrawSpriteOpt["sprite"]): Asset<SpriteData> | null;
export declare function getSprite(name: string): Asset<SpriteData> | null;
export declare function loadSprite(name: string | null, src: LoadSpriteSrc | LoadSpriteSrc[], opt?: LoadSpriteOpt): Asset<SpriteData>;
export declare function slice(x?: number, y?: number, dx?: number, dy?: number, w?: number, h?: number): Quad[];
export declare function createSpriteSheet(images: ImageSource[], opt?: LoadSpriteOpt): SpriteData;
export declare function loadBean(name?: string): Asset<SpriteData>;
//# sourceMappingURL=sprite.d.ts.map