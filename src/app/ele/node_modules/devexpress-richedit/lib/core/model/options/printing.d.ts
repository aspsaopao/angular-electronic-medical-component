export declare class PrintingSettings {
    mode: PrintMode;
    closePrintDialogWithHtmlPreview: boolean;
    copyFrom(obj: PrintingSettings): void;
    clone(): PrintingSettings;
}
export declare enum PrintMode {
    ServerPdf = 0,
    ClientHtml = 1,
    ClientPdf = 2
}
//# sourceMappingURL=printing.d.ts.map