import { ModelManipulator } from '../../../manipulators/model-manipulator';
import { SubDocument } from '../../../sub-document';
import { TableBasedHistoryItem } from './create-table-history-item';
export declare class SplitTableCellToTheLeftHistoryItem extends TableBasedHistoryItem {
    rowIndex: number;
    cellIndex: number;
    copyProperties: boolean;
    constructor(modelManipulator: ModelManipulator, boundSubDocument: SubDocument, tableIndex: number, rowIndex: number, cellIndex: number, copyProperties: boolean);
    redo(): void;
    undo(): void;
}
export declare class SplitTableCellToTheRightHistoryItem extends TableBasedHistoryItem {
    rowIndex: number;
    cellIndex: number;
    copyProperties: boolean;
    constructor(modelManipulator: ModelManipulator, boundSubDocument: SubDocument, tableIndex: number, rowIndex: number, cellIndex: number, copyProperties: boolean);
    redo(): void;
    undo(): void;
}
//# sourceMappingURL=split-table-cell-history-item.d.ts.map