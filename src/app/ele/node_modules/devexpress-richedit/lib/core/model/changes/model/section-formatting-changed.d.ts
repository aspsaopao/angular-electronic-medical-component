import { HistoryItemState } from '../../history/states/history-item-state';
import { HistoryItemSectionStateObject } from '../../history/states/history-item-state-object';
import { JSONSectionProperty } from '../../json/enums/json-section-enums';
import { ModelChangeBase } from '../change-base';
import { ModelChangeType } from '../enums';
export declare class SectionsFormattingChangedModelChange implements ModelChangeBase {
    startSectionIndex: number;
    endSectionIndex: number;
    property: JSONSectionProperty;
    newState: HistoryItemState<HistoryItemSectionStateObject>;
    readonly type = ModelChangeType.SectionFormattingChanged;
    constructor(startSectionIndex: number, endSectionIndex: number, property: JSONSectionProperty, newState: HistoryItemState<HistoryItemSectionStateObject>);
}
//# sourceMappingURL=section-formatting-changed.d.ts.map