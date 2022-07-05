import { TableProperties } from '../../../../core/model/tables/properties/table-properties';
import { Data } from '../../data';
import { ElementHandlerTable } from '../destination';
import { TablePropertiesLeafElementDestination } from '../table/table/properties/table-properties-leaf-element-destination';
export declare class TableBordersDestination extends TablePropertiesLeafElementDestination {
    static handlerTable: ElementHandlerTable;
    static getProps(data: Data): TableProperties;
    protected get elementHandlerTable(): ElementHandlerTable;
}
//# sourceMappingURL=table-borders-destination.d.ts.map