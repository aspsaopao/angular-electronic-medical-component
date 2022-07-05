import { SimpleConverter } from '@devexpress/utils/lib/types';
import { BorderInfo } from '../../../model/borders/border-info';
import { ColorProvider } from '../../../model/color/color-provider';
import { DocumentModel } from '../../../model/document-model';
import { Table, TablePosition } from '../../../model/tables/main-structures/table';
import { TableCell } from '../../../model/tables/main-structures/table-cell';
import { TableCellPropertiesMergerBorderBase } from '../../../model/tables/properties-mergers/table-cell-properties-merger';
import { TableProperties } from '../../../model/tables/properties/table-properties';
import { TableStyle } from '../../../model/tables/styles/table-style';
import { Grid } from '../grid-engine/grid';
import { TableInfo } from '../info/table-info';
import { HorizontalLineBordersInfo } from './horizontal-line-borders-info';
import { LayoutCursorVerticalTableBorder, LayoutTableBorder } from './layout-table-border';
export declare class TableBorderInfoProvider {
    leftBorder: BorderInfo;
    rightBorder: BorderInfo;
    verticalBorder: BorderInfo;
    topBorder: BorderInfo;
    bottomBorder: BorderInfo;
    horizontalBorder: BorderInfo;
    cellSpacings: number[];
    constructor(model: DocumentModel, table: Table, converter: SimpleConverter<number>);
    static borderConvertToPixels(brdInfo: BorderInfo, converter: SimpleConverter<number>): BorderInfo;
}
export declare type CellBorderConstructor = new (tablePropertiesException: TableProperties, isOutsideBorder: boolean) => TableCellPropertiesMergerBorderBase;
export declare class BorderHelper {
    private colorProvider;
    private tableInfo;
    private tblbrdProvider;
    rowCellSpacing(rowIndex: number): number;
    get borderHorizontal(): BorderInfo;
    get grid(): Grid;
    get tblStyle(): TableStyle;
    constructor(tableInfo: TableInfo, model: DocumentModel);
    getVerticalBorders(): LayoutTableBorder[][][];
    getVerticalCursorBorders(): LayoutCursorVerticalTableBorder[][][];
    private populateVerticalCursorBordersWithSpacing;
    private populateVerticalCursorBorders;
    private getCellGridColumnIndex;
    private createVerticalCursorBorder;
    private mergeVerticalBorders;
    getHorizontalBordersByRow(rowIndex: number, isRowFirstInLayoutColumn: boolean, isRowLastInLayoutColumn: boolean): HorizontalLineBordersInfo[];
    private collectTableHorizontalBorders;
    collectOneCellAndTableHorizontalBorders(cellBorderRowIndex: number, getCurrCellBorderMerger: CellBorderConstructor, tableBorderRowIndex: number, tableBorderInfo: BorderInfo, isTableBorderRowIndexValid: boolean): HorizontalLineBordersInfo;
    collectThreeBorders(rowIndex: number, getCurrCellBorderMerger: CellBorderConstructor, getTopCellBorderMerger: CellBorderConstructor, tableBorderInfo: BorderInfo): HorizontalLineBordersInfo;
    private getCellEndGridPosition;
    static mergeThreeBorders(colorProvider: ColorProvider, cellA: TableCell, mergerCellA: CellBorderConstructor, cellB: TableCell, mergerCellB: CellBorderConstructor, isOutsideCellBorders: boolean, tableBorderInfo: BorderInfo, tblStyle: TableStyle, converter: SimpleConverter<number>): BorderInfo;
    static getLeftBorder(colorProvider: ColorProvider, pos: TablePosition, siblingCell: TableCell, tblBrdProv: TableBorderInfoProvider, converter: SimpleConverter<number>): BorderInfo;
    static getRightBorder(colorProvider: ColorProvider, pos: TablePosition, siblingCell: TableCell, tblBrdProv: TableBorderInfoProvider, converter: SimpleConverter<number>): BorderInfo;
    private static getRightLeftBorder;
}
//# sourceMappingURL=border-helper.d.ts.map