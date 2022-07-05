import { CodePageCharacterDecoder } from '../../encoding/code-page-character-decoder';
export declare class RtfFormattingInfo {
    private _unicodeCharacterByteCount;
    private _codePage;
    decoder: CodePageCharacterDecoder;
    deleted: boolean;
    setDecoder(_obj: any): void;
    constructor();
    get unicodeCharacterByteCount(): number;
    set unicodeCharacterByteCount(value: number);
    get codePage(): number;
    set codePage(value: number);
    protected chooseDecoder(): CodePageCharacterDecoder;
    clone(): RtfFormattingInfo;
    protected createEmptyClone(): RtfFormattingInfo;
    copyFrom(info: RtfFormattingInfo): void;
}
//# sourceMappingURL=rtf-formatting-info.d.ts.map