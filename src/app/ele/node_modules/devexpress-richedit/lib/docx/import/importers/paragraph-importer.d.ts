import { MaskedCharacterProperties } from '../../../core/model/character/character-properties';
import { CharacterStyle } from '../../../core/model/character/character-style';
import { Paragraph } from '../../../core/model/paragraph/paragraph';
import { MaskedParagraphProperties } from '../../../core/model/paragraph/paragraph-properties';
import { ParagraphStyle, TabProperties } from '../../../core/model/paragraph/paragraph-style';
import { Data } from '../data';
export declare class ParagraphImporter {
    data: Data;
    paraId: number;
    properties: MaskedParagraphProperties;
    style: ParagraphStyle;
    tabs: TabProperties;
    parMarkCharacterStyle: CharacterStyle;
    parMarkCharProperties: MaskedCharacterProperties;
    paragraph: Paragraph;
    constructor(data: Data);
    resetProperties(): this;
    resetStyle(): this;
    resetTabs(): this;
    resetParMarkCharacterStyle(): this;
    resetParMarkCharProperties(): this;
    createParagraph(): Paragraph;
    insertParagraph(asSectionRun?: boolean): Paragraph;
    applyParagraphProperties(): void;
}
//# sourceMappingURL=paragraph-importer.d.ts.map