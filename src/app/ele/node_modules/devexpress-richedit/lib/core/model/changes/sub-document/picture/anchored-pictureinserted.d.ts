import { NonVisualDrawingObjectInfo } from '../../../manipulators/picture-manipulator/non-visual-drawing-object-info';
import { AnchorInfo } from '../../../floating-objects/anchor-info';
import { PictureSize } from '../../../floating-objects/sizes';
import { ContentInsertedSubDocumentChange } from '../../change-base';
import { ModelChangeType } from '../../enums';
export declare class AnchoredPictureInsertedSubDocumentChange extends ContentInsertedSubDocumentChange {
    objectId: number;
    id: number;
    size: PictureSize;
    anchorInfo: AnchorInfo;
    containerProperties: NonVisualDrawingObjectInfo;
    readonly type = ModelChangeType.AnchoredPictureInserted;
    constructor(subDocumentId: number, objectId: number, position: number, id: number, size: PictureSize, anchorInfo: AnchorInfo, containerProperties: NonVisualDrawingObjectInfo);
}
//# sourceMappingURL=anchored-pictureinserted.d.ts.map