import { Table } from '../../../../../../core/model/tables/main-structures/table';
import { TableProperties } from '../../../../../../core/model/tables/properties/table-properties';
import { Data } from '../../../../data';
import { ElementHandlerTable } from '../../../destination';
import { TablePropertiesBaseDestination } from './table-properties-base-destination';
export declare class TablePropertiesDestinationCore extends TablePropertiesBaseDestination {
    protected get elementHandlerTable(): ElementHandlerTable;
    static handlerTable: ElementHandlerTable;
    tableProperties: TableProperties;
    table: Table;
    constructor(data: Data, table: Table, tableProperties: TableProperties);
    static getThis(data: Data): TablePropertiesDestinationCore;
    static getProperties(data: Data): TableProperties;
}
//# sourceMappingURL=table-properties-destination-core.d.ts.map