import { ImageCache } from '../../../core/model/caches/images';
import { HyperlinkInfo } from '../../../core/model/fields/field';
import { AnchorInfo } from '../../../core/model/floating-objects/anchor-info';
import { AnchorTextBoxSize } from '../../../core/model/floating-objects/sizes';
import { TextBoxProperties } from '../../../core/model/floating-objects/text-box-properties';
import { NonVisualDrawingObjectInfo } from '../../../core/model/manipulators/picture-manipulator/non-visual-drawing-object-info';
import { OneCharRun } from '../../../core/model/runs/run-base';
import { Shape } from '../../../core/model/shapes/shape';
import { Data } from '../data';
export declare enum ShapeType {
    None = -1,
    PictureFrame = 75,
    TextBox = 202
}
export declare class FloatingObjectImportInfo {
    anchorInfo: AnchorInfo;
    constainerProperties: NonVisualDrawingObjectInfo;
    objectNonVisualProperties: NonVisualDrawingObjectInfo;
    shape: Shape;
    textBoxProperties: TextBoxProperties;
    data: Data;
    size: AnchorTextBoxSize;
    imageId: number;
    subDocId: number;
    isFloatingObject: boolean;
    shapeType: ShapeType;
    shouldIgnore: boolean;
    hyperlinkInfo: HyperlinkInfo;
    constructor(data: Data);
    insertFloatingObject(imageCache: ImageCache): OneCharRun;
}
//# sourceMappingURL=floating-object-import-info.d.ts.map