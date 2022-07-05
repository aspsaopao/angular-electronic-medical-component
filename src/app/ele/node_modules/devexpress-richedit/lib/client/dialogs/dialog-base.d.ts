import dxForm, { Options as dxFormOptions } from 'devextreme/ui/form';
import dxPopup, { dxPopupToolbarItem } from 'devextreme/ui/popup';
import { DialogParametersBase } from '../../base/commands/dialogs/show-dialog-command-base';
import { RichEditCore } from '../../base/rich-edit-core';
import { IDialog } from './i-dialog';
export declare abstract class DialogBase<InitialParametersT extends DialogParametersBase> implements IDialog {
    protected element: HTMLElement;
    protected richedit: RichEditCore;
    protected parameters: InitialParametersT;
    protected callback: (params: any) => void;
    protected afterClosing: () => void;
    protected popupDialog: dxPopup;
    protected form: dxForm;
    protected get showCloseButton(): boolean;
    constructor(element: HTMLElement, richedit: RichEditCore);
    dispose(): void;
    show(parameters: InitialParametersT, callback: (params: InitialParametersT) => void, afterClosing: () => void, _isModal: boolean): void;
    protected getToolbarItems(): Array<dxPopupToolbarItem>;
    protected getOkToolbarItem(): dxPopupToolbarItem;
    protected getCancelToolbarItem(): dxPopupToolbarItem;
    protected applyParameters(): void;
    protected afterShowing(): void;
    protected getMaxWidth(): number;
    protected abstract getTitle(): string;
    private getFormOptionsCore;
    protected abstract getFormOptions(): dxFormOptions;
    protected abstract updateParameters(parameters: InitialParametersT, data: any): void;
}
//# sourceMappingURL=dialog-base.d.ts.map