import { RtfImportData } from '../rtf-import-data';
import { ControlCharTranslatorTable, DestinationBase } from './base/destination';
import { DestinationType } from './utils/destination-type';
export declare class CustomPropertiesDestination extends DestinationBase {
    protected get destinationType(): DestinationType;
    protected get controlCharHT(): ControlCharTranslatorTable;
    protected createClone(): DestinationBase;
    static onPropname(_importer: RtfImportData, _parameterValue: number, _hasParameter: boolean): void;
    static onStaticval(_importer: RtfImportData, _parameterValue: number, _hasParameter: boolean): void;
    static onProptType(_importer: RtfImportData, _parameterValue: number, _hasParameter: boolean): void;
    static onLinkval(_importer: RtfImportData, _parameterValue: number, _hasParameter: boolean): void;
}
//# sourceMappingURL=custom-properties-destination.d.ts.map