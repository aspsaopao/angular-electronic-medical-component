export declare enum zIndexCssClassType {
    TextBoxBg = 0,
    TblRowBg = 1,
    TblCellBg = 2,
    ParBg = 3,
    BoxBg = 4,
    FieldBg = 5,
    SelRange = 6,
    BoxSpace = 7,
    SelSearch = 8,
    SelRow = 9,
    Box = 10,
    Bookmark = 11,
    TableBorder = 12,
    SelMissp = 13,
    SelCursor = 14,
    SelTouchBar = 15,
    TblCursor = 16,
    AnchoredPicture = 17,
    TextBox = 18
}
export declare class ZIndexHelper {
    private static names;
    static getClassName(level: number, zIndexCssNames: zIndexCssClassType): string;
}
//# sourceMappingURL=z-index-helper.d.ts.map