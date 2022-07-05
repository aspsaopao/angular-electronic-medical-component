import { Options as dxFormOptions } from 'devextreme/ui/form';
import { TableCellsDialogParameters } from '../../base/commands/dialogs/dialog-insert-table-cells-command';
import { DialogBase } from './dialog-base';
export declare class InsertTableCellsDialog extends DialogBase<TableCellsDialogParameters> {
    protected getMaxWidth(): number;
    protected getTitle(): string;
    protected getFormOptions(): dxFormOptions;
    protected updateParameters(parameters: TableCellsDialogParameters, data: any): void;
}
//# sourceMappingURL=insert-table-cells-dialog.d.ts.map