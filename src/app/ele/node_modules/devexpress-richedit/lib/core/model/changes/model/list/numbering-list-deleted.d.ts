import { ModelChangeBase } from '../../change-base';
import { ModelChangeType } from '../../enums';
export declare class NumberingListDeletedModelChange implements ModelChangeBase {
    index: number;
    readonly type = ModelChangeType.NumberingListDeleted;
    constructor(index: number);
}
//# sourceMappingURL=numbering-list-deleted.d.ts.map