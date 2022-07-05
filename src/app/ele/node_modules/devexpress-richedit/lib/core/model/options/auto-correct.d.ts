export declare class AutoCorrectSettings {
    detectUrls: boolean;
    correctTwoInitialCapitals: boolean;
    replaceTextAsYouType: boolean;
    enableAutomaticNumbering: boolean;
    caseSensitiveReplacement: boolean;
    replaceInfoCollection: AutoCorrectReplaceInfo[];
    constructor();
    copyFrom(obj: AutoCorrectSettings): void;
    clone(): AutoCorrectSettings;
}
export declare class AutoCorrectReplaceInfo {
    replace: string;
    with: string;
    constructor(whatReplace: string, withReplace: string);
    clone(): AutoCorrectReplaceInfo;
}
//# sourceMappingURL=auto-correct.d.ts.map