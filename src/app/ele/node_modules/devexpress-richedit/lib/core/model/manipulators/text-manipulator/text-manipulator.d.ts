import { FixedInterval } from '@devexpress/utils/lib/intervals/fixed';
import { CompositionHistoryItem, HistoryItem } from '../../history/base/history-item';
import { ModelManipulator } from '../model-manipulator';
import { RunsBaseManipulator } from '../runs-base-manipulator';
import { ChunkSizeCorrector } from './chunk-size-corrector';
import { InsertTextManipulatorParams } from './insert-text-manipulator-params';
export declare class InsertTextViaHistoryResult {
    inserted: boolean;
    insertedInterval: FixedInterval;
    constructor(inserted: boolean, insertedInterval: FixedInterval);
}
export declare class TextManipulator extends RunsBaseManipulator {
    chunkSizeCorrector: ChunkSizeCorrector;
    constructor(manipulator: ModelManipulator);
    insertTextViaHistory(params: InsertTextManipulatorParams): InsertTextViaHistoryResult;
    insertTextInner(params: InsertTextManipulatorParams): void;
    getLastModifiableHistoryItem<T extends HistoryItem>(checkType: (histItem: HistoryItem) => boolean): T;
    getLastModifiableHistoryItemNode<T extends HistoryItem>(checkType: (histItem: HistoryItem) => boolean): HistoryItemNode<T>;
    private getLastHistoryItemNode;
}
declare class HistoryItemNode<T extends HistoryItem> {
    item: T;
    parent: ParentHistoryItemNode | null;
    constructor(item: T, parent: ParentHistoryItemNode | null);
    get root(): ParentHistoryItemNode | this;
    get exist(): boolean;
    get empty(): boolean;
}
declare class ParentHistoryItemNode extends HistoryItemNode<CompositionHistoryItem> {
    constructor(item: CompositionHistoryItem, parent: ParentHistoryItemNode | null);
}
export {};
//# sourceMappingURL=text-manipulator.d.ts.map