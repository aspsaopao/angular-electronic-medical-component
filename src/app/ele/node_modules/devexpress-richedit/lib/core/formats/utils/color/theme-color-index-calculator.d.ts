import { ThemeColorValues } from '../../../model/color/enums';
import { SchemeColorValues } from '../../../model/themes/enums';
export declare class ThemeColorIndexCalculator {
    static richEditThemeColorValuesToSchemeColorValuesTranslationTable: Record<number, SchemeColorValues>;
    static richEditThemeColorValuesToThemeColorIndexTranslationTable: Record<number, SchemeColorValues>;
    static calculateThemeColorIndex(themeValue: ThemeColorValues): number;
}
//# sourceMappingURL=theme-color-index-calculator.d.ts.map