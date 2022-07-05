import { ColorModelInfoCache } from '../../caches/hashed-caches/color-model-info-cache';
import { ShadingInfoCache } from '../../caches/hashed-caches/shading-info-cache';
import { MaskedParagraphProperties } from '../../paragraph/paragraph-properties';
export declare class JSONMaskedParagraphPropertiesConverter {
    static convertFromJSON(obj: any, colorModelInfoCache: ColorModelInfoCache, shadingInfoCache: ShadingInfoCache): MaskedParagraphProperties;
    static convertToJSON(source: MaskedParagraphProperties): any;
}
//# sourceMappingURL=json-masked-paragraph-properties-converter.d.ts.map