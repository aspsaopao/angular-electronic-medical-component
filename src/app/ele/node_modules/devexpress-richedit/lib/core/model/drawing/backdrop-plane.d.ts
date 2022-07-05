import { Scene3DVector } from './scene3d-vector';
export declare class BackdropPlane {
    normalVector: Scene3DVector;
    upVector: Scene3DVector;
    anchorPoint: Scene3DVector;
    constructor(normalVector?: Scene3DVector, upVector?: Scene3DVector, anchorPoint?: Scene3DVector);
    get isDefault(): boolean;
    clone(): BackdropPlane;
    equals(obj: BackdropPlane): boolean;
    resetToStyle(): void;
}
//# sourceMappingURL=backdrop-plane.d.ts.map