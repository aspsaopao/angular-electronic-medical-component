export declare class ExtensionHelper {
    static extToMimeType: Record<string, string>;
    static mimeToExt: Record<string, string>;
    static convertExtensionToMimeType(ext: string): string;
    static convertMimeTypeToExtension(mimeType: string): string;
    static makeBase64UriPrefix(mimeType: string): string;
    static getBase64DataWithoutPrefix(base64uri: string): string;
    static getMimeTypeFromBase64Uri(prefix: string): string;
}
//# sourceMappingURL=extension-helper.d.ts.map