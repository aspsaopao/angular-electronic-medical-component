import { ColorModelInfo } from '../../color/color-model-info';
import { HashBasedCache } from '../hash-based-cache';
export declare class ColorModelInfoCache extends HashBasedCache<ColorModelInfo> {
    static defaultItem: ColorModelInfo;
    constructor();
    copyFrom(obj: ColorModelInfoCache): void;
    clone(): ColorModelInfoCache;
}
//# sourceMappingURL=color-model-info-cache.d.ts.map