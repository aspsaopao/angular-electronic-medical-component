import { CommandBase, ICommandOptions } from '../command-base';
import { SimpleCommandState } from '../command-states';
export declare abstract class GoToDocumentEndCommandBase extends CommandBase<SimpleCommandState> {
    getState(): SimpleCommandState;
    executeCore(_state: SimpleCommandState, _options: ICommandOptions): boolean;
    abstract setSelection(position: number): any;
    abstract extendSelection(): boolean;
    isEnabledInReadOnlyMode(): boolean;
}
export declare class GoToDocumentEndCommand extends GoToDocumentEndCommandBase {
    setSelection(position: number): void;
    extendSelection(): boolean;
}
export declare class ExtendGoToDocumentEndCommand extends GoToDocumentEndCommandBase {
    setSelection(position: number): void;
    extendSelection(): boolean;
}
//# sourceMappingURL=go-to-document-end-command.d.ts.map