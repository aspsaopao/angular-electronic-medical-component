import { FixedInterval } from '@devexpress/utils/lib/intervals/fixed';
import { ModelManipulator } from '../../../manipulators/model-manipulator';
import { SubDocument } from '../../../sub-document';
import { TableRow } from '../../../tables/main-structures/table-row';
import { TableBasedHistoryItem } from './create-table-history-item';
export declare class InsertTableRowHistoryItem extends TableBasedHistoryItem {
    targetRowIndex: number;
    cellIntervals: FixedInterval[];
    patternRow: TableRow;
    constructor(modelManipulator: ModelManipulator, boundSubDocument: SubDocument, tableIndex: number, patternRow: TableRow, targetRowIndex: number, cellIntervals: FixedInterval[]);
    redo(): void;
    undo(): void;
}
//# sourceMappingURL=insert-table-row-history-item.d.ts.map