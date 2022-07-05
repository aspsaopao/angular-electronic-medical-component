import { ColorModelInfo } from '../../../core/model/color/color-model-info';
import { SchemeColorValues } from '../../../core/model/themes/enums';
export declare class RtfColorIndexCollection {
    collection: ColorModelInfo[];
    getRtfColorIndexById(id: number): ColorModelInfo;
}
export declare class HsvInfo {
    intColor: number | null;
    schemeColor: SchemeColorValues | null;
    tint: number | null;
    shade: number | null;
}
//# sourceMappingURL=color-collections.d.ts.map