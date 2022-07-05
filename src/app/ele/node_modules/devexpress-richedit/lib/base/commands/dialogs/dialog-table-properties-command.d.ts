import { DocumentModel } from '../../../core/model/document-model';
import { Table } from '../../../core/model/tables/main-structures/table';
import { TableCell } from '../../../core/model/tables/main-structures/table-cell';
import { TableCellMargins, TableCellVerticalAlignment, TableRowAlignment } from '../../../core/model/tables/secondary-structures/table-base-structures';
import { TableHeightUnit, TableWidthUnit } from '../../../core/model/tables/secondary-structures/table-units';
import { SelectedTableInfo } from '../../../core/selection/selected-cells-engine';
import { ICloneable, ISupportCopyFrom, SimpleConverter } from '@devexpress/utils/lib/types';
import { CommandOptions } from '../command-base';
import { SimpleCommandState } from '../command-states';
import { ICommandState } from '../i-command';
import { DialogParametersBase, ShowDialogCommandBase } from './show-dialog-command-base';
export declare class DialogTablePropertiesCommand extends ShowDialogCommandBase<TablePropertiesDialogParameters> {
    getState(): ICommandState;
    createParameters(options: CommandOptions): TablePropertiesDialogParameters;
    applyParameters(_state: SimpleCommandState, newParams: TablePropertiesDialogParameters, initParams: TablePropertiesDialogParameters): boolean;
    getActualPreferredWidth(useDefaultValue: boolean, preferredWidth: TableWidthUnit): TableWidthUnit;
    getActualRowHeight(useDefaultRowHeight: boolean, rowHeight: TableHeightUnit): TableHeightUnit;
    getInitialTab(): TablePropertiesDialogTab;
    getDialogName(): string;
}
export declare class DialogCellPropertiesCommand extends DialogTablePropertiesCommand {
    getInitialTab(): TablePropertiesDialogTab;
}
export declare class TablePropertiesDialogParameters extends DialogParametersBase implements ISupportCopyFrom<TablePropertiesDialogParameters>, ICloneable<TablePropertiesDialogParameters> {
    useDefaultTableWidth: boolean;
    tablePreferredWidth: TableWidthUnit;
    tableRowAlignment: TableRowAlignment;
    tableIndent: number;
    cellSpacing: number;
    allowCellSpacing: boolean;
    resizeToFitContent: boolean;
    defaultCellMarginLeft: number;
    defaultCellMarginRight: number;
    defaultCellMarginTop: number;
    defaultCellMarginBottom: number;
    useDefaultRowHeight: boolean;
    rowHeight: TableHeightUnit;
    cantSplit: boolean;
    useDefaultColumnWidth: boolean;
    columnPreferredWidth: TableWidthUnit;
    useDefaultCellWidth: boolean;
    cellPreferredWidth: TableWidthUnit;
    cellVerticalAlignment: TableCellVerticalAlignment;
    cellNoWrap: boolean;
    cellMarginLeft: number;
    cellMarginRight: number;
    cellMarginTop: number;
    cellMarginBottom: number;
    cellMarginsSameAsTable: boolean;
    maxTableWidth: number;
    initialTab: TablePropertiesDialogTab;
    isNestedTable: boolean;
    init(tableInfo: SelectedTableInfo, model: DocumentModel, maxTableWidth: number, tab: TablePropertiesDialogTab): void;
    tableInit(table: Table, model: DocumentModel): void;
    getCellSpacing(table: Table, model: DocumentModel): number;
    rowInit(tableInfo: SelectedTableInfo, model: DocumentModel): void;
    columnInit(tableInfo: SelectedTableInfo): void;
    cellInit(tableInfo: SelectedTableInfo, model: DocumentModel): void;
    getActualCellMargins(_table: Table, cell: TableCell, model: DocumentModel): TableCellMargins;
    copyFrom(obj: TablePropertiesDialogParameters): void;
    clone(): TablePropertiesDialogParameters;
    applyConverter(converter: SimpleConverter<number>): this;
}
export declare class TablePropertiesDialogDefaults {
    static MinTableIndentByDefault: number;
    static MaxTableIndentByDefault: number;
    static MinTableWidthByDefault: number;
    static MaxTableWidthInModelUnitsByDefault: number;
    static MaxTableWidthInPercentByDefault: number;
    static MinRowHeightByDefault: number;
    static MaxRowHeightByDefault: number;
    static MinColumnWidthByDefault: number;
    static MaxColumnWidthInModelUnitsByDefault: number;
    static MaxColumnWidthInPercentByDefault: number;
    static MinCellWidthByDefault: number;
    static MaxCellWidthInModelUnitsByDefault: number;
    static MaxCellWidthInPercentByDefault: number;
}
export declare enum TablePropertiesDialogTab {
    Table = 0,
    Row = 1,
    Column = 2,
    Cell = 3
}
//# sourceMappingURL=dialog-table-properties-command.d.ts.map