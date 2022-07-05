import { HistoryItemIntervalState } from '../../../history/states/history-item-state';
import { HistoryItemIntervalStateObject } from '../../../history/states/history-item-state-object';
import { SubDocumentChangeBase } from '../../change-base';
import { ModelChangeType } from '../../enums';
export declare class AnchoredPictureSizeChangedSubDocumentChange implements SubDocumentChangeBase {
    subDocumentId: number;
    objectId: number;
    position: number;
    newState: HistoryItemIntervalState<HistoryItemIntervalStateObject>;
    readonly type = ModelChangeType.AnchoredPictureSizeChanged;
    constructor(subDocumentId: number, objectId: number, position: number, newState: HistoryItemIntervalState<HistoryItemIntervalStateObject>);
    toJSON(withPostData?: boolean): any;
}
//# sourceMappingURL=anchored-picture-size-changed.d.ts.map