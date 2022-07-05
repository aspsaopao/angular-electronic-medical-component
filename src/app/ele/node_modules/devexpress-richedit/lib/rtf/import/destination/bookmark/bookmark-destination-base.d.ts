import { ImportBookmarkInfo } from '../../model/bookmark/import-bookmark-info';
import { UnicodeStringValueDestination } from '../base/unicode-string-value-destination';
import { DestinationType } from '../utils/destination-type';
export declare abstract class BookmarkDestinationBase extends UnicodeStringValueDestination {
    protected get destinationType(): DestinationType;
    afterPopRtfState(): void;
    protected abstract assignBookmarkPosition(bookmark: ImportBookmarkInfo): any;
}
//# sourceMappingURL=bookmark-destination-base.d.ts.map