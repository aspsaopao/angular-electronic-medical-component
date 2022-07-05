import { Options as dxFormOptions } from 'devextreme/ui/form';
import { dxPopupToolbarItem } from 'devextreme/ui/popup';
import { AlertMessageDialogParameters } from '../../base/commands/dialogs/dialog-alert-message-command';
import { DialogBase } from './dialog-base';
export declare abstract class AlertDialog extends DialogBase<AlertMessageDialogParameters> {
    protected getMaxWidth(): number;
    protected getFormOptions(): dxFormOptions;
    protected getToolbarItems(): Array<dxPopupToolbarItem>;
    protected updateParameters(_parameters: AlertMessageDialogParameters, _data: any): void;
}
export declare class ErrorDialog extends AlertDialog {
    protected getTitle(): string;
}
export declare class InformationDialog extends AlertDialog {
    protected getTitle(): string;
}
export declare class WarningDialog extends AlertDialog {
    protected getTitle(): string;
}
//# sourceMappingURL=alert-dialog.d.ts.map