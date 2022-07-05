import { ColorModelInfoCache } from '../../../caches/hashed-caches/color-model-info-cache';
import { ShadingInfoCache } from '../../../caches/hashed-caches/shading-info-cache';
import { TableCellProperties } from '../../../tables/properties/table-cell-properties';
export declare class JSONTableCellPropertiesConverter {
    static convertFromJSON(obj: any, colorModelInfoCache: ColorModelInfoCache, shadingInfoCache: ShadingInfoCache): TableCellProperties;
    static convertToJSON(source: TableCellProperties): any;
}
//# sourceMappingURL=json-table-cell-properties-converter.d.ts.map