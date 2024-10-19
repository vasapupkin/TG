import { type Asset } from "./asset";
import { type LoadSpriteSrc, SpriteData } from "./sprite";
export type AsepriteData = {
    frames: Array<{
        frame: {
            x: number;
            y: number;
            w: number;
            h: number;
        };
    }>;
    meta: {
        size: {
            w: number;
            h: number;
        };
        frameTags: Array<{
            name: string;
            from: number;
            to: number;
            direction: "forward" | "reverse" | "pingpong";
        }>;
    };
};
export declare function loadAseprite(name: string | null, imgSrc: LoadSpriteSrc, jsonSrc: string | AsepriteData): Asset<SpriteData>;
//# sourceMappingURL=aseprite.d.ts.map