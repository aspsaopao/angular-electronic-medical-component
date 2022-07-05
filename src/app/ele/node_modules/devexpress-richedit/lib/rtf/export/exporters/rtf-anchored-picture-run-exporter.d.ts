import { ImageCache } from '../../../core/model/caches/images';
import { AnchoredPictureRun } from '../../../core/model/runs/anchored-picture-run';
import { RtfBuilder } from '../rtf-builder';
import { RtfAnchoredRunExporter } from './rtf-anchored-run-exporter';
export declare class RtfAnchoredPictureRunExporter extends RtfAnchoredRunExporter {
    getWidth(): number;
    getHeight(): number;
    readonly pictureRun: AnchoredPictureRun;
    readonly imageCache: ImageCache;
    constructor(rtfBuilder: RtfBuilder, pictureRun: AnchoredPictureRun, imageCache: ImageCache);
    exportContent(): void;
}
//# sourceMappingURL=rtf-anchored-picture-run-exporter.d.ts.map