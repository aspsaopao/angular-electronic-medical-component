import { BorderInfo } from '../../../borders/border-info';
import { ITableCellComplexPropertyWithUseManipulator, ITableCellPropertyWithUseManipulator } from '../../../manipulators/i-properties-manipulator';
import { ModelManipulator } from '../../../manipulators/model-manipulator';
import { ShadingInfo } from '../../../shadings/shading-info';
import { SubDocument } from '../../../sub-document';
import { TablePosition } from '../../../tables/main-structures/table';
import { TableCellMergingState, TableCellVerticalAlignment, TextDirection } from '../../../tables/secondary-structures/table-base-structures';
import { TableWidthUnit } from '../../../tables/secondary-structures/table-units';
import { HistoryItemState } from '../../states/history-item-state';
import { HistoryItemTableCellComplexUseStateObject, HistoryItemTableCellStateObject, HistoryItemTableCellUseStateObject } from '../../states/history-item-state-object';
import { TableBasedHistoryItem } from './create-table-history-item';
export declare abstract class TableCellPropertiesHistoryItemBase<T> extends TableBasedHistoryItem {
    newValue: T;
    rowIndex: number;
    cellIndex: number;
    constructor(modelManipulator: ModelManipulator, boundSubDocument: SubDocument, tableIndex: number, rowIndex: number, cellIndex: number, newValue: T);
}
export declare class TableCellColumnSpanHistoryItem extends TableCellPropertiesHistoryItemBase<number> {
    oldState: HistoryItemState<HistoryItemTableCellStateObject>;
    redo(): void;
    undo(): void;
}
export declare class TableCellVerticalMergingHistoryItem extends TableCellPropertiesHistoryItemBase<TableCellMergingState> {
    oldState: HistoryItemState<HistoryItemTableCellStateObject>;
    redo(): void;
    undo(): void;
    static fromPosition(modelManipulator: ModelManipulator, boundSubDocument: SubDocument, position: TablePosition, value: TableCellMergingState): TableCellVerticalMergingHistoryItem;
}
export declare class TableCellPropertiesUseHistoryItemBase<T> extends TableCellPropertiesHistoryItemBase<T> {
    oldState: HistoryItemState<HistoryItemTableCellUseStateObject>;
    newUse: boolean;
    constructor(modelManipulator: ModelManipulator, boundSubDocument: SubDocument, tableIndex: number, rowIndex: number, cellIndex: number, newValues: T, newUse: boolean);
    redo(): void;
    undo(): void;
    getManipulator(): ITableCellPropertyWithUseManipulator<T>;
}
export declare class TableCellPropertiesComplexUseHistoryItemBase<T> extends TableCellPropertiesHistoryItemBase<Array<T>> {
    oldState: HistoryItemState<HistoryItemTableCellComplexUseStateObject>;
    newUses: boolean[];
    constructor(modelManipulator: ModelManipulator, boundSubDocument: SubDocument, tableIndex: number, rowIndex: number, cellIndex: number, newValues: T[], newUses: boolean[]);
    redo(): void;
    undo(): void;
    getManipulator(): ITableCellComplexPropertyWithUseManipulator<T>;
}
export declare class TableCellCellMarginsHistoryItem extends TableCellPropertiesComplexUseHistoryItemBase<TableWidthUnit> {
    getManipulator(): ITableCellComplexPropertyWithUseManipulator<TableWidthUnit>;
}
export declare class TableCellBordersHistoryItem extends TableCellPropertiesComplexUseHistoryItemBase<BorderInfo> {
    getManipulator(): ITableCellComplexPropertyWithUseManipulator<BorderInfo>;
}
export declare class TableCellPreferredWidthHistoryItem extends TableCellPropertiesHistoryItemBase<TableWidthUnit> {
    oldState: HistoryItemState<HistoryItemTableCellStateObject>;
    redo(): void;
    undo(): void;
}
export declare class TableCellHideCellMarkHistoryItem extends TableCellPropertiesUseHistoryItemBase<boolean> {
    getManipulator(): ITableCellPropertyWithUseManipulator<boolean>;
}
export declare class TableCellNoWrapHistoryItem extends TableCellPropertiesUseHistoryItemBase<boolean> {
    getManipulator(): ITableCellPropertyWithUseManipulator<boolean>;
}
export declare class TableCellFitTextHistoryItem extends TableCellPropertiesUseHistoryItemBase<boolean> {
    getManipulator(): ITableCellPropertyWithUseManipulator<boolean>;
}
export declare class TableCellTextDirectionHistoryItem extends TableCellPropertiesUseHistoryItemBase<TextDirection> {
    getManipulator(): ITableCellPropertyWithUseManipulator<TextDirection>;
}
export declare class TableCellVerticalAlignmentHistoryItem extends TableCellPropertiesUseHistoryItemBase<TableCellVerticalAlignment> {
    getManipulator(): ITableCellPropertyWithUseManipulator<TableCellVerticalAlignment>;
}
export declare class TableCellShadingInfoHistoryItem extends TableCellPropertiesUseHistoryItemBase<ShadingInfo> {
    getManipulator(): ITableCellPropertyWithUseManipulator<ShadingInfo>;
}
//# sourceMappingURL=table-cell-properties-history-items.d.ts.map