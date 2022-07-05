import { HistoryItemIntervalState } from '../../../history/states/history-item-state';
import { HistoryItemTextBufferStateObject } from '../../../history/states/history-item-state-object';
import { SubDocumentChangeBase } from '../../change-base';
import { ModelChangeType } from '../../enums';
export declare class TextBufferChangedSubDocumentChange implements SubDocumentChangeBase {
    subDocumentId: number;
    newState: HistoryItemIntervalState<HistoryItemTextBufferStateObject>;
    readonly type = ModelChangeType.TextBufferChanged;
    constructor(subDocumentId: number, newState: HistoryItemIntervalState<HistoryItemTextBufferStateObject>);
}
//# sourceMappingURL=text-buffer-changed.d.ts.map