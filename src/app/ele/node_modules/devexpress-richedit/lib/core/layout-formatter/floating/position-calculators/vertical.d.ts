import { LayoutAnchoredObjectBox } from '../../../layout/main-structures/layout-boxes/layout-anchored-object-box';
import { AnchorObjectPositionCalculatorBase } from './base-calculator';
export declare class AnchorObjectVerticalPositionCalculator extends AnchorObjectPositionCalculatorBase {
    calculate(obj: LayoutAnchoredObjectBox): void;
    private get topCellMargin();
    private getY;
    private relativeColumnPos;
    private correctInTextAnchorPosition;
    private getRowWhatStartParagraphY;
    private absolute;
    private alignment;
    private getAlignPosition;
    private relative;
}
//# sourceMappingURL=vertical.d.ts.map