import { LayoutAnchoredObjectBox } from '../../../layout/main-structures/layout-boxes/layout-anchored-object-box';
import { AnchorObjectPositionCalculatorBase } from './base-calculator';
export declare class AnchorObjectHorizontalPositionCalculator extends AnchorObjectPositionCalculatorBase {
    private static mapBookLayoutALignmentType;
    calculate(obj: LayoutAnchoredObjectBox): void;
    private get leftCellMargin();
    private get rightCellMargin();
    private getX;
    private relativeColumnPos;
    private correctInTextAnchorPosition;
    private alignment;
    private getAlignPosition;
    private absolute;
    private bookLayout;
    private relative;
}
//# sourceMappingURL=horizontal.d.ts.map