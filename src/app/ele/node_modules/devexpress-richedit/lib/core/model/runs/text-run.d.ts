import { ICloneable, ISupportCopyFrom } from '@devexpress/utils/lib/types';
import { MaskedCharacterPropertiesBundle } from '../../rich-utils/properties-bundle';
import { Paragraph } from '../paragraph/paragraph';
import { SubDocument } from '../sub-document';
import { RunBase } from './run-base';
import { RunType } from './run-type';
export declare class TextRun extends RunBase implements ISupportCopyFrom<TextRun>, ICloneable<TextRun> {
    length: number;
    constructor(startOffset: number, length: number, paragraph: Paragraph, charPropsBundle: MaskedCharacterPropertiesBundle);
    getLength(): number;
    setLength(newLength: number): void;
    getType(): RunType;
    incLength(additionalLength: number): void;
    clone(): TextRun;
    cloneToNewSubDocument(subDocument: SubDocument): TextRun;
    copyFrom(obj: TextRun): void;
}
//# sourceMappingURL=text-run.d.ts.map