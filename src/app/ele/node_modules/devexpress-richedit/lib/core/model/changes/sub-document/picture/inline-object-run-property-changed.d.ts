import { HistoryItemIntervalState } from '../../../history/states/history-item-state';
import { HistoryItemIntervalStateObject } from '../../../history/states/history-item-state-object';
import { JSONInlineObjectProperty } from '../../../json/enums/json-floating-enums';
import { SubDocumentChangeBase } from '../../change-base';
import { ModelChangeType } from '../../enums';
export declare class InlineObjectRunPropertyChangedSubDocumentChange implements SubDocumentChangeBase {
    subDocumentId: number;
    property: JSONInlineObjectProperty;
    position: number;
    newState: HistoryItemIntervalState<HistoryItemIntervalStateObject>;
    readonly type = ModelChangeType.InlineObjectRunPropertyChanged;
    constructor(subDocumentId: number, property: JSONInlineObjectProperty, position: number, newState: HistoryItemIntervalState<HistoryItemIntervalStateObject>);
}
//# sourceMappingURL=inline-object-run-property-changed.d.ts.map