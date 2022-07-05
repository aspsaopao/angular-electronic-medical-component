import { CommandBase } from '../command-base';
import { SimpleCommandState } from '../command-states';
export declare class ReloadDocumentCommand extends CommandBase<SimpleCommandState> {
    getState(): SimpleCommandState;
    executeCore(_state: SimpleCommandState): boolean;
    isEnabledInReadOnlyMode(): boolean;
}
//# sourceMappingURL=reload-document-command.d.ts.map