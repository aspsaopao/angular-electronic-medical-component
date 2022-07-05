import { RtfParagraphProperties } from '../../model/paragraph/paragraph-properties';
import { RtfTableReader } from '../table-reader';
import { RtfTableReaderStateBase } from './state-base';
export declare class TableRtfTableManagerState extends RtfTableReaderStateBase {
    constructor(reader: RtfTableReader);
    onEndParagraph(paragraphFormattingInfo: RtfParagraphProperties): void;
    protected validateCurrentTable(): void;
    protected onEndInTableParagraph(nestingLevel: number): void;
    isParagraphInTable(paragraphFormattingInfo: RtfParagraphProperties): boolean;
    isCurrentTableNotComplete(): boolean;
    onEndRow(): void;
    protected onEndRowCore(): void;
    onEndCell(): void;
    protected onEndCellCore(nestingLevel: number): void;
    onEndNestedRow(): void;
    onEndNestedCell(): void;
    onStartNestedTableProperties(): void;
    onTableRowDefaults(): void;
}
//# sourceMappingURL=manager-state.d.ts.map