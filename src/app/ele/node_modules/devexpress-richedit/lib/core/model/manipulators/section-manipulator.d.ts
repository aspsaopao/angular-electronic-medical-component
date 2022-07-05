import { MaskedCharacterPropertiesBundle, MaskedParagraphPropertiesBundleFull } from '../../rich-utils/properties-bundle';
import { SectionStartType } from '../section/enums';
import { SectionProperties } from '../section/section-properties';
import { SubDocumentPosition } from '../sub-document';
import { RunsBaseManipulator } from './runs-base-manipulator';
export declare class SectionManipulator extends RunsBaseManipulator {
    insertSectionAndSetStartType(position: number, startType: SectionStartType, charPropsBundle: MaskedCharacterPropertiesBundle): void;
    insertSection(subDocPos: SubDocumentPosition, charPropsBundle: MaskedCharacterPropertiesBundle, sectionProperties: SectionProperties, isInsertPropertiesToCurrentSection: boolean, parPropsBundle: MaskedParagraphPropertiesBundleFull, isInsertPropertiesAndStyleIndexToCurrentParagraph: boolean): void;
}
//# sourceMappingURL=section-manipulator.d.ts.map