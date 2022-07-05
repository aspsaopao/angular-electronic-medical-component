import { FixedInterval } from '@devexpress/utils/lib/intervals/fixed';
import { Chunk } from '../chunk';
import { RunBase } from '../runs/run-base';
import { Section } from '../section/section';
export declare class RunIterator {
    currentRun: RunBase;
    currentChunk: Chunk;
    currentSection: Section;
    private runs;
    private chunks;
    private sections;
    private currentRunIndex;
    private currentChunkIndex;
    private currentSectionIndex;
    private indexForChunks;
    private indexForSections;
    constructor(runs: RunBase[], chunks: Chunk[], sections: Section[], indexForChunks: number[], indexForSections: number[]);
    moveNext(): boolean;
    currentInterval(): FixedInterval;
    getFirstRun(): RunBase;
    getLastRun(): RunBase;
    getRunsCount(): number;
    reset(): void;
}
//# sourceMappingURL=run-iterator.d.ts.map