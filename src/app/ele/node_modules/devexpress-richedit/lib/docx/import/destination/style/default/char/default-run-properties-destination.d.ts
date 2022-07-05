import { XmlReader } from '../../../../../zip/xml-reader';
import { ElementDestination, ElementHandlerTable } from '../../../destination';
export declare class DefaultRunPropertiesDestination extends ElementDestination {
    static handlerTable: ElementHandlerTable;
    protected get elementHandlerTable(): ElementHandlerTable;
    processElementOpen(reader: XmlReader): Promise<void>;
}
//# sourceMappingURL=default-run-properties-destination.d.ts.map