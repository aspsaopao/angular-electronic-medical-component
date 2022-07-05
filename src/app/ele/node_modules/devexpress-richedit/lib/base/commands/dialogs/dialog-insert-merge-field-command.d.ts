import { ICloneable, ISupportCopyFrom, SimpleConverter } from '@devexpress/utils/lib/types';
import { ICommandOptions } from '../command-base';
import { IntervalCommandState } from '../command-states';
import { ICommandState } from '../i-command';
import { DialogParametersBase, ShowDialogCommandBase } from './show-dialog-command-base';
export declare class DialogInsertMergeFieldCommand extends ShowDialogCommandBase<InsertMergeFieldDialogParameters> {
    getState(): ICommandState;
    isEnabled(): boolean;
    createParameters(_options: ICommandOptions): InsertMergeFieldDialogParameters;
    applyParameters(_state: IntervalCommandState, params: InsertMergeFieldDialogParameters): boolean;
    getDialogName(): string;
    isModal(): boolean;
}
export declare class InsertMergeFieldDialogParameters extends DialogParametersBase implements ISupportCopyFrom<InsertMergeFieldDialogParameters>, ICloneable<InsertMergeFieldDialogParameters> {
    fieldName: string;
    copyFrom(obj: InsertMergeFieldDialogParameters): void;
    clone(): InsertMergeFieldDialogParameters;
    applyConverter(_converter: SimpleConverter<number>): this;
}
//# sourceMappingURL=dialog-insert-merge-field-command.d.ts.map