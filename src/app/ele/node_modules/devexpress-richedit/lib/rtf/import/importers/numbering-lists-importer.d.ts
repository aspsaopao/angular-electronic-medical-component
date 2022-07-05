import { Paragraph } from '../../../core/model/paragraph/paragraph';
import { ParagraphListInfo } from '../../../core/rich-utils/properties-bundle';
import { RtfOldListLevelInfo } from '../model/numbering-lists/rtf-old-list-level-info';
import { RtfOldListLevelInfoCollection } from '../model/numbering-lists/rtf-old-list-level-info-collection';
import { RtfImportData } from '../rtf-import-data';
import { RtfBaseImporter } from './importer-base';
export declare class NumberingListsImporter extends RtfBaseImporter {
    readonly listOverrideIndexToNumberingListIndexMap: Record<number, number>;
    readonly numberingListToOldListLevelInfoMap: Record<number, RtfOldListLevelInfo>;
    readonly paragraphStyleListOverrideIndexMap: Record<string, ParagraphListInfo>;
    oldListLevelInfoCollection: RtfOldListLevelInfoCollection;
    oldListLevelInfo: RtfOldListLevelInfo;
    currentOldMultiLevelListIndex: number;
    currentOldSimpleListIndex: number;
    currentOldListSkipNumbering: boolean;
    currentOldSimpleList: boolean;
    currentOldListLevelNumber: number;
    constructor(data: RtfImportData);
    ensureNumberingListLevelValid(listLevelIndex: number): number;
    addNumberingListToParagraph(paragraph: Paragraph, paragraphListInfo: ParagraphListInfo): void;
    private linkParagraphStylesWithNumberingLists;
    pushState(): void;
    popState(): void;
    startImportSubDocument(): void;
    finalizeSubDocument(): void;
}
//# sourceMappingURL=numbering-lists-importer.d.ts.map