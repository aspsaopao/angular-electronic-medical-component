export declare class DXColor {
    static readonly empty: number;
    static readonly transparent: number;
    static readonly white: number;
    static isTransparentOrEmpty(color: number): boolean;
    static isTransparentOrEmptyorNoColor(color: number): boolean;
    static isTransparentColor(color: number): boolean;
    static isEmpty(color: number): boolean;
    static isSemitransparentColor(color: number): boolean;
    static fromArgb(alpha: number, rgbColor: number): number;
    static fromRgb(red: number, green: number, blue: number): number;
    static fromName(name: string): number;
    static blend(color: number, backgroundColor: number): number;
    static calculateNearestColor(colorsToChooseFrom: number[], startColor: number): number;
}
//# sourceMappingURL=dx-color.d.ts.map