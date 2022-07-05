import { ConstBookmark } from '../../core/model/bookmarks';
import { IRichEditControl } from '../interfaces/i-rich-edit-core';
import { CommandBase, CommandOptions, CommandSimpleOptions } from './command-base';
import { SimpleCommandState } from './command-states';
export declare class CreateBookmarkCommandParameter extends CommandOptions {
    bkmTemplate: ConstBookmark;
    constructor(control: IRichEditControl, bkmTemplate: ConstBookmark);
}
export declare class BookmarkCommandBase extends CommandBase<SimpleCommandState> {
    isEnabled(): boolean;
    getState(): SimpleCommandState;
}
export declare class CreateBookmarkCommand extends BookmarkCommandBase {
    executeCore(_state: SimpleCommandState, parameter: CommandSimpleOptions<ConstBookmark>): boolean;
}
export declare class DeleteBookmarksCommand extends BookmarkCommandBase {
    executeCore(_state: SimpleCommandState, parameter: CommandSimpleOptions<string[]>): boolean;
}
export declare class GoToBookmarkCommand extends BookmarkCommandBase {
    executeCore(_state: SimpleCommandState, parameter: CommandSimpleOptions<string>): boolean;
    private changeSubDocument;
    isEnabledInReadOnlyMode(): boolean;
}
//# sourceMappingURL=bookmark-command.d.ts.map