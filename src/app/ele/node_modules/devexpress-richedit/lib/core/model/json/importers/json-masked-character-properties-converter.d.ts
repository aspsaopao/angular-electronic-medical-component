import { ColorModelInfoCache } from '../../caches/hashed-caches/color-model-info-cache';
import { FontInfoCache } from '../../caches/hashed-caches/font-info-cache';
import { ShadingInfoCache } from '../../caches/hashed-caches/shading-info-cache';
import { MaskedCharacterProperties } from '../../character/character-properties';
import { LangInfo } from '../../character/lang-info';
import { FontInfo } from '../../fonts/font-info';
export declare class JSONMaskedCharacterPropertiesConverter {
    static convertFromJSON(obj: any, colorModelInfoCache: ColorModelInfoCache, shadingInfoCache: ShadingInfoCache, fontCache: FontInfoCache | ((fontIndex: number) => FontInfo)): MaskedCharacterProperties;
    static convertToJSON(source: MaskedCharacterProperties): any;
}
export declare class JSONLangInfoConverter {
    static convertFromJSON(obj: any): LangInfo;
    static convertToJSON(source: LangInfo): any;
}
//# sourceMappingURL=json-masked-character-properties-converter.d.ts.map