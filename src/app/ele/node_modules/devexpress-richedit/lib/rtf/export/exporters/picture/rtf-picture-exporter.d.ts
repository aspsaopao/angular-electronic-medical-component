import { BasePictureInfo } from '../../../../core/model/manipulators/picture-manipulator/insert-picture-manipulator-params';
import { NonVisualDrawingObjectInfo } from '../../../../core/model/manipulators/picture-manipulator/non-visual-drawing-object-info';
import { RtfBuilder } from '../../rtf-builder';
export declare abstract class RtfPictureExporter {
    readonly rtfBuilder: RtfBuilder;
    readonly base64Uri: string;
    readonly run: BasePictureInfo;
    protected constructor(rtfBuilder: RtfBuilder, run: BasePictureInfo, base64Uri: string);
    abstract getRtfPictureType(): string;
    private getPictureSize;
    private getImageBytesAsString;
    exportPicture(nonVisualDrawingProperties: NonVisualDrawingObjectInfo): void;
    private writePictureShapeProperties;
    private writePictureHeader;
}
//# sourceMappingURL=rtf-picture-exporter.d.ts.map