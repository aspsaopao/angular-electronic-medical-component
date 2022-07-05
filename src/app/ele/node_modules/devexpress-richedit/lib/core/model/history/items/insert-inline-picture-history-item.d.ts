import { MaskedCharacterPropertiesBundle } from '../../../rich-utils/properties-bundle';
import { ModelManipulator } from '../../manipulators/model-manipulator';
import { InlinePictureInfo } from '../../manipulators/picture-manipulator/insert-picture-manipulator-params';
import { ImageLoadingOptions } from '../../manipulators/picture-manipulator/loader/image-loading-options';
import { SubDocumentPosition } from '../../sub-document';
import { PositionBasedHistoryItem } from '../base/position-based-history-item';
export declare class InsertInlinePictureHistoryItem extends PositionBasedHistoryItem {
    charPropsBundle: MaskedCharacterPropertiesBundle;
    picInfo: InlinePictureInfo;
    options?: ImageLoadingOptions;
    constructor(modelManipulator: ModelManipulator, subDocPos: SubDocumentPosition, charPropsBundle: MaskedCharacterPropertiesBundle, picInfo: InlinePictureInfo, options: ImageLoadingOptions);
    redo(): void;
    undo(): void;
}
//# sourceMappingURL=insert-inline-picture-history-item.d.ts.map