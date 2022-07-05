import { ICloneable, ISupportCopyFrom } from '@devexpress/utils/lib/types';
import { MaskedCharacterPropertiesBundle } from '../../rich-utils/properties-bundle';
import { AnchorInfo } from '../floating-objects/anchor-info';
import { AnchorTextBoxSize } from '../floating-objects/sizes';
import { TextBoxProperties } from '../floating-objects/text-box-properties';
import { NonVisualDrawingObjectInfo } from '../manipulators/picture-manipulator/non-visual-drawing-object-info';
import { Paragraph } from '../paragraph/paragraph';
import { Shape } from '../shapes/shape';
import { SubDocument } from '../sub-document';
import { TextBoxRun } from './run-base';
import { RunType } from './run-type';
export declare class AnchoredTextBoxRun extends TextBoxRun implements ISupportCopyFrom<AnchoredTextBoxRun>, ICloneable<AnchoredTextBoxRun> {
    size: AnchorTextBoxSize;
    anchorInfo: AnchorInfo;
    anchoredObjectID: number;
    constructor(startOffset: number, paragraph: Paragraph, charPropsBundle: MaskedCharacterPropertiesBundle, shape: Shape, subDocId: number, size: AnchorTextBoxSize, anchorInfo: AnchorInfo, objectId: number, textBoxProperties: TextBoxProperties, containerProperties?: NonVisualDrawingObjectInfo);
    getType(): RunType;
    clone(): AnchoredTextBoxRun;
    cloneToNewSubDocument(subDocument: SubDocument): AnchoredTextBoxRun;
    copyFrom(obj: AnchoredTextBoxRun): void;
}
//# sourceMappingURL=anchored-text-box-run.d.ts.map