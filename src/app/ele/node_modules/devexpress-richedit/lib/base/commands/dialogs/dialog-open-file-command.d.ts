import { ICloneable, ISupportCopyFrom, SimpleConverter } from '@devexpress/utils/lib/types';
import { ICommandOptions } from '../command-base';
import { ICommandState } from '../i-command';
import { DialogParametersBase, ShowDialogCommandBase } from './show-dialog-command-base';
export declare class DialogOpenFileCommand extends ShowDialogCommandBase<OpenFileDialogParameters> {
    getState(): ICommandState;
    createParameters(_options: ICommandOptions): OpenFileDialogParameters;
    executeCore(state: ICommandState): boolean;
    applyParameters(_state: ICommandState, params: OpenFileDialogParameters): boolean;
    getDialogName(): string;
    executeShowErrorMessageCommand(): boolean;
    isEnabledInReadOnlyMode(): boolean;
    isEnabled(): boolean;
}
export declare class OpenFileDialogParameters extends DialogParametersBase implements ISupportCopyFrom<OpenFileDialogParameters>, ICloneable<OpenFileDialogParameters> {
    src: string;
    copyFrom(obj: OpenFileDialogParameters): void;
    clone(): OpenFileDialogParameters;
    applyConverter(_converter: SimpleConverter<number>): this;
}
//# sourceMappingURL=dialog-open-file-command.d.ts.map