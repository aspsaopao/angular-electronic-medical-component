import { Data } from '../../data';
import { ElementDestination, ElementHandlerTable } from '../destination';
import { ParagraphPropertiesBaseDestination } from './paragraph-properties-base-destination';
export declare class ParagraphNumberingReferenceDestination extends ElementDestination {
    get listLevelIndex(): number;
    set listLevelIndex(value: number);
    get numberingId(): number;
    set numberingId(value: number);
    protected get elementHandlerTable(): ElementHandlerTable;
    static handlerTable: ElementHandlerTable;
    paragraphPropertiesDestination: ParagraphPropertiesBaseDestination;
    constructor(data: Data, paragraphPropertiesDestination: ParagraphPropertiesBaseDestination);
    static getThis(data: Data): ParagraphNumberingReferenceDestination;
}
//# sourceMappingURL=paragraph-numbering-reference-destination.d.ts.map