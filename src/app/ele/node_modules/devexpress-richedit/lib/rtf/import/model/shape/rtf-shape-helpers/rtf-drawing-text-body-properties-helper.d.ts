import { TextBoxProperties } from '../../../../../core/model/floating-objects/text-box-properties';
import { RtfShapePropertiesInfo } from '../shape-properties-info';
export declare class RtfDrawingTextBodyPropertiesHelper {
    readonly shapePropertiesInfo: RtfShapePropertiesInfo;
    constructor(shapePropertiesInfo: RtfShapePropertiesInfo);
    applyProperties(properties: TextBoxProperties): void;
    processInsetLeft(properties: TextBoxProperties): void;
    processInsertRight(properties: TextBoxProperties): void;
    processInsertTop(properties: TextBoxProperties): void;
    processInsetBottom(properties: TextBoxProperties): void;
    processFitShapeToText(properties: TextBoxProperties): void;
    processWrapText(properties: TextBoxProperties): void;
}
//# sourceMappingURL=rtf-drawing-text-body-properties-helper.d.ts.map