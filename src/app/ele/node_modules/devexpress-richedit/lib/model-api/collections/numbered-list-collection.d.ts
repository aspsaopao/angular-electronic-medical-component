import { NumberingList } from '../../core/model/numbering-lists/numbering-list';
import { IInterval } from '../interval';
import { ListTypeApi } from '../lists/enums';
import { ListApi } from '../lists/lists';
import { SubDocumentApi } from '../sub-document';
import { Collection } from './collection';
export declare class ListCollection extends Collection<ListApi, NumberingList> {
    create(type: ListTypeApi): ListApi;
    deleteNumeration(subDocument: SubDocumentApi, interval: IInterval | number): void;
    protected _getItem(coreItem: NumberingList): ListApi;
    protected _getCoreItems(): NumberingList[];
}
//# sourceMappingURL=numbered-list-collection.d.ts.map