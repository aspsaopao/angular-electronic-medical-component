import { HistoryItem } from '../../../../core/model/history/base/history-item';
import { ModelManipulator } from '../../../../core/model/manipulators/model-manipulator';
import { Selection } from '../../../selection/selection';
import { SelectionState } from '../../../selection/selection-state';
export declare class SelectionHistoryItem extends HistoryItem {
    private selection;
    oldState: SelectionState;
    newState: SelectionState;
    private directionFlag;
    canBeMerged(): boolean;
    constructor(modelManipulator: ModelManipulator, selection: Selection, oldState: SelectionState, newState: SelectionState, directionValue?: number);
    redo(): void;
    undo(): void;
}
//# sourceMappingURL=selection-history-item.d.ts.map