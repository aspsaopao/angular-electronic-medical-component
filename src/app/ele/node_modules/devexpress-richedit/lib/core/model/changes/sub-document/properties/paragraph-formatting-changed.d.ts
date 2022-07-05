import { HistoryItemIntervalState } from '../../../history/states/history-item-state';
import { HistoryItemIntervalStateObject } from '../../../history/states/history-item-state-object';
import { JSONParagraphFormattingProperty } from '../../../json/enums/json-paragraph-enums';
import { SubDocumentChangeBase } from '../../change-base';
import { ModelChangeType } from '../../enums';
export declare class ParagraphFormattingChangedSubDocumentChange implements SubDocumentChangeBase {
    subDocumentId: number;
    property: JSONParagraphFormattingProperty;
    newState: HistoryItemIntervalState<HistoryItemIntervalStateObject>;
    readonly type = ModelChangeType.ParagraphFormattingChanged;
    constructor(subDocumentId: number, property: JSONParagraphFormattingProperty, newState: HistoryItemIntervalState<HistoryItemIntervalStateObject>);
}
//# sourceMappingURL=paragraph-formatting-changed.d.ts.map