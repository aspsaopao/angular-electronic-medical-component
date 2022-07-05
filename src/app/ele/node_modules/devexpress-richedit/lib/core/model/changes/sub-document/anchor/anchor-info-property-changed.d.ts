import { HistoryItemIntervalState } from '../../../history/states/history-item-state';
import { HistoryItemIntervalStateObject } from '../../../history/states/history-item-state-object';
import { JSONAnchorInfoProperty } from '../../../json/enums/json-floating-enums';
import { SubDocumentChangeBase } from '../../change-base';
import { ModelChangeType } from '../../enums';
export declare class AnchorInfoPropertyChangedSubDocumentChange implements SubDocumentChangeBase {
    subDocumentId: number;
    objectId: number;
    property: JSONAnchorInfoProperty;
    newState: HistoryItemIntervalState<HistoryItemIntervalStateObject>;
    readonly type = ModelChangeType.AnchorInfoPropertyChanged;
    constructor(subDocumentId: number, objectId: number, property: JSONAnchorInfoProperty, newState: HistoryItemIntervalState<HistoryItemIntervalStateObject>);
}
//# sourceMappingURL=anchor-info-property-changed.d.ts.map