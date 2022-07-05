import { FixedInterval } from '@devexpress/utils/lib/intervals/fixed';
import { HistoryItemIntervalState } from '../history/states/history-item-state';
import { HistoryItemTabStateObject } from '../history/states/history-item-state-object';
import { TabInfo } from '../paragraph/paragraph-style';
import { SubDocument } from '../sub-document';
import { BaseManipulator } from './base-manipulator';
export declare class TabsManipulator extends BaseManipulator {
    insertTabToParagraph(subDocument: SubDocument, interval: FixedInterval, tabInfo: TabInfo): HistoryItemIntervalState<HistoryItemTabStateObject>;
    deleteTabAtParagraph(subDocument: SubDocument, interval: FixedInterval, tabInfo: TabInfo): HistoryItemIntervalState<HistoryItemTabStateObject>;
    restoreInsertedTabToParagraph(subDocument: SubDocument, state: HistoryItemIntervalState<HistoryItemTabStateObject>): void;
    restoreDeletedTabAtParagraph(subDocument: SubDocument, state: HistoryItemIntervalState<HistoryItemTabStateObject>): void;
    private deleteTab;
    private addTab;
}
//# sourceMappingURL=tabs-manipulator.d.ts.map