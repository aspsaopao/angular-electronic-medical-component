import { MaskedParagraphProperties } from '../../../../../core/model/paragraph/paragraph-properties';
import { TabProperties } from '../../../../../core/model/paragraph/paragraph-style';
import { Data } from '../../../data';
import { ElementHandlerTable } from '../../destination';
import { ParagraphPropertiesBaseDestination } from '../../paragraph-properties/paragraph-properties-base-destination';
import { StyleDestinationBase } from '../style-destination-base';
export declare class StyleParagraphPropertiesDestination extends ParagraphPropertiesBaseDestination {
    protected get elementHandlerTable(): ElementHandlerTable;
    get numberingId(): number;
    set numberingId(value: number);
    get listLevelIndex(): number;
    set listLevelIndex(value: number);
    static handlerTable: ElementHandlerTable;
    styleDestination: StyleDestinationBase;
    constructor(data: Data, styleDestination: StyleDestinationBase, paragraphProperties: MaskedParagraphProperties, tabs: TabProperties);
    static getThis(data: Data): StyleParagraphPropertiesDestination;
}
//# sourceMappingURL=style-paragraph-properties-destination.d.ts.map