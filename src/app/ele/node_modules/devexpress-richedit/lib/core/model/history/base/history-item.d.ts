import { ModelManipulator } from '../../manipulators/model-manipulator';
export declare abstract class HistoryItem {
    modelManipulator: ModelManipulator;
    uniqueId: number;
    canBeMerged(): boolean;
    constructor(modelManipulator: ModelManipulator);
    changeModified(): boolean;
    abstract redo(): any;
    abstract undo(): any;
}
export declare class CompositionHistoryItem extends HistoryItem {
    historyItems: HistoryItem[];
    canBeMerged(): boolean;
    constructor();
    changeModified(): boolean;
    redo(): void;
    undo(): void;
    add(historyItem: HistoryItem): void;
}
//# sourceMappingURL=history-item.d.ts.map