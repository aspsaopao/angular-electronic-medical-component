import { CommandBase, ICommandOptions } from '../command-base';
import { SimpleCommandState } from '../command-states';
export declare class SelectAllDocumentCommand extends CommandBase<SimpleCommandState> {
    getState(): SimpleCommandState;
    executeCore(_state: SimpleCommandState, _options: ICommandOptions): boolean;
    isEnabledInReadOnlyMode(): boolean;
}
//# sourceMappingURL=select-all-document-command.d.ts.map