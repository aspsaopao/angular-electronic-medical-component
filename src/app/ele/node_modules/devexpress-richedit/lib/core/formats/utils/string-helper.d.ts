export declare class StringHelper {
    static lastLowSpecial: number;
    static firstHighSpecial: number;
    static horizontalTabulationCharCode: number;
    static newLineCharCode: number;
    static carriageReturnCharCode: number;
    static recordSeparatorCharCode: number;
    static unitSeparatorCharCode: number;
    static removeSpecialSymbols(text: string): string;
    static replaceParagraphMarksWithLineBreaks(text: string): string;
    private static containsParagraphMarksOrUnitSeparators;
    static containsSpecialSymbols(text: string): boolean;
}
//# sourceMappingURL=string-helper.d.ts.map