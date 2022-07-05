import { CheckBoxProperties } from '../../../../core/model/fields/check-box-properties';
import { FormFieldProperties } from '../../../../core/model/fields/form-field-properties';
import { RtfImportData } from '../../rtf-import-data';
import { DestinationType } from '../utils/destination-type';
import { FieldSubDestination } from './field-sub-destination';
export declare class FormFieldDestination extends FieldSubDestination {
    protected get destinationType(): DestinationType;
    protected createInstance(): FieldSubDestination;
    static getFormFieldProperties(importer: RtfImportData): FormFieldProperties;
    static getCheckBoxProperties(importer: RtfImportData): CheckBoxProperties;
    static onFormFieldTypeKeyword(importer: RtfImportData, parameterValue: number, _hasParameter: boolean): void;
    static onFormFieldListFieldResultKeyword(importer: RtfImportData, parameterValue: number, _hasParameter: boolean): void;
    static onFormFieldProtectedKeyword(importer: RtfImportData, _parameterValue: number, _hasParameter: boolean): void;
    static onFormFieldCheckBoxFieldSizeTypeKeyword(importer: RtfImportData, parameterValue: number, _hasParameter: boolean): void;
    static onFormFieldCalculatedOnExitKeyword(importer: RtfImportData, _parameterValue: number, _hasParameter: boolean): void;
    static onFormFieldCheckBoxFieldSizeKeyword(importer: RtfImportData, parameterValue: number, _hasParameter: boolean): void;
    static onFormFieldNameKeyword(importer: RtfImportData, _parameterValue: number, _hasParameter: boolean): void;
    static onFormFieldListFieldDefaultKeyword(importer: RtfImportData, parameterValue: number, _hasParameter: boolean): void;
    static onFormFieldHelpTextCustomKeyword(importer: RtfImportData, _parameterValue: number, _hasParameter: boolean): void;
    static onFormFieldHelpTextKeyword(importer: RtfImportData, _parameterValue: number, _hasParameter: boolean): void;
    static onFormFieldStatusBarTextCustomKeyword(importer: RtfImportData, _parameterValue: number, _hasParameter: boolean): void;
    static onFormFieldStatusBarTextKeyword(importer: RtfImportData, _parameterValue: number, _hasParameter: boolean): void;
    static onFormFieldEntryMacroKeyword(importer: RtfImportData, _parameterValue: number, _hasParameter: boolean): void;
    static onFormFieldExitMacroKeyword(importer: RtfImportData, _parameterValue: number, _hasParameter: boolean): void;
}
//# sourceMappingURL=form-field-destination.d.ts.map