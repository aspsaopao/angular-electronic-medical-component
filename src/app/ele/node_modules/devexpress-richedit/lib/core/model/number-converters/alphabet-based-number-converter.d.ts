import { OrdinalBasedNumberConverter } from './ordinal-based-number-converter';
export declare class AlphabetBasedNumberConverter extends OrdinalBasedNumberConverter {
    alphabet: string[];
    constructor(alphabet: string[]);
    convertNumberCore(value: number): string;
}
//# sourceMappingURL=alphabet-based-number-converter.d.ts.map