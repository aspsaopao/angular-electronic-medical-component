import { ConstBookmark } from '../../../bookmarks';
import { SubDocumentChangeBase } from '../../change-base';
import { ModelChangeType } from '../../enums';
export declare class BookmarkCreatedSubDocumentChange implements SubDocumentChangeBase {
    subDocumentId: number;
    bkmTempate: ConstBookmark;
    deleted: boolean;
    readonly type = ModelChangeType.BookmarkCreated;
    constructor(subDocumentId: number, bkmTempate: ConstBookmark, deleted?: boolean);
    toJSON(_withPostData?: boolean): any;
}
//# sourceMappingURL=created.d.ts.map