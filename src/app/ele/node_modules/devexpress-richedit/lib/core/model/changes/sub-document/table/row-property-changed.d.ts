import { HistoryItemState } from '../../../history/states/history-item-state';
import { HistoryItemTableRowStateObject } from '../../../history/states/history-item-state-object';
import { JSONServerTableRowProperty } from '../../../json/enums/table/json-table-row-enums';
import { SubDocument } from '../../../sub-document';
import { SubDocumentChangeBase } from '../../change-base';
import { ModelChangeType } from '../../enums';
export declare class TableRowPropertyChangedSubDocumentChange implements SubDocumentChangeBase {
    subDocument: SubDocument;
    property: JSONServerTableRowProperty;
    newState: HistoryItemState<HistoryItemTableRowStateObject>;
    readonly type = ModelChangeType.TableRowPropertyChanged;
    get subDocumentId(): number;
    constructor(subDocument: SubDocument, property: JSONServerTableRowProperty, newState: HistoryItemState<HistoryItemTableRowStateObject>);
}
//# sourceMappingURL=row-property-changed.d.ts.map