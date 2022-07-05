import { CommandBase, ICommandOptions } from '../command-base';
import { IntervalCommandState } from '../command-states';
export declare class ShowAllFieldCodesCommand extends CommandBase<IntervalCommandState> {
    getState(): IntervalCommandState;
    isEnabled(): boolean;
    executeCore(_state: IntervalCommandState, _options: ICommandOptions): boolean;
    protected baseValue(): boolean;
    isEnabledInReadOnlyMode(): boolean;
}
export declare class ShowAllFieldResultCommand extends ShowAllFieldCodesCommand {
    protected baseValue(): boolean;
}
//# sourceMappingURL=show-all-field-code-result-command.d.ts.map