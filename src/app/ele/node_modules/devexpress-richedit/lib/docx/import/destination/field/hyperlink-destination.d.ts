import { HyperlinkInfo } from '../../../../core/model/fields/field';
import { XmlReader } from '../../../zip/xml-reader';
import { ElementHandlerTable } from '../destination';
import { FieldDestinationBase } from './field-destination-base';
export declare class HyperlinkDestination extends FieldDestinationBase {
    protected get elementHandlerTable(): ElementHandlerTable;
    static handlerTable: ElementHandlerTable;
    private static attributeHandlerTable;
    processElementOpen(reader: XmlReader): Promise<void>;
    processElementClose(_reader: XmlReader): void;
    protected createHyperlinkInfo(reader: XmlReader): HyperlinkInfo;
}
//# sourceMappingURL=hyperlink-destination.d.ts.map