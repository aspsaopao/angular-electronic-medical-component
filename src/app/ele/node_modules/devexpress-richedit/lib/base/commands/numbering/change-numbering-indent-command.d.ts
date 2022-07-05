import { Paragraph } from '../../../core/model/paragraph/paragraph';
import { SubDocument } from '../../../core/model/sub-document';
import { CommandOptions, CommandSimpleOptions } from '../command-base';
import { SimpleCommandState } from '../command-states';
import { ParagraphIndentCommandBase } from '../paragraph-properties/paragraph-indent-command-base';
export declare abstract class ChangeNumberingIndentCommandBase extends ParagraphIndentCommandBase {
    getState(options?: CommandOptions): SimpleCommandState;
    isEnabled(options: CommandOptions): boolean;
    executeCore(_state: SimpleCommandState, options: CommandSimpleOptions<boolean>): boolean;
    changeListLevelIndices(paragraphIndices: number[], subDocument: SubDocument): void;
    changeListLevelIndents(paragraphIndices: number[], subDocument: SubDocument): void;
    assignNewIndent(abstractNumberingListIndex: number, nextListLevelIndent: number): void;
    abstract getNextListLevelIndent(currentLeftIndent: number, tabs: number[]): number;
    abstract getNewListLevelIndex(paragraph: Paragraph): number;
    private calculateLeftIndentDelta;
    private hasPreviousParagraphsInList;
    private getLeftIndentPosition;
}
export declare class IncrementNumberingIndentCommand extends ChangeNumberingIndentCommandBase {
    getNextListLevelIndent(currentLeftIndent: number, tabs: number[]): number;
    getNewListLevelIndex(paragraph: Paragraph): number;
}
export declare class DecrementNumberingIndentCommand extends ChangeNumberingIndentCommandBase {
    getNextListLevelIndent(currentLeftIndent: number, tabs: number[]): number;
    getNewListLevelIndex(paragraph: Paragraph): number;
}
//# sourceMappingURL=change-numbering-indent-command.d.ts.map