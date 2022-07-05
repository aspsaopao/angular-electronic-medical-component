import { MaskedParagraphProperties, ParagraphAlignment, ParagraphFirstLineIndent, ParagraphLineSpacingType } from '../paragraph/paragraph-properties';
import { ParagraphStyle, TabProperties } from '../paragraph/paragraph-style';
import { ShadingInfo } from '../shadings/shading-info';
import { SubDocument } from '../sub-document';
import { BaseManipulator } from './base-manipulator';
import { IIntervalPropertyManipulator, IIntervalPropertyWithUseValueManipulator } from './i-properties-manipulator';
import { ModelManipulator } from './model-manipulator';
export declare class ParagraphPropertiesManipulator extends BaseManipulator {
    align: IIntervalPropertyWithUseValueManipulator<ParagraphAlignment>;
    contextualSpacing: IIntervalPropertyWithUseValueManipulator<boolean>;
    rightToLeft: IIntervalPropertyWithUseValueManipulator<boolean>;
    afterAutoSpacing: IIntervalPropertyWithUseValueManipulator<boolean>;
    shadingInfo: IIntervalPropertyWithUseValueManipulator<ShadingInfo>;
    beforeAutoSpacing: IIntervalPropertyWithUseValueManipulator<boolean>;
    firstLineIndent: IIntervalPropertyWithUseValueManipulator<number>;
    firstLineIndentType: IIntervalPropertyWithUseValueManipulator<ParagraphFirstLineIndent>;
    keepLinesTogether: IIntervalPropertyWithUseValueManipulator<boolean>;
    leftIndent: IIntervalPropertyWithUseValueManipulator<number>;
    lineSpacing: IIntervalPropertyWithUseValueManipulator<number>;
    lineSpacingType: IIntervalPropertyWithUseValueManipulator<ParagraphLineSpacingType>;
    outlineLevel: IIntervalPropertyWithUseValueManipulator<number>;
    pageBreakBefore: IIntervalPropertyWithUseValueManipulator<boolean>;
    rightIndent: IIntervalPropertyWithUseValueManipulator<number>;
    spacingAfter: IIntervalPropertyWithUseValueManipulator<number>;
    spacingBefore: IIntervalPropertyWithUseValueManipulator<number>;
    suppressHyphenation: IIntervalPropertyWithUseValueManipulator<boolean>;
    suppressLineNumbers: IIntervalPropertyWithUseValueManipulator<boolean>;
    widowOrphanControl: IIntervalPropertyWithUseValueManipulator<boolean>;
    divId: IIntervalPropertyWithUseValueManipulator<number>;
    keepWithNext: IIntervalPropertyWithUseValueManipulator<boolean>;
    useValue: IIntervalPropertyManipulator<number>;
    constructor(manipulator: ModelManipulator);
    changeAllProperties(subDocument: SubDocument, paragraphIndex: number, properties: MaskedParagraphProperties, style: ParagraphStyle, tabs: TabProperties, numberingListIndex: number, listLevelIndex: number): void;
}
//# sourceMappingURL=paragraph-properties-manipulator.d.ts.map