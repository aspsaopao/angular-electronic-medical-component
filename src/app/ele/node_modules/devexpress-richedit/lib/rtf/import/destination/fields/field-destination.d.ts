import { RtfImportData } from '../../rtf-import-data';
import { ControlCharTranslatorTable, DestinationBase } from '../base/destination';
import { DestinationType } from '../utils/destination-type';
import { FieldSubDestination } from './field-sub-destination';
export declare class FieldDestination extends FieldSubDestination {
    protected get destinationType(): DestinationType;
    protected get controlCharHT(): ControlCharTranslatorTable;
    static onFieldInstructionStartKeyword(importer: RtfImportData, _parameterValue: number, _hasParameter: boolean): void;
    static onFieldResultStartKeyword(importer: RtfImportData, _parameterValue: number, _hasParameter: boolean): void;
    static createFieldResultDestination(importer: RtfImportData): DestinationBase;
    static onFieldLockKeyword(importer: RtfImportData, _parameterValue: number, _hasParameter: boolean): void;
    static onFieldCodeViewKeyword(importer: RtfImportData, _parameterValue: number, _hasParameter: boolean): void;
    static onFieldEditKeyword(_importer: RtfImportData, _parameterValue: number, _hasParameter: boolean): void;
    static onFieldDirtyKeyword(_importer: RtfImportData, _parameterValue: number, _hasParameter: boolean): void;
    static onFieldPrivateKeyword(_importer: RtfImportData, _parameterValue: number, _hasParameter: boolean): void;
    protected startNewField(): void;
    onDestinationClose(): void;
    protected createInstance(): FieldSubDestination;
}
//# sourceMappingURL=field-destination.d.ts.map