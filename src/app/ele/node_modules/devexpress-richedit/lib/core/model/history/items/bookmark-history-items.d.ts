import { ConstBookmark } from '../../bookmarks';
import { ModelManipulator } from '../../manipulators/model-manipulator';
import { SubDocument } from '../../sub-document';
import { HistoryItem } from '../base/history-item';
export declare abstract class BookmarkHistoryItemBase extends HistoryItem {
    bkmTemplate: ConstBookmark;
    boundSubDocument: SubDocument;
    constructor(modelManipulator: ModelManipulator, boundSubDocument: SubDocument, bkmTemplate: ConstBookmark);
}
export declare class CreateBookmarkHistoryItem extends BookmarkHistoryItemBase {
    redo(): void;
    undo(): void;
}
export declare class DeleteBookmarkHistoryItem extends BookmarkHistoryItemBase {
    redo(): void;
    undo(): void;
}
//# sourceMappingURL=bookmark-history-items.d.ts.map