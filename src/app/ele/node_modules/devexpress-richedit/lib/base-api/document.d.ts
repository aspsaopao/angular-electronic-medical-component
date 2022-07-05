import { RichEditCore } from '../base/rich-edit-core';
import { ICharacterProperties } from '../model-api/character-properties';
import { RichEditDocumentApi } from '../model-api/document';
import { ImagesApi } from '../model-api/images/images';
import { BookmarkCollectionBaseApi } from './collections/bookmark-collection';
import { SubDocumentCollectionBaseApi } from './collections/sub-documents-collection';
export declare class RichEditDocumentBaseApi extends RichEditDocumentApi {
    protected _core: RichEditCore;
    constructor(core: RichEditCore);
    get modified(): boolean;
    set modified(value: boolean);
    get subDocuments(): SubDocumentCollectionBaseApi;
    get bookmarks(): BookmarkCollectionBaseApi;
    get images(): ImagesApi;
    setDefaultCharacterProperties(characterProperties: ICharacterProperties): void;
}
//# sourceMappingURL=document.d.ts.map