import { XmlReader } from '../../../zip/xml-reader';
import { Data } from '../../data';
import { ElementDestination } from '../destination';
export declare abstract class BodyDestinationBase extends ElementDestination {
    protected static onBookmarkStart(data: Data, _reader: XmlReader): ElementDestination;
    protected static onBookmarkEnd(data: Data, _reader: XmlReader): ElementDestination;
    protected static onRangePermissionStart(data: Data, _reader: XmlReader): ElementDestination;
    protected static onRangePermissionEnd(data: Data, _reader: XmlReader): ElementDestination;
    protected static onCommentStart(data: Data, _reader: XmlReader): ElementDestination;
    protected static onCommentEnd(data: Data, _reader: XmlReader): ElementDestination;
    protected static onStructuredDocument(data: Data, _reader: XmlReader): ElementDestination;
    protected static onCustomXml(data: Data, _reader: XmlReader): ElementDestination;
    protected static onDeleted(data: Data, _reader: XmlReader): ElementDestination;
    protected static onInserted(data: Data, _reader: XmlReader): ElementDestination;
}
//# sourceMappingURL=body-destination-base.d.ts.map