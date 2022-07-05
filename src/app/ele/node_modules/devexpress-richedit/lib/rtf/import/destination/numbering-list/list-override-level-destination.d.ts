import { RtfListOverrideLevel } from '../../model/numbering-lists/rtf-list-override-level';
import { RtfImportData } from '../../rtf-import-data';
import { ControlCharTranslatorTable, DestinationBase } from '../base/destination';
import { DestinationType } from '../utils/destination-type';
export declare class ListOverrideLevelDestination extends DestinationBase {
    protected get destinationType(): DestinationType;
    protected get controlCharHT(): ControlCharTranslatorTable;
    overrideLevel: RtfListOverrideLevel;
    static onListOverrideFormatKeyword(importer: RtfImportData, _parameterValue: number, _hasParameter: boolean): void;
    static onListOverrideStartAtKeyword(importer: RtfImportData, _parameterValue: number, _hasParameter: boolean): void;
    static onListOverrideStartAtValueKeyword(importer: RtfImportData, parameterValue: number, hasParameter: boolean): void;
    static onListOverrideListLevelKeyword(importer: RtfImportData, _parameterValue: number, _hasParameter: boolean): void;
    protected createClone(): DestinationBase;
}
//# sourceMappingURL=list-override-level-destination.d.ts.map