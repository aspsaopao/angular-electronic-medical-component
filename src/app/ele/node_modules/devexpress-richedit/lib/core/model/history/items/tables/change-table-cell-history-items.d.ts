import { ModelManipulator } from '../../../manipulators/model-manipulator';
import { SubDocument } from '../../../sub-document';
import { ConditionalTableStyleFormatting } from '../../../tables/secondary-structures/table-base-structures';
import { TableBasedHistoryItem } from './create-table-history-item';
export declare class ShiftTableStartPositionToTheRightHistoryItem extends TableBasedHistoryItem {
    redo(): void;
    undo(): void;
}
export declare class TableRowConditionalFormattingHistoryItem extends TableBasedHistoryItem {
    formatting: ConditionalTableStyleFormatting;
    oldFormatting: ConditionalTableStyleFormatting;
    rowIndex: number;
    constructor(modelManipulator: ModelManipulator, boundSubDocument: SubDocument, tableIndex: number, rowIndex: number, formatting: ConditionalTableStyleFormatting);
    redo(): void;
    undo(): void;
}
export declare class TableCellConditionalFormattingHistoryItem extends TableBasedHistoryItem {
    formatting: ConditionalTableStyleFormatting;
    oldFormatting: ConditionalTableStyleFormatting;
    rowIndex: number;
    cellIndex: number;
    constructor(modelManipulator: ModelManipulator, boundSubDocument: SubDocument, tableIndex: number, rowIndex: number, cellIndex: number, formatting: ConditionalTableStyleFormatting);
    redo(): void;
    undo(): void;
}
//# sourceMappingURL=change-table-cell-history-items.d.ts.map