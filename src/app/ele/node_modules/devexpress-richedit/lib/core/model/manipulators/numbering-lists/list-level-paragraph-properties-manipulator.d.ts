import { ParagraphAlignment, ParagraphFirstLineIndent, ParagraphLineSpacingType } from '../../paragraph/paragraph-properties';
import { ShadingInfo } from '../../shadings/shading-info';
import { BaseManipulator } from '../base-manipulator';
import { IListLevelPropertyWithUseManipulator } from '../i-properties-manipulator';
import { ModelManipulator } from '../model-manipulator';
export declare class ListLevelParagraphPropertiesManipulator extends BaseManipulator {
    align: IListLevelPropertyWithUseManipulator<ParagraphAlignment>;
    contextualSpacing: IListLevelPropertyWithUseManipulator<boolean>;
    afterAutoSpacing: IListLevelPropertyWithUseManipulator<boolean>;
    shadingInfo: IListLevelPropertyWithUseManipulator<ShadingInfo>;
    beforeAutoSpacing: IListLevelPropertyWithUseManipulator<boolean>;
    firstLineIndent: IListLevelPropertyWithUseManipulator<number>;
    firstLineIndentType: IListLevelPropertyWithUseManipulator<ParagraphFirstLineIndent>;
    keepLinesTogether: IListLevelPropertyWithUseManipulator<boolean>;
    leftIndent: IListLevelPropertyWithUseManipulator<number>;
    lineSpacing: IListLevelPropertyWithUseManipulator<number>;
    lineSpacingType: IListLevelPropertyWithUseManipulator<ParagraphLineSpacingType>;
    outlineLevel: IListLevelPropertyWithUseManipulator<number>;
    pageBreakBefore: IListLevelPropertyWithUseManipulator<boolean>;
    rightIndent: IListLevelPropertyWithUseManipulator<number>;
    spacingAfter: IListLevelPropertyWithUseManipulator<number>;
    spacingBefore: IListLevelPropertyWithUseManipulator<number>;
    suppressHyphenation: IListLevelPropertyWithUseManipulator<boolean>;
    suppressLineNumbers: IListLevelPropertyWithUseManipulator<boolean>;
    widowOrphanControl: IListLevelPropertyWithUseManipulator<boolean>;
    constructor(manipulator: ModelManipulator);
}
//# sourceMappingURL=list-level-paragraph-properties-manipulator.d.ts.map