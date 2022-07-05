import { RtfImportData } from '../../rtf-import-data';
import { DestinationType } from '../utils/destination-type';
import { ControlCharTranslatorTable, DestinationBase } from './destination';
export declare class StringPropertyBaseDestination extends DestinationBase {
    protected get destinationType(): DestinationType;
    protected get controlCharHT(): ControlCharTranslatorTable;
    static controlCharHT: ControlCharTranslatorTable;
    readonly value: string[];
    readonly modifier: (value: string) => void;
    constructor(importer: RtfImportData, modifier: (value: string) => void);
    protected processCharCore(ch: string): void;
    afterPopRtfState(): void;
    protected createClone(): DestinationBase;
}
//# sourceMappingURL=string-property-base-destination.d.ts.map