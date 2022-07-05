export declare const RICH_EDIT_CLASS_NAME_PREFIX: string;
export declare const RULER_CLASS_NAME: string;
export declare const RULLER_NUMBER_CORRECTION: number;
export declare class RulerSettings {
    visibility: RulerVisibility;
    showLeftIndent: boolean;
    showRightIndent: boolean;
    showTabs: boolean;
    titles: RulerTitles;
    styles: RulerStyles;
}
export declare enum RulerVisibility {
    Auto = 0,
    Visible = 1,
    Hidden = 2
}
export declare class RulerTitles {
    firstLineIndent: string;
    hangingIndent: string;
    leftIndent: string;
    rightIndent: string;
    marginLeft: string;
    marginRight: string;
    tabLeft: string;
    tabRight: string;
    tabCenter: string;
    tabDecimal: string;
}
export declare class RulerStyles {
    columnSeparatorImage: RulerSpriteInfo;
    firstLineIndentImage: RulerSpriteInfo;
    leftIndentImage: RulerSpriteInfo;
    rightIndentImage: RulerSpriteInfo;
    firstLineIndent: RulerStyleInfo;
    leftIndent: RulerStyleInfo;
    rightIndent: RulerStyleInfo;
    tab: RulerStyleInfo;
    line: RulerStyleInfo;
    control: RulerStyleInfo;
    wrapper: RulerStyleInfo;
    tabImages: RulerTabImages;
}
export declare class RulerTabImages {
    left: RulerSpriteInfo;
    right: RulerSpriteInfo;
    center: RulerSpriteInfo;
    decimal: RulerSpriteInfo;
}
export declare class RulerStyleInfo {
    className: string;
    style: string;
}
export declare class RulerSpriteInfo {
    spriteCssClass: string;
    style: string;
}
//# sourceMappingURL=settings.d.ts.map