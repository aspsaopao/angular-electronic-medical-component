import { RtfImportData } from '../../rtf-import-data';
import { ControlCharTranslatorTable, DestinationBase } from '../base/destination';
import { DestinationType } from '../utils/destination-type';
export declare enum MailMergeFieldType {
    Null = 0,
    DbColumn = 1
}
export declare class FieldMapData {
    columnIndex: number;
    dynamicAddress: boolean;
    mappedName: string;
    columnName: string;
    fieldType: MailMergeFieldType;
    mergeFieldNameLanguageId: number;
}
export declare class FieldMapDataDestination extends DestinationBase {
    protected get destinationType(): DestinationType;
    protected get controlCharHT(): ControlCharTranslatorTable;
    fieldsMapData: FieldMapData[];
    static getFieldMapDataForEdit(importer: RtfImportData): FieldMapData;
    static onNullFieldTypeKeyword(importer: RtfImportData, _parameterValue: number, _hasParameter: boolean): void;
    static onColumnFieldTypeKeyword(importer: RtfImportData, _parameterValue: number, _hasParameter: boolean): void;
    static onAddressFieldTypeKeyword(_importer: RtfImportData, _parameterValue: number, _hasParameter: boolean): void;
    static onSalutationFieldTypeKeyword(_importer: RtfImportData, _parameterValue: number, _hasParameter: boolean): void;
    static onMappedFieldTypeKeyword(_importer: RtfImportData, _parameterValue: number, _hasParameter: boolean): void;
    static onBarcodeFieldTypeKeyword(_importer: RtfImportData, _parameterValue: number, _hasParameter: boolean): void;
    static onColumnNameKeyword(importer: RtfImportData, _parameterValue: number, _hasParameter: boolean): void;
    static onMappedNameKeyword(importer: RtfImportData, _parameterValue: number, _hasParameter: boolean): void;
    static onColumnIndexKeyword(importer: RtfImportData, parameterValue: number, hasParameter: boolean): void;
    static onDynamicAddressKeyword(importer: RtfImportData, parameterValue: number, hasParameter: boolean): void;
    static onLanguageIdKeyword(importer: RtfImportData, parameterValue: number, hasParameter: boolean): void;
    protected createClone(): DestinationBase;
}
//# sourceMappingURL=field-map-data-destination.d.ts.map