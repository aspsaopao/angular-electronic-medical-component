import { RtfImportData } from '../rtf-import-data';
import { CodePageCharacterDecoder } from './code-page-character-decoder';
export declare class SkipCharacterDecoder extends CodePageCharacterDecoder {
    constructor();
    processChar(_importer: RtfImportData, _ch: string): void;
    flush(_importer: RtfImportData): void;
}
//# sourceMappingURL=skip-character-decoder.d.ts.map