import { ConstBookmark } from '../../../bookmarks';
import { SubDocumentChangeBase } from '../../change-base';
import { ModelChangeType } from '../../enums';
export declare class BookmarkDeletedSubDocumentChange implements SubDocumentChangeBase {
    subDocumentId: number;
    bkmTempate: ConstBookmark;
    deleted: boolean;
    readonly type = ModelChangeType.BookmarkDeleted;
    constructor(subDocumentId: number, bkmTempate: ConstBookmark, deleted?: boolean);
    toJSON(_withPostData?: boolean): any;
}
//# sourceMappingURL=deleted.d.ts.map