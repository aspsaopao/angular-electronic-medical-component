import { CommandBase, CommandSimpleOptions } from '../command-base';
import { SimpleCommandState } from '../command-states';
export declare class ToggleViewMergedDataCommand extends CommandBase<SimpleCommandState> {
    getState(): SimpleCommandState;
    isEnabled(): boolean;
    canModify(): boolean;
    DEPRECATEDConvertOptionsParameter(parameter: any): boolean;
    executeCore(_state: SimpleCommandState, options: CommandSimpleOptions<boolean>): boolean;
}
//# sourceMappingURL=toggle-view-merged-data-command.d.ts.map