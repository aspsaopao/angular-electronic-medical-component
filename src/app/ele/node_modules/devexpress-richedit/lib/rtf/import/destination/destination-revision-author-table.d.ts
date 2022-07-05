import { ControlCharTranslatorTable, DestinationBase, KeywordTranslatorTable } from './base/destination';
import { DestinationType } from './utils/destination-type';
export declare class DestinationRevisionAuthorTable extends DestinationBase {
    protected get destinationType(): DestinationType;
    protected get controlCharHT(): ControlCharTranslatorTable;
    protected get keywordHT(): KeywordTranslatorTable;
    author: string;
    protected processCharCore(ch: string): void;
    protected createClone(): DestinationBase;
}
//# sourceMappingURL=destination-revision-author-table.d.ts.map