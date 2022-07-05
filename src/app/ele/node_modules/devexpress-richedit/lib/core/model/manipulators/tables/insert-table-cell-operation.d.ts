import { IModelManager } from '../../../model-manager';
import { InputPositionBase } from '../../../selection/input-position-base';
import { SubDocument } from '../../sub-document';
import { Table, TablePosition } from '../../tables/main-structures/table';
import { ModelManipulator } from '../model-manipulator';
export declare abstract class InsertTableCellOperationBase {
    subDocument: SubDocument;
    modelManager: IModelManager;
    get modelManipulator(): ModelManipulator;
    constructor(modelManager: IModelManager, subDocument: SubDocument);
    execute(table: Table, rowIndex: number, cellIndex: number, canNormalizeTable: boolean, canNormalizeVerticalMerging: boolean, canCopyProperties: boolean, inpPos: InputPositionBase): void;
    normalizeTableGridAfter(table: Table): void;
    abstract insertTableCellCore(subDocument: SubDocument, pos: TablePosition, copyProperties: boolean, inpPos: InputPositionBase): any;
}
export declare class InsertTableCellToTheLeftOperation extends InsertTableCellOperationBase {
    insertTableCellCore(subDocument: SubDocument, pos: TablePosition, copyProperties: boolean, inpPos: InputPositionBase): void;
}
export declare class InsertTableCellToTheRightOperation extends InsertTableCellOperationBase {
    insertTableCellCore(subDocument: SubDocument, pos: TablePosition, copyProperties: boolean, inpPos: InputPositionBase): void;
}
//# sourceMappingURL=insert-table-cell-operation.d.ts.map