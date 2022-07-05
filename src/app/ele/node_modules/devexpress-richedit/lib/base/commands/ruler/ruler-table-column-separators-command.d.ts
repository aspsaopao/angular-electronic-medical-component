import { CommandBase, CommandOptions, ICommandOptions } from '../command-base';
import { SimpleCommandState } from '../command-states';
export declare class TableColumnSeparatorStruct {
    index: number;
    tableIndex: number;
    cellSpacing: number;
    minValue: number;
    maxValue: number;
    items: TableColumnSeparatorItem[];
    get currItem(): TableColumnSeparatorItem;
    get hasItems(): boolean;
    createItem(position: number, marginLeft: number, marginRight: number): void;
    clone(): TableColumnSeparatorStruct;
}
export declare class TableColumnSeparatorItem {
    position: number;
    leftMargin: number;
    rightMargin: number;
    constructor(position: number, leftMargin: number, rightMargin: number);
    clone(): TableColumnSeparatorItem;
}
export declare class RulerTableColumnSeparatorsCommand extends CommandBase<SimpleCommandState> {
    protected DEPRECATEDCorrectlMainCommandOptions(options: ICommandOptions): void;
    getState(options?: CommandOptions): SimpleCommandState;
    executeCore(_state: SimpleCommandState, _parameter: ICommandOptions): boolean;
    private getLogicCell;
    private getMergedCell;
    private getColumnSeparatorsInfo;
    private getMarginLeft;
    private getMarginRight;
    private findLayoutCellByCellGridIndex;
}
//# sourceMappingURL=ruler-table-column-separators-command.d.ts.map