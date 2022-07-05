import { RtfImportData } from '../../rtf-import-data';
import { DestinationBase } from '../base/destination';
import { HexStreamDestination } from '../base/hex-stream-destination';
export declare class LegacyPasswordHashDestination extends HexStreamDestination {
    constructor(importer: RtfImportData, dataStream?: string[]);
    protected createClone(): DestinationBase;
    afterPopRtfState(): void;
}
//# sourceMappingURL=legacy-password-hash-destination.d.ts.map