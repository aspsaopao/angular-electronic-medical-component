import { HistoryItemState } from '../../../history/states/history-item-state';
import { HistoryItemTableStateObject } from '../../../history/states/history-item-state-object';
import { JSONEnumTableProperty } from '../../../json/enums/table/json-table-enums';
import { SubDocument } from '../../../sub-document';
import { SubDocumentChangeBase } from '../../change-base';
import { ModelChangeType } from '../../enums';
export declare class TablePropertyChangedSubDocumentChange implements SubDocumentChangeBase {
    subDocument: SubDocument;
    property: JSONEnumTableProperty;
    newState: HistoryItemState<HistoryItemTableStateObject>;
    readonly type = ModelChangeType.TablePropertyChanged;
    get subDocumentId(): number;
    constructor(subDocument: SubDocument, property: JSONEnumTableProperty, newState: HistoryItemState<HistoryItemTableStateObject>);
}
//# sourceMappingURL=property-changed.d.ts.map