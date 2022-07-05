import { Scene3DRotationInfo } from '../../drawing/scene3d-rotation-info';
import { HashBasedCache } from '../hash-based-cache';
export declare class Scene3DRotationInfoCache extends HashBasedCache<Scene3DRotationInfo> {
    static defaultItem: Scene3DRotationInfo;
    copyFrom(obj: Scene3DRotationInfoCache): void;
    clone(): Scene3DRotationInfoCache;
}
//# sourceMappingURL=scene3d-rotation-info-cache.d.ts.map