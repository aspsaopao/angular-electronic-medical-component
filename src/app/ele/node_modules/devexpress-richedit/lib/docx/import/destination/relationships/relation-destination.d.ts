import { XmlReader } from '../../../zip/xml-reader';
import { Data } from '../../data';
import { RelationsCollection } from '../../utils/relations-collection';
import { ElementDestination, ElementHandlerTable } from '../destination';
export declare class RelationDestination extends ElementDestination {
    private relations;
    constructor(data: Data, relations: RelationsCollection);
    protected get elementHandlerTable(): ElementHandlerTable;
    processElementOpen(reader: XmlReader): Promise<void>;
}
//# sourceMappingURL=relation-destination.d.ts.map