import { BorderInfo } from '../../../borders/border-info';
import { ITableComplexPropertyWithUseManipulator, ITablePropertyWithUseManipulator } from '../../../manipulators/i-properties-manipulator';
import { ModelManipulator } from '../../../manipulators/model-manipulator';
import { ShadingInfo } from '../../../shadings/shading-info';
import { SubDocument } from '../../../sub-document';
import { TableLayoutType, TableLookTypes, TableRowAlignment } from '../../../tables/secondary-structures/table-base-structures';
import { TableWidthUnit } from '../../../tables/secondary-structures/table-units';
import { HistoryItemState } from '../../states/history-item-state';
import { HistoryItemTableComplexUseStateObject, HistoryItemTableStateObject, HistoryItemTableUseStateObject } from '../../states/history-item-state-object';
import { TableBasedHistoryItem } from './create-table-history-item';
export declare abstract class TablePropertiesHistoryItemBase<T> extends TableBasedHistoryItem {
    newValue: T;
    constructor(modelManipulator: ModelManipulator, boundSubDocument: SubDocument, tableIndex: number, newValue: T);
}
export declare class TablePropertiesUseHistoryItemBase<T> extends TablePropertiesHistoryItemBase<T> {
    oldState: HistoryItemState<HistoryItemTableUseStateObject>;
    newUse: boolean;
    constructor(modelManipulator: ModelManipulator, boundSubDocument: SubDocument, tableIndex: number, newValues: T, newUse: boolean);
    redo(): void;
    undo(): void;
    getManipulator(): ITablePropertyWithUseManipulator<T>;
}
export declare class TablePropertiesComplexUseHistoryItemBase<T> extends TablePropertiesHistoryItemBase<Array<T>> {
    oldState: HistoryItemState<HistoryItemTableComplexUseStateObject>;
    newUses: boolean[];
    constructor(modelManipulator: ModelManipulator, boundSubDocument: SubDocument, tableIndex: number, newValues: T[], newUses: boolean[]);
    redo(): void;
    undo(): void;
    getManipulator(): ITableComplexPropertyWithUseManipulator<T>;
}
export declare class TableCellMarginsHistoryItem extends TablePropertiesComplexUseHistoryItemBase<TableWidthUnit> {
    getManipulator(): ITableComplexPropertyWithUseManipulator<TableWidthUnit>;
}
export declare class TableCellSpacingHistoryItem extends TablePropertiesUseHistoryItemBase<TableWidthUnit> {
    getManipulator(): ITablePropertyWithUseManipulator<TableWidthUnit>;
}
export declare class TableIndentHistoryItem extends TablePropertiesUseHistoryItemBase<TableWidthUnit> {
    getManipulator(): ITablePropertyWithUseManipulator<TableWidthUnit>;
}
export declare class TablePreferredWidthHistoryItem extends TablePropertiesHistoryItemBase<TableWidthUnit> {
    oldState: HistoryItemState<HistoryItemTableStateObject>;
    redo(): void;
    undo(): void;
}
export declare class TableBordersHistoryItem extends TablePropertiesComplexUseHistoryItemBase<BorderInfo> {
    getManipulator(): ITableComplexPropertyWithUseManipulator<BorderInfo>;
}
export declare class TableTableStyleColumnBandSizeHistoryItem extends TablePropertiesUseHistoryItemBase<number> {
    getManipulator(): ITablePropertyWithUseManipulator<number>;
}
export declare class TableTableStyleRowBandSizeHistoryItem extends TablePropertiesUseHistoryItemBase<number> {
    getManipulator(): ITablePropertyWithUseManipulator<number>;
}
export declare class TableAvoidDoubleBordersHistoryItem extends TablePropertiesUseHistoryItemBase<boolean> {
    getManipulator(): ITablePropertyWithUseManipulator<boolean>;
}
export declare class TableLayoutTypeHistoryItem extends TablePropertiesUseHistoryItemBase<TableLayoutType> {
    getManipulator(): ITablePropertyWithUseManipulator<TableLayoutType>;
}
export declare class TableLookTypesHistoryItem extends TablePropertiesHistoryItemBase<TableLookTypes> {
    oldState: HistoryItemState<HistoryItemTableStateObject>;
    redo(): void;
    undo(): void;
}
export declare class TableShadingInfoHistoryItem extends TablePropertiesUseHistoryItemBase<ShadingInfo> {
    getManipulator(): ITablePropertyWithUseManipulator<ShadingInfo>;
}
export declare class TableTableRowAlignmentHistoryItem extends TablePropertiesUseHistoryItemBase<TableRowAlignment> {
    getManipulator(): ITablePropertyWithUseManipulator<TableRowAlignment>;
}
export declare class TableIsTableOverlapHistoryItem extends TablePropertiesUseHistoryItemBase<boolean> {
    getManipulator(): ITablePropertyWithUseManipulator<boolean>;
}
//# sourceMappingURL=table-properties-history-items.d.ts.map