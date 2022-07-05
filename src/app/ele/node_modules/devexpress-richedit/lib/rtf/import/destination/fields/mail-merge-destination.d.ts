import { RtfImportData } from '../../rtf-import-data';
import { ControlCharTranslatorTable, DestinationBase } from '../base/destination';
import { DestinationType } from '../utils/destination-type';
export declare class MailMergeProperties {
    dataSource: string;
    query: string;
    connectionString: string;
}
export declare class MailMergeDestination extends DestinationBase {
    protected get destinationType(): DestinationType;
    protected get controlCharHT(): ControlCharTranslatorTable;
    private mmProps;
    static onConnectionStringKeyword(importer: RtfImportData, _parameterValue: number, _hasParameter: boolean): void;
    static onQueryKeyword(importer: RtfImportData, _parameterValue: number, _hasParameter: boolean): void;
    static onDataSourceKeyword(importer: RtfImportData, _parameterValue: number, _hasParameter: boolean): void;
    static onFieldMapDataKeyword(importer: RtfImportData, _parameterValue: number, _hasParameter: boolean): void;
    protected createClone(): DestinationBase;
}
//# sourceMappingURL=mail-merge-destination.d.ts.map