import { CommandBase, ICommandOptions } from '../command-base';
import { SimpleCommandState } from '../command-states';
export declare class ContextItemTables extends CommandBase<SimpleCommandState> {
    getState(): SimpleCommandState;
    executeCore(_state: SimpleCommandState, _options: ICommandOptions): boolean;
}
//# sourceMappingURL=context-item-tables.d.ts.map