import { XmlReader } from '../../../zip/xml-reader';
import { ElementHandlerTable } from '../destination';
import { FieldDestinationBase } from './field-destination-base';
export declare class FieldSimpleDestination extends FieldDestinationBase {
    static handlerTable: ElementHandlerTable;
    fieldCode: string;
    protected get elementHandlerTable(): ElementHandlerTable;
    processElementOpen(reader: XmlReader): Promise<void>;
    processElementClose(_reader: XmlReader): void;
}
//# sourceMappingURL=field-simple-destination.d.ts.map