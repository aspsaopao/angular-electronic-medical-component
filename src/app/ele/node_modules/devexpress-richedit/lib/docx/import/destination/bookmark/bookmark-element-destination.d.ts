import { XmlReader } from '../../../zip/xml-reader';
import { ImportBookmarkInfo } from '../../model/import-bookmark-info';
import { LeafElementDestination } from '../destination';
export declare abstract class BookmarkElementDestination extends LeafElementDestination {
    processElementOpen(reader: XmlReader): Promise<void>;
    protected abstract assignBookmarkPosition(bookmark: ImportBookmarkInfo): any;
}
//# sourceMappingURL=bookmark-element-destination.d.ts.map