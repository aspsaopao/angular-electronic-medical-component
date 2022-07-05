import { DrawingColor } from '../../../../../core/model/drawing/drawing-color';
import { DrawingColorModelInfo } from '../../../../../core/model/drawing/drawing-color-model-info';
import { XmlReader } from '../../../../zip/xml-reader';
import { Data } from '../../../data';
import { ElementDestination, ElementHandlerTable } from '../../destination';
export declare abstract class DrawingColorPropertiesDestinationBase extends ElementDestination {
    protected get elementHandlerTable(): ElementHandlerTable;
    static handlerTable: ElementHandlerTable;
    color: DrawingColor;
    colorModelInfo: DrawingColorModelInfo;
    constructor(data: Data, color: DrawingColor);
    static getThis(data: Data): DrawingColorPropertiesDestinationBase;
    processElementOpen(reader: XmlReader): Promise<void>;
    processElementClose(_reader: XmlReader): void;
    protected abstract setColorPropertyValue(reader: XmlReader): any;
}
//# sourceMappingURL=drawing-color-properties-destination-base.d.ts.map