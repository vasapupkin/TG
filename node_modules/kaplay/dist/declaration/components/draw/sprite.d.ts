import type { Asset, SpriteAnim, SpriteData } from "../../assets";
import { Quad, Rect } from "../../math";
import type { Comp, SpriteAnimPlayOpt, SpriteCurAnim } from "../../types";
import { KEventController } from "../../utils/";
/**
 * The {@link sprite `sprite()`} component.
 *
 * @group Component Types
 */
export interface SpriteComp extends Comp {
    draw: Comp["draw"];
    /**
     * Name of the sprite.
     */
    sprite: string;
    /**
     * Width for sprite.
     */
    width: number;
    /**
     * Height for sprite.
     */
    height: number;
    /**
     * Current frame in the entire spritesheet.
     */
    frame: number;
    /**
     * Current frame in relative to the animation that is currently playing.
     */
    animFrame: number;
    /**
     * The rectangular area of the texture to render.
     */
    quad: Quad;
    /**
     * Play a piece of anim.
     */
    play(anim: string, options?: SpriteAnimPlayOpt): void;
    /**
     * Stop current anim.
     */
    stop(): void;
    /**
     * Get total number of frames.
     */
    numFrames(): number;
    /**
     * Get the current animation data.
     *
     * @since v3001.0
     */
    getCurAnim(): SpriteCurAnim | null;
    /**
     * Get current anim name.
     *
     * @deprecated Use `getCurAnim().name` instead.
     */
    curAnim(): string | undefined;
    /**
     * Check if object's sprite has an animation.
     */
    hasAnim(name: string): boolean;
    /**
     * Get an animation.
     */
    getAnim(name: string): SpriteAnim | null;
    /**
     * Speed multiplier for all animations (for the actual fps for an anim use .play("anim", { speed: 10 })).
     */
    animSpeed: number;
    /**
     * Flip texture horizontally.
     */
    flipX: boolean;
    /**
     * Flip texture vertically.
     */
    flipY: boolean;
    /**
     * Register an event that runs when an animation is played.
     */
    onAnimStart(action: (anim: string) => void): KEventController;
    /**
     * Register an event that runs when an animation is ended.
     */
    onAnimEnd(action: (anim: string) => void): KEventController;
    /**
     * @since v3000.0
     */
    renderArea(): Rect;
}
/**
 * Options for the {@link sprite `sprite()`} component.
 *
 * @group Component Types
 */
export interface SpriteCompOpt {
    /**
     * If the sprite is loaded with multiple frames, or sliced, use the frame option to specify which frame to draw.
     */
    frame?: number;
    /**
     * If provided width and height, don't stretch but instead render tiled.
     */
    tiled?: boolean;
    /**
     * Stretch sprite to a certain width.
     */
    width?: number;
    /**
     * Stretch sprite to a certain height.
     */
    height?: number;
    /**
     * Play an animation on start.
     */
    anim?: string;
    /**
     * Speed multiplier for all animations (for the actual fps for an anim use .play("anim", { speed: 10 })).
     */
    animSpeed?: number;
    /**
     * Flip texture horizontally.
     */
    flipX?: boolean;
    /**
     * Flip texture vertically.
     */
    flipY?: boolean;
    /**
     * The rectangular sub-area of the texture to render, default to full texture `quad(0, 0, 1, 1)`.
     */
    quad?: Quad;
    /**
     * If fill the sprite (useful if you only want to render outline with outline() component).
     */
    fill?: boolean;
}
export declare function sprite(src: string | SpriteData | Asset<SpriteData>, opt?: SpriteCompOpt): SpriteComp;
//# sourceMappingURL=sprite.d.ts.map