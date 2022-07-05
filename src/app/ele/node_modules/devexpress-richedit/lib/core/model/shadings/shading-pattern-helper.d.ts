import { ShadingPattern } from './shading-pattern';
export declare class ShadingHelper {
    private static shadingPatterns;
    private static patternMultipliers;
    private static infos;
    private static initStatics;
    static calculateShadingPattern(shadingPatternValue: number): ShadingPattern;
    static getShadingPattern(index: number): ShadingPattern;
    static calculateShadingPatternValue(shadingPattern: ShadingPattern): number;
    static getActualBackColor(fill: number, patternColor: number, pattern: ShadingPattern): number;
    static getActualBackColorByMultiplier(fill: number, patternColor: number, multiplier: number): number;
}
//# sourceMappingURL=shading-pattern-helper.d.ts.map