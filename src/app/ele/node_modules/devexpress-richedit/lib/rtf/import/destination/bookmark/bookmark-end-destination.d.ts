import { ImportBookmarkInfo } from '../../model/bookmark/import-bookmark-info';
import { UnicodeStringValueDestination } from '../base/unicode-string-value-destination';
import { DestinationType } from '../utils/destination-type';
import { BookmarkDestinationBase } from './bookmark-destination-base';
export declare class BookmarkEndDestination extends BookmarkDestinationBase {
    protected get destinationType(): DestinationType;
    protected createEmptyClone(): UnicodeStringValueDestination;
    protected assignBookmarkPosition(bookmark: ImportBookmarkInfo): void;
}
//# sourceMappingURL=bookmark-end-destination.d.ts.map