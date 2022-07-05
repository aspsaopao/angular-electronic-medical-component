import { RtfFontInfoCollection } from '../model/character/font-info-collection';
import { RtfFontInfo } from '../model/character/rtf-font-info';
import { RtfImportData } from '../rtf-import-data';
import { RtfBaseImporter } from './importer-base';
export declare class RtfFontImporter extends RtfBaseImporter {
    readonly fonts: RtfFontInfoCollection;
    defaultFontNumber: number;
    constructor(data: RtfImportData);
    addRtfFontInfo(fontInfo: RtfFontInfo): void;
    setFont(fontInfo: RtfFontInfo): void;
    private codePageFromCharset;
    pushState(): void;
    popState(): void;
    startImportSubDocument(): void;
    finalizeSubDocument(): void;
}
//# sourceMappingURL=font-importer.d.ts.map