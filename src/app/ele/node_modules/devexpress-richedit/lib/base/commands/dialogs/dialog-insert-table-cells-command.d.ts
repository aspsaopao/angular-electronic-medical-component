import { ICloneable, ISupportCopyFrom, SimpleConverter } from '@devexpress/utils/lib/types';
import { ICommandOptions } from '../command-base';
import { IntervalCommandState } from '../command-states';
import { ICommandState } from '../i-command';
import { DialogParametersBase, ShowDialogCommandBase } from './show-dialog-command-base';
export declare class DialogInsertTableCellsCommand extends ShowDialogCommandBase<TableCellsDialogParameters> {
    getState(): ICommandState;
    createParameters(_options: ICommandOptions): TableCellsDialogParameters;
    applyParameters(_state: IntervalCommandState, params: TableCellsDialogParameters): boolean;
    getDialogName(): string;
}
export declare class DialogDeleteTableCellsCommand extends ShowDialogCommandBase<TableCellsDialogParameters> {
    getState(): ICommandState;
    isEnabled(): boolean;
    createParameters(_options: ICommandOptions): TableCellsDialogParameters;
    applyParameters(_state: IntervalCommandState, params: TableCellsDialogParameters): boolean;
    getDialogName(): string;
}
export declare class TableCellsDialogParameters extends DialogParametersBase implements ISupportCopyFrom<TableCellsDialogParameters>, ICloneable<TableCellsDialogParameters> {
    tableCellOperation: TableCellOperation;
    copyFrom(obj: TableCellsDialogParameters): void;
    clone(): TableCellsDialogParameters;
    applyConverter(_converter: SimpleConverter<number>): this;
}
export declare enum TableCellOperation {
    ShiftToTheHorizontally = 0,
    ShiftToTheVertically = 1,
    RowOperation = 2,
    ColumnOperation = 3
}
//# sourceMappingURL=dialog-insert-table-cells-command.d.ts.map