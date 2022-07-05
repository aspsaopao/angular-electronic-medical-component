import { BorderInfo } from '../../../../core/model/borders/border-info';
import { ShadingInfo } from '../../../../core/model/shadings/shading-info';
import { TableCellMargins, TableCellMergingState, TableCellVerticalAlignment, TextDirection } from '../../../../core/model/tables/secondary-structures/table-base-structures';
import { TableWidthUnit } from '../../../../core/model/tables/secondary-structures/table-units';
import { RtfPropertiesExporter } from '../rtf-properties-exporter';
export declare class RtfTableCellPropertiesExporter extends RtfPropertiesExporter {
    protected get tableCellBackgroundColor(): string;
    protected get tableCellForegroundColor(): string;
    protected get tableCellShading(): string;
    protected get tableCellShadingPatternTable(): Record<number, string>;
    protected get tableCellNoWrap(): string;
    protected get tableCellTextTopAlignment(): string;
    protected get tableCellTextCenterAlignment(): string;
    protected get tableCellTextBottomAlignment(): string;
    protected get cellTopBorder(): string;
    protected get cellLeftBorder(): string;
    protected get cellBottomBorder(): string;
    protected get cellRightBorder(): string;
    writeCellShading(shadingInfo: ShadingInfo): void;
    writeCellFitText(fitText: boolean): void;
    writeCellNoWrap(noWrap: boolean): void;
    writeCellHideCellMark(hideCellMark: boolean): void;
    writeCellVerticalMerging(value: TableCellMergingState, defaultValue: TableCellMergingState): void;
    writeCellVerticalAlignment(verticalAlignment: TableCellVerticalAlignment): void;
    writeCellTextDirection(value: TextDirection): void;
    writeCellBasicBorders(topBorder: BorderInfo, leftBorder: BorderInfo, rightBorder: BorderInfo, bottomBorder: BorderInfo): void;
    writeCellPreferredWidth(preferredWidth: TableWidthUnit): void;
    writeCellMargings(cellMargins: TableCellMargins): void;
    writeCellRight(cellRight: number): void;
}
export declare class RtfTableStyleTableCellPropertiesExporter extends RtfTableCellPropertiesExporter {
    protected get tableCellBackgroundColor(): string;
    protected get tableCellForegroundColor(): string;
    protected get tableCellShading(): string;
    protected get tableCellShadingPatternTable(): Record<number, string>;
    protected get tableCellNoWrap(): string;
    protected get tableCellTextTopAlignment(): string;
    protected get tableCellTextCenterAlignment(): string;
    protected get tableCellTextBottomAlignment(): string;
    protected get tableCellUpperLeftToLowerRightBorder(): string;
    protected get tableCellUpperRightToLowerLeftBorder(): string;
    protected get cellTopBorder(): string;
    protected get cellLeftBorder(): string;
    protected get cellBottomBorder(): string;
    protected get cellRightBorder(): string;
    writeCellBasicBorders(topBorder: BorderInfo, leftBorder: BorderInfo, rightBorder: BorderInfo, bottomBorder: BorderInfo): void;
}
//# sourceMappingURL=rtf-table-cell-properties-exporter.d.ts.map