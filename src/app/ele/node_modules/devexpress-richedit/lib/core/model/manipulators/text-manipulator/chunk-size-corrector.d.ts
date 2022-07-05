import { Chunk } from '../../chunk';
import { RunBase } from '../../runs/run-base';
import { SubDocument } from '../../sub-document';
export declare class ChunkSizeCorrector {
    maxChunkSize: number;
    maxRunSizeCoeff: number;
    maxRunSize: number;
    subDocument: SubDocument;
    chunks: Chunk[];
    originChunk: Chunk;
    originChunkIndex: number;
    originChunkRuns: RunBase[];
    needMoveLength: number;
    correctChunkSizeAtChunkIndex(subDocument: SubDocument, chunkIndex: number): void;
    correctChunkSizeAtInsertPosition(subDocument: SubDocument, insertPosition: number): void;
    private startCorrect;
    private isMoveToPrevChunk;
    private isMoveToNextChunk;
    private moveToNewNextChunks;
}
//# sourceMappingURL=chunk-size-corrector.d.ts.map