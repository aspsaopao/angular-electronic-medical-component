import { ImportCommentInfo } from '../../../../core/formats/utils/import-comment-info';
import { XmlReader } from '../../../zip/xml-reader';
import { LeafElementDestination } from '../destination';
export declare abstract class CommentElementDestination extends LeafElementDestination {
    processElementOpen(reader: XmlReader): Promise<void>;
    protected abstract assignCommentPosition(comment: ImportCommentInfo): any;
}
//# sourceMappingURL=comment-element-destination.d.ts.map