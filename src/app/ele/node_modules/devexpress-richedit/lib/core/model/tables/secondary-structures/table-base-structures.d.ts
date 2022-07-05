import { ICloneable, IEquatable } from '@devexpress/utils/lib/types';
import { TableWidthUnit } from './table-units';
export declare class TableCellMargins implements IEquatable<TableCellMargins>, ICloneable<TableCellMargins> {
    top: TableWidthUnit;
    right: TableWidthUnit;
    left: TableWidthUnit;
    bottom: TableWidthUnit;
    equals(obj: TableCellMargins): boolean;
    copyFrom(obj: TableCellMargins): void;
    clone(): TableCellMargins;
    static create(top: TableWidthUnit, right: TableWidthUnit, bottom: TableWidthUnit, left: TableWidthUnit): TableCellMargins;
}
export declare enum TableLayoutType {
    Fixed = 0,
    Autofit = 1
}
export declare enum TableLookTypes {
    None = 0,
    ApplyFirstRow = 32,
    ApplyLastRow = 64,
    ApplyFirstColumn = 128,
    ApplyLastColumn = 256,
    DoNotApplyRowBanding = 512,
    DoNotApplyColumnBanding = 1024
}
export declare enum HorizontalAlignMode {
    None = 0,
    Center = 1,
    Inside = 2,
    Left = 3,
    Outside = 4,
    Right = 5
}
export declare enum VerticalAlignMode {
    None = 0,
    Bottom = 1,
    Center = 2,
    Inline = 3,
    Inside = 4,
    Outside = 5,
    Top = 6
}
export declare enum HorizontalAnchorTypes {
    Margin = 0,
    Page = 1,
    Column = 2
}
export declare enum VerticalAnchorTypes {
    Margin = 0,
    Page = 1,
    Paragraph = 2
}
export declare enum TextWrapping {
    Never = 0,
    Around = 1
}
export declare enum TableRowAlignment {
    Both = 0,
    Center = 1,
    Distribute = 2,
    Left = 3,
    NumTab = 4,
    Right = 5
}
export declare enum TableCellMergingState {
    None = 0,
    Continue = 1,
    Restart = 2
}
export declare enum TextDirection {
    LeftToRightTopToBottom = 0,
    TopToBottomRightToLeft = 1,
    TopToBottomLeftToRightRotated = 2,
    BottomToTopLeftToRight = 3,
    LeftToRightTopToBottomRotated = 4,
    TopToBottomRightToLeftRotated = 5
}
export declare enum TableCellVerticalAlignment {
    Top = 0,
    Both = 1,
    Center = 2,
    Bottom = 3
}
export declare enum ConditionalTableStyleFormatting {
    WholeTable = 4096,
    FirstRow = 2048,
    LastRow = 1024,
    FirstColumn = 512,
    LastColumn = 256,
    OddColumnBanding = 128,
    EvenColumnBanding = 64,
    OddRowBanding = 32,
    EvenRowBanding = 16,
    TopRightCell = 8,
    TopLeftCell = 4,
    BottomRightCell = 2,
    BottomLeftCell = 1
}
//# sourceMappingURL=table-base-structures.d.ts.map