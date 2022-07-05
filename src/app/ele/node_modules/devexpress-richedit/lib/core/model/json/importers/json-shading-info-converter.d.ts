import { ColorModelInfoCache } from '../../caches/hashed-caches/color-model-info-cache';
import { ShadingInfo } from '../../shadings/shading-info';
export declare class JSONShadingInfoConverter {
    static convertFromJSON(obj: any, cache: ColorModelInfoCache): ShadingInfo;
    static convertToJSON(source: ShadingInfo): any;
}
//# sourceMappingURL=json-shading-info-converter.d.ts.map