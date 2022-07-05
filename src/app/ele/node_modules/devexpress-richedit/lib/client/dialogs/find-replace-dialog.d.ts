import { Options as dxFormOptions } from 'devextreme/ui/form';
import { dxPopupToolbarItem } from 'devextreme/ui/popup';
import { FindReplaceDialogParameters } from '../../base/commands/dialogs/dialog-find-replace-command';
import { ISearchResetListener } from '../../base/ui/search-manager';
import { DialogBase } from './dialog-base';
export declare class FindReplaceDialog extends DialogBase<FindReplaceDialogParameters> implements ISearchResetListener {
    private findTextBox;
    private replaceTextBox;
    private resultList;
    private matchCaseCheckBox;
    private replaceBtn;
    private replaceAllBtn;
    private nextBtn;
    private prevBtn;
    private resultLabel;
    private controller;
    private searchTimerId;
    dispose(): void;
    protected getTitle(): string;
    protected get showCloseButton(): boolean;
    protected getFormOptions(): dxFormOptions;
    protected afterShowing(): void;
    NotifySearchReset(): void;
    protected getToolbarItems(): Array<dxPopupToolbarItem>;
    private findNext;
    private findPrev;
    private findAll;
    private replace;
    private replaceAll;
    private goTo;
    private setEnabledForButton;
    private fillResults;
    private createListItem;
    private clearResults;
    private selectResult;
    private updateResultLabel;
    protected updateParameters(_parameters: FindReplaceDialogParameters, _data: any): void;
}
//# sourceMappingURL=find-replace-dialog.d.ts.map