import { RtfImportData } from '../../rtf-import-data';
import { DestinationBase } from '../base/destination';
import { SkipDestination } from '../base/skip-destination';
import { DestinationType } from '../utils/destination-type';
export declare class SkipNestedTableDestination extends SkipDestination {
    protected get destinationType(): DestinationType;
    static onParKeyword(importer: RtfImportData, _parameterValue: number, _hasParameter: boolean): void;
    protected createClone(): DestinationBase;
}
//# sourceMappingURL=skip-nested-table-destination.d.ts.map