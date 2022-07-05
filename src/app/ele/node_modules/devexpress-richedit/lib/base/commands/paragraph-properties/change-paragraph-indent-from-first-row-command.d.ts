import { Paragraph } from '../../../core/model/paragraph/paragraph';
import { ParagraphProperties } from '../../../core/model/paragraph/paragraph-properties';
import { SubDocument } from '../../../core/model/sub-document';
import { CommandOptions } from '../command-base';
import { ICommand, ICommandState } from '../i-command';
import { ParagraphIndentCommandBase } from './paragraph-indent-command-base';
export declare abstract class ChangeParagraphIndentFromFirstRowCommandBase extends ParagraphIndentCommandBase {
    executeCore(_state: ICommandState, options: CommandOptions): boolean;
    protected abstract getMaxFirstLineIndent(paragraph: Paragraph, subDocument: SubDocument): number;
    protected abstract getFirstLineIndent(paragraph: Paragraph, tabs: number[]): number;
    protected abstract needUpdateFirstLineIndent(paragraph: Paragraph): boolean;
    protected abstract getParagraphLeftIndentCommand(): ICommand;
    private assignParagraphFirstLineIndent;
    getFirstLineIndentAbsPosition(paragraphProperties: ParagraphProperties): number;
}
export declare class IncrementParagraphIndentFromFirstRowCommand extends ChangeParagraphIndentFromFirstRowCommandBase {
    protected getParagraphLeftIndentCommand(): ICommand;
    protected getMaxFirstLineIndent(paragraph: Paragraph, subDocument: SubDocument): number;
    protected getFirstLineIndent(paragraph: Paragraph, tabs: number[]): number;
    protected needUpdateFirstLineIndent(paragraph: Paragraph): boolean;
}
export declare class DecrementParagraphIndentFromFirstRowCommand extends ChangeParagraphIndentFromFirstRowCommandBase {
    protected getMaxFirstLineIndent(_paragraph: Paragraph, _subDocument: SubDocument): number;
    protected getFirstLineIndent(paragraph: Paragraph, tabs: number[]): number;
    protected needUpdateFirstLineIndent(paragraph: Paragraph): boolean;
    protected getParagraphLeftIndentCommand(): ICommand;
}
//# sourceMappingURL=change-paragraph-indent-from-first-row-command.d.ts.map