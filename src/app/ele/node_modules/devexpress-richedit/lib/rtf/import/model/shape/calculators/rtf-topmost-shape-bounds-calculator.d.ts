import { RtfShapePropertiesInfo } from '../shape-properties-info';
import { RtfBoundsCalculatorBase } from './rtf-bounds-calculator-base';
export declare class RtfTopmostShapeBoundsCalculator extends RtfBoundsCalculatorBase {
    constructor(shapePropertiesInfo: RtfShapePropertiesInfo);
    get bottomKeyword(): string;
    get leftKeyword(): string;
    get rightKeyword(): string;
    get topKeyword(): string;
    get flipHKeyword(): string;
    get flipVKeyword(): string;
    protected getPositionCore(value: number): number;
}
//# sourceMappingURL=rtf-topmost-shape-bounds-calculator.d.ts.map