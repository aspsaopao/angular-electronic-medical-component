import { RtfNumberingList } from '../../model/numbering-lists/rtf-numbering-list';
import { RtfImportData } from '../../rtf-import-data';
import { ControlCharTranslatorTable, DestinationBase } from '../base/destination';
import { DestinationType } from '../utils/destination-type';
export declare class ListTableDestination extends DestinationBase {
    protected get destinationType(): DestinationType;
    protected get controlCharHT(): ControlCharTranslatorTable;
    currentList: RtfNumberingList;
    nestedGroupFinished(nestedDestination: DestinationBase): void;
    protected tryToHandleFinishOfListNameDestination(nestedDestination: DestinationBase): void;
    protected tryToHandleFinishOfListStyleNameDestination(nestedDestination: DestinationBase): void;
    protected tryToHandleFinishOfListLevelDestination(nestedDestination: DestinationBase): void;
    static onListKeyword(importer: RtfImportData, _parameterValue: number, _hasParameter: boolean): void;
    static onListIdKeyword(importer: RtfImportData, parameterValue: number, hasParameter: boolean): void;
    static onListTemplatIdKeyword(_importer: RtfImportData, _parameterValue: number, _hasParameter: boolean): void;
    static onListStyleIdKeyword(importer: RtfImportData, parameterValue: number, hasParameter: boolean): void;
    static onListStyleNameKeyword(importer: RtfImportData, _parameterValue: number, _hasParameter: boolean): void;
    static onListNameKeyword(importer: RtfImportData, _parameterValue: number, _hasParameter: boolean): void;
    static onListHybridKeyword(importer: RtfImportData, _parameterValue: number, _hasParameter: boolean): void;
    static onListRestartAtEachSectionKeyword(_importer: RtfImportData, _parameterValue: number, _hasParameter: boolean): void;
    static onListTemplateIdKeyword(_importer: RtfImportData, _parameterValue: number, _hasParameter: boolean): void;
    static onListSimpleKeyword(_importer: RtfImportData, _parameterValue: number, _hasParameter: boolean): void;
    static onListLevelKeyword(importer: RtfImportData, _parameterValue: number, _hasParameter: boolean): void;
    protected processKeywordCore(keyword: string, parameterValue: number, hasParameter: boolean): boolean;
    protected processCharCore(_ch: string): void;
    protected createClone(): DestinationBase;
}
//# sourceMappingURL=list-table-destination.d.ts.map