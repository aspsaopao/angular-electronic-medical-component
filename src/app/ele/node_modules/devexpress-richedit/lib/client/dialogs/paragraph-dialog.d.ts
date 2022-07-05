import { Options as dxFormOptions } from 'devextreme/ui/form';
import { dxPopupToolbarItem } from 'devextreme/ui/popup';
import { ParagraphDialogParameters } from '../../base/commands/dialogs/dialog-paragraph-properties-command';
import { DialogBase } from './dialog-base';
export declare class ParagraphDialog extends DialogBase<ParagraphDialogParameters> {
    private atNumberBox;
    protected getTitle(): string;
    protected getMaxWidth(): number;
    protected getFormOptions(): dxFormOptions;
    protected afterShowing(): void;
    private updateAtNumberBox;
    protected getToolbarItems(): Array<dxPopupToolbarItem>;
    private getTabsToolbarItem;
    protected updateParameters(parameters: ParagraphDialogParameters, data: any): void;
}
//# sourceMappingURL=paragraph-dialog.d.ts.map