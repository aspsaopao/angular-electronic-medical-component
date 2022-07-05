import { RichEditCore } from '../base/rich-edit-core';
import { Bookmark } from '../core/model/bookmarks';
import { SubDocument } from '../core/model/sub-document';
import { BookmarkApi } from '../model-api/bookmark';
export declare class BookmarkBaseApi extends BookmarkApi {
    private _core;
    constructor(core: RichEditCore, subDocument: SubDocument, bookmark: Bookmark);
    goTo(): void;
}
//# sourceMappingURL=bookmark.d.ts.map