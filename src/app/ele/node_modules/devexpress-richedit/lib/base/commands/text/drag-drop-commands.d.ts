import { CommandBase, CommandSimpleOptions } from '../command-base';
import { SimpleCommandState } from '../command-states';
export declare class DragCopyContentCommand extends CommandBase<SimpleCommandState> {
    executeCore(_state: SimpleCommandState, options: CommandSimpleOptions<number>): boolean;
    canModify(): boolean;
    getState(): SimpleCommandState;
    isEnabled(): boolean;
    private tryCopyIntervalInsideTable;
}
export declare class DragMoveContentCommand extends CommandBase<SimpleCommandState> {
    executeCore(_state: SimpleCommandState, options: CommandSimpleOptions<number>): boolean;
    getState(): SimpleCommandState;
    isEnabled(): boolean;
    private tryMoveIntervalInsideTable;
    canModify(): boolean;
}
//# sourceMappingURL=drag-drop-commands.d.ts.map