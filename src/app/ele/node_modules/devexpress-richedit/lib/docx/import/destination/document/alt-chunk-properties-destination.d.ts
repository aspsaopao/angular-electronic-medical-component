import { XmlReader } from '../../../zip/xml-reader';
import { ElementDestination, ElementHandlerTable } from '../destination';
export declare class AltChunkPropertiesDestination extends ElementDestination {
    protected get elementHandlerTable(): ElementHandlerTable;
    processElementOpen(_reader: XmlReader): Promise<void>;
    processElementClose(_reader: XmlReader): void;
}
//# sourceMappingURL=alt-chunk-properties-destination.d.ts.map