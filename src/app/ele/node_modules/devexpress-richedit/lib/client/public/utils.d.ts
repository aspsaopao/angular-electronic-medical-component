import { DocumentFormatApi } from '../../model-api/formats/enum';
import { IntervalApi } from '../../model-api/interval';
interface IFilePathInfo {
    readonly path: string;
    readonly documentFormat: DocumentFormatApi | null;
    readonly extension: string;
    readonly directoryPath: string;
    readonly name: string;
    readonly nameWithoutExtension: string;
}
export declare class FilePathInfo implements IFilePathInfo {
    path: string;
    documentFormat: DocumentFormatApi | null;
    extension: string;
    directoryPath: string;
    name: string;
    nameWithoutExtension: string;
    constructor(filePath: string);
}
export declare class Utils {
    static download(content: File | Blob | ArrayBuffer | string, fileName: string): void;
    static parseFilePath(filePath: string): IFilePathInfo;
    static documentFormatToExtension(documentFormat: DocumentFormatApi): string;
    static getDocumentFormat(filePath: string): DocumentFormatApi | null;
    static convertArrayBufferToBase64(content: ArrayBuffer): string;
    static convertBlobToBase64(content: File | Blob, callback: (base64: string) => void): void;
    static convertToBlob(content: File | ArrayBuffer | string, options?: BlobPropertyBag): Blob;
    static convertToFile(content: Blob | ArrayBuffer | string, fileName?: string, options?: FilePropertyBag): File;
    static convertBase64ToArrayBuffer(content: string): ArrayBuffer;
    static convertBlobToArrayBuffer(content: File | Blob, callback: (buffer: ArrayBuffer) => void): void;
    static getIntervalComplement(bound: IntervalApi, intervals: IntervalApi[]): IntervalApi[];
}
export {};
//# sourceMappingURL=utils.d.ts.map