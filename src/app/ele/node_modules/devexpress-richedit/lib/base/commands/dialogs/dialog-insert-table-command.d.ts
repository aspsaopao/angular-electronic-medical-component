import { ICloneable, ISupportCopyFrom, SimpleConverter } from '@devexpress/utils/lib/types';
import { ICommandOptions } from '../command-base';
import { SimpleCommandState } from '../command-states';
import { DialogParametersBase, ShowDialogCommandBase } from './show-dialog-command-base';
export declare class DialogInsertTableCommand extends ShowDialogCommandBase<InsertTableDialogParameters> {
    createParameters(_options: ICommandOptions): InsertTableDialogParameters;
    applyParameters(_state: SimpleCommandState, params: InsertTableDialogParameters): boolean;
    getDialogName(): string;
}
export declare class InsertTableDialogParameters extends DialogParametersBase implements ISupportCopyFrom<InsertTableDialogParameters>, ICloneable<InsertTableDialogParameters> {
    rowCount: number;
    columnCount: number;
    copyFrom(obj: InsertTableDialogParameters): void;
    clone(): InsertTableDialogParameters;
    applyConverter(_converter: SimpleConverter<number>): this;
}
//# sourceMappingURL=dialog-insert-table-command.d.ts.map