import { Bookmark } from '../core/model/bookmarks';
import { SubDocument } from '../core/model/sub-document';
import { IProcessor } from '../core/processor';
import { IntervalApi } from './interval';
import { SubDocumentApi } from './sub-document';
export declare class BookmarkApi {
    protected _processor: IProcessor;
    protected _subDocument: SubDocument;
    protected _bookmark: Bookmark;
    constructor(processor: IProcessor, subDocument: SubDocument, bookmark: Bookmark);
    get index(): number;
    get subDocument(): SubDocumentApi;
    get interval(): IntervalApi;
    get name(): string;
    delete(): void;
}
//# sourceMappingURL=bookmark.d.ts.map