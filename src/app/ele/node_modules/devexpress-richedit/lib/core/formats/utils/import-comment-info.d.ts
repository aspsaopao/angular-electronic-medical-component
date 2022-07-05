import { Comment } from '../../model/comments/comment';
import { SubDocument } from '../../model/sub-document';
import { ImportBookmarkInfoCore } from './import-bookmark-info-core';
export declare class ImportCommentInfo extends ImportBookmarkInfoCore {
    comment: Comment;
    reference: number;
    paraId: number;
    hasReference: boolean;
    constructor(subDocument: SubDocument);
}
//# sourceMappingURL=import-comment-info.d.ts.map