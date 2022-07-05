import { ColorModelInfoCache } from '../caches/hashed-caches/color-model-info-cache';
import { OfficeTheme } from '../themes/office-theme-base';
import { ColorModelInfo } from './color-model-info';
import { Palette } from './palette';
export declare class ColorProvider {
    private colorModelInfoCache;
    officeTheme: OfficeTheme;
    palette: Palette;
    rangePermissionColors: Record<string, string>;
    private rangePermissionColorIndex;
    constructor(colorModelInfoCache: ColorModelInfoCache);
    getRgbaFromModelColor(color: ColorModelInfo): number;
    getModelColorFromRgba(rgba: number): ColorModelInfo;
    getColor(): string;
    clone(colorModelInfoCache: ColorModelInfoCache): ColorProvider;
}
//# sourceMappingURL=color-provider.d.ts.map