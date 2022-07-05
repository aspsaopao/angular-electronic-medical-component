import { Offset } from '@devexpress/utils/lib/geometry/point';
export declare class AnchorInfoApi {
    leftDistance: number;
    rightDistance: number;
    topDistance: number;
    bottomDistance: number;
    wrapType: AnchorObjectTextWrapTypeApi;
    wrapSide: AnchorObjectTextWrapSideApi;
    horizontalPositionAlignment: AnchorObjectHorizontalPositionAlignmentApi;
    horizontalPositionType: AnchorObjectHorizontalPositionTypeApi;
    verticalPositionType: AnchorObjectVerticalPositionTypeApi;
    verticalPositionAlignment: AnchorObjectVerticalPositionAlignmentApi;
    offset: Offset;
    percentOffset: Offset;
}
export declare enum AnchorObjectTextWrapTypeApi {
    Inline = 0,
    TopAndBottom = 1,
    Tight = 2,
    Through = 3,
    Square = 4,
    BehindText = 5,
    InFrontOfText = 6
}
export declare enum AnchorObjectTextWrapSideApi {
    Both = 0,
    Left = 1,
    Right = 2,
    Largest = 3
}
export declare enum AnchorObjectHorizontalPositionAlignmentApi {
    None = 0,
    Left = 1,
    Center = 2,
    Right = 3,
    Inside = 4,
    Outside = 5
}
export declare enum AnchorObjectHorizontalPositionTypeApi {
    Page = 0,
    Character = 1,
    Column = 2,
    Margin = 3,
    LeftMargin = 4,
    RightMargin = 5,
    InsideMargin = 6,
    OutsideMargin = 7
}
export declare enum AnchorObjectVerticalPositionTypeApi {
    Page = 0,
    Line = 1,
    Paragraph = 2,
    Margin = 3,
    TopMargin = 4,
    BottomMargin = 5,
    InsideMargin = 6,
    OutsideMargin = 7
}
export declare enum AnchorObjectVerticalPositionAlignmentApi {
    None = 0,
    Top = 1,
    Center = 2,
    Bottom = 3,
    Inside = 4,
    Outside = 5
}
//# sourceMappingURL=anchor-info.d.ts.map