import { Selection } from '../../selection/selection';
import { ICommandOptions } from '../command-base';
import { ICommandState } from '../i-command';
import { SelectionCommandBase } from './selection-command-base';
export declare abstract class GoToNextCharacterCommandBase extends SelectionCommandBase {
    executeCore(_state: ICommandState, _options: ICommandOptions): boolean;
    abstract setSelection(position: number): any;
    abstract extendSelection(): boolean;
    private getPosition;
    private getNextCharacterPosition;
}
export declare class GoToNextCharacterCommand extends GoToNextCharacterCommandBase {
    setSelection(position: number): void;
    extendSelection(): boolean;
}
export declare class ExtendGoToNextCharacterCommand extends GoToNextCharacterCommandBase {
    setSelection(position: number): void;
    extendSelection(): boolean;
    executeCore(state: ICommandState, options: ICommandOptions): boolean;
    static jumpThroughFieldToRight(selection: Selection): void;
}
//# sourceMappingURL=go-to-next-character-command.d.ts.map