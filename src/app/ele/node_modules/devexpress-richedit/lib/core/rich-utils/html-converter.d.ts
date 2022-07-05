import { CharacterProperties } from '../model/character/character-properties';
export declare class HtmlConverter {
    private static importantTag;
    static getCssRules(charProps: CharacterProperties, textColor: number, isWordBox: boolean, noStrikeoutAndUnderline: boolean, important: boolean): string[];
    static getForeColorRule(textColor: number): string;
    static getSizeSignificantCssString(characterProperties: CharacterProperties): string;
    static getSizeSignificantRules(characterProperties: CharacterProperties, important?: boolean): string[];
    static buildFontFamilyRule(cssString: string): string;
}
//# sourceMappingURL=html-converter.d.ts.map