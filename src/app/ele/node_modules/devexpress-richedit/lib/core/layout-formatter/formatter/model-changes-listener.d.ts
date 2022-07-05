import { IModelChangesListener } from '../../interfaces/model-changes-listener';
import { ModelChange } from '../../model/changes/change';
import { LayoutInvalidator } from '../invalidator/layout-invalidator';
export declare class ModelChangesListener implements IModelChangesListener {
    private invalidator;
    constructor(invalidator: LayoutInvalidator);
    modelChanged(change: ModelChange): void;
}
//# sourceMappingURL=model-changes-listener.d.ts.map