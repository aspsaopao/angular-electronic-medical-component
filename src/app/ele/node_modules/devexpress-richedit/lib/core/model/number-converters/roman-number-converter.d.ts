import { OrdinalBasedNumberConverter } from './ordinal-based-number-converter';
export declare class RomanNumberConverter extends OrdinalBasedNumberConverter {
    arabics: number[];
    romans: string[];
    convertNumberCore(value: number): string;
}
export declare class UpperRomanNumberConverterClassic extends RomanNumberConverter {
    constructor();
}
export declare class LowerRomanNumberConverterClassic extends RomanNumberConverter {
    constructor();
}
//# sourceMappingURL=roman-number-converter.d.ts.map