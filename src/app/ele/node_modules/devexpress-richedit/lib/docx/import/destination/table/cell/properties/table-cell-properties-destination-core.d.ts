import { TableCell } from '../../../../../../core/model/tables/main-structures/table-cell';
import { Data } from '../../../../data';
import { ElementDestination, ElementHandlerTable } from '../../../destination';
export declare class TableCellPropertiesDestinationCore extends ElementDestination {
    protected get elementHandlerTable(): ElementHandlerTable;
    static handlerTable: ElementHandlerTable;
    cell: TableCell;
    constructor(data: Data, cell: TableCell);
    static getThis(data: Data): TableCellPropertiesDestinationCore;
}
//# sourceMappingURL=table-cell-properties-destination-core.d.ts.map