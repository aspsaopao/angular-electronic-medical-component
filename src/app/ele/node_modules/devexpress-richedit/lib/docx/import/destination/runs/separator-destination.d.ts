import { XmlReader } from '../../../zip/xml-reader';
import { ElementDestination, ElementHandlerTable } from '../destination';
export declare class SeparatorDestination extends ElementDestination {
    protected get elementHandlerTable(): ElementHandlerTable;
    processElementOpen(_reader: XmlReader): Promise<void>;
}
//# sourceMappingURL=separator-destination.d.ts.map