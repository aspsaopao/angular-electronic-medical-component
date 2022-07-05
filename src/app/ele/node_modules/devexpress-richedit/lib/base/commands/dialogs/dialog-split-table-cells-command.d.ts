import { ICloneable, ISupportCopyFrom, SimpleConverter } from '@devexpress/utils/lib/types';
import { ICommandOptions } from '../command-base';
import { IntervalCommandState } from '../command-states';
import { ICommandState } from '../i-command';
import { DialogParametersBase, ShowDialogCommandBase } from './show-dialog-command-base';
export declare class DialogSplitTableCellsCommand extends ShowDialogCommandBase<SplitTableCellsDialogParameters> {
    getState(): ICommandState;
    createParameters(_options: ICommandOptions): SplitTableCellsDialogParameters;
    applyParameters(_state: IntervalCommandState, params: SplitTableCellsDialogParameters): boolean;
    getDialogName(): string;
}
export declare class SplitTableCellsDialogParameters extends DialogParametersBase implements ISupportCopyFrom<SplitTableCellsDialogParameters>, ICloneable<SplitTableCellsDialogParameters> {
    rowCount: number;
    columnCount: number;
    isMergeBeforeSplit: boolean;
    disableRowsSelector: boolean;
    availableRowNumber: number;
    copyFrom(obj: SplitTableCellsDialogParameters): void;
    clone(): SplitTableCellsDialogParameters;
    applyConverter(_converter: SimpleConverter<number>): this;
}
//# sourceMappingURL=dialog-split-table-cells-command.d.ts.map