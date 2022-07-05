import { DocumentModel } from '../../../core/model/document-model';
import { SubDocument } from '../../../core/model/sub-document';
import { ISetMaskedPropertyDescriptor, ISetMaskedPropertySupport } from '../../../core/rich-utils/common-interfaces';
import { XmlReader } from '../../zip/xml-reader';
import { Data } from '../data';
export declare type ElementHandler = (data: Data, reader: XmlReader) => ElementDestination;
export declare type ElementHandlerTable = Record<string, ElementHandler>;
export declare abstract class ElementDestination {
    protected get documentModel(): DocumentModel;
    protected get subDocument(): SubDocument;
    protected abstract get elementHandlerTable(): Record<string, ElementHandler>;
    readonly data: Data;
    forbidProcessElementOpenClose: boolean;
    constructor(data: Data);
    processElementOpen(_reader: XmlReader): Promise<void>;
    processElementClose(_reader: XmlReader): void;
    processText(_reader: XmlReader): boolean;
    onAlternateContent(): ElementDestination;
    isChoiceNamespaceSupported(_requeriesNamespaceUri: string): boolean;
    processCurrentElementInternal(reader: XmlReader): ElementDestination;
    process(reader: XmlReader): Promise<boolean | void>;
    peek(): ElementDestination;
    shouldProcessWhitespaces(_reader: XmlReader): boolean;
    protected processCurrentElement(reader: XmlReader): ElementDestination;
}
export declare class AlternateContentDestination extends ElementDestination {
    protected get elementHandlerTable(): ElementHandlerTable;
    private parentDestination;
    private hasProcessedChoice;
    constructor(data: Data, parentDestination: ElementDestination);
    processElementClose(reader: XmlReader): void;
    protected processCurrentElement(reader: XmlReader): ElementDestination;
}
export declare abstract class LeafElementDestination extends ElementDestination {
    protected get elementHandlerTable(): Record<string, ElementHandler>;
}
export declare class LeafSetMaskedPropertyDestination<TMask extends number, TValue, TProperties extends ISetMaskedPropertySupport<TMask, TValue, TProperties>> extends LeafElementDestination {
    protected properties: TProperties;
    protected desc: ISetMaskedPropertyDescriptor<TMask, TValue, TProperties>;
    constructor(data: Data, properties: TProperties, desc: ISetMaskedPropertyDescriptor<TMask, TValue, TProperties>);
}
export declare class EmptyDestination extends LeafElementDestination {
}
export declare class TransparentDestination extends ElementDestination {
    protected get elementHandlerTable(): Record<string, ElementHandler>;
    destination: ElementDestination;
    constructor(data: Data);
    processElementOpen(_reader: XmlReader): Promise<void>;
    processElementClose(_reader: XmlReader): void;
    processText(reader: XmlReader): boolean;
    peek(): ElementDestination;
    protected processCurrentElement(reader: XmlReader): ElementDestination;
}
export declare class CustomXmlDestination extends TransparentDestination {
}
//# sourceMappingURL=destination.d.ts.map