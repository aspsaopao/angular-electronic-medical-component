import { RtfImportData } from '../rtf-import-data';
import { CodePageCharacterDecoder } from './code-page-character-decoder';
export declare class EmptyCharacterDecoder extends CodePageCharacterDecoder {
    constructor();
    processChar(importer: RtfImportData, ch: string): void;
    flush(_importer: RtfImportData): void;
}
//# sourceMappingURL=empty-character-decoder.d.ts.map