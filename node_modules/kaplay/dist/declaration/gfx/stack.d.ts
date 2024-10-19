import { type Mat4, Vec2, type Vec2Args } from "../math/math";
export declare function pushTranslate(...args: Vec2Args | [undefined]): void;
export declare function pushTransform(): void;
export declare function pushMatrix(m: Mat4): void;
export declare function pushScale(...args: Vec2Args | [undefined] | [undefined, undefined]): void;
export declare function pushRotate(a: number | undefined): void;
export declare function popTransform(): void;
export declare function flush(): void;
export declare function width(): number;
export declare function height(): number;
export declare function getViewportScale(): number;
export declare function contentToView(pt: Vec2): Vec2;
export declare function windowToContent(pt: Vec2): Vec2;
export declare function mousePos(): Vec2;
export declare function center(): Vec2;
//# sourceMappingURL=stack.d.ts.map