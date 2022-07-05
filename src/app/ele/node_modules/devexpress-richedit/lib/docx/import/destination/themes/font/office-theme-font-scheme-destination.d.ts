import { ThemeFontSchemePart } from '../../../../../core/model/themes/theme-font-scheme-part';
import { XmlReader } from '../../../../zip/xml-reader';
import { Data } from '../../../data';
import { ElementDestination, ElementHandlerTable } from '../../destination';
export declare class OfficeThemeFontSchemeDestination extends ElementDestination {
    static handlerTable: ElementHandlerTable;
    static getThis(data: Data): OfficeThemeFontSchemeDestination;
    protected get elementHandlerTable(): ElementHandlerTable;
    protected get majorFont(): ThemeFontSchemePart;
    protected get minorFont(): ThemeFontSchemePart;
    processElementOpen(reader: XmlReader): Promise<void>;
}
//# sourceMappingURL=office-theme-font-scheme-destination.d.ts.map