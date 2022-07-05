import { XmlReader } from '../../zip/xml-reader';
import { Data } from '../data';
import { LeafElementDestination } from './destination';
export declare class PropertyDestination extends LeafElementDestination {
    setter: (value: string) => void;
    constructor(data: Data, setter: (value: string) => void);
    processElementOpen(reader: XmlReader): Promise<void>;
}
//# sourceMappingURL=property-destination.d.ts.map