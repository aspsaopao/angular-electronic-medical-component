import { CommandSimpleOptions } from '../command-base';
import { SimpleCommandState } from '../command-states';
import { TableCommandBase } from './table-command-base';
export declare class ApplyTableStyleCommand extends TableCommandBase<SimpleCommandState> {
    getState(): SimpleCommandState;
    isEnabled(): boolean;
    executeCore(_state: SimpleCommandState, parameter: CommandSimpleOptions<string>): boolean;
}
//# sourceMappingURL=apply-table-style-command.d.ts.map