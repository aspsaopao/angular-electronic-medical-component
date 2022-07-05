import { TableBorderInfoProvider } from '../../../core/layout-formatter/table/borders/border-helper';
import { BorderInfo } from '../../../core/model/borders/border-info';
import { ColorProvider } from '../../../core/model/color/color-provider';
import { SubDocument } from '../../../core/model/sub-document';
import { Table } from '../../../core/model/tables/main-structures/table';
import { TableCell } from '../../../core/model/tables/main-structures/table-cell';
import { SelectedTableInfo } from '../../../core/selection/selected-cells-engine';
import { CommandBase, CommandSimpleOptions } from '../command-base';
import { SimpleCommandState } from '../command-states';
export declare abstract class ToggleTableCellsBorderCommandBase extends CommandBase<SimpleCommandState> {
    affectNeighbours: boolean;
    affectInner: boolean;
    affectOuter: boolean;
    affectOnStateFlags: TableBorderGridCellInfo;
    patternBorder: BorderInfo;
    get colorProvider(): ColorProvider;
    DEPRECATEDConvertOptionsParameter(parameter: any): BorderInfo;
    protected getRelatedCommands(): Record<number, boolean>;
    getState(options?: CommandSimpleOptions<BorderInfo>): SimpleCommandState;
    isEnabled(): boolean;
    isChecked(tableInfo: SelectedTableInfo, patternBorder: BorderInfo): boolean;
    executeCore(state: SimpleCommandState, options: CommandSimpleOptions<BorderInfo>): boolean;
    private isCheckedInParticallyTableSelection;
    createCellBorderGrid(table: Table, tableInfo: SelectedTableInfo, tableBordersInfo: TableBorderInfoProvider): TableBorderGridCell[][];
    private createCellBorderGridCore;
    private checkBottomSibling;
    private static checkVSiblingSelected;
    private static checkVSiblingUnselected;
    private checkLeftRightSiblingSelected;
    protected abstract checkBorderInParticallyTableSelection(patternBorder: BorderInfo, table: Table, grid: TableBorderGridCell[][], currentCell: TableBorderGridCell, rowIndex: number, columnIndex: number, tableBordersInfo: TableBorderInfoProvider): boolean;
    protected abstract checkBorderInEntireTable(patternBorder: BorderInfo, table: Table): boolean;
    protected abstract applyBorderToTable(subDocument: SubDocument, table: Table, borderInfo: BorderInfo): any;
    protected abstract applyBorderToCell(subDocument: SubDocument, table: Table, gridCell: TableBorderGridCell, rowIndex: number, cellIndex: number, borderInfo: BorderInfo): any;
    protected getActualLeftBorder(tableBordersInfo: TableBorderInfoProvider, table: Table, rowIndex: number, columnIndex: number): BorderInfo;
    protected getActualRightBorder(tableBordersInfo: TableBorderInfoProvider, table: Table, rowIndex: number, columnIndex: number): BorderInfo;
    protected getActualTopBorder(grid: TableBorderGridCell[][], currentCell: TableBorderGridCell, tableBordersInfo: TableBorderInfoProvider, table: Table, rowIndex: number, columnIndex: number): BorderInfo;
    protected getActualBottomBorder(grid: TableBorderGridCell[][], currentCell: TableBorderGridCell, tableBordersInfo: TableBorderInfoProvider, table: Table, rowIndex: number, columnIndex: number): BorderInfo;
}
export declare abstract class ToggleSingleTableCellsBorderCommand extends ToggleTableCellsBorderCommandBase {
    abstract getActualCellBorder(table: Table, grid: TableBorderGridCell[][], currentCell: TableBorderGridCell, rowIndex: number, columnIndex: number, tableBordersInfo: TableBorderInfoProvider): BorderInfo;
    getGeneralizedBorder(): BorderInfo;
}
export declare class ToggleTableCellsTopBorderCommand extends ToggleSingleTableCellsBorderCommand {
    affectOnStateFlags: TableBorderGridCellInfo;
    affectInner: boolean;
    getActualCellBorder(table: Table, grid: TableBorderGridCell[][], currentCell: TableBorderGridCell, rowIndex: number, columnIndex: number, tableBordersInfo: TableBorderInfoProvider): BorderInfo;
    protected checkBorderInParticallyTableSelection(patternBorder: BorderInfo, table: Table, grid: TableBorderGridCell[][], currentCell: TableBorderGridCell, rowIndex: number, columnIndex: number, tableBordersInfo: TableBorderInfoProvider): boolean;
    protected checkBorderInEntireTable(patternBorder: BorderInfo, table: Table): boolean;
    protected applyBorderToTable(subDocument: SubDocument, table: Table, borderInfo: BorderInfo): void;
    protected applyBorderToCell(subDocument: SubDocument, table: Table, gridCell: TableBorderGridCell, rowIndex: number, cellIndex: number, borderInfo: BorderInfo): void;
}
export declare class ToggleTableCellsRightBorderCommand extends ToggleSingleTableCellsBorderCommand {
    affectInner: boolean;
    affectOnStateFlags: TableBorderGridCellInfo;
    getActualCellBorder(table: Table, _grid: TableBorderGridCell[][], _currentCell: TableBorderGridCell, rowIndex: number, columnIndex: number, tableBordersInfo: TableBorderInfoProvider): BorderInfo;
    protected checkBorderInParticallyTableSelection(patternBorder: BorderInfo, table: Table, grid: TableBorderGridCell[][], currentCell: TableBorderGridCell, rowIndex: number, columnIndex: number, tableBordersInfo: TableBorderInfoProvider): boolean;
    protected checkBorderInEntireTable(patternBorder: BorderInfo, table: Table): boolean;
    protected applyBorderToTable(subDocument: SubDocument, table: Table, borderInfo: BorderInfo): void;
    protected applyBorderToCell(subDocument: SubDocument, table: Table, gridCell: TableBorderGridCell, rowIndex: number, cellIndex: number, borderInfo: BorderInfo): void;
}
export declare class ToggleTableCellsBottomBorderCommand extends ToggleSingleTableCellsBorderCommand {
    affectInner: boolean;
    affectOnStateFlags: TableBorderGridCellInfo;
    getActualCellBorder(table: Table, grid: TableBorderGridCell[][], currentCell: TableBorderGridCell, rowIndex: number, columnIndex: number, tableBordersInfo: TableBorderInfoProvider): BorderInfo;
    protected checkBorderInParticallyTableSelection(patternBorder: BorderInfo, table: Table, grid: TableBorderGridCell[][], currentCell: TableBorderGridCell, rowIndex: number, columnIndex: number, tableBordersInfo: TableBorderInfoProvider): boolean;
    protected checkBorderInEntireTable(patternBorder: BorderInfo, table: Table): boolean;
    protected applyBorderToTable(subDocument: SubDocument, table: Table, borderInfo: BorderInfo): void;
    protected applyBorderToCell(subDocument: SubDocument, table: Table, gridCell: TableBorderGridCell, rowIndex: number, cellIndex: number, borderInfo: BorderInfo): void;
}
export declare class ToggleTableCellsLeftBorderCommand extends ToggleSingleTableCellsBorderCommand {
    affectInner: boolean;
    affectOnStateFlags: TableBorderGridCellInfo;
    getActualCellBorder(table: Table, _grid: TableBorderGridCell[][], _currentCell: TableBorderGridCell, rowIndex: number, columnIndex: number, tableBordersInfo: TableBorderInfoProvider): BorderInfo;
    protected checkBorderInParticallyTableSelection(patternBorder: BorderInfo, table: Table, grid: TableBorderGridCell[][], currentCell: TableBorderGridCell, rowIndex: number, columnIndex: number, tableBordersInfo: TableBorderInfoProvider): boolean;
    protected checkBorderInEntireTable(patternBorder: BorderInfo, table: Table): boolean;
    protected applyBorderToTable(subDocument: SubDocument, table: Table, borderInfo: BorderInfo): void;
    protected applyBorderToCell(subDocument: SubDocument, table: Table, gridCell: TableBorderGridCell, rowIndex: number, cellIndex: number, borderInfo: BorderInfo): void;
}
export declare class ToggleTableCellAllBordersCommand extends ToggleTableCellsBorderCommandBase {
    affectOnStateFlags: TableBorderGridCellInfo;
    protected checkBorderInParticallyTableSelection(patternBorder: BorderInfo, table: Table, grid: TableBorderGridCell[][], currentCell: TableBorderGridCell, rowIndex: number, columnIndex: number, tableBordersInfo: TableBorderInfoProvider): boolean;
    protected checkBorderInEntireTable(patternBorder: BorderInfo, table: Table): boolean;
    protected applyBorderToTable(subDocument: SubDocument, table: Table, borderInfo: BorderInfo): void;
    protected applyBorderToCell(subDocument: SubDocument, table: Table, gridCell: TableBorderGridCell, rowIndex: number, cellIndex: number, borderInfo: BorderInfo): void;
}
export declare class ToggleTableCellNoBorderCommand extends ToggleTableCellAllBordersCommand {
    isChecked(_tableInfo: SelectedTableInfo): boolean;
    protected applyBorderToTable(subDocument: SubDocument, table: Table, _borderInfo: BorderInfo): void;
    protected applyBorderToCell(subDocument: SubDocument, table: Table, gridCell: TableBorderGridCell, rowIndex: number, cellIndex: number, _borderInfo: BorderInfo): void;
}
export declare class ToggleTableCellInsideBordersCommand extends ToggleTableCellsBorderCommandBase {
    affectOuter: boolean;
    affectNeighbours: boolean;
    affectOnStateFlags: TableBorderGridCellInfo;
    protected checkBorderInParticallyTableSelection(patternBorder: BorderInfo, table: Table, grid: TableBorderGridCell[][], currentCell: TableBorderGridCell, rowIndex: number, columnIndex: number, tableBordersInfo: TableBorderInfoProvider): boolean;
    protected checkBorderInEntireTable(patternBorder: BorderInfo, table: Table): boolean;
    protected applyBorderToTable(subDocument: SubDocument, table: Table, borderInfo: BorderInfo): void;
    protected applyBorderToCell(subDocument: SubDocument, table: Table, gridCell: TableBorderGridCell, rowIndex: number, cellIndex: number, borderInfo: BorderInfo): void;
}
export declare class ToggleTableCellInsideHorizontalBordersCommand extends ToggleSingleTableCellsBorderCommand {
    affectOuter: boolean;
    affectNeighbours: boolean;
    affectOnStateFlags: TableBorderGridCellInfo;
    getActualCellBorder(table: Table, grid: TableBorderGridCell[][], currentCell: TableBorderGridCell, rowIndex: number, columnIndex: number, tableBordersInfo: TableBorderInfoProvider): BorderInfo;
    protected checkBorderInParticallyTableSelection(patternBorder: BorderInfo, table: Table, grid: TableBorderGridCell[][], currentCell: TableBorderGridCell, rowIndex: number, columnIndex: number, tableBordersInfo: TableBorderInfoProvider): boolean;
    protected checkBorderInEntireTable(patternBorder: BorderInfo, table: Table): boolean;
    protected applyBorderToTable(subDocument: SubDocument, table: Table, borderInfo: BorderInfo): void;
    protected applyBorderToCell(subDocument: SubDocument, table: Table, gridCell: TableBorderGridCell, rowIndex: number, cellIndex: number, borderInfo: BorderInfo): void;
}
export declare class ToggleTableCellInsideVerticalBordersCommand extends ToggleSingleTableCellsBorderCommand {
    affectOuter: boolean;
    affectNeighbours: boolean;
    affectOnStateFlags: TableBorderGridCellInfo;
    getActualCellBorder(table: Table, _grid: TableBorderGridCell[][], currentCell: TableBorderGridCell, rowIndex: number, columnIndex: number, tableBordersInfo: TableBorderInfoProvider): BorderInfo;
    protected checkBorderInParticallyTableSelection(patternBorder: BorderInfo, table: Table, grid: TableBorderGridCell[][], currentCell: TableBorderGridCell, rowIndex: number, columnIndex: number, tableBordersInfo: TableBorderInfoProvider): boolean;
    protected checkBorderInEntireTable(patternBorder: BorderInfo, table: Table): boolean;
    protected applyBorderToTable(subDocument: SubDocument, table: Table, borderInfo: BorderInfo): void;
    protected applyBorderToCell(subDocument: SubDocument, table: Table, gridCell: TableBorderGridCell, rowIndex: number, cellIndex: number, borderInfo: BorderInfo): void;
}
export declare class ToggleTableCellOutsideBordersCommand extends ToggleTableCellsBorderCommandBase {
    affectInner: boolean;
    affectOnStateFlags: TableBorderGridCellInfo;
    protected checkBorderInParticallyTableSelection(patternBorder: BorderInfo, table: Table, grid: TableBorderGridCell[][], currentCell: TableBorderGridCell, rowIndex: number, columnIndex: number, tableBordersInfo: TableBorderInfoProvider): boolean;
    protected checkBorderInEntireTable(patternBorder: BorderInfo, table: Table): boolean;
    protected applyBorderToTable(subDocument: SubDocument, table: Table, borderInfo: BorderInfo): void;
    protected applyBorderToCell(subDocument: SubDocument, table: Table, gridCell: TableBorderGridCell, rowIndex: number, cellIndex: number, borderInfo: BorderInfo): void;
}
export interface TableBorderGridCell {
    cell: TableCell;
    info: TableBorderGridCellInfo;
    selected: boolean;
}
export declare enum TableBorderGridCellInfo {
    None = 0,
    LeftOuter = 1,
    RightOuter = 2,
    BottomOuter = 4,
    TopOuter = 8,
    RightNeighbour = 16,
    TopNeighbour = 32,
    LeftNeighbour = 64,
    BottomNeighbour = 128,
    RightInner = 256,
    TopInner = 512,
    LeftInner = 1024,
    BottomInner = 2048,
    LeftTableOuter = 4096,
    RightTableOuter = 8192,
    TopTableOuter = 16384,
    BottomTableOuter = 32768,
    All = -1
}
//# sourceMappingURL=toggle-table-cells-border-command.d.ts.map