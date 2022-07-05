import { CommandBase, CommandSimpleOptions } from '../command-base';
import { SimpleCommandState } from '../command-states';
export declare class ToggleFullScreenCommand extends CommandBase<SimpleCommandState> {
    getState(): SimpleCommandState;
    executeCore(_state: SimpleCommandState, options: CommandSimpleOptions<boolean>): boolean;
    isEnabled(): boolean;
    isEnabledInReadOnlyMode(): boolean;
}
//# sourceMappingURL=toggle-full-screen-command.d.ts.map