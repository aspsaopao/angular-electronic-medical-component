import { FixedInterval } from '@devexpress/utils/lib/intervals/fixed';
import { ModelManipulator } from '../../../manipulators/model-manipulator';
import { SubDocument } from '../../../sub-document';
import { Table } from '../../../tables/main-structures/table';
import { TableRow } from '../../../tables/main-structures/table-row';
import { HistoryItem } from '../../base/history-item';
export declare abstract class TableBasedHistoryItem extends HistoryItem {
    protected tableIndex: number;
    boundSubDocument: SubDocument;
    constructor(modelManipulator: ModelManipulator, boundSubDocument: SubDocument, tableIndex: number);
    getTable(): Table;
    protected static getRowCellsRanges(tableRow: TableRow): FixedInterval[];
    protected static getTableCellsRanges(table: Table): FixedInterval[][];
}
export declare class CreateTableHistoryItem extends TableBasedHistoryItem {
    firstParagraphIndex: number;
    rowCount: number;
    cellCount: number;
    constructor(modelManipulator: ModelManipulator, subDocument: SubDocument, firstParagraphIndex: number, rowCount: number, cellCount: number);
    redo(): void;
    undo(): void;
}
//# sourceMappingURL=create-table-history-item.d.ts.map