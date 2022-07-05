import { LayoutPosition } from '../../../core/layout/layout-position';
import { LayoutBox } from '../../../core/layout/main-structures/layout-boxes/layout-box';
import { IListLevel } from '../../../core/model/numbering-lists/list-level';
import { AbstractNumberingList, NumberingList, NumberingType } from '../../../core/model/numbering-lists/numbering-list';
import { Paragraph } from '../../../core/model/paragraph/paragraph';
import { SubDocument } from '../../../core/model/sub-document';
import { FixedInterval } from '@devexpress/utils/lib/intervals/fixed';
import { CommandBase, CommandOptions, CommandSimpleOptions } from '../command-base';
import { IntervalCommandStateEx } from '../command-states';
export declare abstract class NumberingListCommandBaseBase<OptionsType extends CommandOptions> extends CommandBase<IntervalCommandStateEx> {
    getState(options?: CommandOptions): IntervalCommandStateEx;
    getValue(intervals: FixedInterval[], subDocument: SubDocument): boolean;
    protected getIntervalsForModifying(): FixedInterval[];
    DEPRECATEDConvertOptionsParameter(parameter: any): number;
    abstract executeCore(state: IntervalCommandStateEx, options: OptionsType): boolean;
    deleteNumberingList(paragraphIndices: number[], subDocument: SubDocument): void;
    insertNumberingList(paragraphIndices: number[], startIndex: number, subDocument: SubDocument): void;
    changeNumberingList(paragraphIndices: number[], subDocument: SubDocument): void;
    modifyLevels(paragraphIndices: number[], subDocument: SubDocument): void;
    getAbstractNumberingList(): AbstractNumberingList;
    insertNumberingListCore(paragraphIndices: number[], targetListIndex: number, paragraphsLevelIndices: number[], paragraphsLayoutPositions: LayoutPosition[], subDocument: SubDocument): void;
    private processOldNumberingList;
    private deleteLeadingWhiteSpaces;
    private notInsideField;
    private correctSelectionIntervals;
    getParagraphsLayoutPositions(paragraphIndices: number[], subDocument: SubDocument): LayoutPosition[];
    getParagraphsLevelIndices(paragraphIndices: number[], layoutPositions: LayoutPosition[], _continueNumberingList: boolean, listIndex: number, listLevelIndex: number, subDocument: SubDocument): number[];
    calculateParagraphListLevel(layoutLeftIndent: number, _paragraph: Paragraph, numberingList: NumberingList): number;
    getStartBox(boxes: LayoutBox[]): LayoutBox;
    createNewList(template: AbstractNumberingList): number;
    processParagraphByIndex(_paragraphIndex: number): boolean;
    getNumberingListTemplateIndex(type: NumberingType): number;
    areAllParagraphsHasValidNumberingListType(intervals: FixedInterval[], subDocument: SubDocument): boolean;
    getNumberingListType(): NumberingType;
    assignLevelsIndents(paragraphIndex: number, listIndex: number, subDocument: SubDocument): void;
    assignLevelsIndentsCore(paragraphIndex: number, listIndex: number, listLevels: IListLevel[], subDocument: SubDocument): void;
}
export declare class NumberingListCommandBase extends NumberingListCommandBaseBase<CommandSimpleOptions<number>> {
    executeCore(state: IntervalCommandStateEx, options: CommandSimpleOptions<number>): boolean;
}
//# sourceMappingURL=numbering-list-command-base.d.ts.map