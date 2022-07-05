import { ICommandOptions } from '../command-base';
import { SimpleCommandState } from '../command-states';
import { TableCommandBase } from './table-command-base';
export declare class DeleteTableCommand extends TableCommandBase<SimpleCommandState> {
    getState(): SimpleCommandState;
    isEnabled(): boolean;
    executeCore(_state: SimpleCommandState, options: ICommandOptions): boolean;
}
//# sourceMappingURL=delete-table-command.d.ts.map