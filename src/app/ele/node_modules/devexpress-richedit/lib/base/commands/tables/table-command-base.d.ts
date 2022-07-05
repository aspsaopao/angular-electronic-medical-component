import { CommandBase } from '../command-base';
import { ICommandState } from '../i-command';
export declare abstract class TableCommandBase<T extends ICommandState> extends CommandBase<T> {
    isEnabled(): boolean;
}
//# sourceMappingURL=table-command-base.d.ts.map