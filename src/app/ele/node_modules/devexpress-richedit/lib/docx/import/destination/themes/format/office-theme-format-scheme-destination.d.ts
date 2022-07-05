import { XmlReader } from '../../../../zip/xml-reader';
import { ElementDestination, ElementHandlerTable } from '../../destination';
export declare class OfficeThemeFormatSchemeDestination extends ElementDestination {
    static handlerTable: ElementHandlerTable;
    protected get elementHandlerTable(): ElementHandlerTable;
    processElementOpen(reader: XmlReader): Promise<void>;
}
//# sourceMappingURL=office-theme-format-scheme-destination.d.ts.map