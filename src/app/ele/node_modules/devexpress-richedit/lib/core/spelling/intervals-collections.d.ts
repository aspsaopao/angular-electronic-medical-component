import { FixedInterval } from '@devexpress/utils/lib/intervals/fixed';
import { IgnoredInterval, MisspelledInterval, SpellCheckerInterval, UncheckedInterval } from './intervals';
export declare class SpellCheckerIntervalCollection<T extends SpellCheckerInterval> {
    protected intervals: T[];
    getIntervals(): T[];
    add(newInterval: T): void;
    remove(index: number): void;
    onModelIntervalChanged(start: number, length: number, isSeparator: boolean): void;
    protected onModelIntervalInserted(start: number, length: number, _isSeparator: boolean): void;
    protected onModelIntervalRemoved(start: number, length: number): void;
    forEach(callback: (interval: T, index: number) => void): void;
    deleteIntervalsByPositions(start: number, end: number, strictMatch?: boolean): void;
    protected findIntervalIndexByPositions(start: number, end: number): number;
    clear(): void;
}
export declare class UncheckedIntervalCollection extends SpellCheckerIntervalCollection<UncheckedInterval> {
    findCheckingIntervalByPositions(start: number, end: number): UncheckedInterval;
    protected onModelIntervalInserted(start: number, length: number, isSeparator: boolean): void;
    protected onModelIntervalRemoved(start: number, length: number): void;
}
export declare class MisspelledIntervalCollection extends SpellCheckerIntervalCollection<MisspelledInterval> {
    addIfNotExists(newInterval: MisspelledInterval): void;
    findNext(position: number): MisspelledInterval;
    deleteOldIntervals(defInterval: FixedInterval, isIntervalStartWithParagraph: boolean): void;
}
export declare class IgnoredIntervalCollection extends SpellCheckerIntervalCollection<IgnoredInterval> {
    contains(start: number, length: number, word: string): boolean;
}
export declare class IgnoredWordsCollection {
    private ignoredWords;
    constructor();
    add(word: string): void;
    contains(word: string): boolean;
    clear(): void;
}
//# sourceMappingURL=intervals-collections.d.ts.map