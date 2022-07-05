import { DocumentModel } from '../../../../core/model/document-model';
import { RtfParagraphProperties } from '../../model/paragraph/paragraph-properties';
import { RtfImportData } from '../../rtf-import-data';
import { RtfTableController } from '../rtf-table-controller';
import { RtfTableReader } from '../table-reader';
export declare abstract class RtfTableReaderStateBase {
    readonly reader: RtfTableReader;
    constructor(reader: RtfTableReader);
    protected get data(): RtfImportData;
    protected get documentModel(): DocumentModel;
    protected get tableController(): RtfTableController;
    abstract onStartNestedTableProperties(): any;
    abstract onEndParagraph(paragraphFormattingInfo: RtfParagraphProperties): any;
    abstract onEndRow(): any;
    abstract onEndCell(): any;
    abstract onEndNestedRow(): any;
    abstract onEndNestedCell(): any;
    abstract onTableRowDefaults(): any;
}
//# sourceMappingURL=state-base.d.ts.map