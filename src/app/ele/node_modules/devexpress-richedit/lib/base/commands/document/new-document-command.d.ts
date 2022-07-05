import { CommandBase } from '../command-base';
import { SimpleCommandState } from '../command-states';
export declare class NewDocumentCommand extends CommandBase<SimpleCommandState> {
    getState(): SimpleCommandState;
    executeCore(_state: SimpleCommandState): boolean;
    isEnabled(): boolean;
    isEnabledInClosedDocument(): boolean;
    isEnabledInReadOnlyMode(): boolean;
}
//# sourceMappingURL=new-document-command.d.ts.map