import { ExporterBaseWithRootElement } from './base';
export declare class ThemeExporter extends ExporterBaseWithRootElement {
    get filePath(): string;
    get rootElement(): string;
    get rootNSPrefix(): string;
    get rootNSValue(): string;
    protected fillWriter(): void;
    private createElement;
    private writeIntValue;
    private generateThemeElementsContent;
    private generateObjectDefaults;
    private generateExtraClrScheme;
    private generateThemeColorSchemesContent;
    private generateThemeColorSchemeContent;
    private generateThemeFontSchemesContent;
    private generateThemeFontSchemePartContent;
    private generateThemeSupplementalFontContent;
    private generateDrawingTextFontContent;
    private generateDrawingColorContent;
    private exportSystemColor;
    private exportRgbColor;
    private exportRgbColorAttributes;
    private exportColorAttributes;
    private exportSystemColorAttributes;
    private exportLastComputedColorAttribute;
    private generateThemeFormatSchemesContent;
    private addTempString;
    private generateDrawingFillContent;
    private generateOutlineContent;
    private generateDrawingEffectStyleContent;
    private generateDrawingBgFillContent;
}
//# sourceMappingURL=theme.d.ts.map