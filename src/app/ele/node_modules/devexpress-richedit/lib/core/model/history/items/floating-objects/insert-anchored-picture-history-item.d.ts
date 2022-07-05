import { MaskedCharacterPropertiesBundle } from '../../../../rich-utils/properties-bundle';
import { ModelManipulator } from '../../../manipulators/model-manipulator';
import { AnchorPictureInfo } from '../../../manipulators/picture-manipulator/insert-picture-manipulator-params';
import { ImageLoadingOptions } from '../../../manipulators/picture-manipulator/loader/image-loading-options';
import { BaseTextBoxInfo } from '../../../manipulators/text-box-manipulator';
import { SubDocumentPosition } from '../../../sub-document';
import { PositionBasedHistoryItem } from '../../base/position-based-history-item';
export declare class InsertAnchoredPictureHistoryItem extends PositionBasedHistoryItem {
    charPropsBundle: MaskedCharacterPropertiesBundle;
    picInfo: AnchorPictureInfo;
    options?: ImageLoadingOptions;
    constructor(modelManipulator: ModelManipulator, subDocPos: SubDocumentPosition, charPropsBundle: MaskedCharacterPropertiesBundle, picInfo: AnchorPictureInfo, options: ImageLoadingOptions);
    redo(): void;
    undo(): void;
}
export declare class InsertAnchoredTextBoxHistoryItem extends PositionBasedHistoryItem {
    charPropsBundle: MaskedCharacterPropertiesBundle;
    textBoxInfo: BaseTextBoxInfo;
    constructor(modelManipulator: ModelManipulator, subDocPos: SubDocumentPosition, charPropsBundle: MaskedCharacterPropertiesBundle, textBoxInfo: BaseTextBoxInfo);
    redo(): void;
    undo(): void;
}
//# sourceMappingURL=insert-anchored-picture-history-item.d.ts.map