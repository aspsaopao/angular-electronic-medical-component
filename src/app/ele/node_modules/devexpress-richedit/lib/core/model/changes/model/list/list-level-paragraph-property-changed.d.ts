import { HistoryItemState } from '../../../history/states/history-item-state';
import { HistoryItemListLevelUseStateObject } from '../../../history/states/history-item-state-object';
import { JSONParagraphFormattingProperty } from '../../../json/enums/json-paragraph-enums';
import { ModelChangeBase } from '../../change-base';
import { ModelChangeType } from '../../enums';
export declare class ListLevelParagraphPropertyChangedModelChange implements ModelChangeBase {
    property: JSONParagraphFormattingProperty;
    newState: HistoryItemState<HistoryItemListLevelUseStateObject>;
    readonly type = ModelChangeType.ListLevelParagraphPropertyChanged;
    constructor(property: JSONParagraphFormattingProperty, newState: HistoryItemState<HistoryItemListLevelUseStateObject>);
}
//# sourceMappingURL=list-level-paragraph-property-changed.d.ts.map