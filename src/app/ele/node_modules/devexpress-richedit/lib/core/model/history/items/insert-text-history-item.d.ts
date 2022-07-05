import { ModelManipulator } from '../../manipulators/model-manipulator';
import { InsertTextManipulatorParams } from '../../manipulators/text-manipulator/insert-text-manipulator-params';
import { HistoryItem } from '../base/history-item';
export declare class InsertTextHistoryItem extends HistoryItem {
    canBeMerged(): boolean;
    params: InsertTextManipulatorParams;
    constructor(modelManipulator: ModelManipulator, params: InsertTextManipulatorParams);
    redo(): void;
    undo(): void;
}
//# sourceMappingURL=insert-text-history-item.d.ts.map