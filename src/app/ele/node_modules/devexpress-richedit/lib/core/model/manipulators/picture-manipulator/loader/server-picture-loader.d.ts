import { CacheImageInfo } from '../../../caches/images';
import { PictureLoader } from './picture-loader';
export declare class ServerPictureLoader extends PictureLoader {
    loadInner(data: CacheImageInfo): CacheImageInfo;
    private notifyLoad;
    applyRequest(jsonObjs: any): void;
    private resetCacheImageInfoToDefault;
}
//# sourceMappingURL=server-picture-loader.d.ts.map