import { FixedInterval } from '@devexpress/utils/lib/intervals/fixed';
import { SubDocument } from '../model/sub-document';
import { MisspelledInterval, UncheckedInterval } from './intervals';
export declare class SpellCheckerIntervalsManager {
    private subDocument;
    private uncheckedIntervalCollection;
    private misspelledIntervalCollection;
    private ignoredIntervalCollection;
    private ignoredWordsCollection;
    private isInitialize;
    constructor(subDocument: SubDocument);
    initializeUncheckedIntervals(): void;
    reset(): void;
    getIntervalsToCheck(): UncheckedInterval[];
    applyCheckResults(checkedIntervals: any[]): void;
    onModelIntervalChanged(start: number, length: number, isSeparator: boolean): void;
    getMisspelledIntervals(): MisspelledInterval[];
    getUncheckedIntervalsCount(): number;
    getSelectedMisspelledInterval(selectionIntervals: FixedInterval[]): MisspelledInterval;
    findNextMisspelledInterval(position: number): MisspelledInterval;
    addIgnoredInterval(start: number, end: number, word: string): void;
    deleteMisspelledIntervalsByPositions(start: number, end: number): void;
    ignoreAll(word: string): void;
    removeIntervalsWithErrorByWord(word: string): void;
    getIntervalsWithErrorByWord(word: string): FixedInterval[];
    private expandUncheckedInterval;
    private removeEmptyUncheckedIntervals;
    private prepareUncheckedInterval;
    private createUncheckedIntervals;
    private splitUncheckedIntervals;
    private createMisspelledIntervals;
}
//# sourceMappingURL=intervals-manager.d.ts.map