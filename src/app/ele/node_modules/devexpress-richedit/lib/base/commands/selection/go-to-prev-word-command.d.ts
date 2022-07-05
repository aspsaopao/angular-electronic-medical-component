import { CommandBase, ICommandOptions } from '../command-base';
import { SimpleCommandState } from '../command-states';
export declare abstract class GoToPrevWordCommandBase extends CommandBase<SimpleCommandState> {
    getState(): SimpleCommandState;
    getStartPosition(): number;
    isEnabledInReadOnlyMode(): boolean;
    executeCore(_state: SimpleCommandState, _options: ICommandOptions): boolean;
    protected abstract setSelection(position: number): any;
}
export declare class GoToPrevWordCommand extends GoToPrevWordCommandBase {
    protected setSelection(position: number): void;
}
export declare class ExtendGoToPrevWordCommand extends GoToPrevWordCommandBase {
    protected setSelection(position: number): void;
}
//# sourceMappingURL=go-to-prev-word-command.d.ts.map