import { Scene3DPropertiesInfo } from '../../drawing/scene3d-properties-info';
import { HashBasedCache } from '../hash-based-cache';
export declare class Scene3DPropertiesInfoCache extends HashBasedCache<Scene3DPropertiesInfo> {
    static defaultItem: Scene3DPropertiesInfo;
    copyFrom(obj: Scene3DPropertiesInfoCache): void;
    clone(): Scene3DPropertiesInfoCache;
}
//# sourceMappingURL=scene3d-properties-info-cache.d.ts.map