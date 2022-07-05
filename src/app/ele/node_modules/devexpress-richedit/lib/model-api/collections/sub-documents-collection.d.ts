import { SubDocument } from '../../core/model/sub-document';
import { SubDocumentApi } from '../sub-document';
import { Collection } from './collection';
export declare class SubDocumentCollection<T extends SubDocumentApi> extends Collection<T, SubDocument> {
    get main(): T;
    getById(id: number): T;
    forEach(callback: (subDocument: T) => void): void;
    protected _getItem(coreItem: SubDocument): T;
    protected _getCoreItems(): SubDocument[];
}
//# sourceMappingURL=sub-documents-collection.d.ts.map