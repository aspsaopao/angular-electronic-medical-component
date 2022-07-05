import { TableCellProperties } from '../../../../core/model/tables/properties/table-cell-properties';
import { Data } from '../../data';
import { ElementHandlerTable } from '../destination';
import { TableCellPropertiesElementBaseDestination } from '../table/cell/properties/table-cell-properties-element-base-destination';
export declare class TableCellBordersDestination extends TableCellPropertiesElementBaseDestination {
    static handlerTable: ElementHandlerTable;
    static getProps(data: Data): TableCellProperties;
    protected get elementHandlerTable(): ElementHandlerTable;
}
//# sourceMappingURL=table-cell-borders-destination.d.ts.map