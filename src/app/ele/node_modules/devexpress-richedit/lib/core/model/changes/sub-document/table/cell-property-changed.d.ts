import { HistoryItemState } from '../../../history/states/history-item-state';
import { HistoryItemTableCellStateObject } from '../../../history/states/history-item-state-object';
import { JSONServerTableCellProperty } from '../../../json/enums/table/json-table-cell-enums';
import { SubDocument } from '../../../sub-document';
import { SubDocumentChangeBase } from '../../change-base';
import { ModelChangeType } from '../../enums';
export declare class TableCellPropertyChangedSubDocumentChange implements SubDocumentChangeBase {
    subDocument: SubDocument;
    property: JSONServerTableCellProperty;
    newState: HistoryItemState<HistoryItemTableCellStateObject>;
    readonly type = ModelChangeType.TableCellPropertyChanged;
    get subDocumentId(): number;
    constructor(subDocument: SubDocument, property: JSONServerTableCellProperty, newState: HistoryItemState<HistoryItemTableCellStateObject>);
}
//# sourceMappingURL=cell-property-changed.d.ts.map