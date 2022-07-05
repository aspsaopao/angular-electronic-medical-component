import { CommandBase, ICommandOptions } from '../command-base';
import { SimpleCommandState } from '../command-states';
export declare class RemoveHyperlinksCommand extends CommandBase<SimpleCommandState> {
    getState(): SimpleCommandState;
    isEnabled(): boolean;
    executeCore(_state: SimpleCommandState, options: ICommandOptions): boolean;
    protected DEPRECATEDCorrectlMainCommandOptions(options: ICommandOptions): void;
}
//# sourceMappingURL=remove-hyperlinks-command.d.ts.map