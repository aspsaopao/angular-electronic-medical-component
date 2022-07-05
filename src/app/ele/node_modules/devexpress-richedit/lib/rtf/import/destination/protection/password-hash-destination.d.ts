import { RtfImportData } from '../../rtf-import-data';
import { DestinationBase } from '../base/destination';
import { HexStreamDestination } from '../base/hex-stream-destination';
export declare class PasswordHashDestination extends HexStreamDestination {
    constructor(importer: RtfImportData, dataStream?: string[]);
    protected createClone(): DestinationBase;
    afterPopRtfState(): void;
}
//# sourceMappingURL=password-hash-destination.d.ts.map