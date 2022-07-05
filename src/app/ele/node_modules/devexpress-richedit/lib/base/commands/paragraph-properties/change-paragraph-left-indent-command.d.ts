import { Paragraph } from '../../../core/model/paragraph/paragraph';
import { CommandOptions } from '../command-base';
import { ICommandState } from '../i-command';
import { ParagraphIndentCommandBase } from './paragraph-indent-command-base';
export declare abstract class ChangeParagraphLeftIndentCommand extends ParagraphIndentCommandBase {
    executeCore(_state: ICommandState, options: CommandOptions): boolean;
    applyLeftIndentToParagraph(paragraph: Paragraph, tabs: number[]): boolean;
    abstract getNewLeftIndent(paragraph: Paragraph, tabs: number[]): number;
    abstract getMaxLeftIndent(paragraph: Paragraph): number;
}
export declare class IncrementParagraphLeftIndentCommand extends ChangeParagraphLeftIndentCommand {
    getNewLeftIndent(paragraph: Paragraph, tabs: number[]): number;
    getMaxLeftIndent(paragraph: Paragraph): number;
    private getPosition;
}
export declare class DecrementParagraphLeftIndentCommand extends ChangeParagraphLeftIndentCommand {
    getNewLeftIndent(paragraph: Paragraph, tabs: number[]): number;
    getMaxLeftIndent(_paragraph: Paragraph): number;
}
//# sourceMappingURL=change-paragraph-left-indent-command.d.ts.map