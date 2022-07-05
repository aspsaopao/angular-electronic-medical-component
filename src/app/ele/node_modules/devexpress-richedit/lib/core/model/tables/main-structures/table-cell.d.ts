import { FixedInterval } from '@devexpress/utils/lib/intervals/fixed';
import { BorderInfo } from '../../borders/border-info';
import { DocumentModel } from '../../document-model';
import { Position } from '../../position/position';
import { PositionManager } from '../../position/position-manager';
import { SubDocument } from '../../sub-document';
import { TableCellProperties } from '../properties/table-cell-properties';
import { ConditionalTableStyleFormatting, TableCellMergingState } from '../secondary-structures/table-base-structures';
import { TableWidthUnit } from '../secondary-structures/table-units';
import { TableCellStyle } from '../styles/table-cell-style';
import { TableRow } from './table-row';
export declare class TableCell {
    constructor(parentRow: TableRow, properties: TableCellProperties);
    preferredWidth: TableWidthUnit;
    columnSpan: number;
    verticalMerging: TableCellMergingState;
    parentRow: TableRow;
    startParagraphPosition: Position;
    endParagrapPosition: Position;
    properties: TableCellProperties;
    style: TableCellStyle;
    conditionalFormatting: ConditionalTableStyleFormatting;
    destructor(positionManager: PositionManager): void;
    get interval(): FixedInterval;
    get isFirstCellInRow(): boolean;
    getActualTopCellBorder(defaultCellProperties: TableCellProperties): BorderInfo;
    getActualLeftCellBorder(defaultCellProperties: TableCellProperties): BorderInfo;
    getActualBottomCellBorder(defaultCellProperties: TableCellProperties): BorderInfo;
    getActualRightCellBorder(defaultCellProperties: TableCellProperties): BorderInfo;
    private getActualBorderCore;
    getActualLeftCellMargin(model: DocumentModel): TableWidthUnit;
    getActualTopCellMargin(model: DocumentModel): TableWidthUnit;
    getActualRightCellMargin(model: DocumentModel): TableWidthUnit;
    getActualBottomCellMargin(model: DocumentModel): TableWidthUnit;
    private getActualCellMarginCore;
    clone(subDocument: SubDocument, parentRow: TableRow): TableCell;
}
//# sourceMappingURL=table-cell.d.ts.map