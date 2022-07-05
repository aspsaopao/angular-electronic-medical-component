import { SubDocumentInfoType } from '../../../core/model/enums';
import { HeaderFooterType } from '../../../core/model/section/enums';
import { Section } from '../../../core/model/section/section';
import { SubDocument } from '../../../core/model/sub-document';
import { Stack } from '@devexpress/utils/lib/class/stack';
import { RtfSectionProperties } from '../model/section/rtf-section-properties';
import { RtfImportData } from '../rtf-import-data';
import { RtfBaseImporter } from './importer-base';
export declare class RtfSectionImporter extends RtfBaseImporter {
    defaultSectionProperties: RtfSectionProperties;
    get states(): Stack<RtfSectionProperties>;
    get currentProperties(): RtfSectionProperties;
    constructor(data: RtfImportData);
    insertSection(): void;
    setLastSectionLength(lastSec?: Section): void;
    applySectionFormatting(skipNumbering?: boolean): void;
    insertHeaderFooter(isHeader: boolean, hfType: HeaderFooterType): void;
    createSubDocument(type: SubDocumentInfoType.Header | SubDocumentInfoType.Footer, hfType: HeaderFooterType): SubDocument;
    pushState(): void;
    popState(): void;
    startImportSubDocument(): void;
    finalizeSubDocument(): void;
}
//# sourceMappingURL=section-importer.d.ts.map