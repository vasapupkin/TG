import { type Asset } from "./asset";
import { type SpriteAnims, type SpriteData } from "./sprite";
export interface PeditFile {
    width: number;
    height: number;
    frames: string[];
    anims: SpriteAnims;
}
export declare function loadPedit(name: string | null, src: string | PeditFile): Asset<SpriteData>;
//# sourceMappingURL=pedit.d.ts.map