import { ICloneable, ISupportCopyFrom } from '@devexpress/utils/lib/types';
import { LayoutTableHorizontalBorder } from './layout-table-horizontal-border';
export declare class HorizontalLineBordersInfo implements ICloneable<HorizontalLineBordersInfo>, ISupportCopyFrom<HorizontalLineBordersInfo> {
    isOffsetFromTop: boolean;
    yPosition: number;
    borders: LayoutTableHorizontalBorder[];
    maxWidth: number;
    constructor(isOffsetFromTop: boolean);
    updateWidth(width: number): void;
    clone(): HorizontalLineBordersInfo;
    copyFrom(obj: HorizontalLineBordersInfo): void;
}
//# sourceMappingURL=horizontal-line-borders-info.d.ts.map