import { CommandBase, CommandSimpleOptions, ICommandOptions } from '../command-base';
import { SimpleCommandState } from '../command-states';
export declare class ToggleShowHorizontalRulerCommand extends CommandBase<SimpleCommandState> {
    getState(): SimpleCommandState;
    executeCore(_state: SimpleCommandState, options: CommandSimpleOptions<boolean>): boolean;
    isEnabled(_options?: ICommandOptions): boolean;
    isEnabledInReadOnlyMode(): boolean;
}
//# sourceMappingURL=toggle-show-horizontal-ruler-command.d.ts.map