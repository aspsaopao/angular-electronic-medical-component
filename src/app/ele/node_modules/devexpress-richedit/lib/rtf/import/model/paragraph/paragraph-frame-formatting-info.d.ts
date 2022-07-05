import { ParagraphFrameTextWrapType, ParagraphFrameVerticalPositionType } from '../../destination/utils/enums';
export declare class ParagraphFrameFormattingInfo {
    static createDefaultInfo(): ParagraphFrameFormattingInfo;
    packedValues: number;
    horizontalPadding: number;
    verticalPadding: number;
    height: number;
    width: number;
    x: number;
    y: number;
    dropCapVerticalHeightInLines: number;
    verticalPositionType: ParagraphFrameVerticalPositionType;
    textWrapType: ParagraphFrameTextWrapType;
    lockFrameAnchorToParagraph: boolean;
    horizontalRule: ParagraphFrameHorizontalRule;
    verticalPositionAlignment: ParagraphFrameVerticalPositionAlignment;
    horizontalPositionAlignment: ParagraphFrameHorizontalPositionAlignment;
    horizontalPositionType: ParagraphFrameHorizontalPositionType;
    clone(): ParagraphFrameFormattingInfo;
}
export declare enum ParagraphFrameHorizontalRule {
    Auto = 0,
    AtLeast = 1,
    Exact = 2
}
export declare enum ParagraphFrameVerticalPositionAlignment {
    Inline = 0,
    Center = 1,
    Bottom = 2,
    Top = 3,
    Inside = 4,
    Outside = 5,
    None = 6
}
export declare enum ParagraphFrameHorizontalPositionAlignment {
    Left = 0,
    Center = 1,
    Right = 2,
    Inside = 3,
    Outside = 4,
    None = 5
}
export declare enum ParagraphFrameHorizontalPositionType {
    Page = 0,
    Column = 1,
    Margin = 2
}
//# sourceMappingURL=paragraph-frame-formatting-info.d.ts.map