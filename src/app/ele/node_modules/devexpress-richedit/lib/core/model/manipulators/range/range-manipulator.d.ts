import { FixedInterval } from '@devexpress/utils/lib/intervals/fixed';
import { HistoryRun } from '../../character/history-runs';
import { SubDocument, SubDocumentInterval } from '../../sub-document';
import { BaseManipulator } from '../base-manipulator';
import { RemoveIntervalOperationResult } from './remove-interval-operation';
export declare class RangeManipulator extends BaseManipulator {
    copyIntervalTo(subDocument: SubDocument, interval: FixedInterval, toPosition: number): void;
    moveIntervalTo(subDocInterval: SubDocumentInterval, toPosition: number): FixedInterval;
    removeIntervalInner(subDocument: SubDocument, interval: FixedInterval, setPropertiesSecondParagraph: boolean): RemoveIntervalOperationResult;
    removeIntervalWithoutHistory(subDocument: SubDocument, interval: FixedInterval, setPropertiesSecondParagraph: boolean): void;
    restoreRemovedInterval(subDocument: SubDocument, removeOperationResult: RemoveIntervalOperationResult): void;
    unpackHistoryRunsToModel(subDocument: SubDocument, historyRuns: HistoryRun[]): void;
    removeInterval(subDocInterval: SubDocumentInterval, removeTableIfItMatchesWithInterval: boolean, clearLastParagraphIfIntervalMatchesWholeDocument: boolean, forbidNonEmptyParagraphRemovingBeforeTable?: boolean): void;
}
//# sourceMappingURL=range-manipulator.d.ts.map