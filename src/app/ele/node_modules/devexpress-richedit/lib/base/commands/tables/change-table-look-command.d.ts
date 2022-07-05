import { Table } from '../../../core/model/tables/main-structures/table';
import { TableLookTypes } from '../../../core/model/tables/secondary-structures/table-base-structures';
import { CommandBase, CommandSimpleOptions } from '../command-base';
import { SimpleCommandState } from '../command-states';
export declare class ChangeTableLookCommandBase extends CommandBase<SimpleCommandState> {
    option: TableLookTypes;
    getState(): SimpleCommandState;
    getValue(table: Table): boolean;
    isInvertedTableLookType(): boolean;
    isEnabled(): boolean;
    executeCore(_state: SimpleCommandState, options: CommandSimpleOptions<boolean | null | undefined>): boolean;
    getNewValue(table: Table, parameter: boolean): TableLookTypes;
    protected getRelatedCommands(): Record<number, boolean>;
}
export declare class ChangeTableLookCommand extends ChangeTableLookCommandBase {
    getValue(table: Table): any;
    getNewValue(_table: Table, parameter: any): TableLookTypes;
}
export declare class ToggleFirstRowCommand extends ChangeTableLookCommandBase {
    option: TableLookTypes;
}
export declare class ToggleLastRowCommand extends ChangeTableLookCommandBase {
    option: TableLookTypes;
}
export declare class ToggleFirstColumnCommand extends ChangeTableLookCommandBase {
    option: TableLookTypes;
}
export declare class ToggleLastColumnCommand extends ChangeTableLookCommandBase {
    option: TableLookTypes;
}
export declare class ToggleBandedRowsCommand extends ChangeTableLookCommandBase {
    option: TableLookTypes;
    isInvertedTableLookType(): boolean;
}
export declare class ToggleBandedColumnCommand extends ChangeTableLookCommandBase {
    option: TableLookTypes;
    isInvertedTableLookType(): boolean;
}
//# sourceMappingURL=change-table-look-command.d.ts.map