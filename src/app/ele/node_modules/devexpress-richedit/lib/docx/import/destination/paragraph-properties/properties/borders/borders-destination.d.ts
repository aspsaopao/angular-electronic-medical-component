import { BorderInfo } from '../../../../../../core/model/borders/border-info';
import { IParagraphPropertyDescriptor } from '../../../../../../core/model/paragraph/paragraph-property-descriptors';
import { Data } from '../../../../data';
import { ElementHandlerTable } from '../../../destination';
import { ParagraphFormattingLeafElementDestination } from '../../paragraph-formatting-leaf-element-destination';
export declare class ParagraphBordersDestination extends ParagraphFormattingLeafElementDestination<BorderInfo> {
    static handlerTable: ElementHandlerTable;
    static getThis(data: Data): ParagraphBordersDestination;
    protected get elementHandlerTable(): ElementHandlerTable;
    protected getDescriptor(): IParagraphPropertyDescriptor<BorderInfo>;
}
//# sourceMappingURL=borders-destination.d.ts.map