import { TableRowAlignment } from '../../model/tables/secondary-structures/table-base-structures';
import { TableHeightUnit, TableHeightUnitType } from '../../model/tables/secondary-structures/table-units';
export declare class TopAndBottomMarginsForRow {
    topMargin: number;
    bottomMargin: number;
    addCellTopMargin(topMargin: number): void;
    addCellBottomMargin(bottomMargin: number): void;
    sumOfBoth(): number;
}
export declare class TableRowHeightInfo {
    horizontalAlignment: TableRowAlignment;
    preferredHeightValue: number;
    preferredHeightType: TableHeightUnitType;
    contentHeight: number;
    cantSplit: boolean;
    constructor(cantSplit: boolean, height: TableHeightUnit, horizontalAlignment: TableRowAlignment);
}
//# sourceMappingURL=other.d.ts.map