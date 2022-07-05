import { MaskedCharacterPropertiesBundle } from '../../../rich-utils/properties-bundle';
import { ModelManipulator } from '../../manipulators/model-manipulator';
import { SubDocument } from '../../sub-document';
import { HistoryItem } from '../base/history-item';
export declare class FieldInsertHistoryItem extends HistoryItem {
    startFieldPos: number;
    separatorPos: number;
    endPos: number;
    showCode: boolean;
    charPropsBundle: MaskedCharacterPropertiesBundle;
    subDocument: SubDocument;
    constructor(modelManipulator: ModelManipulator, subDocument: SubDocument, startCodePos: number, codePartLength: number, resultPartLength: number, showCode: boolean, charPropsBundle: MaskedCharacterPropertiesBundle);
    redo(): void;
    undo(): void;
}
//# sourceMappingURL=field-insert-history-item.d.ts.map