import { DrawingColor } from '../../../../../core/model/drawing/drawing-color';
import { Data } from '../../../data';
import { ElementDestination, ElementHandlerTable } from '../../destination';
export declare abstract class DrawingColorDestinationBase extends ElementDestination {
    static handlerTable: ElementHandlerTable;
    color: DrawingColor;
    hasColor: boolean;
    constructor(data: Data, color: DrawingColor);
    protected static getColor(data: Data): DrawingColor;
}
//# sourceMappingURL=drawing-color-destination-base.d.ts.map