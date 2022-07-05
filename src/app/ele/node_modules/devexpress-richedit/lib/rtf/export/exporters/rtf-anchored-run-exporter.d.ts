import { AnchorInfo } from '../../../core/model/floating-objects/anchor-info';
import { AnchorInlineBaseSize } from '../../../core/model/floating-objects/sizes';
import { Shape } from '../../../core/model/shapes/shape';
import { NonVisualDrawingObjectInfo } from '../../../core/model/manipulators/picture-manipulator/non-visual-drawing-object-info';
import { RtfBuilder } from '../rtf-builder';
export declare abstract class RtfAnchoredRunExporter {
    readonly rtfBuilder: RtfBuilder;
    readonly anchorInfo: AnchorInfo;
    readonly shape: Shape;
    readonly size: AnchorInlineBaseSize;
    readonly nonVisualDrawingObjectInfo: NonVisualDrawingObjectInfo;
    protected constructor(rtfBuilder: RtfBuilder, anchorInfo: AnchorInfo, shape: Shape, size: AnchorInlineBaseSize, nonVisualDrawingObjectInfo: NonVisualDrawingObjectInfo);
    abstract getWidth(): number;
    abstract getHeight(): number;
    abstract exportContent(): any;
    private getShapeHorizontalPositionType;
    private getShapeVerticalPositionType;
    private exportFloatingObjectHorizontalPositionType;
    private exportFloatingObjectVerticalPositionType;
    private exportShapeInstanceProperties;
    private exportFloatingObjectTextWrapType;
    private exportFloatingObjectShape;
    protected exportFloatingObjectRelativeSize(): void;
    export(): void;
}
//# sourceMappingURL=rtf-anchored-run-exporter.d.ts.map