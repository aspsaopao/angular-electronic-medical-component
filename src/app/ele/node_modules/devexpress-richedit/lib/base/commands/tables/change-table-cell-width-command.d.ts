import { TableWidthUnit } from '../../../core/model/tables/secondary-structures/table-units';
import { CommandBase, CommandSimpleOptions } from '../command-base';
import { SimpleCommandState } from '../command-states';
export declare class ChangeTableCellWidthCommand extends CommandBase<SimpleCommandState> {
    getState(): SimpleCommandState;
    isEnabled(): boolean;
    executeCore(_state: SimpleCommandState, options: CommandSimpleOptions<TableWidthUnit>): boolean;
}
//# sourceMappingURL=change-table-cell-width-command.d.ts.map