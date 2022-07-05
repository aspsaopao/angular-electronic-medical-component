import { ControlFont } from '../fonts/control-font';
import { ControlFontType } from '../fonts/font-info';
export declare class ControlFontsCache {
    private cache;
    list: ControlFont[];
    addFont(info: ControlFont): ControlFont;
    getFontByKey(cacheKey: string): ControlFont | undefined;
    getFont(info: ControlFont): ControlFont | undefined;
    deleteFont(info: ControlFont): void;
    clone(): ControlFontsCache;
    findSimularFontByType(fontFamily: string, type: ControlFontType): ControlFont | null;
}
//# sourceMappingURL=control-fonts.d.ts.map