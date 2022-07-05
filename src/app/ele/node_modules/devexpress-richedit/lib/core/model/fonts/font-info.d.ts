import { ICloneable } from '@devexpress/utils/lib/types';
import { ControlFontsCache } from '../caches/control-fonts';
import { IHashBasedCacheType } from '../caches/hash-based-cache';
import { IFontMeasurer } from './measurer';
export declare enum ControlFontType {
    Regular = 0,
    Bold = 1,
    Italic = 2,
    BoldItalic = 3
}
export declare class FontInfo implements ICloneable<FontInfo>, IHashBasedCacheType<FontInfo> {
    private hash;
    name: string;
    scriptMultiplier: number;
    cssString: string;
    canBeSet: boolean;
    measurer: IFontMeasurer;
    subScriptOffset: number;
    isLoad: boolean;
    private baseLine;
    private heightFactor;
    controlFontMap: Record<number, string | null>;
    constructor(name?: string);
    ensureAllControlFontsAssigned(controlFontsCache: ControlFontsCache): void;
    getFontFamilies(): string[];
    static calculateHashByName(name: string): number;
    protected calculateHash(): number;
    getHashCode(): number;
    copyFrom(obj: FontInfo): void;
    equals(obj: FontInfo): boolean;
    static equalsBinary(fontInfoA: FontInfo, fontInfoB: FontInfo): boolean;
    clone(): FontInfo;
    getBaseLine(): number;
    getHeightFactor(): number;
    reset(): void;
    getAscent(boxHeight: number): number;
    getDescent(boxHeight: number): number;
    private measure;
}
//# sourceMappingURL=font-info.d.ts.map