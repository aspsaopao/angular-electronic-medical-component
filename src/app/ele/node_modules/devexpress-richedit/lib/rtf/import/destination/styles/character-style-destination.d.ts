import { RtfImportData } from '../../rtf-import-data';
import { ControlCharTranslatorTable, DestinationBase } from '../base/destination';
import { DestinationSubDocument } from '../sub-document/destination-sub-document';
import { DestinationType } from '../utils/destination-type';
export declare class CharacterStyleDestination extends DestinationSubDocument {
    styleName: string;
    qFormat: boolean;
    protected get destinationType(): DestinationType;
    protected get controlCharHT(): ControlCharTranslatorTable;
    static onParentStyleIndex(importer: RtfImportData, parameterValue: number, _hasParameter: boolean): void;
    static onStyleLinkKeyword(importer: RtfImportData, parameterValue: number, _hasParameter: boolean): void;
    static onStyleQFormatKeyword(importer: RtfImportData, parameterValue: number, _hasParameter: boolean): void;
    constructor(importer: RtfImportData, styleIndex: number);
    get canAppendText(): boolean;
    beforePopRtfState(): void;
    protected createClone(): DestinationBase;
    protected processCharCore(ch: string): void;
    finalizePieceTableCreation(): void;
}
//# sourceMappingURL=character-style-destination.d.ts.map