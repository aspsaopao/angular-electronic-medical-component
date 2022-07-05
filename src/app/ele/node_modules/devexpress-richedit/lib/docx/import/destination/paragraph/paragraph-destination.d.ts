import { Paragraph } from '../../../../core/model/paragraph/paragraph';
import { XmlReader } from '../../../zip/xml-reader';
import { Data } from '../../data';
import { ElementDestination, ElementHandlerTable } from '../destination';
import { ParagraphPropertiesDestination } from '../paragraph-properties/paragraph-properties-destination';
export declare class ParagraphDestination extends ElementDestination {
    protected get elementHandlerTable(): ElementHandlerTable;
    static handlerTable: ElementHandlerTable;
    listLevelIndex: number;
    numberingId: number;
    constructor(data: Data);
    static getThis(data: Data): ParagraphDestination;
    isChoiceNamespaceSupported(requeriesNamespaceUri: string): boolean;
    processElementOpen(reader: XmlReader): Promise<void>;
    processElementClose(_reader: XmlReader): void;
    protected createParagraphPropertiesDestination(): ParagraphPropertiesDestination;
    protected addNumbering(paragraph: Paragraph): void;
}
//# sourceMappingURL=paragraph-destination.d.ts.map