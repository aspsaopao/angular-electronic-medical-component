import { ModelChangeBase } from '../../change-base';
import { ModelChangeType } from '../../enums';
export declare class NumberingListAddedModelChange implements ModelChangeBase {
    index: number;
    readonly type = ModelChangeType.NumberingListAdded;
    constructor(index: number);
}
//# sourceMappingURL=numbering-list-added.d.ts.map