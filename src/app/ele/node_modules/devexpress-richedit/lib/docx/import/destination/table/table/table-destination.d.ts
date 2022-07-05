import { Table } from '../../../../../core/model/tables/main-structures/table';
import { TableCell } from '../../../../../core/model/tables/main-structures/table-cell';
import { XmlReader } from '../../../../zip/xml-reader';
import { Data } from '../../../data';
import { ElementDestination, ElementHandlerTable } from '../../destination';
export declare class TableDestination extends ElementDestination {
    protected get elementHandlerTable(): ElementHandlerTable;
    static handlerTable: ElementHandlerTable;
    table: Table;
    tableGrid: number[];
    constructor(data: Data, parentCell?: TableCell);
    protected static getThis(data: Data): TableDestination;
    processElementOpen(_reader: XmlReader): Promise<void>;
    processElementClose(_reader: XmlReader): void;
    private ensureTableCellsWidth;
}
//# sourceMappingURL=table-destination.d.ts.map