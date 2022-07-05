import { CharacterStyle } from '../../../character/character-style';
import { HistoryItemIntervalState } from '../../../history/states/history-item-state';
import { HistoryItemIntervalStyleStateObject } from '../../../history/states/history-item-state-object';
import { SubDocumentChangeBase } from '../../change-base';
import { ModelChangeType } from '../../enums';
export declare class CharacterStyleAppliedSubDocumentChange implements SubDocumentChangeBase {
    subDocumentId: number;
    newState: HistoryItemIntervalState<HistoryItemIntervalStyleStateObject<CharacterStyle>>;
    readonly type = ModelChangeType.CharacterStyleApplied;
    constructor(subDocumentId: number, newState: HistoryItemIntervalState<HistoryItemIntervalStyleStateObject<CharacterStyle>>);
}
//# sourceMappingURL=character-style-applied.d.ts.map