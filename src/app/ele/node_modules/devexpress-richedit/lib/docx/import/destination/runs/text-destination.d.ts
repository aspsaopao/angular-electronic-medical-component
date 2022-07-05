import { XmlReader } from '../../../zip/xml-reader';
import { ElementDestination, ElementHandlerTable } from '../destination';
export declare class TextDestination extends ElementDestination {
    protected get elementHandlerTable(): ElementHandlerTable;
    processText(reader: XmlReader): boolean;
    replaceLineBreakOnSpace(text: string): string;
}
//# sourceMappingURL=text-destination.d.ts.map