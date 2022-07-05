import { XmlReader } from '../../../zip/xml-reader';
import { ElementHandlerTable } from '../destination';
import { FieldDestinationBase } from './field-destination-base';
export declare class FieldCharDestination extends FieldDestinationBase {
    static handlerTable: ElementHandlerTable;
    protected get elementHandlerTable(): ElementHandlerTable;
    processElementOpen(reader: XmlReader): Promise<void>;
}
//# sourceMappingURL=field-char-destination.d.ts.map