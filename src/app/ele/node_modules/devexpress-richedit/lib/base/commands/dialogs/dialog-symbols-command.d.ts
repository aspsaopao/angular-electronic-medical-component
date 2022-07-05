import { ICloneable, ISupportCopyFrom, SimpleConverter } from '@devexpress/utils/lib/types';
import { CommandSimpleOptions, ICommandOptions } from '../command-base';
import { IntervalCommandState, IntervalCommandStateEx } from '../command-states';
import { DialogCustomNumberingListParameters } from './dialog-custom-numbering-list-command';
import { DialogParametersBase, ShowDialogCommandBase } from './show-dialog-command-base';
export declare abstract class DialogSymbolsCommandBase<InitialParametersT extends DialogParametersBase> extends ShowDialogCommandBase<InitialParametersT> {
    getDialogName(): string;
}
export declare class DialogSymbolsCommand extends DialogSymbolsCommandBase<DialogSymbolsParameters> {
    getState(): IntervalCommandStateEx;
    createParameters(_options: ICommandOptions): DialogSymbolsParameters;
    applyParameters(state: IntervalCommandStateEx, newParams: DialogSymbolsParameters): boolean;
}
export declare class DialogServiceSymbolsCommand extends DialogSymbolsCommandBase<DialogSymbolsParameters> {
    dialogCustomNumberingListParameters: DialogCustomNumberingListParameters;
    createParameters(options: CommandSimpleOptions<DialogCustomNumberingListParameters>): DialogSymbolsParameters;
    applyParameters(_state: IntervalCommandState, newParams: DialogSymbolsParameters): boolean;
    afterClosing(): void;
}
export declare class DialogSymbolsParameters extends DialogParametersBase implements ISupportCopyFrom<DialogSymbolsParameters>, ICloneable<DialogSymbolsParameters> {
    symbol: string;
    fontName: string;
    copyFrom(obj: DialogSymbolsParameters): void;
    clone(): DialogSymbolsParameters;
    applyConverter(_converter: SimpleConverter<number>): this;
}
//# sourceMappingURL=dialog-symbols-command.d.ts.map