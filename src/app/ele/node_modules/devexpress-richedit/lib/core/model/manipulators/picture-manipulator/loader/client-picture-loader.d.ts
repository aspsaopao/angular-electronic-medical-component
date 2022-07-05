import { CacheImageInfo } from '../../../caches/images';
import { PictureLoader } from './picture-loader';
export declare class ClientPictureLoader extends PictureLoader {
    loadInner(data: CacheImageInfo): CacheImageInfo;
    addLoadListener(cacheInfo: CacheImageInfo, callback: () => void): void;
    applyRequest(_jsonObj: any): void;
}
//# sourceMappingURL=client-picture-loader.d.ts.map