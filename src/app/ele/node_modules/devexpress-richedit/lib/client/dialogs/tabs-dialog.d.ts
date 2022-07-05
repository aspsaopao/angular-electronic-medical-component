import { Options as dxFormOptions } from 'devextreme/ui/form';
import { dxPopupToolbarItem } from 'devextreme/ui/popup';
import { DialogTabsParameters } from '../../base/commands/dialogs/dialog-tabs-command';
import { DialogBase } from './dialog-base';
export declare class TabsDialog extends DialogBase<DialogTabsParameters> {
    private tabProperties;
    private deletedTabs;
    private isClearAllHappend;
    private tabTextBox;
    private tabsList;
    private alignmentRadioGroup;
    private leaderRadioGroup;
    private setBtn;
    private clearBtn;
    private toBeClearedList;
    protected getTitle(): string;
    protected getMaxWidth(): number;
    protected getFormOptions(): dxFormOptions;
    protected afterShowing(): void;
    private setButtonsEnabled;
    private onSelectedTabIndexChanged;
    private setTab;
    private clearTab;
    private sortTabsInfo;
    private updateForm;
    private setAlignmentValue;
    private setLeaderValue;
    private updateClearedTabsLabel;
    private createListItem;
    private clearAllTab;
    private getCurrentTabsInfoIndex;
    private getTabPositionText;
    private setTabPositionValue;
    private getRoundedPosition;
    private getRoundedPositionByTwips;
    protected getOkToolbarItem(): dxPopupToolbarItem;
    protected updateParameters(parameters: DialogTabsParameters, data: any): void;
}
//# sourceMappingURL=tabs-dialog.d.ts.map