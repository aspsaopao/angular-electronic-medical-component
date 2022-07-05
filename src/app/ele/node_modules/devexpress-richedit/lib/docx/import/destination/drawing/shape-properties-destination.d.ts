import { DrawingColor } from '../../../../core/model/drawing/drawing-color';
import { AnchorTextBoxSize } from '../../../../core/model/floating-objects/sizes';
import { Shape } from '../../../../core/model/shapes/shape';
import { XmlReader } from '../../../zip/xml-reader';
import { Data } from '../../data';
import { ElementDestination, ElementHandlerTable, LeafElementDestination } from '../destination';
export declare class WordProcessingShapePropertiesDestination extends ElementDestination {
    protected get elementHandlerTable(): ElementHandlerTable;
    static handlerTable: ElementHandlerTable;
    shape: Shape;
    size: AnchorTextBoxSize;
    fillColor: DrawingColor;
    constructor(data: Data, shape: Shape, size: AnchorTextBoxSize);
    static getThis(data: Data): WordProcessingShapePropertiesDestination;
    static onSolidFill(data: Data, _reader: XmlReader): ElementDestination;
    static onNoFill(data: Data, _reader: XmlReader): ElementDestination;
    static onOutline(data: Data, _reader: XmlReader): ElementDestination;
    static onGraphicFrame(data: Data, _reader: XmlReader): ElementDestination;
    processElementClose(_reader: XmlReader): void;
    private getAlphaTransform;
}
export declare class SolidFillDestination extends ElementDestination {
    protected get elementHandlerTable(): ElementHandlerTable;
    static handlerTable: ElementHandlerTable;
    color: DrawingColor;
    constructor(data: Data, color: DrawingColor);
    static getThis(data: Data): SolidFillDestination;
    static onSRgbColor(data: Data, _reader: XmlReader): ElementDestination;
    static onSchemeColor(data: Data, _reader: XmlReader): ElementDestination;
    private static onPresetColor;
}
export declare class NoFillDestination extends LeafElementDestination {
    color: DrawingColor;
    constructor(data: Data, color: DrawingColor);
    processElementOpen(_reader: XmlReader): Promise<void>;
}
export declare class OutlineDestination extends ElementDestination {
    protected get elementHandlerTable(): ElementHandlerTable;
    static handlerTable: ElementHandlerTable;
    shape: Shape;
    color: DrawingColor;
    constructor(data: Data, shape: Shape);
    static getThis(data: Data): OutlineDestination;
    static onSolidFill(data: Data, _reader: XmlReader): ElementDestination;
    static onNoFill(data: Data, _reader: XmlReader): ElementDestination;
    processElementClose(_reader: XmlReader): void;
    processElementOpen(reader: XmlReader): Promise<void>;
}
//# sourceMappingURL=shape-properties-destination.d.ts.map