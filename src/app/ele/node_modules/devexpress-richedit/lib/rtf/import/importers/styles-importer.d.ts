import { RtfImportData } from '../rtf-import-data';
import { RtfBaseImporter } from './importer-base';
import { RtfCharacterStyleImporter } from './styles/character-style-importer';
import { RtfParagraphStyleImporter } from './styles/paragraph-style-importer';
import { RtfTableStyleImporter } from './styles/table-style-importer';
export declare class RtfStylesImporter extends RtfBaseImporter {
    linkParagraphStyleIndexToCharacterStyleIndex: Record<number, number>;
    nextParagraphStyleIndexTable: Record<number, number>;
    paragraph: RtfParagraphStyleImporter;
    character: RtfCharacterStyleImporter;
    table: RtfTableStyleImporter;
    private readonly importers;
    constructor(data: RtfImportData);
    applyStyleLinks(): void;
    pushState(): void;
    popState(): void;
    startImportSubDocument(): void;
    finalizeSubDocument(): void;
}
//# sourceMappingURL=styles-importer.d.ts.map