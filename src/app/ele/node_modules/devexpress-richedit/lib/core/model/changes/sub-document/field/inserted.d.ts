import { SubDocumentChangeBase } from '../../change-base';
import { ModelChangeType } from '../../enums';
export declare class FieldInsertedSubDocumentChange implements SubDocumentChangeBase {
    subDocumentId: number;
    startPosition: number;
    separatorPosition: number;
    endPosition: number;
    readonly type = ModelChangeType.FieldInserted;
    constructor(subDocumentId: number, startPosition: number, separatorPosition: number, endPosition: number);
}
//# sourceMappingURL=inserted.d.ts.map