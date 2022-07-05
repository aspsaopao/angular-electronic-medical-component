export declare class FieldsSettings {
    private static DEFAULT_TIME_FORMAT;
    private static DEFAULT_DATE_FORMAT;
    updateFieldsBeforePrint: boolean;
    updateFieldsOnPaste: boolean;
    defaultTimeFormat: string;
    defaultDateFormat: string;
    openHyperlinkOnClick: boolean;
    keepHyperlinkResultForInvalidReference: boolean;
    createHyperlinkTooltip: (hyperlinkTooltip: string, hint: string) => string;
    constructor();
    copyFrom(obj: FieldsSettings): void;
    clone(): FieldsSettings;
}
//# sourceMappingURL=fields.d.ts.map