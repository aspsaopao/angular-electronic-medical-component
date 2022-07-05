import { TableRow } from '../../../../../../core/model/tables/main-structures/table-row';
import { Data } from '../../../../data';
import { ElementDestination, ElementHandlerTable } from '../../../destination';
export declare class TableRowPropertiesDestination extends ElementDestination {
    protected get elementHandlerTable(): ElementHandlerTable;
    static handlerTable: ElementHandlerTable;
    row: TableRow;
    constructor(data: Data, row: TableRow);
    static getThis(data: Data): TableRowPropertiesDestination;
}
//# sourceMappingURL=table-row-properties-destination.d.ts.map