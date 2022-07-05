import { RtfImportData } from '../../rtf-import-data';
import { DestinationType } from '../utils/destination-type';
import { ControlCharTranslatorTable, DestinationBase } from './destination';
export declare class UnicodeDestination extends DestinationBase {
    protected get destinationType(): DestinationType;
    protected get controlCharHT(): ControlCharTranslatorTable;
    lastDestination: DestinationBase;
    constructor(importer: RtfImportData, lastDestination: DestinationBase);
    protected createClone(): DestinationBase;
    static onUdKeyword(importer: RtfImportData, _parameterValue: number, _hasParameter: boolean): void;
}
//# sourceMappingURL=unicode-destination.d.ts.map