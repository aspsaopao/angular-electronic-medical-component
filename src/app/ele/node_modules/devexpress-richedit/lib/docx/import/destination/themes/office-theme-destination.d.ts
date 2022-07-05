import { XmlReader } from '../../../zip/xml-reader';
import { ElementDestination, ElementHandlerTable } from '../destination';
export declare class OfficeThemeDestination extends ElementDestination {
    static handlerTable: ElementHandlerTable;
    name: string;
    protected get elementHandlerTable(): ElementHandlerTable;
    processElementOpen(reader: XmlReader): Promise<void>;
}
//# sourceMappingURL=office-theme-destination.d.ts.map