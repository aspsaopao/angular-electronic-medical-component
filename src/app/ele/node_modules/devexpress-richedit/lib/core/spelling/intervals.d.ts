import { FixedInterval } from '@devexpress/utils/lib/intervals/fixed';
import { SpellingErrorInfo } from './spell-checker';
export declare class SpellCheckerInterval extends FixedInterval {
    setStart(start: number): void;
    setLength(length: number): void;
    protected onChanged(): void;
}
export declare class UncheckedInterval extends SpellCheckerInterval {
    info: UncheckedIntervalInfo;
    constructor(start: number, length: number, isSplitted?: boolean);
    protected onChanged(): void;
}
export declare class UncheckedIntervalInfo {
    isChecking: boolean;
    textToCheck: string;
    hiddenIntervals: FixedInterval[];
    isSplitted: boolean;
    constructor(isSplitted: boolean);
}
export declare class MisspelledInterval extends SpellCheckerInterval {
    errorInfo: SpellingErrorInfo;
    constructor(start: number, length: number, errorInfo: SpellingErrorInfo);
}
export declare class IgnoredInterval extends SpellCheckerInterval {
    word: string;
    constructor(start: number, length: number, word: string);
}
//# sourceMappingURL=intervals.d.ts.map