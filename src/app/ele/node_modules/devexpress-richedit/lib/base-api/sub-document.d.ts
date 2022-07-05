import { RichEditCore } from '../base/rich-edit-core';
import { SubDocument } from '../core/model/sub-document';
import { SubDocumentApi } from '../model-api/sub-document';
import { BookmarkCollectionBaseApi } from './collections/bookmark-collection';
export declare class SubDocumentBaseApi extends SubDocumentApi {
    protected _core: RichEditCore;
    constructor(core: RichEditCore, subDocument: SubDocument);
    get bookmarks(): BookmarkCollectionBaseApi;
}
//# sourceMappingURL=sub-document.d.ts.map