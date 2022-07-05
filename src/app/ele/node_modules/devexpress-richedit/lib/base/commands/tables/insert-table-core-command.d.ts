import { CommandBase, CommandSimpleOptions } from '../command-base';
import { SimpleCommandState } from '../command-states';
export declare class InsertTableCoreCommand extends CommandBase<SimpleCommandState> {
    getState(): SimpleCommandState;
    isEnabled(): boolean;
    executeCore(_state: SimpleCommandState, options: CommandSimpleOptions<{
        rowCount: number;
        cellCount: number;
    }>): boolean;
}
//# sourceMappingURL=insert-table-core-command.d.ts.map