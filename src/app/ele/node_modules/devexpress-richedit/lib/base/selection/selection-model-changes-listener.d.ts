import { IModelChangesListener } from '../../core/interfaces/model-changes-listener';
import { ModelChange } from '../../core/model/changes/change';
import { BatchUpdatableObject } from '@devexpress/utils/lib/class/batch-updatable';
import { Selection } from './selection';
export declare class SelectionModelChangesListener extends BatchUpdatableObject implements IModelChangesListener {
    private selection;
    constructor(selection: Selection);
    modelChanged(change: ModelChange): void;
    onUpdateUnlocked(occurredEvents: number): void;
    private raiseSelectionChange;
    private raiseSelectionChangeCore;
}
//# sourceMappingURL=selection-model-changes-listener.d.ts.map