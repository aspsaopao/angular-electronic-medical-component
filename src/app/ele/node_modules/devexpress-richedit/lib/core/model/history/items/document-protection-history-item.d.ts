import { ModelManipulator } from '../../manipulators/model-manipulator';
import { DocumentProtectionProperties } from '../../options/document-protection';
import { HistoryItem } from '../base/history-item';
export declare class DocumentProtectionHistoryItem extends HistoryItem {
    oldProtectionProperties: DocumentProtectionProperties;
    newProtectionProperties: DocumentProtectionProperties;
    constructor(modelManipulator: ModelManipulator, newProtectionProperties: DocumentProtectionProperties);
    redo(): void;
    undo(): void;
}
//# sourceMappingURL=document-protection-history-item.d.ts.map