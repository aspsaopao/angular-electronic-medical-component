import { SubDocument } from '../../../core/model/sub-document';
import { Table } from '../../../core/model/tables/main-structures/table';
import { ICommandOptions } from '../command-base';
import { SimpleCommandState } from '../command-states';
import { TableCommandBase } from './table-command-base';
export declare class DeleteTableCellsWithShiftToTheHorizontallyCommand extends TableCommandBase<SimpleCommandState> {
    getState(): SimpleCommandState;
    isEnabled(): boolean;
    executeCore(_state: SimpleCommandState, options: ICommandOptions): boolean;
    deleteEntireRow(subDocument: SubDocument, table: Table, rowIndex: number): void;
    deleteTableCell(subDocument: SubDocument, table: Table, rowIndex: number, cellIndex: number): void;
}
//# sourceMappingURL=delete-table-cells-with-shift-to-the-horizontally-command.d.ts.map