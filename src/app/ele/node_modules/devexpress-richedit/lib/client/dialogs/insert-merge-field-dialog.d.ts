import { Options as dxFormOptions } from 'devextreme/ui/form';
import { dxPopupToolbarItem } from 'devextreme/ui/popup';
import { InsertMergeFieldDialogParameters } from '../../base/commands/dialogs/dialog-insert-merge-field-command';
import { DialogBase } from './dialog-base';
export declare class InsertMergeFieldDialog extends DialogBase<InsertMergeFieldDialogParameters> {
    private fieldsList;
    private insertBtn;
    private lastSearchText;
    private fieldNames;
    protected getTitle(): string;
    protected getMaxWidth(): number;
    protected getFormOptions(): dxFormOptions;
    protected afterShowing(): void;
    private filter;
    private setButtonsEnabled;
    protected getToolbarItems(): Array<dxPopupToolbarItem>;
    protected updateParameters(parameters: InsertMergeFieldDialogParameters, _data: any): void;
}
//# sourceMappingURL=insert-merge-field-dialog.d.ts.map