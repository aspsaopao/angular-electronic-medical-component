import { Shape } from '../../../../../core/model/shapes/shape';
import { RtfShapePropertiesInfo } from '../shape-properties-info';
export declare class RtfOutlinePropertiesHelper {
    readonly shapePropertiesInfo: RtfShapePropertiesInfo;
    constructor(shapePropertiesInfo: RtfShapePropertiesInfo);
    applyProperties(shape: Shape): void;
    processOutlineWidth(shape: Shape): void;
    processOutlineFill(shape: Shape): void;
}
//# sourceMappingURL=rtf-outline-properties-helper.d.ts.map