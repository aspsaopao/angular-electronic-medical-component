import { ICommandOptions } from '../command-base';
import { SimpleCommandState } from '../command-states';
import { TableCommandBase } from './table-command-base';
export declare class AutoFitCommandBase extends TableCommandBase<SimpleCommandState> {
    getState(): SimpleCommandState;
    isEnabled(): boolean;
}
export declare class AutoFitContentsCommand extends AutoFitCommandBase {
    executeCore(state: SimpleCommandState, parameter: ICommandOptions): boolean;
}
export declare class AutoFitWindowCommand extends AutoFitCommandBase {
    executeCore(state: SimpleCommandState, parameter: ICommandOptions): boolean;
}
export declare class FixedColumnWidthCommand extends AutoFitCommandBase {
    executeCore(state: SimpleCommandState, parameter: ICommandOptions): boolean;
    private getGrid;
    private getAvaliableWidth_px;
}
//# sourceMappingURL=auto-fit-commands.d.ts.map