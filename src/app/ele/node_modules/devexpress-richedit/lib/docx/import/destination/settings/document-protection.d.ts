import { XmlReader } from '../../../zip/xml-reader';
import { LeafElementDestination } from '../destination';
export declare class Base64Binary {
    private static _keyStr;
    static decodeArrayBuffer(base64: string): ArrayBuffer;
    static decode(base64: string, arrayBuffer?: ArrayBuffer): Uint8Array;
    static getBitesFromInt(num: number): Uint8Array;
    private static removePaddingChars;
}
export declare class DocumentProtectionDestination extends LeafElementDestination {
    processElementOpen(reader: XmlReader): Promise<void>;
}
//# sourceMappingURL=document-protection.d.ts.map