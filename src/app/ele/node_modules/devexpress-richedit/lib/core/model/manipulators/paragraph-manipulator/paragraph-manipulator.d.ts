import { FixedInterval } from '@devexpress/utils/lib/intervals/fixed';
import { MaskedCharacterPropertiesBundle, MaskedParagraphPropertiesBundleFull } from '../../../rich-utils/properties-bundle';
import { Paragraph } from '../../paragraph/paragraph';
import { SubDocument } from '../../sub-document';
import { RunsBaseManipulator } from '../runs-base-manipulator';
import { InsertParagraphManipulatorParams } from './insert-paragraph-manipulator-params';
export declare class ParagraphManipulator extends RunsBaseManipulator {
    insertParagraphViaHistory(params: InsertParagraphManipulatorParams): FixedInterval;
    insertParagraphInner(params: InsertParagraphManipulatorParams): void;
    applyParagraphProperties(newParagraph: Paragraph, oldParagraph: Paragraph, copyPropertiesToOldParagraph: boolean, parPropsBundle: MaskedParagraphPropertiesBundleFull): void;
    static insertParagraphInEnd(subDocument: SubDocument, position: number, charPropsBundle: MaskedCharacterPropertiesBundle): boolean;
}
//# sourceMappingURL=paragraph-manipulator.d.ts.map