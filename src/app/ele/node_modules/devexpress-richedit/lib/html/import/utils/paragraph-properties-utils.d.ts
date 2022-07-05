import { ColorProvider } from '../../../core/model/color/color-provider';
import { MaskedParagraphProperties } from '../../../core/model/paragraph/paragraph-properties';
export declare class HtmlImporterMaskedParagraphProperties {
    private result;
    private elementStyle;
    private element;
    import(colorProvider: ColorProvider, element: HTMLElement, isTableCellTag: boolean): MaskedParagraphProperties;
    private importAlignment;
    private importFirstLineIndent;
    private importLeftIndent;
    private importRightIndent;
    private importSpacingBefore;
    private importSpacingAfter;
    private importLineSpacing;
    private setSpacingAsMultiple;
    private importTopBorder;
    private importRightBorder;
    private importBottomBorder;
    private importLeftBorder;
    private static MapAlignmentToType;
}
//# sourceMappingURL=paragraph-properties-utils.d.ts.map