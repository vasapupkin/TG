import type { GfxCtx } from "../gfx/gfx";
import TexPacker from "../gfx/texPacker";
import type { FontData } from "./font";
import type { SoundData } from "./sound";
import type { SpriteData } from "./sprite";
/**
 * An asset is a resource that is loaded asynchronously.
 */
export declare class Asset<D> {
    loaded: boolean;
    data: D | null;
    error: Error | null;
    private onLoadEvents;
    private onErrorEvents;
    private onFinishEvents;
    constructor(loader: Promise<D>);
    static loaded<D>(data: D): Asset<D>;
    onLoad(action: (data: D) => void): this;
    onError(action: (err: Error) => void): this;
    onFinish(action: () => void): this;
    then(action: (data: D) => void): Asset<D>;
    catch(action: (err: Error) => void): Asset<D>;
    finally(action: () => void): Asset<D>;
}
export declare class AssetBucket<D> {
    assets: Map<string, Asset<D>>;
    lastUID: number;
    add(name: string | null, loader: Promise<D>): Asset<D>;
    addLoaded(name: string | null, data: D): Asset<D>;
    get(handle: string): Asset<D> | undefined;
    progress(): number;
}
export declare function fetchURL(url: string): Promise<Response>;
export declare function fetchJSON(path: string): Promise<any>;
export declare function fetchText(path: string): Promise<string>;
export declare function fetchArrayBuffer(path: string): Promise<ArrayBuffer>;
export declare function loadRoot(path?: string): string;
export declare function loadJSON(name: string, url: string): Asset<any>;
export declare function loadImg(src: string): Promise<HTMLImageElement>;
export declare function loadProgress(): number;
export declare function getAsset(name: string): Asset<any> | null;
export declare function load<T>(prom: Promise<T>): Asset<T>;
export type AssetsCtx = ReturnType<typeof initAssets>;
export declare const initAssets: (ggl: GfxCtx) => {
    urlPrefix: string;
    sprites: AssetBucket<SpriteData>;
    fonts: AssetBucket<FontData>;
    bitmapFonts: AssetBucket<import("./bitmapFont").GfxFont>;
    sounds: AssetBucket<SoundData>;
    shaders: AssetBucket<import("./shader").Shader>;
    custom: AssetBucket<any>;
    music: Record<string, string>;
    packer: TexPacker;
    loaded: boolean;
};
//# sourceMappingURL=asset.d.ts.map