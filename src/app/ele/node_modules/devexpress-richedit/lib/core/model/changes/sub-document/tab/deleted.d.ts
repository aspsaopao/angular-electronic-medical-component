import { HistoryItemIntervalState } from '../../../history/states/history-item-state';
import { HistoryItemTabStateObject } from '../../../history/states/history-item-state-object';
import { SubDocumentChangeBase } from '../../change-base';
import { ModelChangeType } from '../../enums';
export declare class TabDeletedSubDocumentChange implements SubDocumentChangeBase {
    subDocumentId: number;
    newState: HistoryItemIntervalState<HistoryItemTabStateObject>;
    readonly type = ModelChangeType.TabDeleted;
    constructor(subDocumentId: number, newState: HistoryItemIntervalState<HistoryItemTabStateObject>);
    toJSON(withPostData?: boolean): any;
}
//# sourceMappingURL=deleted.d.ts.map