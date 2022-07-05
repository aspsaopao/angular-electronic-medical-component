import { FontInfo } from '../../fonts/font-info';
import { FontMeasurer } from '../../fonts/measurer';
import { HashBasedCache } from '../hash-based-cache';
export declare class FontInfoCache extends HashBasedCache<FontInfo> {
    private static _defaultFontInfo;
    static defaultFonts: FontInfo[];
    static defaultFontName: string;
    fontMeasurer: FontMeasurer;
    constructor(fontMeasurer: FontMeasurer);
    static get defaultFontInfo(): FontInfo;
    protected processNewItem(property: FontInfo): void;
    getItemByName(name: string): FontInfo | null;
    getFontNames(sort?: boolean): string[];
    getAllFonts(): FontInfo[];
    addFont(name: string, cssString?: string): FontInfo;
    static correctCssString(cssString: string): string;
    deleteFont(info: FontInfo): void;
    static fillDefaultFonts(fontInfoCache: FontInfoCache): void;
    copyFrom(obj: FontInfoCache): void;
    clone(): FontInfoCache;
}
//# sourceMappingURL=font-info-cache.d.ts.map