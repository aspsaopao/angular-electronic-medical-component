import { CacheImageInfo, ImageCache } from '../../caches/images';
export declare class JSONCacheImageInfoConverter {
    static convertFromJSON(obj: any): CacheImageInfo;
    static convertToJSON(source: CacheImageInfo, sendBase64: boolean): any;
    static translateImageCorrespondence(obj: any, imageCorrespondence: Record<number, number>): any;
    static importImageCache(imageCache: ImageCache, imageCorrespondence: Record<number, number> | null, obj: any): void;
}
//# sourceMappingURL=image-cache-info-converter.d.ts.map