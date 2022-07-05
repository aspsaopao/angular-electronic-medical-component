import { Data } from '../data';
import { ImportBookmarkInfo } from '../model/import-bookmark-info';
export declare class BookmarkImporter {
    data: Data;
    bookmarks: Record<string, ImportBookmarkInfo>;
    constructor(data: Data);
    insertBookmarks(): void;
}
//# sourceMappingURL=bookmark-importer.d.ts.map