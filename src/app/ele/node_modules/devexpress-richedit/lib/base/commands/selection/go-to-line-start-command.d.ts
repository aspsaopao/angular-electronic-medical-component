import { ICommandOptions } from '../command-base';
import { ICommandState } from '../i-command';
import { SelectionCommandBase } from './selection-command-base';
export declare class GoToLineStartCommandBase extends SelectionCommandBase {
    getStartPosition(): number;
}
export declare class GoToLineStartCommand extends GoToLineStartCommandBase {
    executeCore(_state: ICommandState, _options: ICommandOptions): boolean;
}
export declare class ExtendGoToLineStartCommand extends GoToLineStartCommandBase {
    executeCore(_state: ICommandState, _options: ICommandOptions): boolean;
}
//# sourceMappingURL=go-to-line-start-command.d.ts.map