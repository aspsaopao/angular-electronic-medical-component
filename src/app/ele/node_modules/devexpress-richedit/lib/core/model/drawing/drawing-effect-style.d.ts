import { ContainerEffect } from './container-effect';
import { Scene3DProperties } from './scene3d-properties';
import { Shape3DProperties } from './shape3d-properties';
export declare class DrawingEffectStyle {
    containerEffect: ContainerEffect;
    scene3DProperies: Scene3DProperties;
    shape3DProperties: Shape3DProperties;
    constructor(containerEffect?: ContainerEffect, scene3DProperies?: Scene3DProperties, shape3DProperties?: Shape3DProperties);
    get isDefault(): boolean;
    clone(): DrawingEffectStyle;
}
//# sourceMappingURL=drawing-effect-style.d.ts.map