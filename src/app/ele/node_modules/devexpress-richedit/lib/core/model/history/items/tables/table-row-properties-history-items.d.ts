import { ITableRowPropertyWithUseManipulator } from '../../../manipulators/i-properties-manipulator';
import { ModelManipulator } from '../../../manipulators/model-manipulator';
import { SubDocument } from '../../../sub-document';
import { TableRowAlignment } from '../../../tables/secondary-structures/table-base-structures';
import { TableHeightUnit, TableWidthUnit } from '../../../tables/secondary-structures/table-units';
import { HistoryItemState } from '../../states/history-item-state';
import { HistoryItemTableRowStateObject, HistoryItemTableRowUseStateObject } from '../../states/history-item-state-object';
import { TableBasedHistoryItem } from './create-table-history-item';
export declare abstract class TableRowPropertiesHistoryItemBase<T> extends TableBasedHistoryItem {
    newValue: T;
    rowIndex: number;
    constructor(modelManipulator: ModelManipulator, boundSubDocument: SubDocument, tableIndex: number, rowIndex: number, newValue: T);
}
export declare class TableRowGridAfterHistoryItem extends TableRowPropertiesHistoryItemBase<number> {
    oldState: HistoryItemState<HistoryItemTableRowStateObject>;
    redo(): void;
    undo(): void;
}
export declare class TableRowGridBeforeHistoryItem extends TableRowPropertiesHistoryItemBase<number> {
    oldState: HistoryItemState<HistoryItemTableRowStateObject>;
    redo(): void;
    undo(): void;
}
export declare class TableRowWidthAfterHistoryItem extends TableRowPropertiesHistoryItemBase<TableWidthUnit> {
    oldState: HistoryItemState<HistoryItemTableRowStateObject>;
    redo(): void;
    undo(): void;
}
export declare class TableRowWidthBeforeHistoryItem extends TableRowPropertiesHistoryItemBase<TableWidthUnit> {
    oldState: HistoryItemState<HistoryItemTableRowStateObject>;
    redo(): void;
    undo(): void;
}
export declare class TableRowPropertiesUseHistoryItemBase<T> extends TableRowPropertiesHistoryItemBase<T> {
    oldState: HistoryItemState<HistoryItemTableRowUseStateObject>;
    newUse: boolean;
    constructor(modelManipulator: ModelManipulator, boundSubDocument: SubDocument, tableIndex: number, rowIndex: number, newValues: T, newUse: boolean);
    redo(): void;
    undo(): void;
    getManipulator(): ITableRowPropertyWithUseManipulator<T>;
}
export declare class TableRowHeightHistoryItem extends TableRowPropertiesHistoryItemBase<TableHeightUnit> {
    oldState: HistoryItemState<HistoryItemTableRowStateObject>;
    redo(): void;
    undo(): void;
}
export declare class TableRowCellSpacingHistoryItem extends TableRowPropertiesUseHistoryItemBase<TableWidthUnit> {
    getManipulator(): ITableRowPropertyWithUseManipulator<TableWidthUnit>;
}
export declare class TableRowCantSplitHistoryItem extends TableRowPropertiesUseHistoryItemBase<boolean> {
    getManipulator(): ITableRowPropertyWithUseManipulator<boolean>;
}
export declare class TableRowHideCellMarkHistoryItem extends TableRowPropertiesUseHistoryItemBase<boolean> {
    getManipulator(): ITableRowPropertyWithUseManipulator<boolean>;
}
export declare class TableRowHeaderHistoryItem extends TableRowPropertiesUseHistoryItemBase<boolean> {
    getManipulator(): ITableRowPropertyWithUseManipulator<boolean>;
}
export declare class TableRowTableRowAlignmentHistoryItem extends TableRowPropertiesUseHistoryItemBase<TableRowAlignment> {
    getManipulator(): ITableRowPropertyWithUseManipulator<TableRowAlignment>;
}
//# sourceMappingURL=table-row-properties-history-items.d.ts.map