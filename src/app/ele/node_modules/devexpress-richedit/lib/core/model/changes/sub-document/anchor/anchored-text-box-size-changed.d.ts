import { HistoryItemIntervalState } from '../../../history/states/history-item-state';
import { HistoryItemIntervalStateObject } from '../../../history/states/history-item-state-object';
import { SubDocumentChangeBase } from '../../change-base';
import { ModelChangeType } from '../../enums';
export declare class AnchoredTextBoxSizeChangedSubDocumentChange implements SubDocumentChangeBase {
    subDocumentId: number;
    objectId: number;
    position: number;
    newState: HistoryItemIntervalState<HistoryItemIntervalStateObject>;
    readonly type = ModelChangeType.AnchoredTextBoxSizeChanged;
    constructor(subDocumentId: number, objectId: number, position: number, newState: HistoryItemIntervalState<HistoryItemIntervalStateObject>);
}
//# sourceMappingURL=anchored-text-box-size-changed.d.ts.map