import { Data } from '../../data';
import { RelationsCollection } from '../../utils/relations-collection';
import { ElementDestination, ElementHandlerTable } from '../destination';
export declare class RelationshipsDestination extends ElementDestination {
    protected get elementHandlerTable(): ElementHandlerTable;
    static handlerTable: ElementHandlerTable;
    private relations;
    constructor(data: Data, relations: RelationsCollection);
    static getThis(data: Data): RelationshipsDestination;
}
//# sourceMappingURL=relationships-destination.d.ts.map