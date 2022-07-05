import { Paragraph } from '../../../paragraph/paragraph';
import { ContentInsertedSubDocumentChange } from '../../change-base';
import { ModelChangeType } from '../../enums';
export declare class ParagraphInsertedSubDocumentChange extends ContentInsertedSubDocumentChange {
    paragraph: Paragraph;
    readonly type = ModelChangeType.ParagraphInserted;
    constructor(subDocumentId: number, position: number, paragraph: Paragraph);
}
//# sourceMappingURL=paragraph-inserted.d.ts.map