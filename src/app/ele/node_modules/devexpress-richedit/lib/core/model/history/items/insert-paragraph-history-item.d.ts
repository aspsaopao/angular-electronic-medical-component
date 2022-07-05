import { ModelManipulator } from '../../manipulators/model-manipulator';
import { InsertParagraphManipulatorParams } from '../../manipulators/paragraph-manipulator/insert-paragraph-manipulator-params';
import { HistoryItem } from '../base/history-item';
export declare class InsertParagraphHistoryItem extends HistoryItem {
    params: InsertParagraphManipulatorParams;
    constructor(modelManipulator: ModelManipulator, params: InsertParagraphManipulatorParams);
    redo(): void;
    undo(): void;
}
//# sourceMappingURL=insert-paragraph-history-item.d.ts.map