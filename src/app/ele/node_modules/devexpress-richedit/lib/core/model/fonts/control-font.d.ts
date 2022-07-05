import { Flag } from '@devexpress/utils/lib/class/flag';
import { BoundaryInterval } from '@devexpress/utils/lib/intervals/boundary';
import { FontFaceDescriptors } from './font-face-descriptors';
import { ControlFontType } from './font-info';
export declare enum FontLoadStatus {
    Unloaded = 0,
    Loading = 1,
    Loaded = 2,
    Error = 3
}
export declare class ControlFont {
    readonly descriptors: FontFaceDescriptors;
    readonly fontFamily: string;
    data: ArrayBuffer | null;
    isFontCollection: boolean;
    status: FontLoadStatus;
    sourceUrls: string[];
    readonly cacheKey: string;
    private _unicodeRanges;
    get loaded(): boolean;
    get unicodeRanges(): BoundaryInterval[];
    get controlFontType(): ControlFontType;
    constructor(fontFamily: string, descriptors: FontFaceDescriptors, key?: string);
    applySource(data: ArrayBuffer, callback: () => void): void;
    clone(): ControlFont;
    allSourceUrls(baseUrl: string): string[];
    defaultUrls(baseUrl: string): string[];
    static createDefault(fontFamily: string, flag: Flag): ControlFont;
}
//# sourceMappingURL=control-font.d.ts.map