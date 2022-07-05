import { TableHeightUnit } from '../../../core/model/tables/secondary-structures/table-units';
import { CommandBase, CommandSimpleOptions } from '../command-base';
import { SimpleCommandState } from '../command-states';
export declare class ChangeTableRowHeightCommand extends CommandBase<SimpleCommandState> {
    getState(): SimpleCommandState;
    isEnabled(): boolean;
    executeCore(_state: SimpleCommandState, options: CommandSimpleOptions<TableHeightUnit>): boolean;
}
//# sourceMappingURL=change-table-row-height-command.d.ts.map