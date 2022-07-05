export declare type PdfKitContructor = new (options?: {
    autoFirstPage: boolean;
    font: any;
}) => any;
export declare type BlobStreamContructor = new () => any;
export declare class PdfSettings {
    private _pdfDocument;
    private _blobStream;
    get pdfDocument(): PdfKitContructor;
    set pdfDocument(val: PdfKitContructor);
    get blobStream(): BlobStreamContructor;
    set blobStream(val: BlobStreamContructor);
    pdfKitScriptUrl?: string;
    exportUrl?: string;
    convertImageToCompatibleFormat?: (base64: string) => Promise<string>;
    copyFrom(obj: PdfSettings): void;
    clone(): PdfSettings;
}
//# sourceMappingURL=pdf.d.ts.map