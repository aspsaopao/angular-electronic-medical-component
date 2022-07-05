import { RtfImportData } from '../../rtf-import-data';
import { DestinationType } from '../utils/destination-type';
import { FieldSubDestination } from './field-sub-destination';
export declare class ResultFieldDestination extends FieldSubDestination {
    protected get destinationType(): DestinationType;
    constructor(importer: RtfImportData);
    protected createInstance(): FieldSubDestination;
}
//# sourceMappingURL=result-field-destination.d.ts.map