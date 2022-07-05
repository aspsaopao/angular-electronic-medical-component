import { RtfNumberingListOverride } from '../../model/numbering-lists/rtf-numbering-list-override';
import { RtfImportData } from '../../rtf-import-data';
import { ControlCharTranslatorTable, DestinationBase } from '../base/destination';
import { DestinationType } from '../utils/destination-type';
export declare class ListOverrideTableDestination extends DestinationBase {
    protected get destinationType(): DestinationType;
    protected get controlCharHT(): ControlCharTranslatorTable;
    currentOverride: RtfNumberingListOverride;
    static onListOverrideKeyword(importer: RtfImportData, _parameterValue: number, _hasParameter: boolean): void;
    static onListOverrideListIdKeyword(importer: RtfImportData, parameterValue: number, hasParameter: boolean): void;
    static onListOverrideCountKeyword(_importer: RtfImportData, _parameterValue: number, _hasParameter: boolean): void;
    static onListOverrideIdKeyword(importer: RtfImportData, parameterValue: number, hasParameter: boolean): void;
    static onListOverrideLevelKeyword(importer: RtfImportData, _parameterValue: number, _hasParameter: boolean): void;
    protected createClone(): DestinationBase;
}
//# sourceMappingURL=list-override-table-destination.d.ts.map