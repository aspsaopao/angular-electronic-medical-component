import { DrawingTextFont } from '../drawing/drawing-text-font';
import { CultureInfo } from './culture-info';
export declare class ThemeFontSchemePart {
    static cultureNameToScriptTable: Record<string, string>;
    latin: DrawingTextFont;
    eastAsian: DrawingTextFont;
    complexScript: DrawingTextFont;
    supplementalFonts: Record<string, string>;
    isValid: boolean;
    constructor();
    addSupplementalFont(script: string, typeface: string): void;
    copyFrom(value: ThemeFontSchemePart): void;
    getTypeface(currentUICulture: CultureInfo): string;
    clear(): void;
    getDefaultTypeface(): string;
}
//# sourceMappingURL=theme-font-scheme-part.d.ts.map