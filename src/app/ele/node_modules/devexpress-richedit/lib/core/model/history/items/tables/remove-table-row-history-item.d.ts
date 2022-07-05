import { FixedInterval } from '@devexpress/utils/lib/intervals/fixed';
import { ModelManipulator } from '../../../manipulators/model-manipulator';
import { SubDocument } from '../../../sub-document';
import { TableRow } from '../../../tables/main-structures/table-row';
import { TableBasedHistoryItem } from './create-table-history-item';
export declare class RemoveTableRowHistoryItem extends TableBasedHistoryItem {
    rowIndex: number;
    oldRow: TableRow;
    cellIntervals: FixedInterval[];
    constructor(modelManipulator: ModelManipulator, subDocument: SubDocument, tableIndex: number, rowIndex: number);
    redo(): void;
    undo(): void;
}
//# sourceMappingURL=remove-table-row-history-item.d.ts.map