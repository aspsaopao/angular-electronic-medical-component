import { ModelChangeBase } from '../../change-base';
import { ModelChangeType } from '../../enums';
export declare class AbstractNumberingListDeletedModelChange implements ModelChangeBase {
    index: number;
    readonly type = ModelChangeType.AbstractNumberingListDeleted;
    constructor(index: number);
}
//# sourceMappingURL=abstract-numbering-list-deleted.d.ts.map