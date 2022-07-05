import { ModelChangeBase } from '../../change-base';
import { ModelChangeType } from '../../enums';
export declare class AbstractNumberingListAddedModelChange implements ModelChangeBase {
    index: number;
    readonly type = ModelChangeType.AbstractNumberingListAdded;
    constructor(index: number);
}
//# sourceMappingURL=abstract-numbering-list-added.d.ts.map