import { CommandBase, ICommandOptions } from '../command-base';
import { SimpleCommandState } from '../command-states';
export declare class HideFindResultsCommand extends CommandBase<SimpleCommandState> {
    getState(): SimpleCommandState;
    executeCore(_state: SimpleCommandState, _parameter: ICommandOptions): boolean;
    isEnabledInReadOnlyMode(): boolean;
}
//# sourceMappingURL=hide-find-results-command.d.ts.map