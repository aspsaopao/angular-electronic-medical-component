import { LayoutTableColumnInfo } from '../../../core/layout/table/layout-table-info';
import { SubDocument } from '../../../core/model/sub-document';
import { CommandBase, CommandSimpleOptions, ICommandOptions } from '../command-base';
import { SimpleCommandState } from '../command-states';
export declare class RulerChangeTableSizeCommandParametersBase {
    modelTableIndex: number;
    offset: number;
    layoutTable: LayoutTableColumnInfo;
    constructor(modelTableIndex: number, offset: number, layoutTable: LayoutTableColumnInfo);
}
export declare class RulerChangeTableRowHeightCommandParameters extends RulerChangeTableSizeCommandParametersBase {
    layoutRowIndex: number;
    constructor(modelTableIndex: number, offset: number, layoutTable: LayoutTableColumnInfo, layoutRowIndex: number);
}
export declare class RulerChangeTableColumnWidthCommandParameters extends RulerChangeTableSizeCommandParametersBase {
    oldBorderPosition: number;
    callFromRuler: boolean;
    constructor(modelTableIndex: number, offset: number, layoutTable: LayoutTableColumnInfo, oldBorderPosition: number, callFromRuler: boolean);
}
export declare class RulerChangeTableSizeCommnandBase extends CommandBase<SimpleCommandState> {
    getState(): SimpleCommandState;
    protected DEPRECATEDCorrectlMainCommandOptions(options: ICommandOptions): void;
    protected getLayoutTableBySelection(subDocument: SubDocument, position: number): LayoutTableColumnInfo;
    protected tableIsEditable(modelTableIndex: number): boolean;
}
export declare class RulerChangeTableRowHeightCommand extends RulerChangeTableSizeCommnandBase {
    executeCore(_state: SimpleCommandState, options: CommandSimpleOptions<RulerChangeTableRowHeightCommandParameters>): boolean;
}
export declare class RulerChangeTableColumnWidthCommand extends RulerChangeTableSizeCommnandBase {
    executeCore(_state: SimpleCommandState, options: CommandSimpleOptions<RulerChangeTableColumnWidthCommandParameters>): boolean;
    private toTableWidthUnit;
    private getNewTableSizes;
}
//# sourceMappingURL=ruler-table-commands.d.ts.map