import { XmlReader } from '../../../zip/xml-reader';
import { ElementDestination, ElementHandlerTable } from '../destination';
export declare class AltChunkDestination extends ElementDestination {
    static handlerTable: ElementHandlerTable;
    relId: string;
    protected get elementHandlerTable(): ElementHandlerTable;
    processElementOpen(reader: XmlReader): Promise<void>;
    processElementClose(_reader: XmlReader): void;
}
//# sourceMappingURL=alt-chunk-destination.d.ts.map