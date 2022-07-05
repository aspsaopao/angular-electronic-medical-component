import { AnchorInfo } from '../../../../../core/model/floating-objects/anchor-info';
import { AnchorInlineBaseSize } from '../../../../../core/model/floating-objects/sizes';
import { Size } from '@devexpress/utils/lib/geometry/size';
import { RtfShapePropertiesInfo } from '../shape-properties-info';
export declare abstract class RtfBoundsCalculatorBase {
    readonly shapePropertiesInfo: RtfShapePropertiesInfo;
    constructor(shapePropertiesInfo: RtfShapePropertiesInfo);
    abstract get leftKeyword(): string;
    abstract get rightKeyword(): string;
    abstract get topKeyword(): string;
    abstract get bottomKeyword(): string;
    abstract get flipHKeyword(): string;
    abstract get flipVKeyword(): string;
    applyTransform2DAndGetActualSize(anchorInfo: AnchorInfo, size: AnchorInlineBaseSize): Size;
    protected getPositionCore(_value: number): number;
    getPosition(keyword: string, defaultValue: number): number;
    checkRotationAndSwapBox(anchorInfo: AnchorInfo, size: Size, rotation: number): void;
    needToSwap(rotation: number): boolean;
}
//# sourceMappingURL=rtf-bounds-calculator-base.d.ts.map