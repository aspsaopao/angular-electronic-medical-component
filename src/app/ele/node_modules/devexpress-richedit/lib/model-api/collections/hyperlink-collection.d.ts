import { Field } from '../../core/model/fields/field';
import { SubDocument } from '../../core/model/sub-document';
import { IProcessor } from '../../core/processor';
import { HyperlinkApi, HyperlinkInfoApi } from '../field';
import { IInterval } from '../interval';
import { Collection } from './collection';
export declare class HyperlinkCollection extends Collection<HyperlinkApi, Field> {
    protected _subDocument: SubDocument;
    constructor(processor: IProcessor, subDocument: SubDocument);
    create(position: number | IInterval, hyperlinkInfo: HyperlinkInfoApi): HyperlinkApi;
    find(position: number | IInterval): HyperlinkApi[];
    protected _getItem(coreItem: Field): HyperlinkApi;
    protected _getCoreItems(): Field[];
}
//# sourceMappingURL=hyperlink-collection.d.ts.map