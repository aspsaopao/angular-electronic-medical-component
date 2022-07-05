import { NonVisualDrawingObjectInfo } from '../../../manipulators/picture-manipulator/non-visual-drawing-object-info';
import { AnchorInfo } from '../../../floating-objects/anchor-info';
import { ContentInsertedSubDocumentChange } from '../../change-base';
import { ModelChangeType } from '../../enums';
export declare class AnchoredTextBoxInsertedSubDocumentChange extends ContentInsertedSubDocumentChange {
    objectId: number;
    innerSubDocId: number;
    anchorInfo: AnchorInfo;
    containerProperties: NonVisualDrawingObjectInfo;
    readonly type = ModelChangeType.AnchoredTextBoxInserted;
    constructor(subDocumentId: number, objectId: number, innerSubDocId: number, position: number, anchorInfo: AnchorInfo, containerProperties: NonVisualDrawingObjectInfo);
}
//# sourceMappingURL=anchored-text-box-inserted.d.ts.map