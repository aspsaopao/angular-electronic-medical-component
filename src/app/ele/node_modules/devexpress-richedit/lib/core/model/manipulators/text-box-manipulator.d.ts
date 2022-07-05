import { MaskedCharacterPropertiesBundle } from '../../rich-utils/properties-bundle';
import { AnchorInfo } from '../floating-objects/anchor-info';
import { AnchorTextBoxSize } from '../floating-objects/sizes';
import { TextBoxProperties } from '../floating-objects/text-box-properties';
import { AnchoredTextBoxRun } from '../runs/anchored-text-box-run';
import { Shape } from '../shapes/shape';
import { SubDocument, SubDocumentPosition } from '../sub-document';
import { NonVisualDrawingObjectInfo } from './picture-manipulator/non-visual-drawing-object-info';
import { RunsBaseManipulator } from './runs-base-manipulator';
export declare class BaseTextBoxInfo {
    innerSubDocument: SubDocument;
    size: AnchorTextBoxSize;
    shape: Shape;
    anchorInfo: AnchorInfo;
    textBoxProperties: TextBoxProperties;
    containerProperties: NonVisualDrawingObjectInfo;
    constructor(innerSubDocument: SubDocument, size: AnchorTextBoxSize, shape: Shape, anchorInfo: AnchorInfo, textBoxProperties: TextBoxProperties, containerProperties: NonVisualDrawingObjectInfo);
}
export declare class TextBoxManipulator extends RunsBaseManipulator {
    insertAnchoredTextBoxViaHistoty(subDocPos: SubDocumentPosition, charPropsBundle: MaskedCharacterPropertiesBundle, textBoxInfo: BaseTextBoxInfo): void;
    insertAnchoredTextBox(subDocPos: SubDocumentPosition, charPropsBundle: MaskedCharacterPropertiesBundle, textBoxInfo: BaseTextBoxInfo): AnchoredTextBoxRun;
}
//# sourceMappingURL=text-box-manipulator.d.ts.map