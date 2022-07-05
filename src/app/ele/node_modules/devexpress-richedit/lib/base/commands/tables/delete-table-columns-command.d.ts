import { SubDocument } from '../../../core/model/sub-document';
import { Table } from '../../../core/model/tables/main-structures/table';
import { ICommandOptions } from '../command-base';
import { SimpleCommandState } from '../command-states';
import { TableCommandBase } from './table-command-base';
export declare class DeleteTableColumnsCommand extends TableCommandBase<SimpleCommandState> {
    getState(): SimpleCommandState;
    isEnabled(): boolean;
    executeCore(_state: SimpleCommandState, options: ICommandOptions): boolean;
    normalizeCellVerticalMerging(subDocument: SubDocument, table: Table): void;
}
//# sourceMappingURL=delete-table-columns-command.d.ts.map