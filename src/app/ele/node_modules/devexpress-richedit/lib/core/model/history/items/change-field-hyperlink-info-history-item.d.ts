import { HyperlinkInfo } from '../../fields/field';
import { ModelManipulator } from '../../manipulators/model-manipulator';
import { SubDocument } from '../../sub-document';
import { HistoryItem } from '../base/history-item';
export declare class ChangeFieldHyperlinkInfoHistoryItem extends HistoryItem {
    oldInfo: HyperlinkInfo;
    fieldIndex: number;
    newInfo: HyperlinkInfo;
    boundSubDocument: SubDocument;
    constructor(modelManipulator: ModelManipulator, boundSubDocument: SubDocument, fieldIndex: number, newInfo: HyperlinkInfo);
    redo(): void;
    undo(): void;
}
//# sourceMappingURL=change-field-hyperlink-info-history-item.d.ts.map