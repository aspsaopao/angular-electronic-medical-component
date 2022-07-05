import { DocumentFormat } from '../document-format';
export declare class FileNameHelper {
    folderPath: string;
    name: string;
    extension: string;
    documentFormat: DocumentFormat;
    isPDF: boolean;
    constructor(fullPath: string, isPDF: boolean, documentFormat?: DocumentFormat);
    getFullPath(): string;
    checkFileName(): void;
    checkExtension(): void;
    static normalizeVirtualFolderPath(folderPath: string, isNormalizePath: boolean): string;
    static convertToDocumentFormat(fileName: string): DocumentFormat;
    static convertExtensionToDocumentFormat(extension: string): DocumentFormat;
    static convertToString(docFormat: DocumentFormat): string;
    private static testFormat;
}
//# sourceMappingURL=file-name-helper.d.ts.map