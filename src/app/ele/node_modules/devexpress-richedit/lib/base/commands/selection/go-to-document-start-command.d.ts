import { CommandBase, ICommandOptions } from '../command-base';
import { SimpleCommandState } from '../command-states';
export declare abstract class GoToDocumentStartCommandBase extends CommandBase<SimpleCommandState> {
    getState(): SimpleCommandState;
    executeCore(_state: SimpleCommandState, _options: ICommandOptions): boolean;
    abstract setSelection(position: number): any;
    isEnabledInReadOnlyMode(): boolean;
}
export declare class GoToDocumentStartCommand extends GoToDocumentStartCommandBase {
    setSelection(position: number): void;
}
export declare class ExtendGoToDocumentStartCommand extends GoToDocumentStartCommandBase {
    setSelection(position: number): void;
}
//# sourceMappingURL=go-to-document-start-command.d.ts.map