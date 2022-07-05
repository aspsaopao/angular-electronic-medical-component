import { Chunk } from './chunk';
import { RunBase } from './runs/run-base';
export declare class ChunkAndRunIndexes {
    chunkIndex: number;
    runIndex: number;
    constructor(chunkIndex: number, runIndex: number);
}
export interface FullChunkAndRunInfoConst {
    readonly chunkIndex: number;
    readonly runIndex: number;
    readonly chunk: Chunk;
    readonly run: RunBase;
    readonly charOffset: number;
    getAbsoluteRunPosition(): number;
    getAbsolutePosition(): number;
    getAbsoluteEndRunPosition(): number;
    getCurrentChar(): string;
    getRunText(from: number, length: number): string;
}
export declare class FullChunkAndRunInfo implements FullChunkAndRunInfoConst {
    chunkIndex: number;
    runIndex: number;
    chunk: Chunk;
    run: RunBase;
    charOffset: number;
    constructor(chunkIndex: number, chunk: Chunk, runIndex: number, run: RunBase, charOffset?: number);
    getAbsoluteRunPosition(): number;
    getAbsolutePosition(): number;
    getAbsoluteEndRunPosition(): number;
    getCurrentChar(): string;
    getRunText(from?: number, length?: number): string;
}
//# sourceMappingURL=full-chunk-and-run-info.d.ts.map