import { SubDocument } from '../../sub-document';
import { ModelManipulator } from '../model-manipulator';
import { RemoveIntervalOperationResult } from './remove-interval-operation';
export declare class RestoreRemovedIntervalOperation {
    modelManipulator: ModelManipulator;
    subDocument: SubDocument;
    currentTableIndex: number;
    constructor(manipulator: ModelManipulator, subDocument: SubDocument);
    execute(removeOperationResult: RemoveIntervalOperationResult): void;
    private shiftTablesToPosition;
    private getTableForShifting;
}
//# sourceMappingURL=restore-removed-interval-operation.d.ts.map