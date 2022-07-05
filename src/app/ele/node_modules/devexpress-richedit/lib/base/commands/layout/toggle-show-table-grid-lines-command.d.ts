import { CommandBase, CommandSimpleOptions } from '../command-base';
import { SimpleCommandState } from '../command-states';
export declare class ToggleShowTableGridLinesCommand extends CommandBase<SimpleCommandState> {
    getState(): SimpleCommandState;
    isEnabled(): boolean;
    DEPRECATEDConvertOptionsParameter(parameter: any): boolean;
    executeCore(_state: SimpleCommandState, options: CommandSimpleOptions<boolean>): boolean;
    isEnabledInReadOnlyMode(): boolean;
}
//# sourceMappingURL=toggle-show-table-grid-lines-command.d.ts.map