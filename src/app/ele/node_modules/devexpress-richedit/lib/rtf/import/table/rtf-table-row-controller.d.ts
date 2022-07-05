import { RtfTable } from '../model/table/rtf-table';
import { RtfTableRow } from '../model/table/rtf-table-row';
import { RtfTableCellController } from './rtf-table-cell-controller';
import { RtfTableController } from './rtf-table-controller';
export declare class RtfTableRowController {
    readonly tableController: RtfTableController;
    currentRow: RtfTableRow;
    cellController: RtfTableCellController;
    constructor(tableController: RtfTableController);
    createCellController(): RtfTableCellController;
    startNewRow(): void;
    isCurrentRowNotComplete(): boolean;
    isCurrentRowValid(): boolean;
    assignLastRowAsCurrent(): void;
    finishRow(): void;
    finishRowCore(): void;
    splitTables(currentTable: RtfTable): void;
    assignRowProperties(): void;
    assignCellProperties(): void;
    reset(): void;
}
//# sourceMappingURL=rtf-table-row-controller.d.ts.map