import { ICommandOptions } from '../command-base';
import { ICommandState } from '../i-command';
import { SelectionCommandBase } from './selection-command-base';
export declare abstract class GoToParagraphEndCommandBase extends SelectionCommandBase {
    executeCore(_state: ICommandState, _options: ICommandOptions): boolean;
    getPositionEndParagraph(): number;
    abstract extendSelection(): boolean;
}
export declare class GoToParagraphEndCommand extends GoToParagraphEndCommandBase {
    extendSelection(): boolean;
}
export declare class ExtendGoToParagraphEndCommand extends GoToParagraphEndCommandBase {
    extendSelection(): boolean;
}
//# sourceMappingURL=go-to-paragraph-end-command.d.ts.map