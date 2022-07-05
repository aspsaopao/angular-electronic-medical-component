export declare class ColorHelper {
    static DEFAULT_BOUNDARY_LUMA: number;
    static DEFAULT_BOUNDARY_LUMA_RED: number;
    static DEFAULT_BOUNDARY_LUMA_BLUE: number;
    static DEFAULT_BOUNDARY_LUMA_GREEN: number;
    static BLACK_COLOR: number;
    static getPredefinedColor(color: string): number;
    static AUTOMATIC_COLOR: number;
    static NO_COLOR: number;
    static anyToColor(value: any, defaultValue: number): number;
    static getActualForeColor(foreColor: number, backColor: number): string;
    static getCssString(color: number, isAutoColorTranslateToDark: boolean): string;
    static IsDarkColor(color: number): boolean;
    static getCssStringInternal(color: number): string;
    static getOpacity(color: number): number;
    static isEmptyBgColor(color: number): boolean;
    private static calculateLumaY;
}
//# sourceMappingURL=color.d.ts.map