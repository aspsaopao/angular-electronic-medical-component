import { ControlFontsCache } from '../caches/control-fonts';
import { ControlFont } from './control-font';
import { FontInfo } from './font-info';
export declare class GoogleFontsApi {
    private fonts;
    private controlFontsCache;
    private fontFamilyToFontInfo;
    private readonly uri;
    constructor(controlFontsCache: ControlFontsCache, fonts: FontInfo[]);
    loadControlFonts(callback: (createdFonts: ControlFont[] | null) => void): void;
    parseResponce(responce: string): ControlFont[];
    private static parseSrc;
}
//# sourceMappingURL=google-fonts.d.ts.map