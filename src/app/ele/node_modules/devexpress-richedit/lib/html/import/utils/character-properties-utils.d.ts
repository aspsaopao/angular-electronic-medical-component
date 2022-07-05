import { FontInfoCache } from '../../../core/model/caches/hashed-caches/font-info-cache';
import { MaskedCharacterProperties } from '../../../core/model/character/character-properties';
import { MaskedCharacterPropertiesBundle } from '../../../core/rich-utils/properties-bundle';
import { FixedInterval } from '@devexpress/utils/lib/intervals/fixed';
import { HtmlImporter } from '../html-importer';
import { LoadFontInfo } from '../load-font-info';
export declare class HtmlImporterMaskedCharacterProperties {
    private loadFontInfos;
    private tempFontInfoCache;
    private result;
    private styledElement;
    private currentStyle;
    private initialCharacterProperties;
    private get model();
    private get controlOptions();
    private importer;
    private allowCreateNewFonts;
    constructor(importer: HtmlImporter, loadFontInfos: LoadFontInfo[], tempFontInfoCache: FontInfoCache, allowCreateNewFonts: boolean);
    getBundleFrom(element: HTMLElement, interval: FixedInterval): MaskedCharacterPropertiesBundle;
    import(element: HTMLElement, interval: FixedInterval, initialCharacterProperties: MaskedCharacterProperties): MaskedCharacterProperties;
    private importFontBold;
    private importFontItalic;
    private importAllCaps;
    private importStrikeoutType;
    private importUnderlineType;
    private importForeColor;
    private importBackColor;
    private importFontInfo;
    private importFontSize;
    private importHidden;
    private importSuperscript;
    private importSubscript;
}
//# sourceMappingURL=character-properties-utils.d.ts.map