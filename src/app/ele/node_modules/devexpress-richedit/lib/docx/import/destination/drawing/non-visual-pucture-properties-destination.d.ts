import { XmlReader } from '../../../zip/xml-reader';
import { Data } from '../../data';
import { FloatingObjectImportInfo } from '../../model/floating-object-import-info';
import { ElementDestination, ElementHandlerTable } from '../destination';
export declare class NonVisualPicturePropertiesDestination extends ElementDestination {
    protected get elementHandlerTable(): ElementHandlerTable;
    static handlerTable: ElementHandlerTable;
    readonly floatingObjectImportInfo: FloatingObjectImportInfo;
    constructor(data: Data, floatingObjectImportInfo: FloatingObjectImportInfo);
    static OnNonVisualDrawingProperties(data: Data, _reader: XmlReader): ElementDestination;
    static getThis(data: Data): NonVisualPicturePropertiesDestination;
}
//# sourceMappingURL=non-visual-pucture-properties-destination.d.ts.map