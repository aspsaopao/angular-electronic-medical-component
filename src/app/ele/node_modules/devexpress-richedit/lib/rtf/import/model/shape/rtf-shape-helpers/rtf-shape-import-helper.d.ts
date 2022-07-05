import { AnchoredPictureRun } from '../../../../../core/model/runs/anchored-picture-run';
import { AnchoredTextBoxRun } from '../../../../../core/model/runs/anchored-text-box-run';
import { InlinePictureRun } from '../../../../../core/model/runs/inline-picture-run';
import { RtfShapePropertiesInfo } from '../shape-properties-info';
export declare class RtfShapeImportHelper {
    readonly shapeProperties: RtfShapePropertiesInfo;
    constructor(shapeProperties: RtfShapePropertiesInfo);
    private setDefaults;
    private applyDrawingObjectRunProperties;
    applyAnchoredTextBoxRunProperties(run: AnchoredTextBoxRun): void;
    applyAnchoredPictureRunProperties(run: AnchoredPictureRun): void;
    applyInlinePictureRunProperties(run: InlinePictureRun): void;
    private applyRunProperties;
    private applyContainerProperties;
    private applyNonVisualDrawingObjectProperties;
    private applyNonVisualDrawingObjectPropertiesCore;
    private applyShapeProperties;
    private applyBodyProperties;
}
//# sourceMappingURL=rtf-shape-import-helper.d.ts.map