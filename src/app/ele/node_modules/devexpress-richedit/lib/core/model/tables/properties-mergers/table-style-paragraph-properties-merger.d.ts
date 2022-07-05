import { BorderInfo } from '../../borders/border-info';
import { MaskedParagraphProperties, ParagraphAlignment, ParagraphFirstLineIndent, ParagraphLineSpacingType } from '../../paragraph/paragraph-properties';
import { ShadingInfo } from '../../shadings/shading-info';
import { ConditionalTableStyleFormatting } from '../secondary-structures/table-base-structures';
import { TableConditionalStyle } from '../styles/table-conditional-style';
import { TableMergerNotMergedPropertyResult, TablePropertiesMergerBase } from './table-properties-merger-base';
export declare abstract class TableStyleParagraphPropertiesMerger<ResultPropertyType> extends TablePropertiesMergerBase<MaskedParagraphProperties, ResultPropertyType> {
    protected getContainerFromConditionalStyle(condStyle: TableConditionalStyle): MaskedParagraphProperties;
    protected canUseValue(props: MaskedParagraphProperties): boolean;
    protected getCondTableStyleFormattingListForThisContainer(): ConditionalTableStyleFormatting[];
    protected actionBeforeDefaultValue(): boolean;
    protected getNotMergedProperty(): TableMergerNotMergedPropertyResult<ResultPropertyType>;
}
export declare class TableStyleParagraphPropertiesMergerAlignment extends TableStyleParagraphPropertiesMerger<ParagraphAlignment> {
    protected getPropertyFromContainer(container: MaskedParagraphProperties): ParagraphAlignment;
    protected getPropertyMask(): number;
}
export declare class TableStyleParagraphPropertiesMergerShadingInfo extends TableStyleParagraphPropertiesMerger<ShadingInfo> {
    protected getPropertyFromContainer(container: MaskedParagraphProperties): ShadingInfo;
    protected getPropertyMask(): number;
}
export declare class TableStyleParagraphPropertiesMergerLeftIndent extends TableStyleParagraphPropertiesMerger<number> {
    protected getPropertyFromContainer(container: MaskedParagraphProperties): number;
    protected getPropertyMask(): number;
}
export declare class TableStyleParagraphPropertiesMergerRightIndent extends TableStyleParagraphPropertiesMerger<number> {
    protected getPropertyFromContainer(container: MaskedParagraphProperties): number;
    protected getPropertyMask(): number;
}
export declare class TableStyleParagraphPropertiesMergerTopBorder extends TableStyleParagraphPropertiesMerger<BorderInfo> {
    protected getPropertyFromContainer(container: MaskedParagraphProperties): BorderInfo;
    protected getPropertyMask(): number;
}
export declare class TableStyleParagraphPropertiesMergerKeepWithNext extends TableStyleParagraphPropertiesMerger<boolean> {
    protected getPropertyFromContainer(container: MaskedParagraphProperties): boolean;
    protected getPropertyMask(): number;
}
export declare class TableStyleParagraphPropertiesMergerOutlineLevel extends TableStyleParagraphPropertiesMerger<number> {
    protected getPropertyFromContainer(container: MaskedParagraphProperties): number;
    protected getPropertyMask(): number;
}
export declare class TableStyleParagraphPropertiesMergerSpacingAfter extends TableStyleParagraphPropertiesMerger<number> {
    protected getPropertyFromContainer(container: MaskedParagraphProperties): number;
    protected getPropertyMask(): number;
}
export declare class TableStyleParagraphPropertiesMergerLeftBorder extends TableStyleParagraphPropertiesMerger<BorderInfo> {
    protected getPropertyFromContainer(container: MaskedParagraphProperties): BorderInfo;
    protected getPropertyMask(): number;
}
export declare class TableStyleParagraphPropertiesMergerSpacingBefore extends TableStyleParagraphPropertiesMerger<number> {
    protected getPropertyFromContainer(container: MaskedParagraphProperties): number;
    protected getPropertyMask(): number;
}
export declare class TableStyleParagraphPropertiesMergerRightBorder extends TableStyleParagraphPropertiesMerger<BorderInfo> {
    protected getPropertyFromContainer(container: MaskedParagraphProperties): BorderInfo;
    protected getPropertyMask(): number;
}
export declare class TableStyleParagraphPropertiesMergerBottomBorder extends TableStyleParagraphPropertiesMerger<BorderInfo> {
    protected getPropertyFromContainer(container: MaskedParagraphProperties): BorderInfo;
    protected getPropertyMask(): number;
}
export declare class TableStyleParagraphPropertiesMergerBetweenBorder extends TableStyleParagraphPropertiesMerger<BorderInfo> {
    protected getPropertyFromContainer(container: MaskedParagraphProperties): BorderInfo;
    protected getPropertyMask(): number;
}
export declare class TableStyleParagraphPropertiesMergerPageBreakBefore extends TableStyleParagraphPropertiesMerger<boolean> {
    protected getPropertyFromContainer(container: MaskedParagraphProperties): boolean;
    protected getPropertyMask(): number;
}
export declare class TableStyleParagraphPropertiesMergerAfterAutoSpacing extends TableStyleParagraphPropertiesMerger<boolean> {
    protected getPropertyFromContainer(container: MaskedParagraphProperties): boolean;
    protected getPropertyMask(): number;
}
export declare class TableStyleParagraphPropertiesMergerKeepLinesTogether extends TableStyleParagraphPropertiesMerger<boolean> {
    protected getPropertyFromContainer(container: MaskedParagraphProperties): boolean;
    protected getPropertyMask(): number;
}
export declare class TableStyleParagraphPropertiesMergerRightToLeft extends TableStyleParagraphPropertiesMerger<boolean> {
    protected getPropertyFromContainer(container: MaskedParagraphProperties): boolean;
    protected getPropertyMask(): number;
}
export declare class TableStyleParagraphPropertiesMergerBeforeAutoSpacing extends TableStyleParagraphPropertiesMerger<boolean> {
    protected getPropertyFromContainer(container: MaskedParagraphProperties): boolean;
    protected getPropertyMask(): number;
}
export declare class TableStyleParagraphPropertiesMergerContextualSpacing extends TableStyleParagraphPropertiesMerger<boolean> {
    protected getPropertyFromContainer(container: MaskedParagraphProperties): boolean;
    protected getPropertyMask(): number;
}
export declare class TableStyleParagraphPropertiesMergerWidowOrphanControl extends TableStyleParagraphPropertiesMerger<boolean> {
    protected getPropertyFromContainer(container: MaskedParagraphProperties): boolean;
    protected getPropertyMask(): number;
}
export declare class TableStyleParagraphPropertiesMergerSuppressHyphenation extends TableStyleParagraphPropertiesMerger<boolean> {
    protected getPropertyFromContainer(container: MaskedParagraphProperties): boolean;
    protected getPropertyMask(): number;
}
export declare class TableStyleParagraphPropertiesMergerSuppressLineNumbers extends TableStyleParagraphPropertiesMerger<boolean> {
    protected getPropertyFromContainer(container: MaskedParagraphProperties): boolean;
    protected getPropertyMask(): number;
}
export declare class TableStyleParagraphPropertiesMergerFirstLineIndent extends TableStyleParagraphPropertiesMerger<number> {
    protected getPropertyFromContainer(container: MaskedParagraphProperties): number;
    protected getPropertyMask(): number;
}
export declare class TableStyleParagraphPropertiesMergerFirstLineIndentType extends TableStyleParagraphPropertiesMerger<ParagraphFirstLineIndent> {
    protected getPropertyFromContainer(container: MaskedParagraphProperties): ParagraphFirstLineIndent;
    protected getPropertyMask(): number;
}
export declare class TableStyleParagraphPropertiesMergerLineSpacing extends TableStyleParagraphPropertiesMerger<number> {
    protected getPropertyFromContainer(container: MaskedParagraphProperties): number;
    protected getPropertyMask(): number;
}
export declare class TableStyleParagraphPropertiesMergerLineSpacingType extends TableStyleParagraphPropertiesMerger<ParagraphLineSpacingType> {
    protected getPropertyFromContainer(container: MaskedParagraphProperties): ParagraphLineSpacingType;
    protected getPropertyMask(): number;
}
export declare class TableStyleParagraphPropertiesMergerDivId extends TableStyleParagraphPropertiesMerger<number> {
    protected getPropertyFromContainer(container: MaskedParagraphProperties): number;
    protected getPropertyMask(): number;
}
//# sourceMappingURL=table-style-paragraph-properties-merger.d.ts.map