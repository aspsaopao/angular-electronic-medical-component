import { FixedInterval } from '@devexpress/utils/lib/intervals/fixed';
import { DocumentModel } from '../document-model';
import { HistoryItemIntervalState, HistoryItemState } from '../history/states/history-item-state';
import { HistoryItemIntervalStateObject, HistoryItemIntervalUseStateObject, HistoryItemListLevelStateObject, HistoryItemListLevelUseStateObject, HistoryItemSectionStateObject, HistoryItemTableCellComplexUseStateObject, HistoryItemTableCellStateObject, HistoryItemTableCellUseStateObject, HistoryItemTableComplexUseStateObject, HistoryItemTableRowStateObject, HistoryItemTableRowUseStateObject, HistoryItemTableStateObject, HistoryItemTableUseStateObject } from '../history/states/history-item-state-object';
import { SubDocument } from '../sub-document';
export interface IIntervalPropertyWithUseValueManipulator<T> {
    setValue(subDocument: SubDocument, interval: FixedInterval, newValue: T, newUse: boolean): HistoryItemIntervalState<HistoryItemIntervalUseStateObject>;
    restoreValue(subDocument: SubDocument, state: HistoryItemIntervalState<HistoryItemIntervalUseStateObject>): any;
}
export interface IIntervalPropertyManipulator<T> {
    setValue(subDocument: SubDocument, interval: FixedInterval, newValue: T): HistoryItemIntervalState<HistoryItemIntervalStateObject>;
    restoreValue(subDocument: SubDocument, state: HistoryItemIntervalState<HistoryItemIntervalStateObject>): any;
}
export interface IListLevelPropertyManipulator<T> {
    setValue(model: DocumentModel, isAbstractList: boolean, listIndex: number, listLevelIndex: number, newValue: T): HistoryItemState<HistoryItemListLevelStateObject>;
    restoreValue(model: DocumentModel, state: HistoryItemState<HistoryItemListLevelStateObject>): any;
}
export interface IListLevelPropertyWithUseManipulator<T> {
    setValue(model: DocumentModel, isAbstractList: boolean, listIndex: number, listLevelIndex: number, newValue: T, newUse: boolean): HistoryItemState<HistoryItemListLevelUseStateObject>;
    restoreValue(model: DocumentModel, state: HistoryItemState<HistoryItemListLevelUseStateObject>): any;
}
export interface ISectionPropertyManipulator<T> {
    setValue(interval: FixedInterval, newValue: T): HistoryItemState<HistoryItemSectionStateObject>;
    restoreValue(state: HistoryItemState<HistoryItemSectionStateObject>): any;
}
export interface ITableCellPropertyWithUseManipulator<T> {
    setValue(subDocument: SubDocument, tableIndex: number, rowIndex: number, cellIndex: number, newValue: T, newUse: boolean): HistoryItemState<HistoryItemTableCellUseStateObject>;
    restoreValue(subDocument: SubDocument, state: HistoryItemState<HistoryItemTableCellUseStateObject>): any;
}
export interface ITableCellComplexPropertyWithUseManipulator<T> {
    setValue(subDocument: SubDocument, tableIndex: number, rowIndex: number, cellIndex: number, newValues: T[], newUses: boolean[]): HistoryItemState<HistoryItemTableCellComplexUseStateObject>;
    restoreValue(subDocument: SubDocument, state: HistoryItemState<HistoryItemTableCellComplexUseStateObject>): any;
}
export interface ITableCellPropertyManipulator<T> {
    setValue(subDocument: SubDocument, tableIndex: number, rowIndex: number, cellIndex: number, newValue: T): HistoryItemState<HistoryItemTableCellStateObject>;
    restoreValue(subDocument: SubDocument, state: HistoryItemState<HistoryItemTableCellStateObject>): any;
}
export interface ITablePropertyManipulator<T> {
    setValue(subDocument: SubDocument, tableIndex: number, newValue: T): HistoryItemState<HistoryItemTableStateObject>;
    restoreValue(subDocument: SubDocument, state: HistoryItemState<HistoryItemTableStateObject>): any;
}
export interface ITablePropertyWithUseManipulator<T> {
    setValue(subDocument: SubDocument, tableIndex: number, newValue: T, newUse: boolean): HistoryItemState<HistoryItemTableUseStateObject>;
    restoreValue(subDocument: SubDocument, state: HistoryItemState<HistoryItemTableUseStateObject>): any;
}
export interface ITableComplexPropertyWithUseManipulator<T> {
    setValue(subDocument: SubDocument, tableIndex: number, newValues: T[], newUses: boolean[]): HistoryItemState<HistoryItemTableComplexUseStateObject>;
    restoreValue(subDocument: SubDocument, state: HistoryItemState<HistoryItemTableComplexUseStateObject>): any;
}
export interface ITableRowPropertyWithUseManipulator<T> {
    setValue(subDocument: SubDocument, tableIndex: number, rowIndex: number, newValue: T, newUse: boolean): HistoryItemState<HistoryItemTableRowUseStateObject>;
    restoreValue(subDocument: SubDocument, state: HistoryItemState<HistoryItemTableRowUseStateObject>): any;
}
export interface ITableRowPropertyManipulator<T> {
    setValue(subDocument: SubDocument, tableIndex: number, rowIndex: number, newValue: T): HistoryItemState<HistoryItemTableRowStateObject>;
    restoreValue(subDocument: SubDocument, state: HistoryItemState<HistoryItemTableRowStateObject>): any;
}
//# sourceMappingURL=i-properties-manipulator.d.ts.map