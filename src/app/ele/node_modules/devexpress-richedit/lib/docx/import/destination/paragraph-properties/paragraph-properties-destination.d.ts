import { MaskedParagraphProperties } from '../../../../core/model/paragraph/paragraph-properties';
import { TabProperties } from '../../../../core/model/paragraph/paragraph-style';
import { Data } from '../../data';
import { ElementHandlerTable } from '../destination';
import { ParagraphPropertiesBaseDestination } from './paragraph-properties-base-destination';
export interface IParagraphNumberingPropertiesDestination {
    numberingId: number;
    listLevelIndex: number;
}
export declare class ParagraphPropertiesDestination extends ParagraphPropertiesBaseDestination {
    get listLevelIndex(): number;
    set listLevelIndex(value: number);
    get numberingId(): number;
    set numberingId(value: number);
    protected get elementHandlerTable(): ElementHandlerTable;
    static handlerTable: ElementHandlerTable;
    paragraphDestination: IParagraphNumberingPropertiesDestination;
    constructor(data: Data, paragraphDestination: IParagraphNumberingPropertiesDestination, paragraphProperties: MaskedParagraphProperties, tabs: TabProperties);
    static getThis(data: Data): ParagraphPropertiesDestination;
}
//# sourceMappingURL=paragraph-properties-destination.d.ts.map