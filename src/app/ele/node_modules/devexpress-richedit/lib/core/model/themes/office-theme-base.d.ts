import { ThemeDrawingColorCollection } from './theme-drawing-color-collection';
import { ThemeFontScheme } from './theme-font-scheme';
import { ThemeFormatScheme } from './theme-format-scheme';
export declare class OfficeTheme {
    colors: ThemeDrawingColorCollection;
    fontScheme: ThemeFontScheme;
    formatScheme: ThemeFormatScheme;
    name: string;
    constructor();
    get isValidate(): boolean;
    copyFrom(sourceObj: OfficeTheme): void;
    clear(): void;
    clone(): OfficeTheme;
}
//# sourceMappingURL=office-theme-base.d.ts.map