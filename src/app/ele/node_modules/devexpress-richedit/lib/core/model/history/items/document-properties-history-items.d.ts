import { ModelManipulator } from '../../manipulators/model-manipulator';
import { HistoryItem } from '../base/history-item';
export declare class DocumentDefaultTabWidthHistoryItem extends HistoryItem {
    oldDefaultTabWidth: number;
    newDefaultTabWidth: number;
    constructor(modelManipulator: ModelManipulator, newDefaultTabWidth: number);
    redo(): void;
    undo(): void;
}
export declare class PageColorHistoryItem extends HistoryItem {
    oldPageColor: number;
    newPageColor: number;
    constructor(modelManipulator: ModelManipulator, newPageColor: number);
    redo(): void;
    undo(): void;
}
export declare class DifferentOddAndEvenPagesHistoryItem extends HistoryItem {
    newValue: boolean;
    oldValue: boolean;
    constructor(modelManipulator: ModelManipulator, newValue: boolean);
    redo(): void;
    undo(): void;
}
//# sourceMappingURL=document-properties-history-items.d.ts.map