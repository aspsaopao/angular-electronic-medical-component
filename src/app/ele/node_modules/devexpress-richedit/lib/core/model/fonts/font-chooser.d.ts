import { FontInfoCache } from '../caches/hashed-caches/font-info-cache';
import { FontInfo } from './font-info';
export declare class FontChooser {
    private fontInfoCache;
    private static genericFontFamilies;
    constructor(fontInfoCache: FontInfoCache);
    static isGenericFamily(family: string): boolean;
    chooseByCssString(cssString: string): FontInfo | null;
    private chooseGenericFont;
}
//# sourceMappingURL=font-chooser.d.ts.map