import { HistoryItemIntervalState } from '../../../history/states/history-item-state';
import { HistoryItemIntervalStateObject } from '../../../history/states/history-item-state-object';
import { JSONShapeProperty } from '../../../json/enums/json-floating-enums';
import { SubDocumentChangeBase } from '../../change-base';
import { ModelChangeType } from '../../enums';
export declare class ShapePropertyChangedSubDocumentChange implements SubDocumentChangeBase {
    subDocumentId: number;
    objectId: number;
    property: JSONShapeProperty;
    newState: HistoryItemIntervalState<HistoryItemIntervalStateObject>;
    readonly type = ModelChangeType.ShapePropertyChanged;
    constructor(subDocumentId: number, objectId: number, property: JSONShapeProperty, newState: HistoryItemIntervalState<HistoryItemIntervalStateObject>);
}
//# sourceMappingURL=shape-property-changed.d.ts.map