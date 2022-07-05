import { RichEditCore } from '../../base/rich-edit-core';
import { SubDocument } from '../../core/model/sub-document';
import { SubDocumentCollection } from '../../model-api/collections/sub-documents-collection';
import { SubDocumentBaseApi } from '../sub-document';
export declare class SubDocumentCollectionBaseApi extends SubDocumentCollection<SubDocumentBaseApi> {
    protected _core: RichEditCore;
    constructor(core: RichEditCore);
    get main(): SubDocumentBaseApi;
    protected _getItem(coreItem: SubDocument): SubDocumentBaseApi;
}
//# sourceMappingURL=sub-documents-collection.d.ts.map