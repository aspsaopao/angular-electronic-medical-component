import { HistoryItem } from './history-item';
export interface IHistory {
    undo: () => void;
    redo: () => void;
    canUndo: () => boolean;
    canRedo: () => boolean;
    clear: () => void;
    add: (historyItem: HistoryItem) => void;
    addAndRedo: (historyItem: HistoryItem) => void;
    beginTransaction: () => void;
    endTransaction: () => void;
    addTransaction(action: (history: IHistory) => void): any;
    isModified: () => boolean;
    resetModified: () => void;
    getCurrentItemId: () => number;
    historyItems: HistoryItem[];
    currentIndex: number;
}
//# sourceMappingURL=i-history.d.ts.map