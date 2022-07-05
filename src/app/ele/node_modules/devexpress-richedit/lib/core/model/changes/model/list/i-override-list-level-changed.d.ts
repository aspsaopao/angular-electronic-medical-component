import { HistoryItemState } from '../../../history/states/history-item-state';
import { HistoryItemListLevelStateObject } from '../../../history/states/history-item-state-object';
import { JSONIOverrideListLevelProperty } from '../../../json/enums/json-list-enums';
import { ModelChangeBase } from '../../change-base';
import { ModelChangeType } from '../../enums';
export declare class IOverrideListLevelChangedModelChange implements ModelChangeBase {
    property: JSONIOverrideListLevelProperty;
    newState: HistoryItemState<HistoryItemListLevelStateObject>;
    readonly type = ModelChangeType.IOverrideListLevelChanged;
    constructor(property: JSONIOverrideListLevelProperty, newState: HistoryItemState<HistoryItemListLevelStateObject>);
}
//# sourceMappingURL=i-override-list-level-changed.d.ts.map