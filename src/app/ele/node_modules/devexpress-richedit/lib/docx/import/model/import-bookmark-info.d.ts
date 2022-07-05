import { ImportBookmarkInfoCore } from '../../../core/formats/utils/import-bookmark-info-core';
import { SubDocument } from '../../../core/model/sub-document';
export declare class ImportBookmarkInfo extends ImportBookmarkInfoCore {
    name: string;
    skipNameValidation: boolean;
    validate(subDocument: SubDocument): boolean;
    private validateBookmarkName;
}
//# sourceMappingURL=import-bookmark-info.d.ts.map