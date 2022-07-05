import { HistoryItemIntervalState } from '../../../history/states/history-item-state';
import { HistoryItemIntervalStateObject } from '../../../history/states/history-item-state-object';
import { JSONCharacterFormattingProperty } from '../../../json/enums/json-character-enums';
import { SubDocumentChangeBase } from '../../change-base';
import { ModelChangeType } from '../../enums';
export declare class CharacterFormattingChangedSubDocumentChange implements SubDocumentChangeBase {
    subDocumentId: number;
    property: JSONCharacterFormattingProperty;
    newState: HistoryItemIntervalState<HistoryItemIntervalStateObject>;
    readonly type = ModelChangeType.CharacterFormattingChanged;
    constructor(subDocumentId: number, property: JSONCharacterFormattingProperty, newState: HistoryItemIntervalState<HistoryItemIntervalStateObject>);
}
//# sourceMappingURL=character-formatting-changed.d.ts.map