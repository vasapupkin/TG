import { Vec2 } from "../../math/math";
import type { Comp, EaseFunc, GameObj, LerpValue } from "../../types";
import type { KEventController } from "../../utils";
type TimeDirection = "forward" | "reverse" | "ping-pong";
type Interpolation = "none" | "linear" | "slerp" | "spline";
export interface AnimateOpt {
    /**
     * Duration of the animation in seconds
     */
    duration: number;
    /**
     * Loops, Default is undefined aka infinite
     */
    loops?: number;
    /**
     * Behavior when reaching the end of the animation. Default is forward.
     */
    direction?: TimeDirection;
    /**
     * Easing function. Default is linear time.
     */
    easing?: EaseFunc;
    /**
     * Interpolation function. Default is linear interpolation.
     */
    interpolation?: Interpolation;
    /**
     * Timestamps in percent for the given keys, if omitted, keys are equally spaced.
     */
    timing?: number[];
    /**
     * Easings for the given keys, if omitted, easing is used.
     */
    easings?: EaseFunc[];
}
export interface AnimateCompOpt {
    /**
     * Changes the angle so it follows the motion, requires the rotate component
     */
    followMotion?: boolean;
    /**
     * The animation is added to the base values of pos, angle, scale and opacity instead of replacing them
     */
    relative?: boolean;
}
export interface BaseValues {
    pos: Vec2;
    angle: number;
    scale: Vec2;
    opacity: number;
}
export interface AnimateComp extends Comp {
    /**
     * Animates a property on this object.
     * @param name Name of the property to animate.
     * @param keys Keys determining the value at a certain point in time.
     * @param opts Options.
     */
    animate<T extends LerpValue>(name: string, keys: T[], opts: AnimateOpt): void;
    /**
     * Removes the animation from the given property.
     * @param name Name of the property to remove the animation from.
     */
    unanimate(name: string): void;
    /**
     * Removes the animations from all properties
     */
    unanimateAll(): void;
    /**
     * Attaches an event handler which is called when all the animation channels have finished.
     * @param cb The event handler called when the animation finishes.
     */
    onAnimateFinished(cb: () => void): KEventController;
    /**
     * Attaches an event handler which is called when an animation channels has finished.
     * @param cb The event handler called when an animation channel finishes.
     */
    onAnimateChannelFinished(cb: (name: string) => void): KEventController;
    /**
     * Base values for relative animation
     */
    base: BaseValues;
    /**
     * Serializes the animation of this object to plain Javascript types
     */
    serializeAnimationChannels(): Record<string, AnimationChannel>;
    /**
     * Serializes the options of this object to plain Javascript types
     */
    serializeAnimationOptions(): {
        followMotion?: boolean;
        relative?: boolean;
    };
}
type AnimationChannelKeys = number[] | number[][];
type AnimationOptions = {
    duration: number;
    loops?: number;
    direction?: TimeDirection;
    easing?: string;
    interpolation?: Interpolation;
    timing?: number[];
    easings?: string[];
};
type AnimationChannel = {
    keys: AnimationChannelKeys;
} & AnimationOptions;
type Animation = {
    name: string;
    followMotion?: boolean;
    relative?: boolean;
    channels?: Record<string, AnimationChannel>;
    children?: Animation[];
};
export declare function animate(gopts?: AnimateCompOpt): AnimateComp;
/**
 * Serializes an animation to javascript objects for serialization to JSON.
 * @param obj The root object to serialize from.
 * @param name Optional name of the root object.
 * @returns A javascript object serialization of the animation.
 */
export declare function serializeAnimation(obj: GameObj<any>, name: string): any;
/**
 * Applies the animation to this object and its named children
 * @param obj The root object to deserialize to.
 * @param animation A javascript object serialization of the animation.
 */
export declare function applyAnimation(obj: GameObj<any>, animation: Animation): void;
export {};
//# sourceMappingURL=animate.d.ts.map