import { DrawingColor } from './drawing-color';
import { DrawingText3DType, PresetMaterialType } from './enums';
import { ShapeBevel3DProperties } from './shape-bevel3d-properties';
export declare class Shape3DProperties {
    static defaultExtrusionHeight: number;
    static defaultContourWidth: number;
    static defaultShapeDepth: number;
    static defaultPresetMaterialType: PresetMaterialType;
    topBevel: ShapeBevel3DProperties;
    bottomBevel: ShapeBevel3DProperties;
    contourColor: DrawingColor;
    extrusionColor: DrawingColor;
    presetMaterial: PresetMaterialType;
    extrusionHeight: number;
    contourWidth: number;
    shapeDepth: number;
    constructor();
    get isDefault(): boolean;
    get type(): DrawingText3DType;
    clone(): Shape3DProperties;
}
//# sourceMappingURL=shape3d-properties.d.ts.map