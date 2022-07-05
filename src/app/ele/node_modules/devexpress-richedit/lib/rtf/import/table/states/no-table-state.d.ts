import { RtfParagraphProperties } from '../../model/paragraph/paragraph-properties';
import { TableRtfTableManagerState } from './manager-state';
import { RtfTableReaderStateBase } from './state-base';
export declare class NoTableRtfTableReaderState extends RtfTableReaderStateBase {
    defaultNestingLevel: number;
    onEndParagraph(paragraphFormattingInfo: RtfParagraphProperties): void;
    onStartNestedTableProperties(): void;
    onEndRow(): void;
    onEndCell(): void;
    onEndNestedRow(): void;
    onEndNestedCell(): void;
    onTableRowDefaults(): void;
    protected changeState(): TableRtfTableManagerState;
}
//# sourceMappingURL=no-table-state.d.ts.map