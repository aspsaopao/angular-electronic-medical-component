import { CultureInfo } from './culture-info';
import { XlFontSchemeStyles } from './enums';
import { ThemeFontSchemePart } from './theme-font-scheme-part';
export declare class ThemeFontScheme {
    minorFont: ThemeFontSchemePart;
    majorFont: ThemeFontSchemePart;
    name: string;
    constructor();
    get isValidate(): boolean;
    getTypeface(schemeStyle: XlFontSchemeStyles, currentUICulture: CultureInfo): string;
    copyFrom(sourceObj: ThemeFontScheme): void;
    clear(): void;
}
//# sourceMappingURL=theme-font-scheme.d.ts.map