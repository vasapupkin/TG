import { SoundData } from "../assets";
export type AudioCtx = ReturnType<typeof initAudio>;
export declare const initAudio: () => {
    ctx: AudioContext;
    masterNode: GainNode;
    burpSnd: SoundData;
};
//# sourceMappingURL=audio.d.ts.map