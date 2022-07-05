import { HistoryItemState } from '../../../history/states/history-item-state';
import { HistoryItemListLevelStateObject } from '../../../history/states/history-item-state-object';
import { JSONListLevelProperty } from '../../../json/enums/json-list-enums';
import { ModelChangeBase } from '../../change-base';
import { ModelChangeType } from '../../enums';
export declare class ListLevelPropertyChangedModelChange implements ModelChangeBase {
    property: JSONListLevelProperty;
    newState: HistoryItemState<HistoryItemListLevelStateObject>;
    readonly type = ModelChangeType.ListLevelPropertyChanged;
    constructor(property: JSONListLevelProperty, newState: HistoryItemState<HistoryItemListLevelStateObject>);
}
//# sourceMappingURL=list-level-property-changed.d.ts.map