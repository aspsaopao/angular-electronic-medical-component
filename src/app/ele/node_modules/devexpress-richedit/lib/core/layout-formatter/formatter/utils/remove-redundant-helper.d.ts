import { DocumentLayout } from '../../../layout/document-layout';
import { LayoutColumn } from '../../../layout/main-structures/layout-column';
import { LayoutPage } from '../../../layout/main-structures/layout-page';
import { LayoutPageArea } from '../../../layout/main-structures/layout-page-area';
import { ColumnChange } from '../../changes/changes/column-change';
import { PageAreaChange } from '../../changes/changes/page-area-change';
import { PageChange } from '../../changes/changes/page-change';
import { ChangesManager } from '../../changes/engine/changes-manager';
export declare class RemoveRedundantHelper {
    private changesManager;
    constructor(changesManager: ChangesManager);
    private static removeRendundant;
    removeRedundantPage(layout: DocumentLayout, firstRendundantPageIndex: number): boolean;
    removeRedundantPageAreas(page: LayoutPage, firstRendundantPageAreaIndex: number, pageChange: PageChange): boolean;
    removeRedundantColumnsFromArea(pageArea: LayoutPageArea, firstRedundantColumnIndex: number, pageAreaChange: PageAreaChange): boolean;
    removeRedundantRowsFromColumn(column: LayoutColumn, firstRendundantRowIndex: number, columnChange: ColumnChange): boolean;
    removeRedundantTableInfosFromColumn(column: LayoutColumn, firstRendundantTableIndex: number, columnChange: ColumnChange): boolean;
}
//# sourceMappingURL=remove-redundant-helper.d.ts.map