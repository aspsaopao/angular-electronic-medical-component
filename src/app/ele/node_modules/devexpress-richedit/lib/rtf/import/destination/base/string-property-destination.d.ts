import { RtfImportData } from '../../rtf-import-data';
import { DestinationType } from '../utils/destination-type';
import { ControlCharTranslatorTable } from './destination';
import { UnicodeStringValueDestination } from './unicode-string-value-destination';
export declare class StringPropertyDestination extends UnicodeStringValueDestination {
    protected get destinationType(): DestinationType;
    protected get controlCharHT(): ControlCharTranslatorTable;
    static controlCharHT: ControlCharTranslatorTable;
    setProperty: (val: string) => void;
    constructor(importer: RtfImportData, setProperty: (val: string) => void);
    protected createEmptyClone(): UnicodeStringValueDestination;
    afterPopRtfState(): void;
}
//# sourceMappingURL=string-property-destination.d.ts.map