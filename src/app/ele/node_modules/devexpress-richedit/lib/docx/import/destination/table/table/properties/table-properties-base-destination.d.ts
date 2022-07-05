import { TableProperties } from '../../../../../../core/model/tables/properties/table-properties';
import { Data } from '../../../../data';
import { ElementDestination } from '../../../destination';
export declare abstract class TablePropertiesBaseDestination extends ElementDestination {
    properties: TableProperties;
    constructor(data: Data, properties: TableProperties);
}
//# sourceMappingURL=table-properties-base-destination.d.ts.map