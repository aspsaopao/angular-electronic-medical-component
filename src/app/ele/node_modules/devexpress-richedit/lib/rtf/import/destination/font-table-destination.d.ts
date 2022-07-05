import { RtfFontInfo } from '../model/character/rtf-font-info';
import { RtfImportData } from '../rtf-import-data';
import { ControlCharTranslatorTable, DestinationBase, KeywordTranslatorTable } from './base/destination';
import { DestinationType } from './utils/destination-type';
export declare class FontTableDestination extends DestinationBase {
    protected get destinationType(): DestinationType;
    protected get controlCharHT(): ControlCharTranslatorTable;
    protected get keywordHT(): KeywordTranslatorTable;
    fontInfo: RtfFontInfo;
    readonly nestedState: boolean;
    emptyFontInfo: boolean;
    constructor(importer: RtfImportData, nestedState?: boolean);
    protected processKeywordCore(keyword: string, parameterValue: number, hasParameter: boolean): boolean;
    protected createClone(): DestinationBase;
    addFontInfo(): void;
    protected processCharCore(ch: string): void;
    protected onFontCharset(parameterValue: number): void;
    beforePopRtfState(): void;
    afterPopRtfState(): void;
}
//# sourceMappingURL=font-table-destination.d.ts.map