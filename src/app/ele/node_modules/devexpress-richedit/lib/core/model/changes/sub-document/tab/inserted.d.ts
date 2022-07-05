import { HistoryItemIntervalState } from '../../../history/states/history-item-state';
import { HistoryItemTabStateObject } from '../../../history/states/history-item-state-object';
import { SubDocumentChangeBase } from '../../change-base';
import { ModelChangeType } from '../../enums';
export declare class TabInsertedSubDocumentChange implements SubDocumentChangeBase {
    subDocumentId: number;
    newState: HistoryItemIntervalState<HistoryItemTabStateObject>;
    readonly type = ModelChangeType.TabInserted;
    constructor(subDocumentId: number, newState: HistoryItemIntervalState<HistoryItemTabStateObject>);
    toJSON(withPostData?: boolean): any;
}
//# sourceMappingURL=inserted.d.ts.map