import { RtfImportData } from '../../rtf-import-data';
import { HexContentDestination } from './hex-content-destination';
export declare abstract class HexStreamDestination extends HexContentDestination {
    readonly dataStream: string[];
    constructor(importer: RtfImportData, dataStream: string[]);
    protected processBinCharCore(ch: string): void;
    protected getNumberArray(): number[];
}
//# sourceMappingURL=hex-stream-destination.d.ts.map