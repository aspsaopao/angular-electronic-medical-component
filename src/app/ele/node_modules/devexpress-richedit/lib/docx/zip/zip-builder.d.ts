import * as JSZip from 'jszip';
import { XmlWriter } from './xml-writer';
export declare class ZipBuilder {
    zip: JSZip;
    folders: Record<string, boolean>;
    constructor();
    addFile(filePath: string, writer: XmlWriter): void;
    addBase64(filePath: string, base64: string): void;
    generateBlob(callback: (blob: Blob) => void): void;
    generateBase64(callback: (base64: string) => void): void;
}
//# sourceMappingURL=zip-builder.d.ts.map