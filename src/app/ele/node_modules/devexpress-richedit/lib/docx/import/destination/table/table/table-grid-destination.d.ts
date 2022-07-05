import { Data } from '../../../data';
import { ElementDestination, ElementHandlerTable } from '../../destination';
export declare class TableGridDestination extends ElementDestination {
    static handlerTable: ElementHandlerTable;
    tableGrid: number[];
    constructor(data: Data, tableGrid: number[]);
    protected get elementHandlerTable(): ElementHandlerTable;
}
//# sourceMappingURL=table-grid-destination.d.ts.map