import { CommandSimpleOptions } from '../command-base';
import { ICommandState } from '../i-command';
import { SelectionCommandBase } from './selection-command-base';
export declare class SelectLineCommand extends SelectionCommandBase {
    executeCore(_state: ICommandState, options: CommandSimpleOptions<number>): boolean;
    setSelection(startPosition: number, endPosition: number): void;
}
export declare class AddSelectedLineCommandNoUpdateControlState extends SelectLineCommand {
    setSelection(startPosition: number, endPosition: number): void;
}
export declare class ExtendSelectLineCommand extends SelectionCommandBase {
    executeCore(_state: ICommandState, options: CommandSimpleOptions<number>): boolean;
}
export declare class SelectLineCommandNoUpdateControlState extends SelectLineCommand {
}
export declare class ExtendSelectLineCommandNoUpdateControlState extends ExtendSelectLineCommand {
}
//# sourceMappingURL=select-line-command.d.ts.map