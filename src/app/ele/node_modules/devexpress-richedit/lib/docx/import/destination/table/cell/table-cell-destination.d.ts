import { Paragraph } from '../../../../../core/model/paragraph/paragraph';
import { TableCell } from '../../../../../core/model/tables/main-structures/table-cell';
import { TableRow } from '../../../../../core/model/tables/main-structures/table-row';
import { XmlReader } from '../../../../zip/xml-reader';
import { Data } from '../../../data';
import { ElementDestination, ElementHandlerTable } from '../../destination';
export declare class TableCellDestination extends ElementDestination {
    protected get elementHandlerTable(): ElementHandlerTable;
    static handlerTable: ElementHandlerTable;
    cell: TableCell;
    startParagraph: Paragraph;
    endParagraph: Paragraph;
    protected paragraphRequired: boolean;
    constructor(data: Data, row: TableRow);
    static getThis(data: Data): TableCellDestination;
    processElementOpen(_reader: XmlReader): Promise<void>;
    processElementClose(_reader: XmlReader): void;
}
//# sourceMappingURL=table-cell-destination.d.ts.map