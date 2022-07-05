import { Options as dxFormOptions } from 'devextreme/ui/form';
import { InsertTableDialogParameters } from '../../base/commands/dialogs/dialog-insert-table-command';
import { DialogBase } from './dialog-base';
export declare class InsertTableDialog extends DialogBase<InsertTableDialogParameters> {
    protected getTitle(): string;
    protected getMaxWidth(): number;
    protected getFormOptions(): dxFormOptions;
    protected updateParameters(parameters: InsertTableDialogParameters, data: any): void;
}
//# sourceMappingURL=insert-table-dialog.d.ts.map