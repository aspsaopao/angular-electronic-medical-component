import { BoundaryInterval } from '@devexpress/utils/lib/intervals/boundary';
import { IFontFaceDescriptors } from '@devexpress/utils/lib/utils/fonts';
export declare class FontFaceDescriptors {
    private static get getDefaultUnicodeRange();
    style: string;
    weight: string | number;
    stretch: string;
    unicodeRange: string;
    variant: string;
    featureSettings: string;
    variationSettings: string;
    display: string;
    private _cacheKey;
    msWordItalic(): boolean;
    msWordBold(): boolean;
    get cacheKey(): string;
    parseUnicodeRanges(): BoundaryInterval[];
    static create(obj?: IFontFaceDescriptors): FontFaceDescriptors;
    clone(): FontFaceDescriptors;
}
//# sourceMappingURL=font-face-descriptors.d.ts.map