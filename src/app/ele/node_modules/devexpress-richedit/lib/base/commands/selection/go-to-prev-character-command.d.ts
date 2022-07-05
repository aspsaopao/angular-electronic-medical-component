import { LayoutPosition } from '../../../core/layout/layout-position';
import { Selection } from '../../selection/selection';
import { ICommandOptions } from '../command-base';
import { ICommandState } from '../i-command';
import { SelectionCommandBase } from './selection-command-base';
export declare abstract class GoToPrevCharacterCommandBase extends SelectionCommandBase {
    executeCore(_state: ICommandState, _options: ICommandOptions): boolean;
    getPosition(): number;
    getPrevCharacterPosition(layoutPosition: LayoutPosition): LayoutPosition;
    abstract extendSelection(): boolean;
    abstract setSelection(position: number): any;
}
export declare class GoToPrevCharacterCommand extends GoToPrevCharacterCommandBase {
    setSelection(position: number): void;
    extendSelection(): boolean;
}
export declare class ExtendGoToPrevCharacterCommand extends GoToPrevCharacterCommandBase {
    setSelection(position: number): void;
    extendSelection(): boolean;
    executeCore(state: ICommandState, options: ICommandOptions): boolean;
    static jumpThroughFieldToLeft(selection: Selection): void;
}
//# sourceMappingURL=go-to-prev-character-command.d.ts.map