import { ParagraphLineSpacingType } from '../../../model/paragraph/paragraph-properties';
export declare abstract class LineSpacingCalculator {
    static create(lineSpacing: number, lineSpacingType: ParagraphLineSpacingType): LineSpacingCalculator;
    calculate(rowHeight: number, maxAscent: number, maxDescent: number, maxPictureHeight: number): number;
    abstract calculateSpacing(maxTextHeight: number): number;
    abstract calculateSpacingInlineObjectCase(maxTextHeight: number, rowTextSpacing: number, maxPictureHeight: number, maxDescent: number): number;
}
export declare class MultipleSpacingCalculator extends LineSpacingCalculator {
    multiplier: number;
    constructor(multiplier: number);
    calculateSpacing(maxTextHeight: number): number;
    calculateSpacingInlineObjectCase(maxTextHeight: number, rowTextSpacing: number, maxPictureHeight: number, maxDescent: number): number;
}
export declare class SingleSpacingCalculator extends LineSpacingCalculator {
    calculateSpacing(maxTextHeight: number): number;
    calculateSpacingInlineObjectCase(_maxTextHeight: number, _rowTextSpacing: number, maxPictureHeight: number, maxDescent: number): number;
}
export declare class DoubleSpacingCalculator extends LineSpacingCalculator {
    calculateSpacing(maxTextHeight: number): number;
    calculateSpacingInlineObjectCase(maxTextHeight: number, rowTextSpacing: number, maxPictureHeight: number, maxDescent: number): number;
}
export declare class SesquialteralSpacingCalculator extends LineSpacingCalculator {
    calculateSpacing(maxTextHeight: number): number;
    calculateSpacingInlineObjectCase(maxTextHeight: number, rowTextSpacing: number, maxPictureHeight: number, maxDescent: number): number;
}
export declare class ExactlySpacingCalculator extends LineSpacingCalculator {
    lineSpacing: number;
    constructor(lineSpacing: number);
    calculateSpacing(_maxTextHeight: number): number;
    calculateSpacingInlineObjectCase(_maxTextHeight: number, _rowTextSpacing: number, _maxPictureHeight: number, _maxDescent: number): number;
    calculate(_rowHeight: number, _maxAscent: number, _maxDescent: number, _maxPictureHeight: number): number;
}
export declare class AtLeastSpacingCalculator extends SingleSpacingCalculator {
    lineSpacing: number;
    constructor(lineSpacing: number);
    calculate(rowHeight: number, maxAscent: number, maxDescent: number, maxPictureHeight: number): number;
}
//# sourceMappingURL=line-spacing-calculator.d.ts.map