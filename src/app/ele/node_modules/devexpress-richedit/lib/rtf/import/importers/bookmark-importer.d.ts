import { ImportBookmarkInfo } from '../model/bookmark/import-bookmark-info';
import { RtfImportData } from '../rtf-import-data';
import { RtfBaseImporter } from './importer-base';
export declare class RtfBookmarkImporter extends RtfBaseImporter {
    private get bookmarks();
    constructor(data: RtfImportData);
    getBookmarkByName(bookmarkName: string): ImportBookmarkInfo;
    private insertBookmarks;
    pushState(): void;
    popState(): void;
    startImportSubDocument(): void;
    finalizeSubDocument(): void;
}
//# sourceMappingURL=bookmark-importer.d.ts.map