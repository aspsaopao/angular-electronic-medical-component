import { ICloneable, IEquatable } from '@devexpress/utils/lib/types';
import { ColorModelInfoCache } from '../caches/hashed-caches/color-model-info-cache';
import { ColorModelInfo } from '../color/color-model-info';
import { ColorProvider } from '../color/color-provider';
import { ShadingPattern } from './shading-pattern';
export declare class ShadingInfo implements ICloneable<ShadingInfo>, IEquatable<ShadingInfo> {
    static get noColor(): ShadingInfo;
    static get auto(): ShadingInfo;
    static get nullColor(): ShadingInfo;
    readonly shadingPattern: ShadingPattern;
    readonly backColor: ColorModelInfo;
    readonly foreColor: ColorModelInfo;
    private hash;
    constructor(shadingPattern: ShadingPattern, backColor: ColorModelInfo, foreColor: ColorModelInfo);
    static createByColor(backColor: ColorModelInfo): ShadingInfo;
    static createByFullData(cache: ColorModelInfoCache, pattern: ShadingPattern, fill: number, patternColor: number): ShadingInfo;
    getActualColor(colorProvider: ColorProvider): number;
    equals(obj: ShadingInfo): boolean;
    static equalsBinary(a: ShadingInfo, b: ShadingInfo): boolean;
    clone(): ShadingInfo;
    protected calculateHash(): number;
    getHashCode(): number;
    toJSON(): any;
}
//# sourceMappingURL=shading-info.d.ts.map