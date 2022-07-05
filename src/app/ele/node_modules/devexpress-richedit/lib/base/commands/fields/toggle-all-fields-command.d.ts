import { CommandBase, ICommandOptions } from '../command-base';
import { IntervalCommandState } from '../command-states';
export declare class ToggleAllFieldsCommand extends CommandBase<IntervalCommandState> {
    getState(): IntervalCommandState;
    isEnabled(): boolean;
    executeCore(_state: IntervalCommandState, options: ICommandOptions): boolean;
    isEnabledInReadOnlyMode(): boolean;
}
//# sourceMappingURL=toggle-all-fields-command.d.ts.map