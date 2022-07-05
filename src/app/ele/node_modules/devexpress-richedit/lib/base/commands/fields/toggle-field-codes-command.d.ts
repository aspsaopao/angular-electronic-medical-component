import { CommandBase, CommandSimpleOptions } from '../command-base';
import { SimpleCommandState } from '../command-states';
export declare class ToggleFieldCodesCommand extends CommandBase<SimpleCommandState> {
    getState(): SimpleCommandState;
    isEnabled(): boolean;
    executeCore(_state: SimpleCommandState, options: CommandSimpleOptions<boolean>): boolean;
    isEnabledInReadOnlyMode(): boolean;
}
//# sourceMappingURL=toggle-field-codes-command.d.ts.map