import { SubDocumentChangeBase } from '../../change-base';
import { ModelChangeType } from '../../enums';
export declare class AnchorObjectRemovedSubDocumentChange implements SubDocumentChangeBase {
    subDocumentId: number;
    objectId: number;
    position: number;
    readonly type = ModelChangeType.AnchorObjectRemoved;
    constructor(subDocumentId: number, objectId: number, position: number);
}
//# sourceMappingURL=anchor-object-removed.d.ts.map