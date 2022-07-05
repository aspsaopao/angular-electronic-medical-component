import { BackdropPlane } from './backdrop-plane';
import { Scene3DPropertiesInfo } from './scene3d-properties-info';
import { Scene3DRotationInfo } from './scene3d-rotation-info';
export declare class Scene3DProperties {
    backdropPlane: BackdropPlane;
    info: Scene3DPropertiesInfo;
    cameraRotationInfo: Scene3DRotationInfo;
    lightRigRotationInfo: Scene3DRotationInfo;
    constructor();
    get isDefault(): boolean;
    clone(): Scene3DProperties;
}
//# sourceMappingURL=scene3d-properties.d.ts.map