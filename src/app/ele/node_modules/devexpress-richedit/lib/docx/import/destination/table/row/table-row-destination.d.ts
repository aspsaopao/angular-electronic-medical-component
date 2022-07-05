import { Table } from '../../../../../core/model/tables/main-structures/table';
import { TableRow } from '../../../../../core/model/tables/main-structures/table-row';
import { XmlReader } from '../../../../zip/xml-reader';
import { Data } from '../../../data';
import { ElementDestination, ElementHandlerTable } from '../../destination';
export declare class TableRowDestination extends ElementDestination {
    protected get elementHandlerTable(): ElementHandlerTable;
    static handlerTable: ElementHandlerTable;
    row: TableRow;
    constructor(data: Data, table: Table);
    protected static getThis(data: Data): TableRowDestination;
    processElementOpen(_reader: XmlReader): Promise<void>;
}
//# sourceMappingURL=table-row-destination.d.ts.map