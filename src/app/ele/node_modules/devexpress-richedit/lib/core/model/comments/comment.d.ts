import { ConstInterval } from '@devexpress/utils/lib/intervals/const';
import { BookmarkBase } from '../bookmarks';
import { PositionManager } from '../position/position-manager';
import { SubDocument } from '../sub-document';
export declare class Comment extends BookmarkBase {
    static readonly minCommentDate: Date;
    name: string;
    author: string;
    date: Date;
    parentComment: Comment;
    subDocument: SubDocument;
    index: number;
    constructor(positionManager: PositionManager, interval: ConstInterval);
}
//# sourceMappingURL=comment.d.ts.map