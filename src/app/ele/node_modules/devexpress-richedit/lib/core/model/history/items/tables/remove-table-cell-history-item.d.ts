import { ModelManipulator } from '../../../manipulators/model-manipulator';
import { SubDocument } from '../../../sub-document';
import { TableCell } from '../../../tables/main-structures/table-cell';
import { TableBasedHistoryItem } from './create-table-history-item';
export declare class RemoveTableCellHistoryItem extends TableBasedHistoryItem {
    cellCount: number;
    rowIndex: number;
    cellIndex: number;
    cell: TableCell;
    length: number;
    constructor(modelManipulator: ModelManipulator, subDocument: SubDocument, tableIndex: number, rowIndex: number, cellIndex: number);
    redo(): void;
    undo(): void;
}
//# sourceMappingURL=remove-table-cell-history-item.d.ts.map