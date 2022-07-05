import { BasePictureInfo } from '../../../../core/model/manipulators/picture-manipulator/insert-picture-manipulator-params';
import { RtfBuilder } from '../../rtf-builder';
import { RtfPictureExporter } from './rtf-picture-exporter';
export declare class RtfPngPictureExporter extends RtfPictureExporter {
    getRtfPictureType(): string;
    constructor(rtfBuilder: RtfBuilder, run: BasePictureInfo, base64Uri: string);
}
//# sourceMappingURL=rtf-png-picture-exporter.d.ts.map