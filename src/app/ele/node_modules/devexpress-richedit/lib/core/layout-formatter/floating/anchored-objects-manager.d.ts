import { MinMaxNumber } from '@devexpress/utils/lib/class/min-max';
import { Size } from '@devexpress/utils/lib/geometry/size';
import { AnchorTextBoxSize } from '../../model/floating-objects/sizes';
import { BoxWrap } from '../box/box-wrap';
import { BoundsCalculator } from '../formatter/utils/bounds-calculator';
import { FormatterManager } from '../managers/formatter-manager';
import { AnchorObjectHorizontalPositionCalculator } from './position-calculators/horizontal';
import { AnchorObjectVerticalPositionCalculator } from './position-calculators/vertical';
export declare class AnchoredObjectsManager {
    private manager;
    anchorObjectHorizontalPositionCalculator: AnchorObjectHorizontalPositionCalculator;
    anchorObjectVerticalPositionCalculator: AnchorObjectVerticalPositionCalculator;
    textBoxContextSizeCalculators: Record<number, AnchoredTextBoxContextSizeCalculator>;
    constructor(manager: FormatterManager);
    reset(): void;
}
export declare class AnchoredTextBoxContextSizeCalculator {
    private size;
    wrap: BoxWrap;
    private isInited;
    private layoutInTableCell;
    paragraphMinMax: MinMaxNumber;
    layoutSize: Size;
    constructor(wrap: BoxWrap, size: AnchorTextBoxSize, layoutInTableCell: boolean);
    calculateSize(boundsCalculator: BoundsCalculator): void;
}
//# sourceMappingURL=anchored-objects-manager.d.ts.map