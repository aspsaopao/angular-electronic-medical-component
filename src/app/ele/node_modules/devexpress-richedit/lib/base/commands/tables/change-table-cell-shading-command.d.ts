import { CommandBase, CommandSimpleOptions } from '../command-base';
import { SimpleCommandState } from '../command-states';
export declare class ChangeTableCellShadingCommand extends CommandBase<SimpleCommandState> {
    getState(): SimpleCommandState;
    isEnabled(): boolean;
    DEPRECATEDConvertOptionsParameter(parameter: any): number;
    executeCore(_state: SimpleCommandState, options: CommandSimpleOptions<number>): boolean;
}
//# sourceMappingURL=change-table-cell-shading-command.d.ts.map