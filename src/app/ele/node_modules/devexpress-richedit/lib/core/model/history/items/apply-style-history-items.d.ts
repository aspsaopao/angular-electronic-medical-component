import { CharacterStyle } from '../../character/character-style';
import { ModelManipulator } from '../../manipulators/model-manipulator';
import { ParagraphStyle } from '../../paragraph/paragraph-style';
import { SubDocument, SubDocumentInterval } from '../../sub-document';
import { TableStyle } from '../../tables/styles/table-style';
import { HistoryItem } from '../base/history-item';
import { IntervalBasedHistoryItem } from '../base/interval-based-history-item';
import { HistoryItemIntervalState } from '../states/history-item-state';
import { HistoryItemIntervalStyleStateObject } from '../states/history-item-state-object';
export declare class ApplyCharacterStyleHistoryItem extends IntervalBasedHistoryItem {
    oldState: HistoryItemIntervalState<HistoryItemIntervalStyleStateObject<CharacterStyle>>;
    newStyle: CharacterStyle;
    restoreHyperlinks: boolean;
    constructor(modelManipulator: ModelManipulator, subDocInterval: SubDocumentInterval, style: CharacterStyle, restoreHyperlinks: boolean);
    redo(): void;
    undo(): void;
}
export declare class ApplyParagraphStyleHistoryItem extends IntervalBasedHistoryItem {
    oldState: HistoryItemIntervalState<HistoryItemIntervalStyleStateObject<ParagraphStyle>>;
    newStyle: ParagraphStyle;
    constructor(modelManipulator: ModelManipulator, subDocInterval: SubDocumentInterval, style: ParagraphStyle);
    redo(): void;
    undo(): void;
}
export declare class ApplyTableStyleHistoryItem extends HistoryItem {
    oldStyle: TableStyle;
    newStyle: TableStyle;
    tableIndex: number;
    subDocument: SubDocument;
    constructor(modelManipulator: ModelManipulator, subDocument: SubDocument, tableIndex: number, style: TableStyle);
    redo(): void;
    undo(): void;
}
//# sourceMappingURL=apply-style-history-items.d.ts.map