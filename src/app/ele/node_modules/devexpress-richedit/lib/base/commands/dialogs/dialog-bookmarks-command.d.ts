import { ICloneable, ISupportCopyFrom, SimpleConverter } from '@devexpress/utils/lib/types';
import { ICommandOptions } from '../command-base';
import { SimpleCommandState } from '../command-states';
import { ICommandState } from '../i-command';
import { DialogParametersBase, ShowDialogCommandBase } from './show-dialog-command-base';
export declare class DialogBookmarksCommand extends ShowDialogCommandBase<BookmarksDialogParameters> {
    getState(): ICommandState;
    isEnabled(): boolean;
    createParameters(_options: ICommandOptions): BookmarksDialogParameters;
    applyParameters(_state: SimpleCommandState, newParams: BookmarksDialogParameters): boolean;
    getDialogName(): string;
    isEnabledInReadOnlyMode(): boolean;
}
export declare class BookmarkDialogInfo {
    name: string;
    start: number;
    constructor(name: string, start: number);
}
export declare class BookmarksDialogParameters extends DialogParametersBase implements ISupportCopyFrom<BookmarksDialogParameters>, ICloneable<BookmarksDialogParameters> {
    bookmarks: BookmarkDialogInfo[];
    deletedBookmarkNames: string[];
    newBookmarkName: string;
    allowedEditBookmarks: boolean;
    selectedBookmarkName: string | null;
    copyFrom(obj: BookmarksDialogParameters): void;
    clone(): BookmarksDialogParameters;
    applyConverter(_converter: SimpleConverter<number>): this;
}
//# sourceMappingURL=dialog-bookmarks-command.d.ts.map