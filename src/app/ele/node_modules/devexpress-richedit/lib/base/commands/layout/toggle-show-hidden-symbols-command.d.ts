import { CommandBase, CommandSimpleOptions } from '../command-base';
import { SimpleCommandState } from '../command-states';
export declare class ToggleShowHiddenSymbolsCommand extends CommandBase<SimpleCommandState> {
    getState(): SimpleCommandState;
    DEPRECATEDConvertOptionsParameter(parameter: any): boolean;
    executeCore(_state: SimpleCommandState, options: CommandSimpleOptions<boolean>): boolean;
    isEnabledInReadOnlyMode(): boolean;
}
//# sourceMappingURL=toggle-show-hidden-symbols-command.d.ts.map