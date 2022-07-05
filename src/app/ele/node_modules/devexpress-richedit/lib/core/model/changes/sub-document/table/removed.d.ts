import { SubDocumentChangeBase } from '../../change-base';
import { ModelChangeType } from '../../enums';
export declare class TableRemovedSubDocumentChange implements SubDocumentChangeBase {
    subDocumentId: number;
    startPosition: number;
    endPosition: number;
    nestedLevel: number;
    removedText: string;
    readonly type = ModelChangeType.TableRemoved;
    constructor(subDocumentId: number, startPosition: number, endPosition: number, nestedLevel: number, removedText: string);
}
//# sourceMappingURL=removed.d.ts.map