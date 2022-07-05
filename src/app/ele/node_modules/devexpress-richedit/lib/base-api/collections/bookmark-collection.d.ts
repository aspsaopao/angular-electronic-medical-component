import { RichEditCore } from '../../base/rich-edit-core';
import { Bookmark } from '../../core/model/bookmarks';
import { SubDocument } from '../../core/model/sub-document';
import { BookmarkCollection } from '../../model-api/collections/bookmark-collection';
import { BookmarkBaseApi } from '../bookmark';
export declare class BookmarkCollectionBaseApi extends BookmarkCollection<BookmarkBaseApi> {
    protected _core: RichEditCore;
    constructor(core: RichEditCore, subDocument: SubDocument);
    protected _getItem(coreItem: Bookmark): BookmarkBaseApi;
}
//# sourceMappingURL=bookmark-collection.d.ts.map