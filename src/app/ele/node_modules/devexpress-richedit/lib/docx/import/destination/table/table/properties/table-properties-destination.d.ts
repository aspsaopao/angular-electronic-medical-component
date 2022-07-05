import { Table } from '../../../../../../core/model/tables/main-structures/table';
import { Data } from '../../../../data';
import { ElementHandlerTable } from '../../../destination';
import { TablePropertiesDestinationCore } from './table-properties-destination-core';
export declare class TablePropertiesDestination extends TablePropertiesDestinationCore {
    protected get elementHandlerTable(): ElementHandlerTable;
    static handlerTable: ElementHandlerTable;
    constructor(data: Data, table: Table);
    static getThis(data: Data): TablePropertiesDestination;
}
//# sourceMappingURL=table-properties-destination.d.ts.map