import { CommandBase, CommandSimpleOptions } from '../../base/commands/command-base';
import { SimpleCommandState } from '../../base/commands/command-states';
import { ICommandState } from '../../base/commands/i-command';
export declare class NewDocumentCommand extends CommandBase<SimpleCommandState> {
    getState(): SimpleCommandState;
    executeCore(_state: SimpleCommandState, _options: CommandSimpleOptions<string>): boolean;
    static newDocumentInner<T extends ICommandState>(this: CommandBase<T>): void;
    isEnabled(): boolean;
    isEnabledInClosedDocument(): boolean;
    isEnabledInReadOnlyMode(): boolean;
}
//# sourceMappingURL=new-document-command.d.ts.map