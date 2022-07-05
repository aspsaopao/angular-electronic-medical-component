import { Data } from '../data';
import { AltChunkInfo } from '../model/alt-chunk-info';
export declare class AltChunkImporter {
    data: Data;
    altChunkInfos: AltChunkInfo[];
    constructor(data: Data);
    insertAltChunks(): void;
    private insertAltChunk;
}
//# sourceMappingURL=alt-chunk-importer.d.ts.map