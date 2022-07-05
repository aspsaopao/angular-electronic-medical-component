import { TableRow } from '../../../../../../core/model/tables/main-structures/table-row';
import { Data } from '../../../../data';
import { ElementDestination, ElementHandlerTable } from '../../../destination';
export declare class TableRowPropertiesLeafElementDestination extends ElementDestination {
    row: TableRow;
    constructor(data: Data, row: TableRow);
    protected get elementHandlerTable(): ElementHandlerTable;
}
//# sourceMappingURL=table-row-properties-leaf-element-destination.d.ts.map