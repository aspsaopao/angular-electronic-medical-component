import { TabInfo } from '../../model/paragraph/paragraph-style';
import { RowFormatter } from './formatter';
import { RowIntervalInfo } from './size-engine/row-formatting-info';
export declare class RowTabInfo {
    private rowFormatter;
    tabPositions: TabInfo[];
    defaultTabStop: number;
    lastTabBoxIndex: number;
    lastTabPosition: TabInfo;
    private paragraphHorizontalBoundsStart;
    private get row();
    get currIntervalOrLastNonEmpty(): RowIntervalInfo;
    get currInterval(): RowIntervalInfo;
    constructor(rowFormatter: RowFormatter, paragraphHorizontalBoundsStart: number);
    restart(): void;
    shiftBoxesAfterLastTab(): void;
    addTabBox(): boolean;
    private calculateActualTabWidth;
    private calcLastVisibleBoxRightBounds;
    private getFinalCustomTabWidth;
    getNextDefaultTabPosition(xOffsetRelativePage: number): number;
    getNextCustomTabPosition(xOffsetRelativePage: number): TabInfo;
}
//# sourceMappingURL=tab-info.d.ts.map