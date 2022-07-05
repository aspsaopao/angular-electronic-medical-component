import { ImageCache } from '../../../../core/model/caches/images';
import { BasePictureInfo } from '../../../../core/model/manipulators/picture-manipulator/insert-picture-manipulator-params';
import { NonVisualDrawingObjectInfo } from '../../../../core/model/manipulators/picture-manipulator/non-visual-drawing-object-info';
import { RtfBuilder } from '../../rtf-builder';
export declare abstract class RtfPictureExportStrategy {
    protected abstract exportShapePicturePrefix(rtfBuilder: RtfBuilder): void;
    protected abstract exportShapePicturePostfix(rtfBuilder: RtfBuilder): void;
    export(rtfBuilder: RtfBuilder, run: BasePictureInfo, imageCache: ImageCache, nonVisualDrawingProperties: NonVisualDrawingObjectInfo): void;
}
//# sourceMappingURL=rtf-picture-export-strategy.d.ts.map