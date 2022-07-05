import { RtfImportData } from '../rtf-import-data';
import { CharacterDecoder } from './character-decoder';
export declare class CodePageCharacterDecoder extends CharacterDecoder {
    private static capacity;
    bytes: string[];
    constructor(codePage: number);
    processChar(importer: RtfImportData, ch: string): void;
    flushByChar(importer: RtfImportData, chars: string[]): void;
    flushByString(importer: RtfImportData, chars: string[]): void;
    flush(importer: RtfImportData): void;
}
//# sourceMappingURL=code-page-character-decoder.d.ts.map