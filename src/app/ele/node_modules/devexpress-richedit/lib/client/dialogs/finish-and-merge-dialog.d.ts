import { Options as dxFormOptions } from 'devextreme/ui/form';
import { FinishAndMergeDialogParameters } from '../../base/commands/dialogs/dialog-finish-and-merge-command';
import { DialogBase } from './dialog-base';
export declare class FinishAndMergeDialog extends DialogBase<FinishAndMergeDialogParameters> {
    private fromNumberBox;
    private countNumberBox;
    private mergeModeSelectBox;
    protected getTitle(): string;
    protected getMaxWidth(): number;
    protected getFormOptions(): dxFormOptions;
    protected afterShowing(): void;
    private updateRangeEditorsEnabled;
    private updateMergeModeEditorEnabled;
    protected updateParameters(parameters: FinishAndMergeDialogParameters, data: any): void;
    protected applyParameters(): void;
}
//# sourceMappingURL=finish-and-merge-dialog.d.ts.map