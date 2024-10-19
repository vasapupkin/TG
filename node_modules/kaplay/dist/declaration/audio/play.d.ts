import { Asset, type SoundData } from "../assets";
import type { MusicData } from "../types";
import { type KEventController } from "../utils";
/**
 * Audio play configurations.
 */
export interface AudioPlayOpt {
    /**
     * If audio should start out paused.
     *
     * @since v3000.0
     */
    paused?: boolean;
    /**
     * If audio should be played again from start when its ended.
     */
    loop?: boolean;
    /**
     * Volume of audio. 1.0 means full volume, 0.5 means half volume.
     */
    volume?: number;
    /**
     * Playback speed. 1.0 means normal playback speed, 2.0 means twice as fast.
     */
    speed?: number;
    /**
     * Detune the sound. Every 100 means a semitone.
     *
     * @example
     * ```js
     * // play a random note in the octave
     * play("noteC", {
     *     detune: randi(0, 12) * 100,
     * })
     * ```
     */
    detune?: number;
    /**
     * The start time, in seconds.
     */
    seek?: number;
    /**
     * The stereo pan of the sound.
     * -1.0 means fully from the left channel, 0.0 means centered, 1.0 means fully right.
     * Defaults to 0.0.
     */
    pan?: number;
}
export interface AudioPlay {
    /**
     * Start playing audio.
     *
     * @since v3000.0
     */
    play(time?: number): void;
    /**
     * Seek time.
     *
     * @since v3000.0
     */
    seek(time: number): void;
    /**
     * Stop the sound.
     *
     * @since v3001.0
     */
    stop(): void;
    /**
     * If the sound is paused.
     *
     * @since v2000.1
     */
    paused: boolean;
    /**
     * Playback speed of the sound. 1.0 means normal playback speed, 2.0 means twice as fast.
     */
    speed: number;
    /**
     * Detune the sound. Every 100 means a semitone.
     *
     * @example
     * ```js
     * // tune down a semitone
     * music.detune = -100
     *
     * // tune up an octave
     * music.detune = 1200
     * ```
     */
    detune: number;
    /**
     * Volume of the sound. 1.0 means full volume, 0.5 means half volume.
     */
    volume: number;
    /**
     * The stereo pan of the sound.
     * -1.0 means fully from the left channel, 0.0 means centered, 1.0 means fully right.
     * Defaults to 0.0.
     */
    pan?: number;
    /**
     * If the audio should start again when it ends.
     */
    loop: boolean;
    /**
     * The current playing time (not accurate if speed is changed).
     */
    time(): number;
    /**
     * The total duration.
     */
    duration(): number;
    /**
     * Register an event that runs when audio ends.
     *
     * @since v3000.0
     */
    onEnd(action: () => void): KEventController;
    then(action: () => void): KEventController;
}
export declare function play(src: string | SoundData | Asset<SoundData> | MusicData | Asset<MusicData>, opt?: AudioPlayOpt): AudioPlay;
//# sourceMappingURL=play.d.ts.map