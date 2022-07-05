import { RtfListLevel } from '../../model/numbering-lists/rtf-list-level';
import { RtfImportData } from '../../rtf-import-data';
import { ControlCharTranslatorTable, DestinationBase } from '../base/destination';
import { DestinationType } from '../utils/destination-type';
export declare class ListLevelDestination extends DestinationBase {
    protected get destinationType(): DestinationType;
    protected get controlCharHT(): ControlCharTranslatorTable;
    level: RtfListLevel;
    nestedGroupFinished(nestedDestination: DestinationBase): void;
    beforePopRtfState(): void;
    protected tryToHandleFinishOfListLevelTextDestination(nestedDestination: DestinationBase): void;
    protected tryToHandleFinishOfListLevelNumbersDestination(nestedDestination: DestinationBase): void;
    protected applyListLevelParagraphProperties(): void;
    protected applyListLevelCharacterProperties(): void;
    static onListLevelStartAtKeyword(importer: RtfImportData, parameterValue: number, hasParameter: boolean): void;
    static onListLevelTentativeKeyword(_importer: RtfImportData, _parameterValue: number, _hasParameter: boolean): void;
    static onListLevelNumberingFormatKeyword(importer: RtfImportData, parameterValue: number, hasParameter: boolean): void;
    static onListLevelAlignmentKeyword(importer: RtfImportData, parameterValue: number, hasParameter: boolean): void;
    static onListLevelOldKeyword(importer: RtfImportData, parameterValue: number, hasParameter: boolean): void;
    static onListLevelPrevKeyword(_importer: RtfImportData, _parameterValue: number, _hasParameter: boolean): void;
    static onListLevelPrevspaceKeyword(_importer: RtfImportData, _parameterValue: number, _hasParameter: boolean): void;
    static onListLevelIndentKeyword(importer: RtfImportData, parameterValue: number, hasParameter: boolean): void;
    static onListLevelSpaceKeyword(importer: RtfImportData, parameterValue: number, hasParameter: boolean): void;
    static onListLevelTextKeyword(importer: RtfImportData, _parameterValue: number, _hasParameter: boolean): void;
    static onListLevelNumbersKeyword(importer: RtfImportData, _parameterValue: number, _hasParameter: boolean): void;
    static onListLevelFollowKeyword(importer: RtfImportData, parameterValue: number, hasParameter: boolean): void;
    static onListLevelLegalKeyword(importer: RtfImportData, parameterValue: number, hasParameter: boolean): void;
    static onListLevelNoRestartKeyword(importer: RtfImportData, parameterValue: number, hasParameter: boolean): void;
    static onListLevelPictureKeyword(_importer: RtfImportData, _parameterValue: number, _hasParameter: boolean): void;
    static onListLevelPictureNoSizeKeyword(importer: RtfImportData, _parameterValue: number, _hasParameter: boolean): void;
    static onParagraphStyleKeyword(_importer: RtfImportData, _parameterValue: number, _hasParameter: boolean): void;
    protected processControlCharCore(_ch: string): void;
    protected processKeywordCore(keyword: string, parameterValue: number, hasParameter: boolean): boolean;
    protected processCharCore(_ch: string): void;
    protected createClone(): DestinationBase;
}
//# sourceMappingURL=list-level-destination.d.ts.map