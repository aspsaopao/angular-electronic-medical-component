import { BorderInfo } from '../../borders/border-info';
import { ColorModelInfoCache } from '../../caches/hashed-caches/color-model-info-cache';
export declare class JSONBorderInfoConverter {
    static convertFromJSON(obj: any, colorModelInfoCache: ColorModelInfoCache): BorderInfo;
    static convertToJSON(source: BorderInfo): any;
}
//# sourceMappingURL=json-border-info-converter.d.ts.map