import { type Asset } from "./asset";
import { type LoadSpriteOpt, type LoadSpriteSrc, SpriteData } from "./sprite";
export type SpriteAtlasData = Record<string, SpriteAtlasEntry>;
/**
 * A sprite in a sprite atlas.
 */
export type SpriteAtlasEntry = LoadSpriteOpt & {
    /**
     * X position of the top left corner.
     */
    x: number;
    /**
     * Y position of the top left corner.
     */
    y: number;
    /**
     * Sprite area width.
     */
    width: number;
    /**
     * Sprite area height.
     */
    height: number;
};
export declare function loadSpriteAtlas(src: LoadSpriteSrc, data: SpriteAtlasData | string): Asset<Record<string, SpriteData>>;
//# sourceMappingURL=spriteAtlas.d.ts.map