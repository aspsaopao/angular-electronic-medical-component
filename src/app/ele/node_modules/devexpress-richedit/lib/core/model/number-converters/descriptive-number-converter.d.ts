import { NumericsProvider } from './numerics-provider';
import { OrdinalBasedNumberConverter } from './ordinal-based-number-converter';
export declare enum DigitType {
    Zero = 0,
    SingleNumeral = 1,
    Single = 2,
    Teen = 3,
    Tenth = 4,
    Hundred = 5,
    Thousand = 6,
    Million = 7,
    Billion = 8,
    Trillion = 9,
    Quadrillion = 10,
    Quintillion = 11,
    Separator = 12
}
export declare class DigitInfo {
    provider: NumericsProvider;
    value: number;
    type: DigitType;
    constructor(provider: NumericsProvider, value: number, type: DigitType);
    convertToString(): string;
    getNumerics(): string[];
}
export declare class SeparatorDigitInfo extends DigitInfo {
    constructor(provider: NumericsProvider, value: number);
    getNumerics(): string[];
}
export declare class QuintillionDigitInfo extends DigitInfo {
    constructor(provider: NumericsProvider, value: number);
    getNumerics(): string[];
}
export declare class QuadrillionDigitInfo extends DigitInfo {
    constructor(provider: NumericsProvider, value: number);
    getNumerics(): string[];
}
export declare class TrillionDigitInfo extends DigitInfo {
    constructor(provider: NumericsProvider, value: number);
    getNumerics(): string[];
}
export declare class BillionDigitInfo extends DigitInfo {
    constructor(provider: NumericsProvider, value: number);
    getNumerics(): string[];
}
export declare class MillionDigitInfo extends DigitInfo {
    constructor(provider: NumericsProvider, value: number);
    getNumerics(): string[];
}
export declare class ThousandDigitInfo extends DigitInfo {
    constructor(provider: NumericsProvider, value: number);
    getNumerics(): string[];
}
export declare class HundredDigitInfo extends DigitInfo {
    constructor(provider: NumericsProvider, value: number);
    getNumerics(): string[];
}
export declare class TenthsDigitInfo extends DigitInfo {
    constructor(provider: NumericsProvider, value: number);
    getNumerics(): string[];
}
export declare class TeensDigitInfo extends DigitInfo {
    constructor(provider: NumericsProvider, value: number);
    getNumerics(): string[];
}
export declare class SingleDigitInfo extends DigitInfo {
    constructor(provider: NumericsProvider, value: number);
    getNumerics(): string[];
}
export declare class ZeroDigitInfo extends DigitInfo {
    constructor(provider: NumericsProvider);
    getNumerics(): string[];
}
export declare class DescriptiveEnglishNumberConverter extends OrdinalBasedNumberConverter {
    constructor();
    convertNumberCore(value: number): string;
    generateDigits(value: number): DigitInfo[];
    private generateDigitsCore;
    private convertDigitsToString;
    private addZero;
    private generateQuintillionDigits;
    private generateQuadrillionDigits;
    private generateTrillionDigits;
    private generateBillionDigits;
    private generateMillionDigits;
    private generateThousandDigits;
    private generateHundredDigits;
    private generateTenthsDigits;
    private generateTeensDigits;
    private generateSinglesDigits;
}
export declare class DescriptiveCardinalEnglishNumberConverter extends DescriptiveEnglishNumberConverter {
    constructor();
}
export declare class DescriptiveOrdinalEnglishNumberConverter extends DescriptiveEnglishNumberConverter {
    constructor();
    generateDigits(value: number): DigitInfo[];
}
//# sourceMappingURL=descriptive-number-converter.d.ts.map