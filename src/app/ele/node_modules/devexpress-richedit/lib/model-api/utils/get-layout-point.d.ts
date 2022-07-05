import { FormatterManager } from '../../core/layout-formatter/managers/formatter-manager';
import { LayoutPoint } from '../../core/layout/layout-point';
import { LayoutPosition } from '../../core/layout/layout-position';
import { SubDocument } from '../../core/model/sub-document';
export declare function getLayoutPoint(layoutFormatterManager: FormatterManager, subDocument: SubDocument, position: number, endOfLine: boolean, pageIndex: number): {
    layoutPoint: LayoutPoint | null;
    layoutPosition: LayoutPosition | null;
};
//# sourceMappingURL=get-layout-point.d.ts.map