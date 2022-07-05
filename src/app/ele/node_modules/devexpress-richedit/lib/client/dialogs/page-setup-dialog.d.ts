import { Options as dxFormOptions } from 'devextreme/ui/form';
import { PageSetupDialogParameters } from '../../base/commands/dialogs/dialog-page-setup-command';
import { DialogBase } from './dialog-base';
export declare class PageSetupDialog extends DialogBase<PageSetupDialogParameters> {
    private pageKindSelectBox;
    private pageWidthNumberBox;
    private pageHeightNumberBox;
    private orientationRadioGroup;
    private lockOrientation;
    private lockKind;
    private lockSize;
    protected getTitle(): string;
    protected getMaxWidth(): number;
    protected getFormOptions(): dxFormOptions;
    protected afterShowing(): void;
    private getPaperKinds;
    private onPaperKindChanged;
    private onPaperSizeChanged;
    private onOrientationChanged;
    private updatePaperKind;
    private updateOrientation;
    protected updateParameters(parameters: PageSetupDialogParameters, data: any): void;
}
//# sourceMappingURL=page-setup-dialog.d.ts.map