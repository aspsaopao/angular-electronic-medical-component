import { Position } from './position/position';
import { RunBase } from './runs/run-base';
import { SubDocument } from './sub-document';
export declare class Chunk {
    startLogPosition: Position;
    textBuffer: string;
    textRuns: RunBase[];
    isLast: boolean;
    constructor(startLogPosition: Position, textBuffer: string, isLast: boolean);
    getEndPosition(): number;
    getRunText(run: RunBase): string;
    getTextInChunk(offsetAtStartChunk: number, length: number): string;
    splitRun(runIndex: number, offset: number): void;
    clone(subDocument: SubDocument): Chunk;
}
//# sourceMappingURL=chunk.d.ts.map