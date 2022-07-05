import { Rectangle } from '@devexpress/utils/lib/geometry/rectangle';
import { ICloneable, IEquatable } from '@devexpress/utils/lib/types';
import { LayoutTableColumnInfo } from '../table/layout-table-info';
import { LayoutRow } from './layout-row';
export declare class LayoutColumn extends Rectangle {
    rows: LayoutRow[];
    pageAreaOffset: number;
    paragraphFrames: ParagraphFrame[];
    tablesInfo: LayoutTableColumnInfo[];
    constructor();
    getEndPosition(): number;
    getLastRow(): LayoutRow;
    static findSectionColumnWithMinimumWidth(columnBounds: Rectangle[]): number;
    deepCopy(): LayoutColumn;
}
export declare class ParagraphFrame extends Rectangle implements IEquatable<ParagraphFrame>, ICloneable<ParagraphFrame> {
    paragraphColor: number;
    constructor();
    equals(obj: ParagraphFrame): boolean;
    clone(): ParagraphFrame;
}
//# sourceMappingURL=layout-column.d.ts.map