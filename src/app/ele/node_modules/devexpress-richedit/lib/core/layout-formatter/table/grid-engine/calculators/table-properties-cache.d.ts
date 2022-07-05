import { MinMaxNumber } from '@devexpress/utils/lib/class/min-max';
import { DocumentModel } from '../../../../model/document-model';
import { Table, TablePosition } from '../../../../model/tables/main-structures/table';
import { TableLayoutType } from '../../../../model/tables/secondary-structures/table-base-structures';
import { TableWidthUnit } from '../../../../model/tables/secondary-structures/table-units';
import { InnerClientProperties } from '../../../../rich-utils/inner-client-properties';
import { TableBorderInfoProvider } from '../../borders/border-helper';
import { Grid } from '../grid';
export declare class TablePropertiesCache {
    indent: TableWidthUnit;
    layoutType: TableLayoutType;
    borderProvider: TableBorderInfoProvider;
    rows: TableRowPropertiesCache[];
    readonly preferredWidth: TableWidthUnit;
    get isFixedTableWidth(): boolean;
    get isFixedAlgoritm(): boolean;
    constructor(model: DocumentModel, table: Table, grid: Grid, innerClientProperties: InnerClientProperties);
    private getActualPreferredWidth;
}
export declare class TableRowPropertiesCache {
    cells: TableCellPropertiesCache[];
    constructor(model: DocumentModel, tblBrdProv: TableBorderInfoProvider, pos: TablePosition, rows: TableRowPropertiesCache[], grid: Grid);
}
export declare class TableCellPropertiesCache {
    noWrap: boolean;
    horizontalMargins: number;
    leftBorderWidth: number;
    rightBorderWidth: number;
    spacing: number;
    contentWidthsInfo: MinMaxNumber;
    constructor(model: DocumentModel, tblBrdProv: TableBorderInfoProvider, pos: TablePosition);
}
//# sourceMappingURL=table-properties-cache.d.ts.map