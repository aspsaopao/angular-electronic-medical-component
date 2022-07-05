import { MaskedCharacterPropertiesBundle, MaskedParagraphPropertiesBundleFull } from '../../../rich-utils/properties-bundle';
import { ModelManipulator } from '../../manipulators/model-manipulator';
import { SectionProperties } from '../../section/section-properties';
import { SubDocumentPosition } from '../../sub-document';
import { PositionBasedHistoryItem } from '../base/position-based-history-item';
export declare class InsertSectionHistoryItem extends PositionBasedHistoryItem {
    charPropsBundle: MaskedCharacterPropertiesBundle;
    parPropsBundle: MaskedParagraphPropertiesBundleFull;
    sectionProperties: SectionProperties;
    isInsertPropertiesToCurrentSection: boolean;
    isInsertPropertiesAndStyleIndexToCurrentParagraph: boolean;
    constructor(modelManipulator: ModelManipulator, subDocPos: SubDocumentPosition, charPropsBundle: MaskedCharacterPropertiesBundle, parPropsBundle: MaskedParagraphPropertiesBundleFull, sectionProperties: SectionProperties, isInsertPropertiesToCurrentSection: boolean, isInsertPropertiesAndStyleIndexToCurrentParagraph: boolean);
    redo(): void;
    undo(): void;
}
//# sourceMappingURL=insert-section-history-item.d.ts.map