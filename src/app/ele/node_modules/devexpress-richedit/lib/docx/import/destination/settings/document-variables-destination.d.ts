import { XmlReader } from '../../../zip/xml-reader';
import { ElementDestination, ElementHandlerTable, LeafElementDestination } from '../destination';
export declare class DocumentSettingsDocVarsDestination extends ElementDestination {
    static handlerTable: ElementHandlerTable;
    protected get elementHandlerTable(): ElementHandlerTable;
}
export declare class DocumentSettingsDocVarDestination extends LeafElementDestination {
    processElementOpen(reader: XmlReader): Promise<void>;
}
//# sourceMappingURL=document-variables-destination.d.ts.map