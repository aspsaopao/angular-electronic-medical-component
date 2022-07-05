import { ColorModelInfo } from '../../../../core/model/color/color-model-info';
import { ThemeColorValues } from '../../../../core/model/color/enums';
import { ShadingInfo } from '../../../../core/model/shadings/shading-info';
import { ShadingPattern } from '../../../../core/model/shadings/shading-pattern';
import { BaseExporter } from '../base';
export declare class ColorExporter extends BaseExporter {
    private get colorProvider();
    protected static convertThemeColorValue(themeColorValue: ThemeColorValues): string;
    protected static convertThemeColorIndex(themeColorIndex: number): string;
    protected static convertShadingPattern(value: ShadingPattern): string;
    private static convertColorToString;
    exportColorInfo(colorInfo: ColorModelInfo, attribute: string, exportAutoColor: boolean): void;
    convertHighlightColorToString(value: number): string;
    exportShadingCore(shadingInfo: ShadingInfo, exportAutoColor: boolean): void;
    private exportFillInfo;
}
//# sourceMappingURL=color.d.ts.map