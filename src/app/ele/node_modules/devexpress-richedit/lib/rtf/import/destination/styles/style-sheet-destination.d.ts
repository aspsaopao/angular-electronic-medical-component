import { RtfImportData } from '../../rtf-import-data';
import { ControlCharTranslatorTable, DestinationBase } from '../base/destination';
import { DestinationSubDocument } from '../sub-document/destination-sub-document';
import { DestinationType } from '../utils/destination-type';
export declare class StyleSheetDestination extends DestinationSubDocument {
    protected get destinationType(): DestinationType;
    protected get controlCharHT(): ControlCharTranslatorTable;
    styleName: string;
    qFormat: boolean;
    get canAppendText(): boolean;
    constructor(importer: RtfImportData);
    static onStyleQFormatKeyword(importer: RtfImportData, _parameterValue: number, _hasParameter: boolean): void;
    static onParagraphStyle(importer: RtfImportData, parameterValue: number, _hasParameter: boolean): void;
    static onParentStyleIndex(importer: RtfImportData, parameterValue: number, _hasParameter: boolean): void;
    static onStyleLinkKeyword(importer: RtfImportData, parameterValue: number, _hasParameter: boolean): void;
    static onNextStyleIndex(importer: RtfImportData, parameterValue: number, _hasParameter: boolean): void;
    static onCharacterStyle(importer: RtfImportData, parameterValue: number, _hasParameter: boolean): void;
    static onTableStyle(importer: RtfImportData, parameterValue: number, _hasParameter: boolean): void;
    static onStyleListOverride(importer: RtfImportData, parameterValue: number, _hasParameter: boolean): void;
    static onStyleListLevel(importer: RtfImportData, parameterValue: number, _hasParameter: boolean): void;
    nestedGroupFinished(nestedDestination: DestinationBase): void;
    static getPrimaryStyleName(styleName: string): string;
    protected createClone(): DestinationBase;
    protected processCharCore(ch: string): void;
    finalizeSubDocumentCreation(): void;
    protected processSpecialHexCharCore(_ch: string): void;
}
//# sourceMappingURL=style-sheet-destination.d.ts.map