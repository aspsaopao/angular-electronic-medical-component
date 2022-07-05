import { XmlReader } from '../../../../zip/xml-reader';
import { ElementDestination, ElementHandlerTable } from '../../destination';
export declare class OfficeThemeColorSchemeDestination extends ElementDestination {
    static handlerTable: ElementHandlerTable;
    protected get elementHandlerTable(): ElementHandlerTable;
    processElementOpen(reader: XmlReader): Promise<void>;
}
//# sourceMappingURL=office-theme-color-scheme-destination.d.ts.map