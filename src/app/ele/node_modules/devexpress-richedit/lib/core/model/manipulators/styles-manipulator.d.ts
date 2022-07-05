import { FixedInterval } from '@devexpress/utils/lib/intervals/fixed';
import { CharacterStyle } from '../character/character-style';
import { HistoryItemIntervalState } from '../history/states/history-item-state';
import { HistoryItemIntervalStyleStateObject } from '../history/states/history-item-state-object';
import { ParagraphStyle } from '../paragraph/paragraph-style';
import { SubDocument, SubDocumentInterval } from '../sub-document';
import { BaseManipulator } from './base-manipulator';
export declare class StylesManipulator extends BaseManipulator {
    setLinkStyle(characterStyle: CharacterStyle, paragraphStyle: ParagraphStyle): void;
    restoreLinkStyle(characterStyle: CharacterStyle, paragraphStyle: ParagraphStyle): void;
    setCharacterStyle(subDocument: SubDocument, interval: FixedInterval, style: CharacterStyle, restoreHyperlinks: boolean): HistoryItemIntervalState<HistoryItemIntervalStyleStateObject<CharacterStyle>>;
    restoreCharacterStyle(subDocument: SubDocument, state: HistoryItemIntervalState<HistoryItemIntervalStyleStateObject<CharacterStyle>>): void;
    setParagraphStyle(subDocument: SubDocument, interval: FixedInterval, style: ParagraphStyle): HistoryItemIntervalState<HistoryItemIntervalStyleStateObject<ParagraphStyle>>;
    restoreParagraphStyle(subDocument: SubDocument, state: HistoryItemIntervalState<HistoryItemIntervalStyleStateObject<ParagraphStyle>>): void;
    private resetMergedCharacterProperties;
    applyCharacterStyle(subDocInterval: SubDocumentInterval, style: CharacterStyle, restoreHyperlinks: boolean): boolean;
    applyCharacterStyleByName(subDocInterval: SubDocumentInterval, styleName: string): boolean;
    applyParagraphStyleByName(subDocInterval: SubDocumentInterval, styleName: string): boolean;
    applyParagraphStyle(subDocInterval: SubDocumentInterval, style: ParagraphStyle): boolean;
    private calculateAffectedParagraphCount;
    private createCharacterStyle;
}
//# sourceMappingURL=styles-manipulator.d.ts.map