import { MaskedParagraphProperties } from '../../../../core/model/paragraph/paragraph-properties';
import { TabProperties } from '../../../../core/model/paragraph/paragraph-style';
import { Data } from '../../data';
import { RunPropertiesBaseDestination } from '../character-properties/run-properties-base-destination';
import { ElementDestination, ElementHandlerTable } from '../destination';
export declare abstract class ParagraphPropertiesBaseDestination extends ElementDestination {
    protected get elementHandlerTable(): ElementHandlerTable;
    static handlerTable: ElementHandlerTable;
    paragraphProperties: MaskedParagraphProperties;
    tabs: TabProperties;
    abstract numberingId: number;
    abstract listLevelIndex: number;
    constructor(data: Data, paragraphProperties: MaskedParagraphProperties, tabs: TabProperties);
    static getThis(data: Data): ParagraphPropertiesBaseDestination;
    static getParagraphProperties(data: Data): MaskedParagraphProperties;
}
export declare class ParagraphMarkRunPropertiesDestination extends RunPropertiesBaseDestination {
    static handlerTable: ElementHandlerTable;
    protected get elementHandlerTable(): ElementHandlerTable;
}
//# sourceMappingURL=paragraph-properties-base-destination.d.ts.map