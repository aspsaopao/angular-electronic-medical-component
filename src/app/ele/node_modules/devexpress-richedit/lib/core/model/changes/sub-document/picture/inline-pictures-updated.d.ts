import { UpdatedImageInfo } from '../../../manipulators/picture-manipulator/loader/updated-image-info';
import { SubDocumentChangeBase } from '../../change-base';
import { ModelChangeType } from '../../enums';
export declare class InlinePicturesUpdatedSubDocumentChange implements SubDocumentChangeBase {
    subDocumentId: number;
    updatedImageInfo: UpdatedImageInfo;
    readonly type = ModelChangeType.InlinePicturesUpdated;
    constructor(subDocumentId: number, updatedImageInfo: UpdatedImageInfo);
}
//# sourceMappingURL=inline-pictures-updated.d.ts.map