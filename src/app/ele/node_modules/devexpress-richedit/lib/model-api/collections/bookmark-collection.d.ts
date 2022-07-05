import { Bookmark } from '../../core/model/bookmarks';
import { SubDocument } from '../../core/model/sub-document';
import { IProcessor } from '../../core/processor';
import { BookmarkApi } from '../bookmark';
import { IInterval } from '../interval';
import { Collection } from './collection';
export declare class BookmarkCollection<TBookmark extends BookmarkApi> extends Collection<TBookmark, Bookmark> {
    protected _subDocument: SubDocument;
    constructor(processor: IProcessor, subDocument: SubDocument);
    find(position: number | IInterval | IInterval[] | string | RegExp): TBookmark[];
    create(interval: IInterval, name: string): BookmarkApi;
    protected _getItem(coreItem: Bookmark): TBookmark;
    protected _getCoreItems(): Bookmark[];
}
//# sourceMappingURL=bookmark-collection.d.ts.map