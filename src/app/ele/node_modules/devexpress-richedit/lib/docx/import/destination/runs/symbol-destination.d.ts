import { XmlReader } from '../../../zip/xml-reader';
import { ElementDestination, ElementHandlerTable } from '../destination';
export declare class SymbolDestination extends ElementDestination {
    protected get elementHandlerTable(): ElementHandlerTable;
    processElementOpen(reader: XmlReader): Promise<void>;
}
//# sourceMappingURL=symbol-destination.d.ts.map