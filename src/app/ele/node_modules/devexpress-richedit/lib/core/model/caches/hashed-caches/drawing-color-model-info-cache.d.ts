import { DrawingColorModelInfo } from '../../drawing/drawing-color-model-info';
import { HashBasedCache } from '../hash-based-cache';
export declare class DrawingColorModelInfoCache extends HashBasedCache<DrawingColorModelInfo> {
    static defaultItem: DrawingColorModelInfo;
    constructor();
    copyFrom(obj: DrawingColorModelInfoCache): void;
    clone(): DrawingColorModelInfoCache;
}
//# sourceMappingURL=drawing-color-model-info-cache.d.ts.map