import { DrawingColor } from '../../../../../../core/model/drawing/drawing-color';
import { XmlReader } from '../../../../../zip/xml-reader';
import { Data } from '../../../../data';
import { LeafElementDestination } from '../../../destination';
export declare class ColorTransformDestinationBase extends LeafElementDestination {
    color: DrawingColor;
    constructor(data: Data, color: DrawingColor);
    protected getIntegerValue(reader: XmlReader): number;
}
//# sourceMappingURL=color-transform-destination-base.d.ts.map