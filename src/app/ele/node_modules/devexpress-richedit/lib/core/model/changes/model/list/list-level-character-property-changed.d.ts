import { HistoryItemState } from '../../../history/states/history-item-state';
import { HistoryItemListLevelUseStateObject } from '../../../history/states/history-item-state-object';
import { JSONCharacterFormattingProperty } from '../../../json/enums/json-character-enums';
import { ModelChangeBase } from '../../change-base';
import { ModelChangeType } from '../../enums';
export declare class ListLevelCharacterPropertyChangedModelChange implements ModelChangeBase {
    property: JSONCharacterFormattingProperty;
    newState: HistoryItemState<HistoryItemListLevelUseStateObject>;
    readonly type = ModelChangeType.ListLevelCharacterPropertyChanged;
    constructor(property: JSONCharacterFormattingProperty, newState: HistoryItemState<HistoryItemListLevelUseStateObject>);
}
//# sourceMappingURL=list-level-character-property-changed.d.ts.map