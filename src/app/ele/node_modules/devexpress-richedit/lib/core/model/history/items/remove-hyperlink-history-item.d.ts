import { Field, HyperlinkInfo } from '../../fields/field';
import { ModelManipulator } from '../../manipulators/model-manipulator';
import { RemoveIntervalOperationResult } from '../../manipulators/range/remove-interval-operation';
import { SubDocument } from '../../sub-document';
import { HistoryItem } from '../base/history-item';
import { RemoveIntervalHistoryItem } from './remove-interval-history-item';
export declare class RemoveHyperlinkHistoryItem extends HistoryItem {
    fieldIndex: number;
    startPos: number;
    separatorPos: number;
    endPos: number;
    hyperlinkInfo: HyperlinkInfo;
    resultEndRunHistoryItem: RemoveIntervalHistoryItem;
    separatorRunHistoryItem: RemoveIntervalHistoryItem;
    startCodeRunRunHistoryItem: RemoveIntervalHistoryItem;
    removeOperationResult: RemoveIntervalOperationResult;
    styleHistory: HistoryItem;
    subDocument: SubDocument;
    constructor(modelManipulator: ModelManipulator, subDocument: SubDocument, field: Field);
    redo(): void;
    undo(): void;
}
//# sourceMappingURL=remove-hyperlink-history-item.d.ts.map