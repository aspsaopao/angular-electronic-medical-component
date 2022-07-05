import { ICloneable, IEquatable } from '@devexpress/utils/lib/types';
import { FontTypeHint, ThemeFontType } from './enums';
export declare class CompositeFontInfo implements IEquatable<CompositeFontInfo>, ICloneable<CompositeFontInfo> {
    constructor();
    asciiFontName: string;
    hightAnsiFontName: string;
    complexScriptFontName: string;
    eastAsiaFontName: string;
    asciiThemeFont: ThemeFontType;
    hightAnsiThemeFont: ThemeFontType;
    complexScriptThemeFont: ThemeFontType;
    eastAsiaThemeFont: ThemeFontType;
    hintFont: FontTypeHint;
    equals(obj: CompositeFontInfo): boolean;
    clone(): CompositeFontInfo;
}
//# sourceMappingURL=composite-font-info.d.ts.map