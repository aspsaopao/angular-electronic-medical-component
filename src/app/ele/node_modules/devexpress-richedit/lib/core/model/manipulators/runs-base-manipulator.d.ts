import { MaskedCharacterPropertiesBundle } from '../../rich-utils/properties-bundle';
import { Chunk } from '../chunk';
import { ChunkAndRunIndexes } from '../full-chunk-and-run-info';
import { RunType } from '../runs/run-type';
import { SubDocumentPosition } from '../sub-document';
import { BaseManipulator } from './base-manipulator';
export declare class RunsBaseManipulator extends BaseManipulator {
    insertRunInternal(subDocPos: SubDocumentPosition, charPropsBundle: MaskedCharacterPropertiesBundle, type: RunType, text: string): ChunkAndRunIndexes;
    static moveRunsInChunk(chunk: Chunk, startRunIndex: number, offset: number): void;
}
//# sourceMappingURL=runs-base-manipulator.d.ts.map