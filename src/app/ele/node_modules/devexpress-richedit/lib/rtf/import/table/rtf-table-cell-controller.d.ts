import { RtfTableCell } from '../model/table/rtf-table-cell';
import { RtfTableRowController } from './rtf-table-row-controller';
export declare class RtfTableCellController {
    readonly rowController: RtfTableRowController;
    currentCell: RtfTableCell;
    constructor(rowController: RtfTableRowController);
    startNewCell(): void;
    isCurrentCellNotComplete(): boolean;
    assignLastCellAsCurrent(): void;
    finishCell(): void;
    setCharacterPosition(charactePosition: number): void;
    private setParagraphIndexesToParentCell;
    private setPositionCore;
    reset(): void;
}
//# sourceMappingURL=rtf-table-cell-controller.d.ts.map