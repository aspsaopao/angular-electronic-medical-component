import { IListLevel } from '../../../core/model/numbering-lists/list-level';
import { NumberingListBase, NumberingType } from '../../../core/model/numbering-lists/numbering-list';
import { CommandOptions, CommandSimpleOptions } from '../command-base';
import { IntervalCommandStateEx } from '../command-states';
import { NumberingListCommandBaseBase } from './numbering-list-command-base';
export declare class InsertNumerationToParagraphsCommand extends NumberingListCommandBaseBase<CommandSimpleOptions<NumberingListBase<IListLevel>>> {
    abstractNumberingList: NumberingListBase<IListLevel>;
    getState(options?: CommandOptions): IntervalCommandStateEx;
    executeCore(_state: IntervalCommandStateEx, options: CommandSimpleOptions<NumberingListBase<IListLevel>>): boolean;
    private insertNumeration;
    getNumberingListType(): NumberingType;
}
//# sourceMappingURL=insert-numeration-to-paragraphs-command.d.ts.map