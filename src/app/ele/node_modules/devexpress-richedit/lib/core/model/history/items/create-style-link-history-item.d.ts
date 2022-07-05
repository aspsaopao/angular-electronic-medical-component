import { CharacterStyle } from '../../character/character-style';
import { ModelManipulator } from '../../manipulators/model-manipulator';
import { ParagraphStyle } from '../../paragraph/paragraph-style';
import { HistoryItem } from '../base/history-item';
export declare class CreateStyleLinkHistoryItem extends HistoryItem {
    private characterStyle;
    private paragraphStyle;
    constructor(modelManipulator: ModelManipulator, characterStyle: CharacterStyle, paragraphStyle: ParagraphStyle);
    redo(): void;
    undo(): void;
}
//# sourceMappingURL=create-style-link-history-item.d.ts.map