import { ICommandOptions } from '../command-base';
import { ICommandState } from '../i-command';
import { SelectionCommandBase } from './selection-command-base';
export declare abstract class GoToParagraphStartCommandBase extends SelectionCommandBase {
    executeCore(_state: ICommandState, _options: ICommandOptions): boolean;
    getPositionStartParagraph(): number;
    abstract extendSelection(): boolean;
}
export declare class GoToParagraphStartCommand extends GoToParagraphStartCommandBase {
    extendSelection(): boolean;
}
export declare class ExtendGoToParagraphStartCommand extends GoToParagraphStartCommandBase {
    extendSelection(): boolean;
}
//# sourceMappingURL=go-to-paragraph-start-command.d.ts.map