import { LayoutBox } from '../../../layout/main-structures/layout-boxes/layout-box';
import { RowFormatter } from '../formatter';
import { IRowSpacingBeforeApplier } from '../utils/row-spacing-before-applier';
import { RowHeightState } from './row-height-state';
export declare class RowHeightCalculator {
    private rowFormatter;
    private lineSpacingCalculator;
    private rowSpacingBeforeApplier;
    currState: RowHeightState;
    private get row();
    constructor(rowFormatter: RowFormatter, rowSpacingBeforeApplier: IRowSpacingBeforeApplier);
    getState(box: LayoutBox): RowHeightState;
    private calcNewState;
    applyState(state: RowHeightState): void;
    private T584234;
    private applyT584234Height;
    private static affectedBoxesT584234;
    setFinalRowParams(): boolean;
    private calcRowParams;
}
//# sourceMappingURL=row-height-calculator.d.ts.map