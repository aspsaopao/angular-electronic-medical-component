import { Options as dxFormOptions } from 'devextreme/ui/form';
import { dxPopupToolbarItem } from 'devextreme/ui/popup';
import { BookmarkDialogInfo, BookmarksDialogParameters } from '../../base/commands/dialogs/dialog-bookmarks-command';
import { DialogBase } from './dialog-base';
export declare class BookmarkDialog extends DialogBase<BookmarksDialogParameters> {
    private bookmarkTextBox;
    private bookmarksList;
    private sortGroup;
    private addBtn;
    private deleteBtn;
    private goToBtn;
    private bookmarks;
    protected getTitle(): string;
    protected getMaxWidth(): number;
    protected getFormOptions(): dxFormOptions;
    protected afterShowing(): void;
    private updateDataSource;
    private getIsValidBookmarkName;
    private getDataSource;
    private updateEnableState;
    private onBookmarkNameTextBoxValueChanged;
    private onBtnDeleteClick;
    private onBtnGoToClick;
    private onListValueChanged;
    protected getToolbarItems(): Array<dxPopupToolbarItem>;
    protected updateParameters(parameters: BookmarksDialogParameters, _data: any): void;
}
export declare class BookmarkInfoForDialog {
    name: string;
    deleted: boolean;
    start: number;
    constructor(b: BookmarkDialogInfo);
}
//# sourceMappingURL=bookmark-dialog.d.ts.map