import { FontInfo } from './font-info';
export interface IFontMeasurer {
    getFontMeasurerInfo(font: FontInfo): FontMeasurerInfo;
}
export declare class FontMeasurer implements IFontMeasurer {
    private static testSpanHeigth;
    private container;
    getFontMeasurerInfo(font: FontInfo): FontMeasurerInfo;
    private beginMeasuring;
    private endMeasuring;
}
export declare class FontMeasurerInfo {
    baseLine: number;
    heightFactor: number;
    constructor(baseLine: number, heightFactor: number);
}
//# sourceMappingURL=measurer.d.ts.map