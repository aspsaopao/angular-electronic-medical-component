import { AnchorInfo } from '../../../../../core/model/floating-objects/anchor-info';
import { RelativeHeightType, RelativeWidthType } from '../../../../../core/model/floating-objects/enums';
import { RtfShapePropertiesInfo } from '../shape-properties-info';
import { AnchorTextBoxSize } from '../../../../../core/model/floating-objects/sizes';
export declare class RtfContainerPropertiesHelper {
    readonly shapeProperties: RtfShapePropertiesInfo;
    constructor(shapeProperties: RtfShapePropertiesInfo);
    applyProperties(anchorInfo: AnchorInfo, size: AnchorTextBoxSize): void;
    processLocked(anchorInfo: AnchorInfo): void;
    processHorizontalPositionType(anchorInfo: AnchorInfo): void;
    processVerticalPositionType(anchorInfo: AnchorInfo): void;
    processZOrder(anchorInfo: AnchorInfo): void;
    processDrawingObjectHorizontalPositionAlignment(anchorInfo: AnchorInfo): void;
    processDrawingObjectHorizontalPositionType(anchorInfo: AnchorInfo): void;
    processPercentHorizontalOffset(anchorInfo: AnchorInfo): void;
    processPercentVerticalOffset(anchorInfo: AnchorInfo): void;
    processDrawingObjectVerticalPositionAlignment(anchorInfo: AnchorInfo): void;
    processDrawingObjectVerticalPositionType(anchorInfo: AnchorInfo): void;
    processLayoutInTableCell(anchorInfo: AnchorInfo): void;
    processAllowOverlap(anchorInfo: AnchorInfo): void;
    processDisplayBehindDocumentText(anchorInfo: AnchorInfo): void;
    processLeftDistance(anchorInfo: AnchorInfo): void;
    processRightDistance(anchorInfo: AnchorInfo): void;
    processTopDistance(anchorInfo: AnchorInfo): void;
    processBottomDistance(anchorInfo: AnchorInfo): void;
    processRelativeHorizontalSize(size: AnchorTextBoxSize): void;
    processRelativeVerticalSize(size: AnchorTextBoxSize): void;
    getDrawingObjectRelativeFromHorizontal(): RelativeWidthType;
    getDrawingObjectRelativeFromVertical(): RelativeHeightType;
    importDrawingObjectHorizontalPositionAlignment(anchorInfo: AnchorInfo, propertyValue: number): void;
    importDrawingObjectHorizontalPositionType(anchorInfo: AnchorInfo, propertyValue: number): void;
    importDrawingObjectVerticalPositionAlignment(anchorInfo: AnchorInfo, propertyValue: number): void;
    importDrawingObjectVerticalPositionType(anchorInfo: AnchorInfo, propertyValue: number): void;
}
//# sourceMappingURL=rtf-container-properties-helper.d.ts.map