import { Table } from '../../../../../../core/model/tables/main-structures/table';
import { TableProperties } from '../../../../../../core/model/tables/properties/table-properties';
import { Data } from '../../../../data';
import { ElementDestination, ElementHandlerTable } from '../../../destination';
export declare class TablePropertiesLeafElementDestination extends ElementDestination {
    protected get elementHandlerTable(): ElementHandlerTable;
    table: Table;
    tableProperties: TableProperties;
    constructor(data: Data, table: Table, tableProperties: TableProperties);
    protected static getProperties(data: Data): TableProperties;
}
//# sourceMappingURL=table-properties-leaf-element-destination.d.ts.map