import { LayoutTableColumnInfo } from '../../../core/layout/table/layout-table-info';
import { TableCell } from '../../../core/model/tables/main-structures/table-cell';
import { ICommand } from '../../commands/i-command';
import { RichMouseEvent } from '../../event-manager';
import { HitTestResult } from '../../layout-engine/hit-test-manager/hit-test-result';
import { MouseHandler } from './mouse-handler';
import { MouseHandlerStateBase } from './mouse-handler-state-base';
export declare abstract class MouseHandlerContinueSelectionByRangesState extends MouseHandlerStateBase {
    onMouseMove(evt: RichMouseEvent): void;
    onMouseUp(_evt: RichMouseEvent): void;
    start(): void;
    finish(): void;
    stopProcessing(): void;
    continueSelection(htr: HitTestResult, _evt: RichMouseEvent): void;
    getExtendSelectionCommand(): ICommand;
    getExtendSelectionCommandParameter(_htr: HitTestResult): any;
}
export declare class MouseHandlerBeginMultiselectionState extends MouseHandlerStateBase {
    startPosition: number;
    constructor(handler: MouseHandler, startPosition: number);
    onMouseUp(evt: RichMouseEvent): void;
    onMouseMove(evt: RichMouseEvent): void;
    onMouseWheel(evt: RichMouseEvent): void;
    updateSelection(evt: RichMouseEvent): void;
}
export declare class MouseHandlerContinueSelectionByCharactersState extends MouseHandlerContinueSelectionByRangesState {
    private prevLayoutPoint;
    private extendToPoints;
    private isForwardMouseDirection;
    private extendForward;
    private extendBackward;
    private extendSelectionToFullParagraph;
    continueSelection(htr: HitTestResult, evt: RichMouseEvent, isTableCell?: boolean): void;
}
export declare class MouseHandlerContinueSelectionByLinesState extends MouseHandlerContinueSelectionByRangesState {
    getExtendSelectionCommand(): ICommand;
    getExtendSelectionCommandParameter(htr: HitTestResult): any;
}
export declare class MouseHandlerContinueSelectionByTableColumnsState extends MouseHandlerContinueSelectionByRangesState {
    table: LayoutTableColumnInfo;
    startColumnIndex: number;
    columnOffsetX: number;
    lastColumnIndex: number;
    constructor(handler: MouseHandler, table: LayoutTableColumnInfo, startColumnIndex: number, columnOffsetX: number);
    onMouseMove(evt: RichMouseEvent): void;
}
export declare class MouseHandlerContinueSelectionByTableRowsState extends MouseHandlerContinueSelectionByCharactersState {
    table: LayoutTableColumnInfo;
    startRowIndex: number;
    lastRowIndex: number;
    constructor(handler: MouseHandler, table: LayoutTableColumnInfo, startRowIndex: number);
    onMouseMove(evt: RichMouseEvent): void;
}
export declare class MouseHandlerContinueSelectionByTableCellsState extends MouseHandlerContinueSelectionByCharactersState {
    startCell: TableCell;
    lastCell: TableCell;
    startParentCell: TableCell;
    startPosition: number;
    constructor(handler: MouseHandler, startTable: LayoutTableColumnInfo, startRowIndex: number, startGridCellIndex: number, startPosition: number);
    onMouseMove(evt: RichMouseEvent): void;
    private selectWholeInterval;
}
//# sourceMappingURL=mouse-handler-text-selection-states.d.ts.map