import { BorderInfo } from '../../borders/border-info';
import { ColorProvider } from '../../color/color-provider';
export declare class TableBorderCalculator {
    private static lineStyleInfo;
    static getPowerfulBorder(colorProvider: ColorProvider, aBorder: BorderInfo, bBorder: BorderInfo): BorderInfo;
    static getActualWidth(borderInfo: BorderInfo): number;
    private static getBrightnessLevelOne;
    private static getBrightnessLevelTwo;
    private static getBrightnessLevelThree;
    private static getWeight;
    private static getActualBorderLineStyle;
}
//# sourceMappingURL=table-border-calculator.d.ts.map