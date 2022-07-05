import { IsModified } from '../../../core/model/json/enums/json-top-level-enums';
import { CommandBase, CommandSimpleOptions, ICommandOptions } from '../command-base';
import { SimpleCommandState } from '../command-states';
export declare class InsertTextCommand extends CommandBase<SimpleCommandState> {
    removedInterval: boolean;
    getState(): SimpleCommandState;
    protected DEPRECATEDCorrectlMainCommandOptions(options: ICommandOptions): void;
    executeCore(_state: SimpleCommandState, options: CommandSimpleOptions<string>): boolean;
    private correctPrevHistoryRun;
    lockBarHolderUpdate(prevModifiedState: IsModified): boolean;
    lockInputPositionUpdating(prevModifiedState: IsModified): boolean;
}
//# sourceMappingURL=insert-text-command.d.ts.map