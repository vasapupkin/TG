import { type Color } from "../math/color";
import { type Mat4, type Vec2, type Vec2Args } from "../math/math";
export declare function camPos(...pos: Vec2Args): Vec2;
export declare function camScale(...scale: Vec2Args): Vec2;
export declare function camRot(angle: number): number;
export declare function camFlash(flashColor?: Color, fadeOutTime?: number): import("..").TweenController;
export declare function camTransform(): Mat4;
export declare function shake(intensity?: number): void;
export declare function toScreen(p: Vec2): Vec2;
export declare function toWorld(p: Vec2): Vec2;
//# sourceMappingURL=camera.d.ts.map