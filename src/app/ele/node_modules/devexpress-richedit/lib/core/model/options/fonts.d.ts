import { FontInfoCache } from '../caches/hashed-caches/font-info-cache';
import { FontInfo } from '../fonts/font-info';
export interface IRichEditFontsSettings {
    defaultFolder?: string;
    fonts?: IFontSettings[];
    mappings?: IFontMapping;
}
export interface IFontSettings {
    name: string;
    fontFamily: string;
    googleFontsResponse?: string;
    useGoogleFonts?: string;
    italicFontUri?: string;
    boldFontUri?: string;
    boldItalicFontUri?: string;
    regularFontUri?: string;
}
export interface IFontMapping {
    defaultFontName?: string;
    rules?: IFontMappingRule[];
}
export interface IFontMappingRule {
    sourceFontFamily: string;
    destinationFontName: string;
}
export declare class FontMappings {
    defaultFontName?: string;
    rules: MappingRule[];
    constructor(defaultFontName?: string, rules?: MappingRule[]);
    copyFrom(obj: IFontMapping): void;
}
export declare class MappingRule {
    sourceFontFamily: string;
    destinationFontName: string;
    constructor(sourceFontFamily: string, destinationFontName: string);
}
export declare class FontsSettings implements IRichEditFontsSettings {
    private static get defaultBaseUrl();
    private _defaultFolder;
    fonts: IFontSettings[];
    readonly mappings: FontMappings;
    private fontsMap;
    private mapRules;
    get defaultFolder(): string;
    set defaultFolder(val: string);
    get useMappingRules(): boolean;
    get limitedFonts(): boolean;
    getPermittedFont(fontInfoCache: FontInfoCache, font: FontInfo): FontInfo;
    copyFrom(obj: FontsSettings): void;
    init(obj?: IRichEditFontsSettings): void;
    clone(): FontsSettings;
    protected initInternal(): void;
    static createFont(obj: IFontSettings): IFontSettings;
}
//# sourceMappingURL=fonts.d.ts.map