import { CommandBase, ICommandOptions } from '../command-base';
import { SimpleCommandState } from '../command-states';
export declare class UpdateTableOfContentsCommand extends CommandBase<SimpleCommandState> {
    getState(): SimpleCommandState;
    isEnabled(): boolean;
    executeCore(_state: SimpleCommandState, _options: ICommandOptions): boolean;
}
//# sourceMappingURL=update-table-of-contents-command.d.ts.map