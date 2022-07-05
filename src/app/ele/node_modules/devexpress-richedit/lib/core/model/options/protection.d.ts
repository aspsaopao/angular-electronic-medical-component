export declare class DocumentProtectionSettings {
    highlightRanges: boolean;
    showBrackets: boolean;
    rangeHighlightColor: string;
    rangeHighlightBracketsColor: string;
    authenticationEMail: string;
    authenticationGroup: string;
    authenticationUserName: string;
    static readonly defaultColors: string[];
    constructor();
    copyFrom(obj: DocumentProtectionSettings): void;
    clone(): DocumentProtectionSettings;
}
//# sourceMappingURL=protection.d.ts.map