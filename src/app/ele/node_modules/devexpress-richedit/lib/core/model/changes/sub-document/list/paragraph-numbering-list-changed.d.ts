import { HistoryItemIntervalState } from '../../../history/states/history-item-state';
import { HistoryItemIntervalStateObject } from '../../../history/states/history-item-state-object';
import { SubDocument } from '../../../sub-document';
import { SubDocumentChangeBase } from '../../change-base';
import { ModelChangeType } from '../../enums';
export declare class ParagraphNumberingListChangedSubDocumentChange implements SubDocumentChangeBase {
    subDocument: SubDocument;
    newState: HistoryItemIntervalState<HistoryItemIntervalStateObject>;
    oldAbstractNumberingListIndex: number;
    readonly type = ModelChangeType.ParagraphNumberingListChanged;
    get subDocumentId(): number;
    constructor(subDocument: SubDocument, newState: HistoryItemIntervalState<HistoryItemIntervalStateObject>, oldAbstractNumberingListIndex: number);
}
//# sourceMappingURL=paragraph-numbering-list-changed.d.ts.map