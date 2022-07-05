export declare class Constants {
    static ruler: {
        titles: {
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
        };
        styles: {
            firstLineIndent: {
                className: string;
            };
            firstLineIndentImage: {
                spriteCssClass: string;
            };
            leftIndent: {
                className: string;
            };
            leftIndentImage: {
                spriteCssClass: string;
            };
            rightIndent: {
                className: string;
            };
            rightIndentImage: {
                spriteCssClass: string;
            };
            columnSeparatorImage: {
                spriteCssClass: string;
            };
            tabImages: {
                left: {
                    spriteCssClass: string;
                };
                right: {
                    spriteCssClass: string;
                };
                center: {
                    spriteCssClass: string;
                };
                decimal: {
                    spriteCssClass: string;
                };
            };
            tab: {
                className: string;
            };
            line: {
                className: string;
            };
            control: {
                className: string;
            };
            wrapper: {
                className: string;
            };
        };
        visibility: number;
        showLeftIndent: boolean;
        showRightIndent: boolean;
        showTabs: boolean;
    };
    static defaultFontsList: {
        "2": string;
        "3": number;
        "0": string;
        "1": number;
        "4": number;
    }[];
    static getFontSizesList(): number[];
    static getParagraphStylesList(): string[];
    static getTableStylesList(): string[];
    private static localizedDefaultPresetStyles;
    static getLocalizedDefaultPresetStyles(): any;
    private static localizeStyles;
}
//# sourceMappingURL=_constants.d.ts.map