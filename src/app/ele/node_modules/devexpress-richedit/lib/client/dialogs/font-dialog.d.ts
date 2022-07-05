import { Options as dxFormOptions } from 'devextreme/ui/form';
import { FontDialogParameters } from '../../base/commands/dialogs/dialog-font-command';
import { DialogBase } from './dialog-base';
export declare class FontDialog extends DialogBase<FontDialogParameters> {
    private smallCapsItem;
    private allCapsItem;
    protected getTitle(): string;
    protected getMaxWidth(): number;
    protected getFormOptions(): dxFormOptions;
    private updateAllCaps;
    private updateSmallCaps;
    protected updateParameters(parameters: FontDialogParameters, data: any): void;
}
//# sourceMappingURL=font-dialog.d.ts.map