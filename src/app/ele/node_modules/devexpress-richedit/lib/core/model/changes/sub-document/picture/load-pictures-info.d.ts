import { CacheImageInfo } from '../../../caches/images';
import { SubDocumentChangeBase } from '../../change-base';
import { ModelChangeType } from '../../enums';
export declare class LoadPicturesInfoSubDocumentChange implements SubDocumentChangeBase {
    subDocumentId: number;
    data: CacheImageInfo;
    readonly type = ModelChangeType.LoadPicturesInfo;
    constructor(subDocumentId: number, data: CacheImageInfo);
}
//# sourceMappingURL=load-pictures-info.d.ts.map