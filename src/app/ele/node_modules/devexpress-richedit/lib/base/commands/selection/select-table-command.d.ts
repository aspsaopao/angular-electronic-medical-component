import { Table } from '../../../core/model/tables/main-structures/table';
import { TableCell } from '../../../core/model/tables/main-structures/table-cell';
import { TableRow } from '../../../core/model/tables/main-structures/table-row';
import { IRichEditControl } from '../../interfaces/i-rich-edit-core';
import { CommandBase, CommandOptions, CommandSimpleOptions, ICommandOptions } from '../command-base';
import { SimpleCommandState } from '../command-states';
export declare class SelectTableCommandBase extends CommandBase<SimpleCommandState> {
    getState(): SimpleCommandState;
    isEnabled(): boolean;
    addSelection(firstPos: number, lastPos: number, isFirstSelection: boolean, visibleModelPosition?: number): void;
    isEnabledInReadOnlyMode(): boolean;
}
export declare class SelectTableCellCommand extends SelectTableCommandBase {
    executeCore(_state: SimpleCommandState, _options: ICommandOptions): boolean;
}
export declare class ExtendSelectTableCellCommand extends SelectTableCellCommand {
    addSelection(firstPos: number, lastPos: number, _isFirstSelection: boolean): void;
}
export declare class SelectTableColumnCommand extends SelectTableCommandBase {
    DEPRECATEDConvertOptionsParameter(parameter: any): {
        table: Table;
        columnIndices: number[];
    };
    executeCore(_state: SimpleCommandState, options: CommandSimpleOptions<{
        table: Table;
        columnIndices: number[];
    }>): boolean;
}
export declare class ExtendSelectTableColumnCommand extends SelectTableColumnCommand {
    addSelection(firstPos: number, lastPos: number, _isFirstSelection: boolean): void;
}
export declare class SelectTableRowCommandOptions extends CommandOptions {
    rows: TableRow[];
    forwardDirection: boolean;
    constructor(control: IRichEditControl, table: Table, rowIndices: number[], forwardDirection: boolean);
}
export declare class SelectTableRowCommand extends SelectTableCommandBase {
    executeCore(_state: SimpleCommandState, options: SelectTableRowCommandOptions): boolean;
}
export declare class ExtendSelectTableRowCommand extends SelectTableRowCommand {
    addSelection(firstPos: number, lastPos: number, _isFirstSelection: boolean): void;
}
export declare class SelectTableCommand extends SelectTableCommandBase {
    executeCore(_state: SimpleCommandState): boolean;
}
export declare class ExtendSelectTableCommand extends SelectTableCommand {
    addSelection(firstPos: number, lastPos: number, _isFirstSelection: boolean): void;
}
export declare class SelectTableCellsRangeCommand extends SelectTableCommandBase {
    executeCore(_state: SimpleCommandState, options: CommandSimpleOptions<{
        firstCell: TableCell;
        lastCell: TableCell;
        extendSelection: boolean;
    }>): boolean;
}
//# sourceMappingURL=select-table-command.d.ts.map