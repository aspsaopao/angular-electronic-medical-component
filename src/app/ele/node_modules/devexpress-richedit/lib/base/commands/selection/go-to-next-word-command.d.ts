import { CommandBase, ICommandOptions } from '../command-base';
import { SimpleCommandState } from '../command-states';
export declare class GoToNextWordCommandBase extends CommandBase<SimpleCommandState> {
    getState(): SimpleCommandState;
    getStartPosition(): number;
    isEnabledInReadOnlyMode(): boolean;
}
export declare class GoToNextWordCommand extends GoToNextWordCommandBase {
    executeCore(_state: SimpleCommandState, _options: ICommandOptions): boolean;
}
export declare class ExtendGoToNextWordCommand extends GoToNextWordCommandBase {
    executeCore(_state: SimpleCommandState, _options: ICommandOptions): boolean;
}
//# sourceMappingURL=go-to-next-word-command.d.ts.map