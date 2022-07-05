import { RtfTable } from '../model/table/rtf-table';
import { RtfTableRowController } from './rtf-table-row-controller';
import { RtfTableReader } from './table-reader';
export declare class RtfTableController {
    readonly reader: RtfTableReader;
    currentTable: RtfTable;
    rowController: RtfTableRowController;
    constructor(reader: RtfTableReader);
    createRowController(): RtfTableRowController;
    changeTable(nestingLevel: number): void;
    popParentTable(depth: number): void;
    createNestedTable(depth: number): void;
    createCurrentTable(): void;
    changeCurrentTable(): void;
    finishTable(): void;
    reset(): void;
}
//# sourceMappingURL=rtf-table-controller.d.ts.map