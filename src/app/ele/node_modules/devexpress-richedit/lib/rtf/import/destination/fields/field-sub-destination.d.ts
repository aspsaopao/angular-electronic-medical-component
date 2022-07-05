import { RtfImportData } from '../../rtf-import-data';
import { DestinationBase } from '../base/destination';
import { DefaultDestination } from '../sub-document/default-destination';
import { DestinationType } from '../utils/destination-type';
export declare abstract class FieldSubDestination extends DefaultDestination {
    protected get destinationType(): DestinationType;
    nestedGroupLevel: number;
    constructor(importer: RtfImportData);
    createClone(): DestinationBase;
    beforePopRtfState(): void;
    increaseGroupLevel(): void;
    onDestinationClose(): void;
    protected abstract createInstance(): FieldSubDestination;
}
//# sourceMappingURL=field-sub-destination.d.ts.map