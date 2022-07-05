import { XmlReader } from '../../../../zip/xml-reader';
import { Data } from '../../../data';
import { ElementDestination, ElementHandlerTable } from '../../destination';
export declare class GridColumnDestination extends ElementDestination {
    tableGrid: number[];
    constructor(data: Data, tableGrid: number[]);
    protected get elementHandlerTable(): ElementHandlerTable;
    processElementOpen(reader: XmlReader): Promise<void>;
}
//# sourceMappingURL=grid-column-destination.d.ts.map