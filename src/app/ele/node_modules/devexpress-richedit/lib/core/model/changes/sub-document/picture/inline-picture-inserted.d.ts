import { NonVisualDrawingObjectInfo } from '../../../manipulators/picture-manipulator/non-visual-drawing-object-info';
import { InlinePictureInfo } from '../../../manipulators/picture-manipulator/insert-picture-manipulator-params';
import { ContentInsertedSubDocumentChange } from '../../change-base';
import { ModelChangeType } from '../../enums';
export declare class InlinePictureInsertedSubDocumentChange extends ContentInsertedSubDocumentChange {
    picInfo: InlinePictureInfo;
    containerProperties: NonVisualDrawingObjectInfo;
    readonly type = ModelChangeType.InlinePictureInserted;
    constructor(subDocumentId: number, position: number, picInfo: InlinePictureInfo, containerProperties: NonVisualDrawingObjectInfo);
}
//# sourceMappingURL=inline-picture-inserted.d.ts.map