import type { KEventController } from "../utils";
/**
 * The name of a scene.
 */
export type SceneName = string;
export type SceneDef = (...args: any) => void;
export declare function scene(id: SceneName, def: SceneDef): void;
export declare function go(name: SceneName, ...args: unknown[]): void;
export declare function onSceneLeave(action: (newScene?: string) => void): KEventController;
export declare function getSceneName(): string | null;
//# sourceMappingURL=scenes.d.ts.map