import { ICloneable } from '@devexpress/utils/lib/types';
import { Chunk } from './chunk';
import { FullChunkAndRunInfo } from './full-chunk-and-run-info';
import { RunBase } from './runs/run-base';
import { SubDocument } from './sub-document';
export declare class ModelIterator extends FullChunkAndRunInfo implements ICloneable<ModelIterator> {
    subDocument: SubDocument;
    chunks: Chunk[];
    ignoreHiddenRuns: boolean;
    runs: RunBase[];
    constructor(subDocument: SubDocument, ignoreHiddenRuns: boolean);
    setPositionByFullRunInfo(runInfo: FullChunkAndRunInfo): void;
    setPosition(pos: number): void;
    moveToNextChar(): boolean;
    moveToPrevChar(): boolean;
    moveToNextRun(): boolean;
    moveToPrevRun(): boolean;
    clone(): ModelIterator;
}
//# sourceMappingURL=model-iterator.d.ts.map