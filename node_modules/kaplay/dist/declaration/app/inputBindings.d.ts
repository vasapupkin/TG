import type { KAPLAYCtx, Key, KGamepadButton, MouseButton } from "../types";
/**
 * A button binding.
 *
 * @group Button Bindings
 */
export type ButtonBinding = {
    keyboard?: Key | Key[];
    keyboardCode?: string | string[];
    gamepad?: KGamepadButton | KGamepadButton[];
    mouse?: MouseButton | MouseButton[];
};
/**
 * A buttons definition for an action (jump, walk-left, run).
 *
 * @group Button Bindings
 */
export type ButtonsDef = Record<string, ButtonBinding>;
/**
 * A button binding device
 *
 * @group Button Bindings
 */
export type ButtonBindingDevice = "keyboard" | "gamepad" | "mouse";
export declare const getLastInputDeviceType: KAPLAYCtx["getLastInputDeviceType"];
export declare const parseButtonBindings: () => void;
//# sourceMappingURL=inputBindings.d.ts.map