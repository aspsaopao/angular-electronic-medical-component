import { LayoutPosition } from '../../../layout/layout-position';
import { LayoutAnchoredObjectBox } from '../../../layout/main-structures/layout-boxes/layout-anchored-object-box';
import { AnchorInfo } from '../../../model/floating-objects/anchor-info';
import { FormatterManager } from '../../managers/formatter-manager';
export declare class AnchorObjectPositionCalculatorBase {
    protected manager: FormatterManager;
    protected obj: LayoutAnchoredObjectBox;
    protected lp: LayoutPosition;
    protected isRelativeCell: boolean;
    constructor(manager: FormatterManager);
    protected get anchorInfo(): AnchorInfo;
    protected init(obj: LayoutAnchoredObjectBox): void;
}
//# sourceMappingURL=base-calculator.d.ts.map