import { ModelManipulator } from '../../../core/model/manipulators/model-manipulator';
import { Paragraph, TabAlign } from '../../../core/model/paragraph/paragraph';
import { TabInfo } from '../../../core/model/paragraph/paragraph-style';
import { SubDocument } from '../../../core/model/sub-document';
import { FixedInterval } from '@devexpress/utils/lib/intervals/fixed';
import { CommandBase, CommandSimpleOptions } from '../command-base';
import { SimpleCommandState } from '../command-states';
export declare enum RulerTabAction {
    None = 0,
    Insert = 1,
    Delete = 2
}
export declare abstract class TabRulerCommandBase<TParam> extends CommandBase<SimpleCommandState> {
    getState(): SimpleCommandState;
    isEnabled(): boolean;
    executeCore(_state: SimpleCommandState, options: CommandSimpleOptions<TParam>): boolean;
    protected findTabByPosition(paragraph: Paragraph, position: number): TabInfo;
    protected abstract executeHistoryItems(modelManipulator: ModelManipulator, subDocument: SubDocument, interval: FixedInterval, firstParagraph: Paragraph, params: any): any;
    protected getIntervalsForModifying(): FixedInterval[];
}
export declare class InsertTabToParagraphCommand extends TabRulerCommandBase<{
    position: number;
    align: TabAlign;
}> {
    protected executeHistoryItems(modelManipulator: ModelManipulator, subDocument: SubDocument, interval: FixedInterval, _firstParagraph: Paragraph, params: any): void;
}
export declare class DeleteTabAtParagraphCommand extends TabRulerCommandBase<number> {
    protected executeHistoryItems(modelManipulator: ModelManipulator, subDocument: SubDocument, interval: FixedInterval, firstParagraph: Paragraph, params: number): void;
}
export declare class MoveTabRulerInParagraphCommand extends TabRulerCommandBase<{
    start: number;
    end: number;
}> {
    protected executeHistoryItems(modelManipulator: ModelManipulator, subDocument: SubDocument, interval: FixedInterval, firstParagraph: Paragraph, params: any): void;
}
//# sourceMappingURL=ruler-paragraph-tabs-command.d.ts.map