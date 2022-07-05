import { ColorHSL } from '../../color/color-hsl';
import { ScRGBColor } from '../../color/sc-rgbcolor';
import { DrawingColor } from '../../drawing/drawing-color';
import { DrawingColorModelInfo } from '../../drawing/drawing-color-model-info';
export declare class JSONDrawingColorConverter {
    static convertFromJSON(obj: any): DrawingColor;
}
export declare class JSONDrawingColorModelInfoConverter {
    static convertFromJSON(obj: any): DrawingColorModelInfo;
}
export declare class JSONColorHSLConverter {
    static convertFromJSON(obj: any): ColorHSL;
}
export declare class JSONScRGBColorConverter {
    static convertFromJSON(obj: any): ScRGBColor;
}
//# sourceMappingURL=json-drawing-color-converter.d.ts.map