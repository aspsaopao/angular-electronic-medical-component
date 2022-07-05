import { Paragraph } from '../../core/model/paragraph/paragraph';
import { SubDocument } from '../../core/model/sub-document';
import { IProcessor } from '../../core/processor';
import { IInterval } from '../interval';
import { ParagraphApi } from '../paragraph';
import { Collection } from './collection';
export declare class ParagraphCollection extends Collection<ParagraphApi, Paragraph> {
    protected _subDocument: SubDocument;
    constructor(processor: IProcessor, subDocument: SubDocument);
    create(position: number): ParagraphApi;
    find(position: number | IInterval): ParagraphApi[];
    protected _getItem(coreItem: Paragraph): ParagraphApi;
    protected _getCoreItems(): Paragraph[];
}
//# sourceMappingURL=paragraph-collection.d.ts.map