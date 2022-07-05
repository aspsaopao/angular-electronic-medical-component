import { LayoutPosition } from '../../../core/layout/layout-position';
import { ICommandOptions } from '../command-base';
import { ICommandState } from '../i-command';
import { SelectionCommandBase } from './selection-command-base';
export declare abstract class GoToLineEndCommandBase extends SelectionCommandBase {
    endOfLine: boolean;
    executeCore(_state: ICommandState, _options: ICommandOptions): boolean;
    abstract setSelection(pos: number, keepX: number): any;
    getEndPosition(): number;
    abstract getEndPositionCore(layoutPosition: LayoutPosition): number;
}
export declare class GoToLineEndCommand extends GoToLineEndCommandBase {
    setSelection(pos: number, keepX: number): void;
    getEndPositionCore(layoutPosition: LayoutPosition): number;
}
export declare class ExtendGoToLineEndCommand extends GoToLineEndCommandBase {
    setSelection(pos: number, keepX: number): void;
    getEndPositionCore(layoutPosition: LayoutPosition): number;
}
//# sourceMappingURL=go-to-line-end-command.d.ts.map