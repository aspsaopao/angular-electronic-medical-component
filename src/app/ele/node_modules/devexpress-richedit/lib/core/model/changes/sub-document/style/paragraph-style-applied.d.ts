import { HistoryItemIntervalState } from '../../../history/states/history-item-state';
import { HistoryItemIntervalStyleStateObject } from '../../../history/states/history-item-state-object';
import { ParagraphStyle } from '../../../paragraph/paragraph-style';
import { SubDocumentChangeBase } from '../../change-base';
import { ModelChangeType } from '../../enums';
export declare class ParagraphStyleAppliedSubDocumentChange implements SubDocumentChangeBase {
    subDocumentId: number;
    newState: HistoryItemIntervalState<HistoryItemIntervalStyleStateObject<ParagraphStyle>>;
    readonly type = ModelChangeType.ParagraphStyleApplied;
    constructor(subDocumentId: number, newState: HistoryItemIntervalState<HistoryItemIntervalStyleStateObject<ParagraphStyle>>);
}
//# sourceMappingURL=paragraph-style-applied.d.ts.map