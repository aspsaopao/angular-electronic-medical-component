import { IModelChangesListener } from '../../core/interfaces/model-changes-listener';
import { ModelChange } from '../../core/model/changes/change';
import { BatchUpdatableObject } from '@devexpress/utils/lib/class/batch-updatable';
import { ISelectionChangesListener } from './i-selection-changes-listener';
import { InputPosition } from './input-position';
import { Selection } from './selection';
declare enum InputPositionEventType {
    None = 0,
    FullReset = 1,
    ResetSectionProperties = 2,
    CheckSelectionChange = 4
}
export declare class InputPositionModelChangesListener extends BatchUpdatableObject implements IModelChangesListener, ISelectionChangesListener {
    private inputPosition;
    private selection;
    updateEnabled: boolean;
    constructor(inputPosition: InputPosition, selection: Selection);
    onUpdateUnlocked(occurredEvents: InputPositionEventType): void;
    NotifySelectionChanged(): void;
    modelChanged(change: ModelChange): void;
    private applyEvent;
    private getSelectionChangeEvent;
    private getModelChangeEvent;
}
export {};
//# sourceMappingURL=input-position-model-changes-listener.d.ts.map