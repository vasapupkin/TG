import { Asset } from "./asset";
export declare class SoundData {
    buf: AudioBuffer;
    constructor(buf: AudioBuffer);
    static fromArrayBuffer(buf: ArrayBuffer): Promise<SoundData>;
    static fromURL(url: string): Promise<SoundData>;
}
export declare function resolveSound(src: string | SoundData | Asset<SoundData>): Asset<SoundData> | null;
export declare function getSound(name: string): Asset<SoundData> | null;
export declare function loadSound(name: string | null, src: string | ArrayBuffer): Asset<SoundData>;
export declare function loadMusic(name: string | null, url: string): string;
//# sourceMappingURL=sound.d.ts.map