import { ICloneable, ISupportConverting, ISupportCopyFrom, SimpleConverter } from '@devexpress/utils/lib/types';
import { CommandBase, ICommandOptions } from '../command-base';
import { ICommandState } from '../i-command';
export declare abstract class ShowDialogCommandBase<InitialParametersT extends DialogParametersBase> extends CommandBase<ICommandState> {
    getState(): ICommandState;
    executeCore(state: ICommandState, options: ICommandOptions): boolean;
    abstract createParameters(options: ICommandOptions): InitialParametersT;
    abstract getDialogName(): string;
    applyParameters(_state: ICommandState, _newParameters: InitialParametersT, _oldParameters: InitialParametersT): boolean;
    afterClosing(_options: ICommandOptions): void;
    isModal(): boolean;
}
export declare abstract class DialogParametersBase implements ISupportCopyFrom<DialogParametersBase>, ICloneable<DialogParametersBase>, ISupportConverting<number> {
    copyFrom(_obj: DialogParametersBase): void;
    abstract clone(): DialogParametersBase;
    abstract applyConverter(converter: SimpleConverter<number>): this;
}
export declare enum DialogTitleText {
    SaveAsFile = 0,
    OpenFile = 1,
    Font = 2,
    Paragraph = 3,
    PageSetup = 4,
    Columns = 5,
    InsertImage = 6,
    Error = 7
}
//# sourceMappingURL=show-dialog-command-base.d.ts.map