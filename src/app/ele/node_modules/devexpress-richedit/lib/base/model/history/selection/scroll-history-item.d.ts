import { HistoryItem } from '../../../../core/model/history/base/history-item';
import { ModelManipulator } from '../../../../core/model/manipulators/model-manipulator';
import { IModelState } from '../../../scroll/model-states';
import { Selection } from '../../../selection/selection';
export declare class ScrollHistoryItem extends HistoryItem {
    private selection;
    private oldState;
    private newState;
    private directionFlag;
    canBeMerged(): boolean;
    constructor(modelManipulator: ModelManipulator, selection: Selection, oldState: IModelState, newState: IModelState, directionValue?: number);
    redo(): void;
    undo(): void;
}
//# sourceMappingURL=scroll-history-item.d.ts.map