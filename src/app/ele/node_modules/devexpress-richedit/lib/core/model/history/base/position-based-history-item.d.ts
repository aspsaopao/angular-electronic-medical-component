import { ModelManipulator } from '../../manipulators/model-manipulator';
import { SubDocument, SubDocumentPosition } from '../../sub-document';
import { HistoryItem } from './history-item';
export declare abstract class PositionBasedHistoryItem extends HistoryItem {
    subDocPos: SubDocumentPosition;
    get boundSubDocument(): SubDocument;
    get position(): number;
    constructor(modelManipulator: ModelManipulator, subDocPos: SubDocumentPosition);
}
//# sourceMappingURL=position-based-history-item.d.ts.map