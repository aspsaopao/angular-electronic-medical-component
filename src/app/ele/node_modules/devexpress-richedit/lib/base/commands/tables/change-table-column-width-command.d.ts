import { TableWidthUnit } from '../../../core/model/tables/secondary-structures/table-units';
import { CommandBase, CommandSimpleOptions } from '../command-base';
import { SimpleCommandState } from '../command-states';
export declare class ChangeTableColumnWidthCommand extends CommandBase<SimpleCommandState> {
    getState(): SimpleCommandState;
    isEnabled(): boolean;
    executeCore(_state: SimpleCommandState, options: CommandSimpleOptions<TableWidthUnit>): boolean;
}
//# sourceMappingURL=change-table-column-width-command.d.ts.map