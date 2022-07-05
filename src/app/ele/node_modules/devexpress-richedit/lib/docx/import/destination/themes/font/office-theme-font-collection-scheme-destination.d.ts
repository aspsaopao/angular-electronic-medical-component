import { DrawingTextFont } from '../../../../../core/model/drawing/drawing-text-font';
import { ThemeFontSchemePart } from '../../../../../core/model/themes/theme-font-scheme-part';
import { XmlReader } from '../../../../zip/xml-reader';
import { Data } from '../../../data';
import { ElementDestination, ElementHandlerTable } from '../../destination';
export declare class OfficeThemeFontCollectionSchemeDestination extends ElementDestination {
    protected get elementHandlerTable(): ElementHandlerTable;
    protected get latin(): DrawingTextFont;
    protected get eastAsian(): DrawingTextFont;
    protected get complexScript(): DrawingTextFont;
    protected get fonts(): Record<string, string>;
    static handlerTable: ElementHandlerTable;
    fontPart: ThemeFontSchemePart;
    hasLatin: boolean;
    hasEastAsian: boolean;
    hasComplexScript: boolean;
    constructor(data: Data, fontPart: ThemeFontSchemePart);
    static getThis(data: Data): OfficeThemeFontCollectionSchemeDestination;
    processElementClose(_reader: XmlReader): void;
}
//# sourceMappingURL=office-theme-font-collection-scheme-destination.d.ts.map