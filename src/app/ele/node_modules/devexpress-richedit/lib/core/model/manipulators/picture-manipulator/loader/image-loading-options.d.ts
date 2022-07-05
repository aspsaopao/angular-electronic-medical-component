import { Size } from '@devexpress/utils/lib/geometry/size';
import { FixedInterval } from '@devexpress/utils/lib/intervals/fixed';
import { CacheImageInfo } from '../../../caches/images';
export declare type ImageLoadingOptionsCallback = (picInterval: FixedInterval, cacheInfo: CacheImageInfo) => void;
export declare class ImageLoadingOptions {
    imageLoadedEvent: ImageLoadingOptionsCallback[];
    actualSize?: Size;
    calculateActualSize: boolean;
    constructor(calculateActualSize?: boolean, actualSize?: Size, callback?: ImageLoadingOptionsCallback);
    static initByActualSize(actualSize?: Size, callback?: ImageLoadingOptionsCallback): ImageLoadingOptions;
}
//# sourceMappingURL=image-loading-options.d.ts.map