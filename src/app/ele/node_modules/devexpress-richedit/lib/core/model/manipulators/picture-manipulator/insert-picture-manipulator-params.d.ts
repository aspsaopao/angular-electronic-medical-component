import { Size } from '@devexpress/utils/lib/geometry/size';
import { CacheImageInfo } from '../../caches/images';
import { AnchorInfo } from '../../floating-objects/anchor-info';
import { PictureSize } from '../../floating-objects/sizes';
import { Shape } from '../../shapes/shape';
import { SubDocument } from '../../sub-document';
import { NonVisualDrawingObjectInfo } from './non-visual-drawing-object-info';
export declare abstract class BasePictureInfo {
    shape: Shape;
    size: PictureSize;
    containerProperties: NonVisualDrawingObjectInfo;
    nonVisualDrawingProperties: NonVisualDrawingObjectInfo;
    get cacheInfo(): CacheImageInfo;
    constructor(size: PictureSize, shape: Shape, containerProperties: NonVisualDrawingObjectInfo, drawingProperties: NonVisualDrawingObjectInfo);
    abstract clone(): BasePictureInfo;
}
export declare class InlinePictureInfo extends BasePictureInfo {
    publicAPIID: number;
    constructor(size: PictureSize, shape: Shape, publicAPIID: number, containerProperties: NonVisualDrawingObjectInfo, drawingProperties: NonVisualDrawingObjectInfo);
    clone(): InlinePictureInfo;
    cloneToNewSubDocument(subDocument: SubDocument): InlinePictureInfo;
    static defaultInfo(cacheInfo: CacheImageInfo, scale?: Size): InlinePictureInfo;
}
export declare class AnchorPictureInfo extends BasePictureInfo {
    anchorInfo: AnchorInfo;
    constructor(size: PictureSize, shape: Shape, anchorInfo: AnchorInfo, containerProperties: NonVisualDrawingObjectInfo, drawingProperties: NonVisualDrawingObjectInfo);
    clone(): AnchorPictureInfo;
    cloneToNewSubDocument(subDocument: SubDocument): AnchorPictureInfo;
    static defaultInfo(cacheInfo: CacheImageInfo, scale?: Size): AnchorPictureInfo;
}
//# sourceMappingURL=insert-picture-manipulator-params.d.ts.map