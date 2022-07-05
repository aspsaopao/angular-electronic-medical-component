import { IModelManager } from '../../../model-manager';
import { InputPositionBase } from '../../../selection/input-position-base';
import { SubDocument } from '../../sub-document';
import { TablePosition } from '../../tables/main-structures/table';
import { TableCell } from '../../tables/main-structures/table-cell';
import { ModelManipulator } from '../model-manipulator';
export declare abstract class MergeTableCellsOperationBase {
    modelManager: IModelManager;
    subDocument: SubDocument;
    needDeleteNextTableCell: boolean;
    get modelManipulator(): ModelManipulator;
    constructor(modelManager: IModelManager, subDocument: SubDocument);
    execute(position: TablePosition, suppressNormalizeTableRows: boolean, inpPos: InputPositionBase): void;
    private getCellLastParagraphIndex;
    private applyParagraphProperties;
    protected deleteTableCellWithContent(nextCellPosition: TablePosition): void;
    protected isEmptyCell(cell: TableCell): boolean;
    protected abstract calculateNextCell(position: TablePosition): TablePosition;
    protected abstract updateCellsProperties(patternCellPosition: TablePosition, nextCellPosition: TablePosition): any;
}
export declare class MergeTwoTableCellsHorizontallyOperation extends MergeTableCellsOperationBase {
    needDeleteNextTableCell: boolean;
    protected calculateNextCell(position: TablePosition): TablePosition;
    protected updateCellsProperties(patternCellPosition: TablePosition, nextCellPosition: TablePosition): void;
}
export declare class MergeTwoTableCellsVerticallyOperation extends MergeTableCellsOperationBase {
    protected calculateNextCell(position: TablePosition): TablePosition;
    protected updateCellsProperties(patternCellPosition: TablePosition, nextCellPosition: TablePosition): void;
}
export declare class InsertTableCellWithShiftToTheDownOperation extends MergeTableCellsOperationBase {
    protected calculateNextCell(position: TablePosition): TablePosition;
    protected updateCellsProperties(patternCellPosition: TablePosition, nextCellPosition: TablePosition): void;
    protected deleteTableCellWithContent(nextCellPosition: TablePosition): void;
}
export declare class DeleteOneTableCellWithShiftToTheUpOperation extends MergeTwoTableCellsVerticallyOperation {
    execute(position: TablePosition, suppressNormalizeTableRows: boolean, inpPos: InputPositionBase): void;
    protected updateCellsProperties(patternCellPosition: TablePosition, nextCellPosition: TablePosition): void;
    deleteContentFromCell(cell: TableCell): void;
}
//# sourceMappingURL=merge-table-cells-operation.d.ts.map