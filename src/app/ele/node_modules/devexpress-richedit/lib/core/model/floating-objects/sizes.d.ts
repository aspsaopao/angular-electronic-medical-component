import { Size } from '@devexpress/utils/lib/geometry/size';
import { ICloneable, ISupportCopyFrom } from '@devexpress/utils/lib/types';
import { BoundsCalculator } from '../../layout-formatter/formatter/utils/bounds-calculator';
import { CacheImageInfo } from '../caches/images';
import { SubDocument } from '../sub-document';
import { RelativeHeightType, RelativeWidthType } from './enums';
export declare abstract class AnchorInlineBaseSize implements ICloneable<AnchorInlineBaseSize>, ISupportCopyFrom<AnchorInlineBaseSize> {
    lockAspectRatio: boolean;
    rotation: number;
    constructor(lockAspectRatio: boolean, rotation: number);
    clone(): AnchorInlineBaseSize;
    copyFrom(obj: AnchorInlineBaseSize): void;
    abstract get actualSize(): Size;
}
export declare class PictureSize extends AnchorInlineBaseSize implements ICloneable<PictureSize>, ISupportCopyFrom<PictureSize> {
    cacheInfo: CacheImageInfo;
    get originalSize(): Size;
    scale: Size;
    constructor(lockAspectRatio: boolean, rotation: number, cacheInfo: CacheImageInfo, scale: Size);
    get actualSize(): Size;
    clone(): PictureSize;
    cloneToNewSubDocument(subDocument: SubDocument): PictureSize;
    copyFrom(obj: PictureSize): void;
}
export declare class InlineTextBoxSize extends AnchorInlineBaseSize implements ICloneable<InlineTextBoxSize>, ISupportCopyFrom<InlineTextBoxSize> {
    absoluteSize: Size;
    constructor(lockAspectRatio: boolean, rotation: number, absoluteSize: Size);
    get actualSize(): Size;
    clone(): InlineTextBoxSize;
    copyFrom(obj: InlineTextBoxSize): void;
}
export declare class AnchorTextBoxSize extends InlineTextBoxSize implements ICloneable<AnchorTextBoxSize>, ISupportCopyFrom<AnchorTextBoxSize> {
    static RELATIVE_COEFF: number;
    relativeSize: Size;
    relativeHeightType: RelativeHeightType;
    relativeWidthType: RelativeWidthType;
    private flags;
    constructor(lockAspectRatio: boolean, rotation: number, absoluteSize: Size, relativeSize: Size, relativeWidthType: RelativeWidthType, relativeHeightType: RelativeHeightType, useAbsoluteSizeWidth: boolean, useAbsoluteSizeHeight: boolean);
    useAbsoluteWidth(): boolean;
    useAbsoluteHeight(): boolean;
    setUseAbsoluteWidth(isUsed: boolean): void;
    setUseAbsoluteHeight(isUsed: boolean): void;
    get actualSize(): Size;
    getActualRelativeHeight(boundsCalculator: BoundsCalculator): number;
    getActualRelativeWidth(boundsCalculator: BoundsCalculator): number;
    private getAbsWidth;
    private getAbsHeight;
    clone(): AnchorTextBoxSize;
    copyFrom(obj: AnchorTextBoxSize): void;
}
export declare enum TextBoxSizeFlags {
    UseAbsoluteSizeWidth = 2,
    UseAbsoluteSizeHeight = 4,
    UseRelativeSizeWidth = 8,
    UseRelativeSizeHeight = 16
}
//# sourceMappingURL=sizes.d.ts.map