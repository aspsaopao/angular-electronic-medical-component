import { ICloneable, ISupportCopyFrom } from '@devexpress/utils/lib/types';
import { MaskedCharacterPropertiesBundle } from '../../rich-utils/properties-bundle';
import { InlineTextBoxSize } from '../floating-objects/sizes';
import { TextBoxProperties } from '../floating-objects/text-box-properties';
import { NonVisualDrawingObjectInfo } from '../manipulators/picture-manipulator/non-visual-drawing-object-info';
import { Paragraph } from '../paragraph/paragraph';
import { Shape } from '../shapes/shape';
import { SubDocument } from '../sub-document';
import { TextBoxRun } from './run-base';
import { RunType } from './run-type';
export declare class InlineTextBoxRun extends TextBoxRun implements ISupportCopyFrom<InlineTextBoxRun>, ICloneable<InlineTextBoxRun> {
    size: InlineTextBoxSize;
    constructor(startOffset: number, paragraph: Paragraph, charPropsBundle: MaskedCharacterPropertiesBundle, shape: Shape, subDocId: number, size: InlineTextBoxSize, textBoxProperties: TextBoxProperties, containerProperties?: NonVisualDrawingObjectInfo);
    getType(): RunType;
    clone(): InlineTextBoxRun;
    cloneToNewSubDocument(subDocument: SubDocument): InlineTextBoxRun;
    copyFrom(obj: InlineTextBoxRun): void;
}
//# sourceMappingURL=inline-text-box-run.d.ts.map