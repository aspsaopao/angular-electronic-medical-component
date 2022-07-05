import { Options as dxFormOptions } from 'devextreme/ui/form';
import { SplitTableCellsDialogParameters } from '../../base/commands/dialogs/dialog-split-table-cells-command';
import { DialogBase } from './dialog-base';
export declare class SplitTableCellsDialog extends DialogBase<SplitTableCellsDialogParameters> {
    protected getMaxWidth(): number;
    protected getTitle(): string;
    protected getFormOptions(): dxFormOptions;
    protected updateParameters(parameters: SplitTableCellsDialogParameters, data: any): void;
}
//# sourceMappingURL=split-table-cells-dialog.d.ts.map