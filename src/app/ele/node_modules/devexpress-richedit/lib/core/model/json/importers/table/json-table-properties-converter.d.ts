import { ColorModelInfoCache } from '../../../caches/hashed-caches/color-model-info-cache';
import { ShadingInfoCache } from '../../../caches/hashed-caches/shading-info-cache';
import { TableProperties } from '../../../tables/properties/table-properties';
export declare class JSONTablePropertiesConverter {
    static convertFromJSON(obj: any, colorModelInfoCache: ColorModelInfoCache, shadingInfoCache: ShadingInfoCache): TableProperties;
    static convertToJSON(source: TableProperties): any;
}
//# sourceMappingURL=json-table-properties-converter.d.ts.map