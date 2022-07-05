import { SubDocumentChangeBase } from '../../change-base';
import { ModelChangeType } from '../../enums';
export declare class FieldDeletedSubDocumentChange implements SubDocumentChangeBase {
    subDocumentId: number;
    endPosition: number;
    readonly type = ModelChangeType.FieldDeleted;
    constructor(subDocumentId: number, endPosition: number);
}
//# sourceMappingURL=deleted.d.ts.map