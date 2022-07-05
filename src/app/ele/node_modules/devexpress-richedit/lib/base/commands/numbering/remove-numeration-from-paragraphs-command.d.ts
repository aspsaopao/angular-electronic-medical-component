import { NumberingType } from '../../../core/model/numbering-lists/numbering-list';
import { CommandOptions } from '../command-base';
import { IntervalCommandStateEx } from '../command-states';
import { NumberingListCommandBase } from './numbering-list-command-base';
export declare class DeleteNumerationFromParagraphsCommand extends NumberingListCommandBase {
    getState(options?: CommandOptions): IntervalCommandStateEx;
    executeCore(_state: IntervalCommandStateEx, options: CommandOptions): boolean;
    getNumberingListType(): NumberingType;
}
//# sourceMappingURL=remove-numeration-from-paragraphs-command.d.ts.map