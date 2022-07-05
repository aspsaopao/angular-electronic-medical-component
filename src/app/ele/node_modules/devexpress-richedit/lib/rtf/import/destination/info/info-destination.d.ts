import { RtfImportData } from '../../rtf-import-data';
import { RtfImporter } from '../../rtf-importer';
import { ControlCharTranslatorTable, DestinationBase } from '../base/destination';
import { DestinationType } from '../utils/destination-type';
export declare class InfoDestination extends DestinationBase {
    protected get destinationType(): DestinationType;
    protected get controlCharHT(): ControlCharTranslatorTable;
    protected createClone(): DestinationBase;
    static onLegacyPasswordHash(importer: RtfImportData, _parameterValue: number, _hasParameter: boolean): void;
    static onPasswordHash(importer: RtfImportData, _parameterValue: number, _hasParameter: boolean): void;
    static onCategoryKeyword(_importer: RtfImportData, _parameterValue: number, _hasParameter: boolean): void;
    static onCreatedKeyword(_importer: RtfImportData, _parameterValue: number, _hasParameter: boolean): void;
    static onDescriptionKeyword(_importer: RtfImportData, _parameterValue: number, _hasParameter: boolean): void;
    static onCreatorKeyword(_importer: RtfImportData, _parameterValue: number, _hasParameter: boolean): void;
    static onKeywordsKeyword(_importer: RtfImportData, _parameterValue: number, _hasParameter: boolean): void;
    static onLastModifiedByKeyword(_importer: RtfImportData, _parameterValue: number, _hasParameter: boolean): void;
    static onLastPrintedKeyword(_importer: RtfImportData, _parameterValue: number, _hasParameter: boolean): void;
    static onModifiedKeyword(_importer: RtfImportData, _parameterValue: number, _hasParameter: boolean): void;
    static onRevisionKeyword(_importer: RtfImportData, _parameterValue: number, _hasParameter: boolean): void;
    static onSubjectKeyword(_importer: RtfImportData, _parameterValue: number, _hasParameter: boolean): void;
    static onTitleKeyword(_importer: RtfImportData, _parameterValue: number, _hasParameter: boolean): void;
    static getStringDocumentPropertyDestinationBase(_importer: RtfImporter, _setProperty: (par: string) => void): void;
    static getDateTimeDocumentPropertyDestinationBase(_importer: RtfImporter, _setProperty: (val: Date) => void): void;
}
//# sourceMappingURL=info-destination.d.ts.map