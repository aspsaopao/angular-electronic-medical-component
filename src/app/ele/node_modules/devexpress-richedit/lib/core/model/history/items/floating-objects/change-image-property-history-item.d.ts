import { Size as SizeCore } from '@devexpress/utils/lib/geometry/size';
import { ModelManipulator } from '../../../manipulators/model-manipulator';
import { SubDocumentInterval } from '../../../sub-document';
import { IntervalBasedHistoryItem } from '../../base/interval-based-history-item';
import { HistoryItemIntervalState } from '../../states/history-item-state';
import { HistoryItemIntervalStateObject } from '../../states/history-item-state-object';
export declare class ChangeImagePropertyHistoryItem extends IntervalBasedHistoryItem {
    readonly base64: string;
    readonly size: SizeCore;
    oldState: HistoryItemIntervalState<HistoryItemIntervalStateObject>;
    constructor(modelManipulator: ModelManipulator, subDocInterval: SubDocumentInterval, base64: string, size?: SizeCore);
    redo(): void;
    undo(): void;
}
//# sourceMappingURL=change-image-property-history-item.d.ts.map