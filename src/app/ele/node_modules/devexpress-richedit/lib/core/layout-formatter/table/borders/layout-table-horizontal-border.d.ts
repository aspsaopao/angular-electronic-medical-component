import { ICloneable, ISupportCopyFrom } from '@devexpress/utils/lib/types';
import { LayoutBorder } from '../../../model/borders/layout-border';
import { HorizontalLineBordersInfo } from './horizontal-line-borders-info';
import { LayoutTableBorder } from './layout-table-border';
export declare class LayoutTableHorizontalBorder implements ICloneable<LayoutTableHorizontalBorder>, ISupportCopyFrom<LayoutTableHorizontalBorder> {
    xPosition: number;
    length: number;
    borderInfo: LayoutBorder;
    clone(): LayoutTableHorizontalBorder;
    copyFrom(obj: LayoutTableHorizontalBorder): void;
    getLayoutTableBorder(line: HorizontalLineBordersInfo): LayoutTableBorder;
}
//# sourceMappingURL=layout-table-horizontal-border.d.ts.map