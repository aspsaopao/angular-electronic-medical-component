import { SubDocument } from '../../../../core/model/sub-document';
import { ImportBookmarkInfoCore } from './import-bookmark-info-core';
export declare class ImportBookmarkInfo extends ImportBookmarkInfoCore {
    name: string;
    skipNameValidation: boolean;
    validate(subDocument: SubDocument): boolean;
    validateBookmarkName(subDocument: SubDocument): boolean;
}
//# sourceMappingURL=import-bookmark-info.d.ts.map